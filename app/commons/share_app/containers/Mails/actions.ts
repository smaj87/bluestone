import { closeDropdown } from 'commons/Dropdown/actions';
import { getDropdownById } from 'commons/Dropdown/selectors';
import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import {
  getLimit,
  isMobile as isMobileSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import { isLoadNext } from 'commons/ListIntersectionObserver/useOnLoadNext';
import { showError, showSuccess } from 'commons/Notifications/actions';
import { isShowMobileAds } from 'commons/share_app/components/hooks/useAds/Onet/selectors';
import { LIST_ITEM_HEIGHT } from 'commons/share_app/components/ListElements/List/constants';
import { MAIL_ITEM_VIEWS } from 'commons/share_app/components/MailItem/constants';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import t from 'commons/translations/t';
import { SETTINGS_API_URL, WEBMAIL_API_URL } from 'commons/utils/constants';
import { delay } from 'commons/utils/delay';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';
import { goTo as goToUtil } from 'commons/utils/route';
import { encrypt } from 'commons/utils/simpleCrypt';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownMailItemMore/constants';
import { API_WEBMAIL_URL } from 'containers/App/constants';
import { getMailListView, getMailsUrlProps } from 'containers/App/selectors';
import { updateCounterUnread } from 'containers/Folders/actions';
import {
  FOLDER_INBOX_KEY,
  FOLDER_SPAM_KEY,
  INCREMENTAL_COUNTER_UPDATE,
} from 'containers/Folders/constants';
import { getFidByKey } from 'containers/Folders/selectors';
import { MAILS_URLS } from 'utils/constants';
import { getHistoryValue } from 'utils/route';

import {
  ADD_BLOCK_RULE,
  ADD_BLOCK_RULE_FAILURE,
  ADD_BLOCK_RULE_SUCCESS,
  CANCEL_SEND_MAIL,
  CANCEL_SEND_MAIL_FAILURE,
  CANCEL_SEND_MAIL_SUCCESS,
  DST_FID_INBOX_KEY,
  DST_FID_SPAM_KEY,
  FETCH_MAILS,
  FETCH_MAILS_FAILURE,
  FETCH_MAILS_SUCCESS,
  LOAD_MAILS_AFTER_REMOVE,
  MAIL_FLAG_SEEN,
  MOVE_MAILS,
  SET_GROUP_VISIBILITY,
  SET_HOVER_ID,
  SET_INVOICE_PREPARING,
  SET_LAST_SHOWN_ID,
  TOGGLE_CHECKED,
  TOGGLE_FLAG,
  UPDATE_MAILS_SCHEMA,
} from './constants';
import {
  getChecks,
  getGroups,
  getHoverId,
  getMails,
  getMailsCount,
  getTotalCount,
  isFetching as isFetchingSelector,
  isRemoveFromListAfterMove,
} from './selectors';
import {
  ApiMail,
  BodyChangeFlagsInterface,
  FetchMailsReqParamsInterface,
  Mail,
  MailState,
  StateUpdateFidAfterMoveReturnType,
  UrlParamsInterface,
} from './types';
import {
  clearGroupsFromNoItems,
  defaultUrlParams,
  getMailList,
  getMailsWithGroups,
  injectExtraElementsToGroups,
  normalizedMails,
} from './utils';

let lastFetchMailsRequestController: AbortController | null = null;

export const fetchMails =
  (
    partialReqParams: Partial<FetchMailsReqParamsInterface>,
    append = false,
    limitProp?: number,
  ): AppThunk =>
  async (dispatch, getState) => {
    const limit = limitProp !== undefined ? limitProp : getLimit(getState());
    const { filter, ...urlParams } = getMailsUrlProps(getState(), '');

    if (filter) {
      urlParams.orFlags = filter;
    }

    // history, search do not need fid
    if (
      urlParams.history ||
      urlParams.searchQuery ||
      urlParams.folderId >= 0 ||
      urlParams.labelId >= 0
    ) {
      dispatch({ type: FETCH_MAILS, append });

      const reqParams = { limit, ...urlParams, ...partialReqParams };
      const requestController = new AbortController();

      try {
        if (lastFetchMailsRequestController) {
          lastFetchMailsRequestController.abort();
        }

        lastFetchMailsRequestController = requestController;
        await delay(250);

        const filteredReqParams: Record<string, any> = {
          withLabels: 1,
          withTotalCount: 1,
          offset: 0,
          sort: 'date',
          sortDir: 'desc',
        };

        if (!reqParams.history) {
          filteredReqParams.folderName =
            getMailsUrlProps(getState(), 'urlName') ||
            MAILS_URLS[FOLDER_INBOX_KEY];

          filteredReqParams.folderId = 0;
        }

        (
          Object.keys(reqParams) as (keyof FetchMailsReqParamsInterface)[]
        ).forEach((key) => {
          if (
            (reqParams[key] || reqParams[key] === 0) &&
            reqParams[key] !== -1
          ) {
            if (key === 'page') {
              filteredReqParams.offset = reqParams.limit * (reqParams.page - 1);
            } else if (
              ![
                'urlName',
                'history',
                reqParams.history ? 'folderId' : '',
              ].includes(key)
            ) {
              filteredReqParams[key] = reqParams[key];
            }
          }
        });

        // filteredReqParams.limit = 5000; // for tests

        const queryParams = new URLSearchParams(filteredReqParams);
        let module = 'mail';

        if (reqParams.history) {
          module = `history/${encodeURIComponent(reqParams.history.email)}`;
        }

        const { mails, total_count: totalCount } = await request(
          `${API_WEBMAIL_URL}${module}?${queryParams.toString()}`,
          {
            signal: requestController.signal,
          },
        );

        dispatch(fetchMailsSuccess(normalizedMails(mails), totalCount, append));
      } catch (e) {
        if (!requestController?.signal?.aborted) {
          reportCatchErrorFromAction(e as Error);
          dispatch({ type: FETCH_MAILS_FAILURE });
        }
      }
    }
  };

export const fetchMailsSuccess =
  (mails: Mail[], totalCount = 0, append = false): AppThunk =>
  async (dispatch, getState) => {
    const getItemHeight = (_: object) => {
      let result = LIST_ITEM_HEIGHT.LG;

      if (!isMobile) {
        result =
          mailListView === MAIL_ITEM_VIEWS.DETAIL
            ? LIST_ITEM_HEIGHT.MD
            : LIST_ITEM_HEIGHT.SM;
      }

      return result;
    };

    const isMobile = isMobileSelector(getState());
    const mailListView = getMailListView(getState());
    const stateMails = getMails(getState());
    const stateGroups = clearGroupsFromNoItems(
      getGroups(getState()),
      getItemHeight,
    );
    const stateChecks = getChecks(getState());

    const data = getMailsWithGroups(
      mails,
      stateMails,
      stateGroups,
      stateChecks,
      getItemHeight,
      append,
    );

    if (isShowMobileAds(getState())) {
      // add ads, labels, etc
      injectExtraElementsToGroups(data.groups);
    }

    dispatch({
      type: FETCH_MAILS_SUCCESS,
      ...data,
      totalCount,
    });
  };

export const fetch = (): AppThunk => async (dispatch, getState) => {
  const isMobile = isMobileSelector(getState());

  dispatch(
    fetchMails(
      { page: isMobile ? 1 : getMailsUrlProps(getState(), 'page') },
      false,
    ),
  );
};

export const infinityLoaderFetch =
  (): AppThunk => async (dispatch, getState) => {
    const isFetching = isFetchingSelector(getState());

    if (!isFetching) {
      await dispatch(fetchMails({ offset: getMailsCount(getState()) }, true));
    }
  };

export const toggleChecked = (
  id: number,
  isChecked: boolean | undefined = undefined,
  mode: (typeof CHECKED_MODE)[keyof typeof CHECKED_MODE] = CHECKED_MODE.SINGLE,
  isShift: boolean = false,
) => ({
  type: TOGGLE_CHECKED,
  isChecked,
  id,
  mode,
  isShift,
});

export const stateToggleFlag =
  (
    flag: string,
    ids: number[],
    force?: boolean,
  ): AppThunk<Promise<BodyChangeFlagsInterface>> =>
  async (dispatch, getState) => {
    const mails = getMails(getState());
    const midsToFlags: Record<number, boolean> = {};

    const body: BodyChangeFlagsInterface = {
      srcMailFlags: {},
    };

    ids.forEach((id) => {
      if (mails[id]) {
        const { fid, flags } = mails[id];
        const isFlag = checkFlag(flags, flag);

        body.srcMailFlags[fid] ||= {
          delFlags: { flags: `\\${flag}`, mids: [] },
          setFlags: { flags: `\\${flag}`, mids: [] },
        };

        if ((force === undefined && isFlag) || (isFlag && force === false)) {
          midsToFlags[id] = false;
          body.srcMailFlags[fid].delFlags.mids.push(id);
        } else if ((force === undefined && !isFlag) || (force && !isFlag)) {
          midsToFlags[id] = true;
          body.srcMailFlags[fid].setFlags.mids.push(id);
        }
      }
    });

    // czyszczenie
    (Object.keys(body.srcMailFlags) as unknown as number[]).forEach((fid) => {
      if (!body.srcMailFlags[fid].delFlags.mids.length) {
        // @ts-ignore
        delete body.srcMailFlags[fid].delFlags;
      }

      if (!body.srcMailFlags[fid].setFlags.mids.length) {
        // @ts-ignore
        delete body.srcMailFlags[fid].setFlags;
      }
    });

    dispatch({
      type: TOGGLE_FLAG,
      flag,
      midsToFlags,
    });

    return body;
  };

export const toggleFlag =
  (flag: string, ids: number[], force?: boolean): AppThunk =>
  async (dispatch) => {
    const body = await dispatch(stateToggleFlag(flag, ids, force));

    if (flag === MAIL_FLAG_SEEN) {
      Object.entries(body.srcMailFlags).forEach(
        ([srcFidStr, { delFlags, setFlags }]) => {
          const unread =
            (delFlags?.mids?.length || 0) - (setFlags?.mids?.length || 0);

          dispatch({
            type: INCREMENTAL_COUNTER_UPDATE,
            isIncrementalUpdate: true,
            fid: Number(srcFidStr),
            unread,
            count: 0,
          });
        },
      );
    }

    try {
      await request(`${WEBMAIL_API_URL}/mail?flagsGroup=1`, {
        method: 'PATCH',
        body,
      });
    } catch {}
  };

export const setGroupVisibility = (groupIds: MailState['groupVisibility']) => ({
  type: SET_GROUP_VISIBILITY,
  groupIds,
});

export const setLastShownId = (id: number) => ({
  type: SET_LAST_SHOWN_ID,
  id,
});

export const setHoverId =
  (id: number, isLeaving = false): AppThunk =>
  async (dispatch, getState) => {
    const prevHoverId = getHoverId(getState());
    const dropdownId = `${DROPDOWN_POPUP_ID}_${prevHoverId}`;
    const isDropdownOpen = !!getDropdownById(getState(), { id: dropdownId })
      ?.isOpen;

    if (prevHoverId !== id && isDropdownOpen) {
      dispatch(closeDropdown(dropdownId));
    }

    dispatch({
      type: SET_HOVER_ID,
      id: isLeaving && !isDropdownOpen ? -1 : id,
    });
  };

export const goTo =
  (params: Partial<UrlParamsInterface>): AppThunk =>
  async (_, getState) => {
    // @ts-ignore
    const { urlName, ...urlParams } = {
      ...getMailsUrlProps(getState(), ''),
      ...params,
    };

    if (urlParams.searchQuery) {
      urlParams.searchQuery = encrypt('', urlParams.searchQuery);
    }

    if (urlParams.history) {
      urlParams.history = getHistoryValue([urlParams.history]);
    }

    goToUtil(
      urlName || MAILS_URLS[FOLDER_INBOX_KEY],
      urlParams,
      // @ts-ignore todo @spiascik
      defaultUrlParams,
    );
  };

let loadMailsAfterRemove_reqCounter = 0;
export const loadMailsAfterRemove =
  (): AppThunk => async (dispatch, getState) => {
    const isMobile = isMobileSelector(getState());
    const mailsCount = getMailsCount(getState());
    const totalCount = getTotalCount(getState());

    if (mailsCount < totalCount) {
      dispatch({
        type: LOAD_MAILS_AFTER_REMOVE,
        isLoading: true,
      });
      loadMailsAfterRemove_reqCounter += 1;

      if (isMobile && isLoadNext()) {
        dispatch(infinityLoaderFetch());
      } else if (!isMobile) {
        // load desktop
        const limit = getLimit(getState());
        const restLimit = limit - mailsCount;
        const page = getMailsUrlProps(getState(), 'page');

        if (restLimit > 0) {
          await dispatch(
            fetchMails(
              { offset: limit * (page - 1) + mailsCount },
              true,
              restLimit,
            ),
          );
        }
      }

      loadMailsAfterRemove_reqCounter -= 1;

      if (loadMailsAfterRemove_reqCounter <= 0) {
        dispatch({
          type: LOAD_MAILS_AFTER_REMOVE,
          isLoading: false,
        });
      }
    }
  };

export const stateRemoveMails =
  (mids: number[]): AppThunk<Promise<Mail[]>> =>
  async (dispatch, getState) => {
    const mails = getMailList(getMails(getState()), getGroups(getState()));

    dispatch(
      fetchMailsSuccess(
        mails.filter((mail) => !mids.includes(mail.mid)),
        getTotalCount(getState()),
      ),
    );

    return mails;
  };

export const stateUpdateFidAfterMove =
  (
    mails: Partial<Mail | ReadMailParsed>[],
    dstFolder: number | typeof DST_FID_INBOX_KEY | typeof DST_FID_SPAM_KEY,
  ): AppThunk<Promise<StateUpdateFidAfterMoveReturnType>> =>
  async (dispatch, getState) => {
    const srcMails: Record<number, number[]> = {};
    let isAnyChanges = false;
    const mailsToFid: Record<number, number> = {};
    const mids: number[] = [];

    const mapFid: Record<
      typeof DST_FID_INBOX_KEY | typeof DST_FID_SPAM_KEY,
      number
    > = {
      [DST_FID_INBOX_KEY]: getFidByKey(getState(), FOLDER_INBOX_KEY),
      [DST_FID_SPAM_KEY]: getFidByKey(getState(), FOLDER_SPAM_KEY),
    };

    const dstFid =
      mapFid[dstFolder as keyof typeof mapFid] || (dstFolder as number);

    mails.forEach((mail) => {
      if (mail.mid && mail.fid && mail.fid !== dstFolder) {
        (srcMails[mail.fid] ||= []).push(mail.mid);
        mailsToFid[mail.mid] = dstFid;

        mids.push(mail.mid);
        isAnyChanges = true;
      }
    });

    if (isAnyChanges) {
      // update fids
      dispatch({
        type: MOVE_MAILS,
        mailsToFid,
      });
    }

    return {
      isAnyChanges,
      srcMails,
      mids,
      dstFid,
    };
  };

export const moveMails =
  (
    mails: Partial<Mail | ReadMailParsed>[],
    dstFolder: number | typeof DST_FID_INBOX_KEY | typeof DST_FID_SPAM_KEY,
  ): AppThunk<Promise<boolean>> =>
  async (dispatch, getState) => {
    let result = true;

    try {
      const { dstFid, isAnyChanges, mids, srcMails } = await dispatch(
        stateUpdateFidAfterMove(mails, dstFolder),
      );

      if (isAnyChanges) {
        dispatch(updateCounterUnread(srcMails, dstFid, mails));

        const req = request(`${API_WEBMAIL_URL}mail/?mailsGroup=1`, {
          method: 'PATCH',
          body: {
            dstFolder,
            srcMails,
          },
        });

        const removeFromList = isRemoveFromListAfterMove(getState());

        if (removeFromList) {
          await Promise.all([dispatch(stateRemoveMails(mids)), req]);
        } else {
          await req;
        }

        if (removeFromList) {
          await delay(0);
          dispatch(loadMailsAfterRemove());
        }
      }
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      result = false;
    }

    return result;
  };

export const removeMails =
  (mids: number[], fid: number): AppThunk =>
  async (dispatch) => {
    if (mids.length) {
      try {
        const mails = await dispatch(stateRemoveMails(mids));
        dispatch(updateCounterUnread({ [fid]: mids }, -1, mails));

        await request(`${API_WEBMAIL_URL}mail/${mids.join()}`, {
          method: 'DELETE',
          body: { fid },
        });

        setTimeout(() => {
          // timeout for rerender
          dispatch(loadMailsAfterRemove());
        }, 0);
      } catch (e) {
        reportCatchErrorFromAction(e as Error);
      }
    }
  };

export const addBlockedRule =
  (senderName: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: ADD_BLOCK_RULE, senderName });

    try {
      await request(`${SETTINGS_API_URL}/rule`, {
        method: 'POST',
        body: {
          applyToAll: false,
          target: 'Kosz',
          from: senderName,
        },
      });

      dispatch({ type: ADD_BLOCK_RULE_SUCCESS });
      dispatch(showSuccess(t('container/Mails/addRuleSuccessNotification')));
    } catch (e) {
      dispatch({ type: ADD_BLOCK_RULE_FAILURE });
      reportCatchErrorFromAction(e as Error);
    }
  };

export const addRule =
  (sender: string, type: 'whitelist' | 'blacklist'): AppThunk =>
  async () => {
    try {
      await request(`${API_WEBMAIL_URL}/rule`, {
        method: 'POST',
        body: {
          additionalParams: {},
          name: '',
          recipient: '',
          sender,
          subject: '',
          type,
        },
      });
    } catch {}
  };

export const prepareInvoices = () => ({
  type: SET_INVOICE_PREPARING,
});

export const appendSchemaToMails =
  (schemas: Record<string, ApiMail['schema_org']>): AppThunk =>
  async (dispatch) => {
    dispatch({ type: UPDATE_MAILS_SCHEMA, schemas });
  };

export const cancelSendMail =
  (mails: Mail[], onSuccess?: () => void): AppThunk<Promise<boolean>> =>
  async (dispatch) => {
    const filtered = mails.filter(
      (mail) => mail.schema_org?.delayedSend?.messageQid,
    );

    let result = true;

    try {
      if (filtered.length) {
        dispatch({
          type: CANCEL_SEND_MAIL,
          mails: filtered,
        });

        await request(`${WEBMAIL_API_URL}/mail/cancel-send`, {
          method: 'POST',
          body: {
            mails: filtered.map((mail) => ({
              draftId: mail.mid,
              id: mail.schema_org.delayedSend.messageQid,
            })),
          },
        });

        dispatch({
          type: CANCEL_SEND_MAIL_SUCCESS,
          mails: filtered,
        });

        onSuccess?.();

        dispatch(showSuccess(t('scheduledSendCancelSuccess')));
      }
    } catch (e) {
      dispatch(showError(t('scheduledSendCancelError')));
      reportCatchErrorFromAction(e as Error);

      dispatch({
        type: CANCEL_SEND_MAIL_FAILURE,
        mails: filtered,
      });

      result = false;
    }

    return result;
  };

import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { stateToggleFlag } from 'commons/share_app/containers/Mails/actions';
import {
  MAIL_FLAG_READ_RECEIPT,
  MAIL_FLAG_SEEN,
} from 'commons/share_app/containers/Mails/constants';
import {
  ReadMailParsed,
  ReadMailRaw,
} from 'commons/share_app/containers/ReadMail/types';
import { removeFlag, setFlag } from 'commons/share_app/utils/mailFlags';
import MailParser from 'commons/utils/mailParser';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import { TabDataType } from 'components/Schema/Events/types';
import { API_WEBMAIL_URL } from 'containers/App/constants';
import { setNotificationByMid } from 'containers/Folders/actions';

import {
  DEFAULT_HEADERS,
  FETCH_HEADERS,
  FETCH_READ_MAIL,
  FETCH_WHITE_LIST,
  SET_IS_SHOW_DISCOUNTS,
  SET_SCHEMA_EVENT_TAB_DATA,
  SET_SCHEMA_EVENT_TAB_KEY,
  UPDATE_MAILS,
} from './constants';
import {
  getMail,
  getMailByMid,
  getMailField,
  getMails,
  getWhiteList,
  getWhiteListGlobals,
} from './selectors';
import {
  getNormalizedHeaderValues,
  getNormalizedMail,
  getUpdateIsShowImagesMails,
  isEmailWhiteListed,
} from './utils';

export const fetchReadMail =
  (mid: ReadMailParsed['mid']): AppThunk =>
  async (dispatch, getState) => {
    const mail = getMailByMid(getState(), mid);

    dispatch({
      type: FETCH_READ_MAIL,
      mail: { ...mail, isFetching: true, isFetchedError: false },
    });

    try {
      const rawMail: ReadMailRaw = await request(
        `${API_WEBMAIL_URL}mail/${mail.mid}`,
      );

      const email = rawMail?.from?.email || '';
      const isShowImages = isEmailWhiteListed(getWhiteList(getState()), email);

      const isGlobalsShowImages = isEmailWhiteListed(
        getWhiteListGlobals(getState()),
        email,
        true,
      );

      dispatch({
        type: FETCH_READ_MAIL,
        mail: {
          ...mail,
          ...new MailParser(getNormalizedMail(rawMail, mail)).getParsedMail(
            isShowImages,
            isGlobalsShowImages,
          ),
          isFetching: false,
          isFetched: true,
          isFetchedError: false,
        },
      });

      dispatch(setNotificationByMid(mail.mid));
      dispatch(stateToggleFlag(MAIL_FLAG_SEEN, [rawMail.mid], true));
    } catch (e) {
      reportCatchErrorFromAction(e as Error);

      dispatch({
        type: FETCH_READ_MAIL,
        mail: { ...mail, isFetching: false, isFetchedError: true },
      });
    }
  };

export const updateIsShowImagesMails =
  (): AppThunk => async (dispatch, getState) => {
    const mails = getMails(getState());
    const updatedMails = getUpdateIsShowImagesMails(
      mails,
      getWhiteList(getState()),
      getWhiteListGlobals(getState()),
    );

    if (mails !== updatedMails) {
      dispatch({
        type: UPDATE_MAILS,
        mails: updatedMails,
      });
    }
  };

export const fetchWhiteList = (): AppThunk => async (dispatch) => {
  dispatch({
    type: FETCH_WHITE_LIST,
    isWhiteListFetching: true,
    isWhiteListFetched: false,
  });

  try {
    const json: { emails?: []; globals?: [] } = await request(
      `${API_WEBMAIL_URL}images_whitelist`,
    );
    const whiteList = json?.emails || [];
    const whiteListGlobals = json?.globals || [];

    dispatch({
      type: FETCH_WHITE_LIST,
      isWhiteListFetching: false,
      isWhiteListFetched: true,
      whiteList,
      whiteListGlobals,
    });

    dispatch(updateIsShowImagesMails());
  } catch (e) {
    reportCatchErrorFromAction(e as Error);

    dispatch({
      type: FETCH_WHITE_LIST,
      isWhiteListFetching: false,
      isWhiteListFetched: false,
      isWhiteListFetchedError: true,
    });
  }
};

export const fetchHeaders =
  (mid: number): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: FETCH_HEADERS,
      headers: { ...DEFAULT_HEADERS, mid, isFetching: true },
    });

    try {
      const json: string = await request(
        `${API_WEBMAIL_URL}mail/${mid}/headers`,
      );

      dispatch({
        type: FETCH_HEADERS,
        headers: {
          ...DEFAULT_HEADERS,
          mid,
          isFetched: true,
          values: getNormalizedHeaderValues(json),
        },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);

      dispatch({
        type: FETCH_HEADERS,
        headers: {
          ...DEFAULT_HEADERS,
          mid,
          isFetchedError: true,
        },
      });
    }
  };

export const sendReadConfirmation =
  (isCancel = false): AppThunk =>
  async (dispatch, getState) => {
    let mail = getMail(getState());

    dispatch({
      type: FETCH_READ_MAIL,
      mail: {
        ...mail,
        flags: removeFlag(mail.flags, MAIL_FLAG_READ_RECEIPT),
      },
    });

    try {
      if (isCancel) {
        await request(`${API_WEBMAIL_URL}read_receipt/${mail.mid}`, {
          method: 'DELETE',
        });
      } else {
        await request(`${API_WEBMAIL_URL}read_receipt/${mail.mid}`, {
          method: 'POST',
        });
      }
    } catch (e) {
      reportCatchErrorFromAction(e as Error);

      mail = getMail(getState());

      dispatch({
        type: FETCH_READ_MAIL,
        mail: {
          ...mail,
          flags: setFlag(mail.flags, MAIL_FLAG_READ_RECEIPT),
        },
      });
    }
  };

export const toggleIsShowImages =
  (): AppThunk => async (dispatch, getState) => {
    const mail = getMail(getState());

    dispatch({
      type: FETCH_READ_MAIL,
      mail: {
        ...mail,
        isShowImages: !mail.isShowImages,
      },
    });
  };

export const changeWhiteList =
  (isAdding = true): AppThunk =>
  async (dispatch, getState) => {
    const isShowImages = getMailField(
      getState(),
      'isShowImages',
    ) as ReadMailParsed['isShowImages'];

    if (isShowImages !== isAdding) {
      dispatch({
        type: FETCH_READ_MAIL,
        mail: {
          ...getMail(getState()),
          isShowImages: isAdding,
        },
      });
    }

    const from = getMailField(getState(), 'from') as ReadMailParsed['from'];

    dispatch({
      type: FETCH_WHITE_LIST,
      whiteList: isAdding
        ? [...getWhiteList(getState()), from.email]
        : getWhiteList(getState()).filter((email) => email !== from.email),
    });

    dispatch(updateIsShowImagesMails());

    try {
      await request(`${API_WEBMAIL_URL}images_whitelist`, {
        method: isAdding ? 'POST' : 'DELETE',
        body: { email: from.email },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);

      dispatch({
        type: FETCH_WHITE_LIST,
        whiteList: !isAdding
          ? getWhiteList(getState()).push(from.email)
          : getWhiteList(getState()).filter((email) => email !== from.email),
      });

      dispatch(updateIsShowImagesMails());
    }
  };

export const setShowMoreDiscounts = (flag?: boolean) => ({
  type: SET_IS_SHOW_DISCOUNTS,
  flag,
});

export const setSchemaEventTabKey =
  (tabKey: string, mid: number): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: SET_SCHEMA_EVENT_TAB_KEY,
      tabKey,
      mid,
    });
  };

export const setSchemaEventTabData =
  (tabData: TabDataType, mid: number): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: SET_SCHEMA_EVENT_TAB_DATA,
      tabData,
      mid,
    });
  };

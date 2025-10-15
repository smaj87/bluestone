import { closeDropdown } from 'commons/Dropdown/actions';
import { getDropdownById } from 'commons/Dropdown/selectors';
import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import {
  getLimit,
  isMobile as isMobileSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import {
  defaultUrlParams,
  normalizedAttachments,
} from 'commons/share_app/containers/Attachments/utils';
import { delay } from 'commons/utils/delay';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';
import { goTo as goToUtil } from 'commons/utils/route';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownAttachmentItemMore/constants';
import { API_WEBMAIL_URL } from 'containers/App/constants';
import { getAttachmentsUrlProps } from 'containers/App/selectors';
import { forwardAttachments as newMailForwardAttachments } from 'containers/NewMail/actions';
import { ATTACHMENTS_URL } from 'utils/constants';
import { getDownloadUrl } from 'utils/images';

import { AttachmentListView } from '../ReadMail/types';
import {
  FETCH_ATTACHMENTS,
  FETCH_ATTACHMENTS_FAILURE,
  FETCH_ATTACHMENTS_SUCCESS,
  SET_GROUP_VISIBILITY,
  SET_HOVER_ID,
  SET_LAST_SHOWN_ID,
  SET_TEMP_CUSTOM_FILTERS,
  TOGGLE_CHECKED,
} from './constants';
import {
  getAttachmentsCount,
  getCheckedAttachments,
  getHoverId,
  getState as getAttachmentsState,
  isFetching as isFetchingSelector,
} from './selectors';
import {
  Attachment,
  AttachmentState,
  CustomUrlParamsInterface,
  FetchAttachmentsReqParamsInterface,
  UrlParamsInterface,
} from './types';

let lastFetchAttachmentsRequestController: AbortController | null = null;

export const fetchAttachments =
  (reqParams: FetchAttachmentsReqParamsInterface, append = false): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: FETCH_ATTACHMENTS, append });

    const requestController = new AbortController();

    try {
      if (lastFetchAttachmentsRequestController) {
        lastFetchAttachmentsRequestController.abort();
      }

      lastFetchAttachmentsRequestController = requestController;
      await delay(150);

      const filteredReqParams: Record<string, any> = {
        newList: 1,
        offset: 0,
      };

      (
        Object.keys(reqParams) as (keyof FetchAttachmentsReqParamsInterface)[]
      ).forEach((key) => {
        if (reqParams[key] && reqParams[key] !== -1) {
          if (key === 'page') {
            filteredReqParams.offset = reqParams.limit * (reqParams.page - 1);
          } else if (key !== 'urlName') {
            filteredReqParams[key] = reqParams[key];
          }
        }
      });

      // filteredReqParams.limit = 5000; // for tests

      const queryParams = new URLSearchParams(filteredReqParams);

      const { attachments, totalCount } = await request(
        `${API_WEBMAIL_URL}attachment?${queryParams.toString()}`,
        {
          signal: requestController.signal,
        },
      );

      dispatch({
        type: FETCH_ATTACHMENTS_SUCCESS,
        ...normalizedAttachments(
          attachments,
          getAttachmentsState(getState()),
          isMobileSelector(getState()),
          append,
        ),
        totalCount,
      });
    } catch (e) {
      if (!requestController?.signal?.aborted) {
        reportCatchErrorFromAction(e as Error);
        dispatch({ type: FETCH_ATTACHMENTS_FAILURE });
      }
    }
  };

export const fetch = (): AppThunk => async (dispatch, getState) => {
  const limit = getLimit(getState());
  const urlParams = getAttachmentsUrlProps(getState(), '');
  const isMobile = isMobileSelector(getState());

  dispatch(
    fetchAttachments(
      { limit, ...urlParams, page: isMobile ? 1 : urlParams.page },
      false,
    ),
  );
};

export const infinityLoaderFetch =
  (): AppThunk => async (dispatch, getState) => {
    const isFetching = isFetchingSelector(getState());

    if (!isFetching) {
      const limit = getLimit(getState());
      const offset = getAttachmentsCount(getState());

      const { isShow: _, ...urlParams } = getAttachmentsUrlProps(
        getState(),
        '',
      );

      dispatch(fetchAttachments({ limit, ...urlParams, offset }, true));
    }
  };

export const toggleChecked = (
  id: string,
  isChecked?: boolean,
  mode?: (typeof CHECKED_MODE)[keyof typeof CHECKED_MODE],
) => ({
  type: TOGGLE_CHECKED,
  isChecked,
  id,
  mode: mode || CHECKED_MODE.SINGLE,
});

export const setGroupVisibility = (
  groupIds: AttachmentState['groupVisibility'],
) => ({
  type: SET_GROUP_VISIBILITY,
  groupIds,
});

export const downloadAttachments =
  (attachments: Attachment[]): AppThunk =>
  async () => {
    if (attachments.length) {
      window.location.href = getDownloadUrl(attachments);
    }
  };

export const downloadCheckedAttachments =
  (): AppThunk => async (dispatch, getState) => {
    dispatch(downloadAttachments(getCheckedAttachments(getState())));
  };

export const forwardAttachments =
  (attachments: AttachmentListView[]): AppThunk =>
  async (dispatch) => {
    if (attachments.length) {
      dispatch(newMailForwardAttachments(attachments));
    }
  };

export const forwardCheckedAttachments =
  (): AppThunk => async (dispatch, getState) => {
    dispatch(forwardAttachments(getCheckedAttachments(getState())));
  };

export const goTo =
  (params: Partial<UrlParamsInterface>): AppThunk =>
  async (_, getState) => {
    // @ts-ignore
    const urlParams = {
      ...getAttachmentsUrlProps(getState(), ''),
      ...params,
      urlName: undefined,
    };

    // @ts-ignore todo @spiascik
    goToUtil(ATTACHMENTS_URL, urlParams, defaultUrlParams);
  };

export const setTempCustomFilters = (
  tempFilters: Partial<CustomUrlParamsInterface>,
) => ({
  type: SET_TEMP_CUSTOM_FILTERS,
  tempFilters,
});

export const setLastShownId = (id: string) => ({
  type: SET_LAST_SHOWN_ID,
  id,
});

export const setHoverId =
  (id: string, isLeaving = false): AppThunk =>
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
      id: isLeaving && !isDropdownOpen ? '' : id,
    });
  };

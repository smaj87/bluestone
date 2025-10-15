import { getDropdownById } from 'commons/Dropdown/selectors';
import { getLimit } from 'commons/hooks/useUserConfig/selectors';
import { getGroupIdsCount } from 'commons/ListIntersectionObserver/utils';
import { createCachedSelector, createSelector } from 'commons/utils/reselect';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownAttachmentItemMore/constants';
import { getAttachmentsUrlProps } from 'containers/App/selectors';

import { KEY, QUICK_FILTERS_ATTACHMENT_GROUP_NAMES } from './constants';
import { initialState } from './reducer';
import {
  Attachment,
  AttachmentRootState,
  AttachmentState,
  CustomUrlParamsInterface,
  UrlParamsInterface,
} from './types';
import { defaultCustomUrlParams } from './utils';

export const getState = createSelector(
  (state: AttachmentRootState) => state,
  (state): AttachmentState => state?.[KEY] || initialState,
);

export const getAttachments = createSelector(
  getState,
  (state) => state.attachments,
);

export const getAttachmentById = createCachedSelector(
  [getAttachments, (_: AttachmentRootState, id: string) => id],
  (attachments, id) => attachments[id],
)((_, id) => id);

export const getAttachmentGroupIdById = createCachedSelector(
  [getAttachmentById],
  (attachment) => attachment?.groupId,
)((_, id) => id);

export const getGroups = createSelector(getState, (state) => state.groups);

export const getAttachmentsCount = createSelector(getGroups, getGroupIdsCount);

export const isAttachments = createSelector(
  getAttachmentsCount,
  (count) => count > 0,
);

export const getHoverId = createSelector(getState, (state) => state.hoverId);

export const isHoverById = createSelector(
  [
    getHoverId,
    (_, id) => id,
    (state, id) =>
      !!getDropdownById(state, { id: `${DROPDOWN_POPUP_ID}_${id}` })?.isOpen,
  ],
  (hoverId, id, isDropdownOpen) => isDropdownOpen || hoverId === id,
);

export const getGroupsCount = createSelector(
  getGroups,
  (groups) => groups.length,
);

export const getGroupVisibility = createSelector(
  getState,
  (state) => state.groupVisibility,
);

export const isVisibleByGroupId = createCachedSelector(
  [
    getGroupVisibility,
    getGroupsCount,
    (_: AttachmentRootState, groupId: number) => groupId,
  ],
  (groupVisibility, groupsCount, groupId) =>
    !!groupVisibility[groupId] || groupsCount < 5,
)((_, groupId) => groupId);

export const getChecks = createSelector(getState, (state) => state.checks);

export const isFetching = createSelector(getState, (state) => state.isFetching);
export const isFetched = createSelector(getState, (state) => state.isFetched);
export const isFetchedError = createSelector(
  getState,
  (state) => state.isFetchedError,
);

export const isCheckedById = createCachedSelector(
  [getChecks, (_: AttachmentRootState, id: string) => id],
  (checks, id) => !!checks[id],
)((_, id) => id);

export const isAllChecked = createSelector(
  getChecks,
  (checks) => Object.values(checks).indexOf(false) === -1,
);

export const isAnyChecked = createSelector(
  getChecks,
  (checks) => Object.values(checks).indexOf(true) > -1,
);

export const isAnyUnchecked = createSelector(
  getChecks,
  (checks) => Object.values(checks).indexOf(false) > -1,
);

export const getCheckedCount = createSelector(
  getChecks,
  (checks) => Object.values(checks).filter((c) => c === true).length,
);

export const getCheckedAttachments = createSelector(
  [getAttachments, getChecks],
  (attachments, checks) => {
    const result: Attachment[] = [];

    Object.keys(checks).forEach((key) => {
      if (checks[key] && attachments[key]) {
        result.push(attachments[key]);
      }
    });

    return result;
  },
);

export const getTotalCount = createSelector(
  getState,
  (state) => state.totalCount,
);

export const getLastShownId = createSelector(
  getState,
  (state) => state.lastShownId,
);

export const getPageCount = createSelector(
  [getTotalCount, getLimit],
  (totalCount, limit) => Math.ceil(totalCount / limit),
);

export const getTempCustomFilters = createSelector(
  [getState],
  (state) => state.tempCustomFilters,
);

export const getTempCustomFiltersByProp = createSelector(
  [getState, (_, prop) => prop],
  (state, prop: keyof CustomUrlParamsInterface) =>
    state.tempCustomFilters[prop],
);

export const isCustomFilters = createSelector(
  [getAttachmentsUrlProps],
  (params: CustomUrlParamsInterface) =>
    params.fromFilter !== defaultCustomUrlParams.fromFilter ||
    params.dateFromFilter !== defaultCustomUrlParams.dateFromFilter ||
    params.dateToFilter !== defaultCustomUrlParams.dateToFilter ||
    params.sizeFromFilter !== defaultCustomUrlParams.sizeFromFilter ||
    params.sizeToFilter !== defaultCustomUrlParams.sizeToFilter ||
    (params.groupName !== defaultCustomUrlParams.groupName &&
      !QUICK_FILTERS_ATTACHMENT_GROUP_NAMES.includes(params.groupName)),
);

export const isCustomFiltersButtonEnabled = createSelector(
  [getAttachmentsUrlProps, getTempCustomFilters],
  (urlParams: UrlParamsInterface, tempCustomParams: CustomUrlParamsInterface) =>
    urlParams.fromFilter !== tempCustomParams.fromFilter ||
    urlParams.dateFromFilter !== tempCustomParams.dateFromFilter ||
    urlParams.dateToFilter !== tempCustomParams.dateToFilter ||
    urlParams.sizeFromFilter !== tempCustomParams.sizeFromFilter ||
    urlParams.sizeToFilter !== tempCustomParams.sizeToFilter ||
    urlParams.groupName !== tempCustomParams.groupName,
);

export const isInfinityLoaderShow = createSelector(
  [isFetching, isFetchedError, getAttachmentsCount, getTotalCount],
  (isFetchingProp, isFetchedErrorProp, attachmentsCount, totalCount) =>
    !isFetchedErrorProp && (isFetchingProp || attachmentsCount < totalCount),
);

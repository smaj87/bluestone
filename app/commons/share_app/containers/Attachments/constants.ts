import { CustomUrlParamsInterface } from 'commons/share_app/containers/Attachments/types';

export const KEY = 'attachments';
export const PAGE_NAME = 'ATTACHMENTS_PAGE';

export const ATTACHMENTS_CONTAINER_ID = 'js_AttachmentsContainer';

export const FETCH_ATTACHMENTS = `${KEY}/FETCH_ATTACHMENTS`;
export const FETCH_ATTACHMENTS_SUCCESS = `${FETCH_ATTACHMENTS}_SUCCESS`;
export const FETCH_ATTACHMENTS_FAILURE = `${FETCH_ATTACHMENTS}_FAILURE`;

export const TOGGLE_CHECKED = `${KEY}/TOGGLE_CHECKED`;
export const SET_LAST_SHOWN_ID = `${KEY}/SET_LAST_SHOWN_ID` as const;
export const SET_GROUP_VISIBILITY = `${KEY}/SET_GROUP_VISIBILITY`;
export const SET_TEMP_CUSTOM_FILTERS = `${KEY}/SET_TEMP_CUSTOM_FILTERS`;
export const SET_HOVER_ID = `${KEY}/SET_HOVER_ID`;

export const ATTACHMENT_SORT_FIELDS = ['name', 'from', 'date', 'size'] as const;
export const ATTACHMENT_SORT_DIR_FIELDS = ['asc', 'desc'] as const;

export const ATTACHMENT_GROUP_NAMES = [
  'Photo',
  'Document',
  'Video',
  'Music',
  'Presentation',
  'Archive',
  'Other',
] as const;

export const QUICK_FILTERS_ATTACHMENT_GROUP_NAMES: CustomUrlParamsInterface['groupName'][] =
  [ATTACHMENT_GROUP_NAMES[0], ATTACHMENT_GROUP_NAMES[1]];

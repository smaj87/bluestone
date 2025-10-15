import { SchemaOrg } from 'types';

import { Headers, ReadMailParsed } from './types';

export const KEY = 'readMail';
export const PAGE_NAME = 'READ_MAIL_PAGE';

export const ATTACHMENTS_CONTAINER_ID = 'js_ReadMailAttachmentsContainer';

export const READ_MAIL_CONTAINER_ID = 'js_ReadMailContainer';

export const FETCH_READ_MAIL = `${KEY}/FETCH_READ_MAIL` as const;
export const FETCH_WHITE_LIST = `${KEY}/FETCH_WHITE_LIST` as const;
export const FETCH_HEADERS = `${KEY}/FETCH_HEADERS` as const;
export const UPDATE_MAILS = `${KEY}/UPDATE_MAILS` as const;

export const SECURITY_TYPE_NONE = `${KEY}/SECURITY_TYPE_NONE`;
export const SECURITY_TYPE_SUCCESS = `${KEY}/SECURITY_TYPE_SUCCESS`;
export const SECURITY_TYPE_WARNING = `${KEY}/SECURITY_TYPE_WARNING`;
export const SECURITY_TYPE_ERROR = `${KEY}/SECURITY_TYPE_ERROR`;
export const SECURITY_TYPE_SPF_SOFT_FAIL_ERROR =
  `${KEY}/SECURITY_TYPE_SPF_SOFT_FAIL_ERROR` as const;

export const SET_IS_SHOW_DISCOUNTS = `${KEY}/SET_IS_SHOW_DISCOUNTS`;
export const SET_SCHEMA_EVENT_TAB_KEY = `${KEY}/SET_SCHEMA_EVENT_TAB_KEY`;
export const SET_SCHEMA_EVENT_TAB_DATA = `${KEY}/SET_SCHEMA_EVENT_TAB_DATA`;

export const DEFAULT_READ_MAIL: ReadMailParsed = {
  mid: -1,
  root_mid: -1,
  fid: -1,
  attachments: [],
  env_from: '',
  avatar: '',
  from: { name: '', email: '' },
  reply_to: { name: '', email: '' },
  to: [],
  cc: [],
  bcc: [],
  schema_org: {} as SchemaOrg,
  labels: [],
  flags: [],
  isMailing: false,
  received_date: '',
  sent_date: '',
  subject: '',
  snippet: '',
  size: 0,
  isFromMailList: false,
  isShowImages: false,
  isFetching: false,
  isFetched: false,
  isFetchedError: false,
  content: {
    doctype: '',
    body: '',
    encoding: '',
    raw: '',
    isAnyImages: false,
    isAnyBlockedImages: false,
  },
};

export const DEFAULT_HEADERS: Headers = {
  mid: -1,
  values: [],
  isFetching: false,
  isFetched: false,
  isFetchedError: false,
};

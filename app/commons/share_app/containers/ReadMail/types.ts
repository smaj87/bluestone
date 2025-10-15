import { Email, RawSchemaOrg, SchemaOrg } from 'types';

import {
  FETCH_MAILS_SUCCESS,
  MOVE_MAILS,
  SET_INVOICE_PREPARING,
  TOGGLE_FLAG,
  UPDATE_MAILS_SCHEMA,
} from 'commons/share_app/containers/Mails/constants';
import { ApiMail, MailState } from 'commons/share_app/containers/Mails/types';
import { UNSUBSCRIBE_NEWSLETTER_SUCCESS } from 'commons/share_app/containers/Newsletters/constants';

import { TabDataType } from 'components/Schema/Events/types';

import {
  FETCH_HEADERS,
  FETCH_READ_MAIL,
  FETCH_WHITE_LIST,
  KEY,
  SET_IS_SHOW_DISCOUNTS,
  SET_SCHEMA_EVENT_TAB_DATA,
  SET_SCHEMA_EVENT_TAB_KEY,
  UPDATE_MAILS,
} from './constants';

export interface AttachmentReadMail {
  'content-url': string;
  'content-type': string;
  embedded: boolean;
  filename: string;
  has_thumbs?: number;
  id: string;
  is_inline?: number;
  location: string;
  mid?: number;
  'part-path': string;
  size: number;
  'storage-type'?: string;

  stgVer?: number; // nowa wersja api załączników
}
export interface UrlParamsInterface {
  mid: number;
}

export interface AttachmentNewMail {
  accoundId: number;
  blobId: string;
  expires: string;
  filename: string;
  id: string;
  isEmbedded?: boolean;
  isUploading: boolean;
  size: number;
  type: string;
  doNotShowEmbedded?: boolean;
  'content-url'?: string;
}

export interface AttachmentListView {
  aid: string;
  contentType: string;
  filename: string;
  fid: number;
  mid: number;
  hasThumbs: number;
  isInline: number;
  groupName: string;
  partPath: string;
  size: number;
  subject: string;
  sentDate: string;
  stgVer?: number;
  contentUrl?: string;
  from: Email;
  id?: string;
  groupId?: number;
  index?: number;
  location?: string;
  uploadProgress?: number;
  isUploading?: boolean;
}

export type Attachment =
  | AttachmentListView
  | AttachmentNewMail
  | AttachmentReadMail;

export interface HeadersValue {
  header: string;
  value: string;
}

export interface Headers {
  values: HeadersValue[];
  mid: number;
  isFetching: boolean;
  isFetched: boolean;
  isFetchedError: boolean;
}

export interface ReadMailCommon {
  attachments: Attachment[];
  mid: number;
  root_mid: number;
  fid: number;
  subject: string;
  snippet: string;
  mlid?: number;
  ml_id?: number;
  from: Email;
  reply_to: Email;
  env_from: string;
  to: Email[];
  cc: Email[];
  bcc: Email[];
  labels: number[];
  received_date: string;
  sent_date: string;
  size: number;
  priority?: number;
  concat?: {
    body?: string;
  };
}

export interface ReadMailRaw extends ReadMailCommon {
  flags: string;
  extra_flags: string;
  schema_org: RawSchemaOrg;
  'message-id': string;
  html: string;
  text: string;
  mlimg: string;
}

export interface ReadMailNormalized extends ReadMailCommon {
  flags: string[];
  schema_org?: SchemaOrg;
  mlimg?: undefined;
  extra_flags?: undefined;
  html: string;
  text: string;
  avatar: string;
  messageId: string;
}

export interface ReadMailParsed extends ReadMailCommon {
  content: {
    doctype: string;
    body: string;
    encoding: string;
    raw: string;
    isAnyImages: boolean;
    isAnyBlockedImages: boolean;
    styles?: { type: 'link' | 'block'; value: string }[];
  };
  flags: string[];
  avatar: string;
  isMailing: boolean;
  isShowImages: boolean;
  isFetching: boolean;
  isFetched: boolean;
  isFetchedError: boolean;
  isFromMailList: boolean;
  schema_org: SchemaOrg;
  from: Email;
}

// todo move to MailList?
export interface ReadMailFromMailList {
  mid: number;
  fid: number;
  subject: string;
  snippet: string;
  mlimg: string;
  from: Email;
  to: Email;
  labels: number[];
  flags: string[];
  isMailing: boolean;
  received_date: string;
  sent_date: string;
  schema_org: SchemaOrg;
}

export interface ReadMailState {
  mails: { [mid: number]: ReadMailParsed };
  headers: { [mid: number]: Headers };
  mids: number[]; // for next/prev mail
  whiteList: string[];
  whiteListGlobals: string[];
  isWhiteListFetching: boolean;
  isWhiteListFetched: boolean;
  isWhiteListFetchedError: boolean;
  isShowDiscounts: boolean;
}

export interface ReadMailRootState {
  [KEY]: ReadMailState;
}

export type ReadMailAction =
  | { type: typeof FETCH_READ_MAIL; mail: ReadMailParsed }
  | { type: typeof UPDATE_MAILS; mails: ReadMailState['mails'] }
  | { type: typeof FETCH_HEADERS; headers: Headers }
  | {
      type: typeof FETCH_WHITE_LIST;
      whiteList?: ReadMailState['whiteList'];
      whiteListGlobals?: ReadMailState['whiteListGlobals'];
      isWhiteListFetching?: ReadMailState['isWhiteListFetching'];
      isWhiteListFetched?: ReadMailState['isWhiteListFetched'];
      isWhiteListFetchedError?: ReadMailState['isWhiteListFetchedError'];
    }
  | {
      type: typeof FETCH_MAILS_SUCCESS;
      mails: MailState['mails'];
      groups: MailState['groups'];
    }
  | { type: typeof UNSUBSCRIBE_NEWSLETTER_SUCCESS; mid: ReadMailParsed['mid'] }
  | {
      type: typeof TOGGLE_FLAG;
      flag: string;
      midsToFlags: Record<string, boolean>;
    }
  | {
      type: typeof MOVE_MAILS;
      mailsToFid: Record<number, number>;
    }
  | { type: typeof SET_IS_SHOW_DISCOUNTS; flag?: boolean }
  | {
      type: typeof SET_SCHEMA_EVENT_TAB_KEY;
      tabKey: string;
      mid: number;
    }
  | {
      type: typeof SET_SCHEMA_EVENT_TAB_DATA;
      tabData: TabDataType;
      mid: number;
    }
  | { type: typeof SET_INVOICE_PREPARING }
  | {
      type: typeof UPDATE_MAILS_SCHEMA;
      schemas: Record<string, ApiMail['schema_org']>;
    };

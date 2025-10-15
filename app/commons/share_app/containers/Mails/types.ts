import { Email, RawSchemaOrg, SchemaOrg } from 'types';

import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import { ListState } from 'commons/ListIntersectionObserver/types';

import { EMPTY_FOLDER } from 'containers/Folders/constants';
import { SEND_MAIL } from 'containers/NewMail/constants';

import {
  CANCEL_SEND_MAIL,
  CANCEL_SEND_MAIL_FAILURE,
  CANCEL_SEND_MAIL_SUCCESS,
  FETCH_MAILS,
  FETCH_MAILS_FAILURE,
  FETCH_MAILS_SUCCESS,
  KEY,
  LOAD_MAILS_AFTER_REMOVE,
  MAIL_FILTER_FIELDS,
  MAIL_SORT_DIR_FIELDS,
  MAIL_SORT_FIELDS,
  MOVE_MAILS,
  SET_GROUP_VISIBILITY,
  SET_HOVER_ID,
  SET_INVOICE_PREPARING,
  SET_LAST_SHOWN_ID,
  TOGGLE_CHECKED,
  TOGGLE_FLAG,
  UPDATE_MAILS_SCHEMA,
} from './constants';

export interface UrlParamsInterface {
  sort: (typeof MAIL_SORT_FIELDS)[number] | '';
  sortDir: (typeof MAIL_SORT_DIR_FIELDS)[number];
  page: number;
  filter: (typeof MAIL_FILTER_FIELDS)[number] | '';
  history: Email | null;
  searchQuery: string;
  folderId: number;
  labelId: number;
  urlName: string;
}

export interface FetchMailsReqParamsInterface extends UrlParamsInterface {
  limit: number;
  offset?: number;
}

interface ChangeFlagInterface {
  flags: string;
  mids: number[];
}

export interface BodyChangeFlagsInterface {
  srcMailFlags: {
    [key: number]: {
      setFlags: ChangeFlagInterface;
      delFlags: ChangeFlagInterface;
    };
  };
}

export interface ApiMail {
  extra_flags: string; // np Bimi,SPFpass
  fid: number;
  flags: string; // np \\Seen\\Personal
  from: string; // np "Mailingi Onet" <mailing_reklamowy@onet.pl>
  labels: number[];
  mid: number;
  root_mid: number;
  mlid: number;
  mlimg: string;
  received_date: string; // np "2024-12-11 12:00:00"
  schema_org: RawSchemaOrg;
  sent_date: string; // np "2024-12-11 12:00:00"
  snippet: string;
  subject: string;
  to: string; // np "Seba Ban" <sb_speed@poczta.onet.pl>
}

export interface StateUpdateFidAfterMoveReturnType {
  isAnyChanges: boolean;
  srcMails: Record<number, number[]>;
  dstFid: number;
  mids: number[];
}

export interface Mail {
  flags: string[];
  from: Email;
  to: Email;
  fid: number;
  mid: number;
  root_mid: number;
  subject: string;
  snippet: string;
  sent_date: string;
  received_date: string;
  // todo rest???
  groupId: number;
  isMailing: boolean;
  avatar: string;
  schema_org: SchemaOrg;
  isCancelingSend: boolean;
}

export interface MailState extends ListState {
  mails: { [id: string]: Mail };
  totalCount: number;
  isLoadingAfterRemove: boolean;
  isFetching: boolean;
  isFetched: boolean;
  isFetchedError: boolean;
  lastShownId: number;
  hoverId: number;
  lastIndex: number;
  isCancelingSend: boolean;
  isAnyReadChecked: boolean;
  isAnyReadUnchecked: boolean;
  isAnyUnreadChecked: boolean;
  isAnyUnreadUnchecked: boolean;
  isAnyScheduledSendUnchecked: boolean;
  isAnyNonScheduledSendUnchecked: boolean;
}

export interface MailRootState {
  [KEY]: MailState;
}

export type MailsAction =
  | { type: typeof FETCH_MAILS; append: boolean }
  | { type: typeof FETCH_MAILS_FAILURE }
  | { type: typeof SET_LAST_SHOWN_ID; id: number }
  | { type: typeof SET_HOVER_ID; id: number }
  | { type: typeof EMPTY_FOLDER; fid: number }
  | { type: typeof LOAD_MAILS_AFTER_REMOVE; isLoading: boolean }
  | { type: typeof CANCEL_SEND_MAIL; mails: Mail[] }
  | { type: typeof CANCEL_SEND_MAIL_SUCCESS; mails: Mail[] }
  | { type: typeof CANCEL_SEND_MAIL_FAILURE; mails: Mail[] }
  | {
      type: typeof SET_GROUP_VISIBILITY;
      groupIds: MailState['groupVisibility'];
    }
  | {
      type: typeof TOGGLE_CHECKED;
      id: number;
      isChecked: boolean | undefined;
      mode: (typeof CHECKED_MODE)[keyof typeof CHECKED_MODE];
      isShift: boolean;
    }
  | {
      type: typeof TOGGLE_FLAG;
      flag: string;
      midsToFlags: Record<string, boolean>;
    }
  | {
      type: typeof FETCH_MAILS_SUCCESS;
      mails: MailState['mails'];
      groups: MailState['groups'];
      checks: MailState['checks'];
      totalCount: number;
    }
  | {
      type: typeof MOVE_MAILS;
      mailsToFid: Record<number, number>;
    }
  | { type: typeof SET_INVOICE_PREPARING }
  | {
      type: typeof UPDATE_MAILS_SCHEMA;
      schemas: Record<string, ApiMail['schema_org']>;
    }
  | {
      type: typeof SEND_MAIL;
      isSending: boolean;
      payload?: {
        mid: number;
        isAnswered: boolean;
        isForward: boolean;
      };
    };

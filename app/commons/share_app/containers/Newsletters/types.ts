import { Email } from 'types';

import {
  FETCH_NEWSLETTERS,
  FETCH_NEWSLETTERS_FAILURE,
  FETCH_NEWSLETTERS_SUCCESS,
  KEY,
  REMOVE_NEWSLETTER_MAILS,
  REMOVE_NEWSLETTER_MAILS_FAILURE,
  REMOVE_NEWSLETTER_MAILS_SUCCESS,
  SET_LAST_SHOWN_ID,
  SORT_NEWSLETTERS,
  UNSUBSCRIBE_NEWSLETTER,
  UNSUBSCRIBE_NEWSLETTER_FAILURE,
  UNSUBSCRIBE_NEWSLETTER_SUCCESS,
} from './constants';

export interface Newsletter {
  idMessage: number;
  lastMessage: string; // date
  from: Email;
  fullFrom: string;
  subject: string;
  count: number;
  seenRatio: string; // 0-1
  isBimi: boolean;
  recivedDate: string;
  sentDate: string;
  snippet: string;
}

export type NewslettersSortType = 'from' | 'count' | 'seenRatio';

export interface UrlParamsInterface {
  sort: NewslettersSortType;
}

export interface NewsletterRule {
  unsubLastUpdate: string;
  unsubFrm: string;
}

export interface UnsubscribeResponse {
  status: number;
  data: string;
}

export interface NewslettersState {
  newsletters: Newsletter[];
  isFetching: boolean;
  isFetched: boolean;
  isFetchingError: boolean;
  isUnsubscribing: {
    [mid: Newsletter['idMessage']]: boolean;
  };
  isRemovingMails: boolean;
  lastShownId: number;
}

export interface NewslettersRootState {
  [KEY]: NewslettersState;
}

export type NewslettersAction =
  | { type: typeof FETCH_NEWSLETTERS }
  | { type: typeof FETCH_NEWSLETTERS_FAILURE }
  | {
      sort: NewslettersSortType;
      type: typeof FETCH_NEWSLETTERS_SUCCESS;
      newsletters: Newsletter[];
    }
  | { type: typeof UNSUBSCRIBE_NEWSLETTER; mid: Newsletter['idMessage'] }
  | { type: typeof SET_LAST_SHOWN_ID; id: Newsletter['idMessage'] }
  | {
      type: typeof UNSUBSCRIBE_NEWSLETTER_FAILURE;
      mid: Newsletter['idMessage'];
    }
  | {
      type: typeof UNSUBSCRIBE_NEWSLETTER_SUCCESS;
      mid: Newsletter['idMessage'];
    }
  | { type: typeof REMOVE_NEWSLETTER_MAILS }
  | { type: typeof REMOVE_NEWSLETTER_MAILS_FAILURE }
  | { type: typeof REMOVE_NEWSLETTER_MAILS_SUCCESS; emailFrom: string }
  | {
      type: typeof SORT_NEWSLETTERS;
      sort: NewslettersSortType;
    };

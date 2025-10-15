import {
  FETCH_NEWSLETTERS,
  FETCH_NEWSLETTERS_FAILURE,
  FETCH_NEWSLETTERS_SUCCESS,
  REMOVE_NEWSLETTER_MAILS,
  REMOVE_NEWSLETTER_MAILS_FAILURE,
  REMOVE_NEWSLETTER_MAILS_SUCCESS,
  SET_LAST_SHOWN_ID,
  SORT_NEWSLETTERS,
  UNSUBSCRIBE_NEWSLETTER,
  UNSUBSCRIBE_NEWSLETTER_FAILURE,
  UNSUBSCRIBE_NEWSLETTER_SUCCESS,
} from './constants';
import { NewslettersAction, NewslettersState } from './types';
import { sortNewslettersByType } from './utils';

export const initialState: NewslettersState = {
  newsletters: [],
  isFetching: false,
  isFetched: false,
  isFetchingError: false,
  isUnsubscribing: {},
  isRemovingMails: false,
  lastShownId: -1,
};

export default (
  state = initialState,
  action: NewslettersAction,
): NewslettersState => {
  switch (action.type) {
    case FETCH_NEWSLETTERS:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchingError: false,
      };
    case FETCH_NEWSLETTERS_SUCCESS:
      return {
        ...state,
        newsletters: sortNewslettersByType(action.newsletters, action.sort),
        isFetching: false,
        isFetched: true,
        isFetchingError: false,
      };
    case FETCH_NEWSLETTERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        isFetchingError: true,
      };
    case UNSUBSCRIBE_NEWSLETTER:
      return {
        ...state,
        isUnsubscribing: { ...state.isUnsubscribing, [action.mid]: true },
      };
    case UNSUBSCRIBE_NEWSLETTER_FAILURE:
      return {
        ...state,
        isUnsubscribing: { ...state.isUnsubscribing, [action.mid]: false },
      };
    case UNSUBSCRIBE_NEWSLETTER_SUCCESS: {
      const index = state.newsletters.findIndex(
        (n) => n.idMessage === action.mid,
      );
      let { newsletters } = state;

      if (index >= 0) {
        newsletters = [...newsletters];
        newsletters.splice(index, 1);
      }

      return {
        ...state,
        isUnsubscribing: { ...state.isUnsubscribing, [action.mid]: false },
        newsletters,
      };
    }
    case REMOVE_NEWSLETTER_MAILS:
      return {
        ...state,
        isRemovingMails: true,
      };
    case REMOVE_NEWSLETTER_MAILS_FAILURE:
      return {
        ...state,
        isRemovingMails: false,
      };
    case REMOVE_NEWSLETTER_MAILS_SUCCESS: {
      const index = state.newsletters.findIndex(
        (n) => n.from.email === action.emailFrom,
      );
      let { newsletters } = state;

      if (index >= 0) {
        newsletters = [...newsletters];
        newsletters[index].count = 0;
      }

      return {
        ...state,
        isRemovingMails: false,
        newsletters,
      };
    }
    case SORT_NEWSLETTERS: {
      return {
        ...state,
        newsletters: sortNewslettersByType(state.newsletters, action.sort),
      };
    }
    case SET_LAST_SHOWN_ID:
      return {
        ...state,
        lastShownId: action.id,
      };
    default:
  }

  return state;
};

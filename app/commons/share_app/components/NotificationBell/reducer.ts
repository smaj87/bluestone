import {
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_COUNTER,
  FETCH_NOTIFICATIONS_COUNTER_FAILURE,
  FETCH_NOTIFICATIONS_COUNTER_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE,
  FETCH_NOTIFICATIONS_SUCCESS,
  RE_SORT_NOTIFICATIONS,
  RESET_COUNTER,
  SET_IS_OPEN,
  SET_READ,
} from './constants';
import {
  Notification,
  NotificationBellListAction,
  NotificationBellListState,
} from './types';
import { saveToState, sortNotifications } from './utils';

export const initialState: NotificationBellListState = {
  notifications: [],
  isFetched: false,
  isFetching: false,
  isFetchedError: false,
  shouldSort: false, // zmienna pomocniczna do optymalziacji
  isOpen: false,
  counter: 0,
  isFetchedCounter: false,
  isFetchingCounter: false,
  isFetchedErrorCounter: false,
};

export default (state = initialState, action: NotificationBellListAction) => {
  switch (action.type) {
    case RESET_COUNTER:
      return {
        ...state,
        counter: 0,
      };
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case RE_SORT_NOTIFICATIONS: {
      const notifications = sortNotifications(
        state.notifications,
      ) as Notification[];

      saveToState(notifications);

      return {
        ...state,
        notifications,
        shouldSort: false,
      };
    }
    case SET_READ: {
      const notifications = state.notifications.map((notification) =>
        notification.notification_type_id === action.notificationType
          ? { ...notification, processing_state: 'READ', count: 0 }
          : notification,
      ) as Notification[];

      saveToState(notifications);

      return {
        ...state,
        shouldSort: true,
        notifications,
      };
    }
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isFetchedError: false,
      };
    case FETCH_NOTIFICATIONS_SUCCESS: {
      saveToState(action.notifications);

      return {
        ...state,
        notifications: action.notifications,
        isFetching: false,
        isFetched: true,
        isFetchedError: false,
      };
    }
    case FETCH_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        isFetchedError: true,
      };
    case FETCH_NOTIFICATIONS_COUNTER:
      return {
        ...state,
        isFetchingCounter: true,
        isFetchedCounter: false,
        isFetchedErrorCounter: false,
      };
    case FETCH_NOTIFICATIONS_COUNTER_SUCCESS: {
      return {
        ...state,
        counter: action.counter,
        isFetchingCounter: false,
        isFetchedCounter: true,
        isFetchedErrorCounter: false,
      };
    }
    case FETCH_NOTIFICATIONS_COUNTER_FAILURE:
      return {
        ...state,
        isFetchingCounter: false,
        isFetchedCounter: false,
        isFetchedErrorCounter: true,
      };
    default:
  }

  return state;
};

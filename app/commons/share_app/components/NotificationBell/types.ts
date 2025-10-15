import {
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_COUNTER,
  FETCH_NOTIFICATIONS_COUNTER_FAILURE,
  FETCH_NOTIFICATIONS_COUNTER_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE,
  FETCH_NOTIFICATIONS_SUCCESS,
  KEY,
  RE_SORT_NOTIFICATIONS,
  RESET_COUNTER,
  SET_IS_OPEN,
  SET_READ,
} from './constants';

export type NotificationType =
  | 'onetkonto_password_changed' // 3
  | 'onetkonto_profile_data_changed' // 4
  | 'onetkonto_new_device_login' // 5
  | 'onetkonto_contact_data_changed' // 6
  | 'onetkonto_password_is_leaked'; // 8

export enum NOTIFICATIONS_STATES {
  SENT = 'SENT',
  READ = 'READ',
}

export type NotificationState = keyof typeof NOTIFICATIONS_STATES;

export interface ApiNotification {
  nid: number;
  ctime: string; // timestamp
  redirect_url: string;
  processing_state: NotificationState;
  notification_type_id: NotificationType;
}

export type ApiNotificationsResponse = Record<
  NotificationType,
  ApiNotification[]
>;

export interface ApiNotificationsCounterResponse {
  counter: number;
}

export interface Notification extends ApiNotification {
  count: number;
  ctimestamp: number;
  nids_group: number[];
}

export interface NotificationBellListState {
  notifications: Notification[];
  isFetching: boolean;
  isFetched: boolean;
  isFetchedError: boolean;
  shouldSort: boolean;
  isOpen: boolean;
  counter: number;
  isFetchedCounter: boolean;
  isFetchingCounter: boolean;
  isFetchedErrorCounter: boolean;
}

export interface NotificationBellListRootState {
  [KEY]: NotificationBellListState;
}

export type NotificationBellListAction =
  | {
      type: typeof SET_READ;
      notificationType: NotificationType;
    }
  | {
      type: typeof SET_IS_OPEN;
      isOpen: boolean;
    }
  | {
      type: typeof RE_SORT_NOTIFICATIONS;
    }
  | {
      type: typeof FETCH_NOTIFICATIONS;
    }
  | {
      type: typeof RESET_COUNTER;
    }
  | { type: typeof FETCH_NOTIFICATIONS_FAILURE }
  | {
      type: typeof FETCH_NOTIFICATIONS_SUCCESS;
      notifications: Notification[];
    }
  | {
      type: typeof FETCH_NOTIFICATIONS_COUNTER;
    }
  | { type: typeof FETCH_NOTIFICATIONS_COUNTER_FAILURE }
  | {
      type: typeof FETCH_NOTIFICATIONS_COUNTER_SUCCESS;
      counter: number;
    };

export type NotificationBellState = 'info' | 'success' | 'error';

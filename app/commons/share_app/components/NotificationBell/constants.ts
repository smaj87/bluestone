export const KEY = 'NotificationBellList';

export const SET_READ = `${KEY}/SET_READ` as const;
export const SET_IS_OPEN = `${KEY}/SET_IS_OPEN` as const;
export const RE_SORT_NOTIFICATIONS = `${KEY}/RE_SORT_NOTIFICATIONS` as const;
export const RESET_COUNTER = `${KEY}/RESET_COUNTER` as const;

export const FETCH_NOTIFICATIONS = `${KEY}/FETCH_NOTIFICATIONS` as const;
export const FETCH_NOTIFICATIONS_SUCCESS =
  `${FETCH_NOTIFICATIONS}_SUCCESS` as const;
export const FETCH_NOTIFICATIONS_FAILURE =
  `${FETCH_NOTIFICATIONS}_FAILURE` as const;

export const FETCH_NOTIFICATIONS_COUNTER =
  `${KEY}/FETCH_NOTIFICATIONS_COUNTER` as const;
export const FETCH_NOTIFICATIONS_COUNTER_SUCCESS =
  `${FETCH_NOTIFICATIONS_COUNTER}_SUCCESS` as const;
export const FETCH_NOTIFICATIONS_COUNTER_FAILURE =
  `${FETCH_NOTIFICATIONS_COUNTER}_FAILURE` as const;

export const DROPDOWN_POPUP_ID = 'dropdown-notification-bell';
export const DROPDOWN_TARGET_ID = 'dropdown-notification-bell-target';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { NotificationBellListRootState, NOTIFICATIONS_STATES } from './types';

export const getState = createSelector(
  [(state: NotificationBellListRootState) => state?.[KEY] || initialState],
  (state) => state,
);

export const isFetched = createSelector([getState], (state) => state.isFetched);

export const isFetchedError = createSelector(
  [getState],
  (state) => state.isFetchedError,
);

export const isFetching = createSelector(
  [getState],
  (state) => state.isFetching,
);

export const isFetchedCounter = createSelector(
  [getState],
  (state) => state.isFetchedCounter,
);

export const isFetchedErrorCounter = createSelector(
  [getState],
  (state) => state.isFetchedErrorCounter,
);

export const isFetchingCounter = createSelector(
  [getState],
  (state) => state.isFetchingCounter,
);

export const isOpen = createSelector([getState], (state) => state.isOpen);

export const shouldSort = createSelector(
  [getState],
  (state) => state.shouldSort,
);

export const getCounter = createSelector([getState], (state) => state.counter);

export const getNotifications = createSelector(
  [getState],
  (state) => state.notifications,
);

export const getNotificationsLength = createSelector(
  [getNotifications],
  (notifications) => notifications.length,
);

export const getUnreadCount = createSelector(
  [getNotifications],
  (notifications) =>
    notifications.filter(
      (n) => n.processing_state === NOTIFICATIONS_STATES.SENT,
    ).length,
);

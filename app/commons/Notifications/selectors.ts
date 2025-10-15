import { createSelector } from 'reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { NotificationRootState, NotificationState } from './types';

export const getState = createSelector(
  (state: NotificationRootState) => state?.[KEY] || initialState,
  (state): NotificationState => state,
);

const getNotifications = createSelector(
  getState,
  (state) => state.notifications || [],
);

export { getNotifications };

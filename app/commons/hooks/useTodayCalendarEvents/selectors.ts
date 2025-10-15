import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { TodayCalendarEventsRootState } from './types';

export const getState = createSelector(
  [(state: TodayCalendarEventsRootState) => state?.[KEY] || initialState],
  (state) => state,
);

export const getEvents = createSelector(getState, (state) => state.events);

export const getCount = createSelector(getEvents, (events) => events.length);

export const isFetching = createSelector(getState, (state) => state.isFetching);

export const isFetched = createSelector(getState, (state) => state.isFetched);

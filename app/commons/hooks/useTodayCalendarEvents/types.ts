import {
  FETCH_TODAY_EVENTS,
  FETCH_TODAY_EVENTS_FAILURE,
  FETCH_TODAY_EVENTS_SUCCESS,
  KEY,
} from './constants';

export interface TodayCalendarEventsState {
  events: EventInterface[];
  isFetching: boolean;
  isFetched: boolean;
}

export interface TodayCalendarEventsRootState {
  [KEY]: TodayCalendarEventsState;
}

export interface EventInterface {
  id: number;
}

export type TodayCalendarEventsAction =
  | { type: typeof FETCH_TODAY_EVENTS }
  | {
      type: typeof FETCH_TODAY_EVENTS_SUCCESS;
      events: EventInterface[];
    }
  | { type: typeof FETCH_TODAY_EVENTS_FAILURE };

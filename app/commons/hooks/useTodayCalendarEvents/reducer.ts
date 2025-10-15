import {
  FETCH_TODAY_EVENTS,
  FETCH_TODAY_EVENTS_FAILURE,
  FETCH_TODAY_EVENTS_SUCCESS,
} from './constants';
import { TodayCalendarEventsAction, TodayCalendarEventsState } from './types';

export const initialState: TodayCalendarEventsState = {
  isFetching: false,
  isFetched: false,
  events: [],
};

export default (
  state = initialState,
  action: TodayCalendarEventsAction,
): TodayCalendarEventsState => {
  switch (action.type) {
    case FETCH_TODAY_EVENTS:
      return { ...state, isFetching: true };
    case FETCH_TODAY_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        events: action.events,
      };
    case FETCH_TODAY_EVENTS_FAILURE:
      return { ...state, isFetching: false };

    default:
  }

  return state;
};

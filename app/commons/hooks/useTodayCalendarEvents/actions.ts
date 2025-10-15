import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { CALENDAR_API_URL } from 'commons/utils/constants';
import { leadingZero } from 'commons/utils/date';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import {
  FETCH_TODAY_EVENTS,
  FETCH_TODAY_EVENTS_FAILURE,
  FETCH_TODAY_EVENTS_SUCCESS,
} from './constants';
import { EventInterface } from './types';

const fetchTodayEventsSuccess = (events: EventInterface[]) => ({
  type: FETCH_TODAY_EVENTS_SUCCESS,
  events,
});

const fetchTodayEventsFailure = () => ({
  type: FETCH_TODAY_EVENTS_FAILURE,
});

export const fetchTodayEvents = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_TODAY_EVENTS });

  try {
    const date = new Date();

    const from = `${date.getUTCFullYear()}-${leadingZero(
      date.getUTCMonth() + 1,
    )}-${leadingZero(date.getUTCDate())}`;
    const nowTime = `${leadingZero(date.getUTCHours())}:${leadingZero(
      date.getUTCMinutes(),
    )}:${leadingZero(date.getUTCSeconds())}`;

    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);

    const to = `${date.getUTCFullYear()}-${leadingZero(
      date.getUTCMonth() + 1,
    )}-${leadingZero(date.getUTCDate())}`;
    const endTime = `${leadingZero(date.getUTCHours())}:${leadingZero(
      date.getUTCMinutes(),
    )}:${leadingZero(date.getUTCSeconds())}`;

    const events = await request(
      `${CALENDAR_API_URL}/event?cached=1&from=${from} ${nowTime}&to=${to} ${endTime}`,
    );

    dispatch(fetchTodayEventsSuccess(events));
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch(fetchTodayEventsFailure());
  }
};

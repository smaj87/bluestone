export const KEY = 'todayCalendarEvents';

export const FETCH_TODAY_EVENTS = `${KEY}/FETCH_TODAY_EVENTS` as const;
export const FETCH_TODAY_EVENTS_SUCCESS =
  `${FETCH_TODAY_EVENTS}_SUCCESS` as const;
export const FETCH_TODAY_EVENTS_FAILURE =
  `${FETCH_TODAY_EVENTS}_FAILURE` as const;

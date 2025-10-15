import { createContext } from 'commons/utils/react';

export const KEY = 'dayPicker';

export const SET_NEXT_MONTH = `${KEY}/SET_NEXT_MONTH`;
export const SET_PREV_MONTH = `${KEY}/SET_PREV_MONTH`;

export const DayPickerContext = createContext({
  currentDateSelector: () => new Date(),
  onChange: (_: Date) => {},
  isDisablePastDays: false,
});

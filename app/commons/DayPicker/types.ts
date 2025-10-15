import { SET_NEXT_MONTH, SET_PREV_MONTH } from './constants';

export interface DayPickerState {
  currentMonth: number;
  currentYear: number;
}

export interface MonthDayType {
  day: number;
  isPrevMonth?: boolean;
  isCurrentMonth?: boolean;
  isNextMonth?: boolean;
  isToday?: boolean;
  date: Date;
}

export type DayPickerAction =
  | {
      type: typeof SET_NEXT_MONTH;
    }
  | {
      type: typeof SET_PREV_MONTH;
    };

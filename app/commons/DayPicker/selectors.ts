import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { DayPickerState, MonthDayType } from './types';
import { isSameDay } from './utils';

export const getState = createSelector(
  (state: RootState & { [KEY]: DayPickerState }) =>
    state?.[KEY] || initialState,
  (state): DayPickerState => state,
);

export const getCurrentMonth = createSelector(
  getState,
  (state): number => state.currentMonth,
);

export const getCurrentYear = createSelector(
  getState,
  (state): number => state.currentYear,
);

export const getMonthDays = createSelector(
  [getCurrentYear, getCurrentMonth],
  (year, month) => {
    const tmpResult: MonthDayType[] = [];
    const result: MonthDayType[][] = [];

    const daysCount = new Date(year, month + 1, 0).getDate();
    const prevDaysCount = new Date(year, month, 0).getDate();

    let weekFirstDay = new Date(year, month, 1).getDay();
    const weekLastDay = new Date(year, month, daysCount).getDay();

    if (weekFirstDay === 0) {
      weekFirstDay = 7;
    }

    if (weekFirstDay > 1) {
      for (
        let day = prevDaysCount, j = 0;
        j < weekFirstDay - 1;
        day -= 1, j += 1
      ) {
        const date = new Date(year, month - 1, day);

        tmpResult.unshift({
          day,
          isPrevMonth: true,
          isToday: isSameDay(new Date(), date),
          date,
        });
      }
    }

    for (let day = 1; day <= daysCount; day += 1) {
      const date = new Date(year, month, day);

      tmpResult.push({
        day,
        isCurrentMonth: true,
        isToday: isSameDay(new Date(), date),
        date,
      });
    }

    if (weekLastDay > 0) {
      for (let day = 1; day <= 7 - weekLastDay; day += 1) {
        const date = new Date(year, month + 1, day);

        tmpResult.push({
          day,
          isNextMonth: true,
          isToday: isSameDay(new Date(), date),
          date,
        });
      }
    }

    for (let i = 0, rowSize = 7; i < tmpResult.length; i += rowSize) {
      result.push(tmpResult.slice(i, i + rowSize));
    }

    return result;
  },
);

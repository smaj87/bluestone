import { SET_NEXT_MONTH, SET_PREV_MONTH } from './constants';
import { DayPickerAction, DayPickerState } from './types';

export const initialState: DayPickerState = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
};

export default (
  state = initialState,
  action: DayPickerAction,
): DayPickerState => {
  switch (action.type) {
    case SET_NEXT_MONTH: {
      if (state.currentMonth === 11) {
        return {
          currentMonth: 0,
          currentYear: state.currentYear + 1,
        };
      }

      return {
        currentMonth: state.currentMonth + 1,
        currentYear: state.currentYear,
      };
    }
    case SET_PREV_MONTH: {
      if (state.currentMonth === 0) {
        return {
          currentMonth: 11,
          currentYear: state.currentYear - 1,
        };
      }

      return {
        currentMonth: state.currentMonth - 1,
        currentYear: state.currentYear,
      };
    }
    default:
  }

  return state;
};

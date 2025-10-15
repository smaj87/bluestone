import {
  SET_CASHBACKS,
  SET_HIDE_IS_NEW_IN_CASHBACKS,
  SET_IS_NEW_CASHBACKS,
} from './constants';
import { CashbacksAction, CashbacksState } from './types';

export const initialState: CashbacksState = {
  cashbacks: [],
  defaultCashbacks: [],
  isNewCashbacks: false,
  isHideIsNew: false,
};

export default (
  state = initialState,
  action: CashbacksAction,
): CashbacksState => {
  switch (action.type) {
    case SET_CASHBACKS:
      return {
        ...state,
        cashbacks: action.cashbacks,
        defaultCashbacks: action.defaultCashbacks,
        isNewCashbacks: action.isNewCashbacks,
      };

    case SET_IS_NEW_CASHBACKS:
      return {
        ...state,
        isNewCashbacks: action.isNewCashbacks,
      };

    case SET_HIDE_IS_NEW_IN_CASHBACKS:
      return {
        ...state,
        isHideIsNew: true,
      };
    default:
  }

  return state;
};

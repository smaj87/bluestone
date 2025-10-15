import {
  SET_CASHBACKS,
  SET_HIDE_IS_NEW_IN_CASHBACKS,
  SET_IS_NEW_CASHBACKS,
} from './constants';
import { Cashback } from './types';

export const setCashbacks = (
  cashbacks: Cashback[],
  defaultCashbacks: Cashback[],
  isNewCashbacks: boolean,
) => ({
  type: SET_CASHBACKS,
  cashbacks,
  defaultCashbacks,
  isNewCashbacks,
});

export const setIsNewCashbacks = (isNewCashbacks: boolean) => ({
  type: SET_IS_NEW_CASHBACKS,
  isNewCashbacks,
});

export const setHideIsNewInCashbacks = () => ({
  type: SET_HIDE_IS_NEW_IN_CASHBACKS,
});

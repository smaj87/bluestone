import { Email } from 'types';

import { Coupon } from '../Coupons/types';
import {
  KEY,
  SET_CASHBACKS,
  SET_HIDE_IS_NEW_IN_CASHBACKS,
  SET_IS_NEW_CASHBACKS,
} from './constants';

export interface Cashback {
  id: string;
  defaultExpirationDate: string;
  from: Email;
  headline: string;
  image: string;
  price: string;
  schemaType: string;
  source: Coupon['source'];
  url: string;
  isAdServerCoupon: boolean;
  isNew?: boolean;
  idMessage: number;
}

export interface CashbacksState {
  cashbacks: Cashback[];
  defaultCashbacks: Cashback[];
  isNewCashbacks: boolean;
  isHideIsNew: boolean;
}

export interface CashbacksRootState {
  [KEY]: CashbacksState;
}

export type CashbacksAction =
  | {
      type: typeof SET_CASHBACKS;
      cashbacks: Cashback[];
      defaultCashbacks: Cashback[];
      isNewCashbacks: boolean;
    }
  | { type: typeof SET_IS_NEW_CASHBACKS; isNewCashbacks: boolean }
  | { type: typeof SET_HIDE_IS_NEW_IN_CASHBACKS; isNew: boolean };

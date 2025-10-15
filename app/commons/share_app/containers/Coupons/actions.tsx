import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import { setCashbacks } from '../Cashbacks/actions';
import { getCashbacks, getDefaultCashbacks } from '../Cashbacks/selectors';
import { Cashback } from '../Cashbacks/types';
import {
  FETCH_COUPONS,
  FETCH_COUPONS_FAILURE,
  FETCH_COUPONS_SUCCESS,
  SET_FILTER_SELLER_NAME,
  SET_HIDE_IS_NEW_IN_COUPONS,
  SET_IS_NEW_COUPONS,
  SET_IS_SHOW_MORE,
} from './constants';
import { getSeenCouponsIds } from './selectors';
import { Coupon, Seller } from './types';
import { getCouponsCollectionData, sortCoupons } from './utils';

export const setIsShowMore = (isShow: boolean) => ({
  type: SET_IS_SHOW_MORE,
  isShow,
});

const fetchCouponsSuccess = (
  coupons: Coupon[],
  defaultCoupons: Coupon[],
  defaultSellers: Seller[],
  sellers: Seller[],
  isNewCoupons: boolean,
  seenCouponsIds: { adp: string[]; organic: string[] },
) => ({
  type: FETCH_COUPONS_SUCCESS,
  coupons,
  defaultCoupons,
  defaultSellers,
  sellers,
  isNewCoupons,
  seenCouponsIds,
});

const fetchCouponsFailure = () => ({ type: FETCH_COUPONS_FAILURE });

export const fetchCoupons = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_COUPONS });

  try {
    const response = (await request(`${API_URL}/webmail/coupons`)) as {
      adServerCoupons: Coupon[];
      adServerCashbacks: Cashback[];
      organicCoupons: Coupon[];
      organicCashbacks: Cashback[];
      defaultCoupons: Coupon[];
      defaultCashbacks: Cashback[];
      isNewCashbacks: boolean;
      isNewCoupons: boolean;
    };

    const { coupons, defaultCoupons, defaultSellers, seenCouponsIds, sellers } =
      getCouponsCollectionData(
        response.adServerCoupons,
        response.organicCoupons,
        response.defaultCoupons,
      );

    const cashbacks = [
      ...response.organicCashbacks,
      ...response.adServerCashbacks,
    ];

    dispatch(
      setCashbacks(
        sortCoupons(cashbacks) as Cashback[],
        sortCoupons(response.defaultCashbacks) as Cashback[],
        response.isNewCashbacks,
      ),
    );

    dispatch(
      fetchCouponsSuccess(
        sortCoupons(coupons) as Coupon[],
        sortCoupons(defaultCoupons) as Coupon[],
        defaultSellers,
        sellers,
        response.isNewCoupons,
        seenCouponsIds,
      ),
    );
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch(fetchCouponsFailure());
  }
};

export const setFilterSellerName = (
  filterSeller: Seller,
  isDefaultCoupons: boolean,
) => ({
  type: SET_FILTER_SELLER_NAME,
  filterSeller,
  isDefaultCoupons,
});

export const sendSeenIds =
  (type: 'coupons' | 'cashbacks'): AppThunk =>
  async (_, getState) => {
    try {
      let ids: { organic: string[]; adp: string[] } = {
        organic: [],
        adp: [],
      };

      // Kupony organiki nie mają Id więc wrzucamy Mida, a te z adp mają Id
      if (type === 'coupons') {
        const seenCouponsIds = getSeenCouponsIds(getState());

        ids = seenCouponsIds;
      }

      // Cashbacki mają wszystkie Id, wiec wrzucamy do arrayki Idki
      if (type === 'cashbacks') {
        const cashbacks = getCashbacks(getState());
        const defaultCashbacks = getDefaultCashbacks(getState());

        ids = {
          organic: cashbacks
            .filter((c) => !c.isAdServerCoupon)
            .map((cashback) => cashback.idMessage.toString()),
          adp: [
            ...defaultCashbacks,
            ...cashbacks.filter((c) => !!c.isAdServerCoupon),
          ].map((cashback) => cashback.id),
        };
      }

      await request(`${API_URL}/webmail/coupons/seen`, {
        method: 'POST',
        body: { type, ...ids },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const setIsNewCoupons = (isNewCoupons: boolean) => ({
  type: SET_IS_NEW_COUPONS,
  isNewCoupons,
});

export const setHideIsNewInCoupons = () => ({
  type: SET_HIDE_IS_NEW_IN_COUPONS,
});

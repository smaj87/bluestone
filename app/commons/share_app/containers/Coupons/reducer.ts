import {
  FETCH_COUPONS,
  FETCH_COUPONS_FAILURE,
  FETCH_COUPONS_SUCCESS,
  SET_FILTER_SELLER_NAME,
  SET_HIDE_IS_NEW_IN_COUPONS,
  SET_IS_NEW_COUPONS,
  SET_IS_SHOW_MORE,
} from './constants';
import { CouponsAction, CouponsState } from './types';
import { getFilteredCouponsBySeller } from './utils';

export const initialState: CouponsState = {
  coupons: {
    coupons: [],
    sellers: [],
    filterSeller: { name: '', email: '' },
  },
  defaultCoupons: {
    coupons: [],
    sellers: [],
    filterSeller: { name: '', email: '' },
  },
  isFetched: false,
  isFetching: false,
  isFetchingError: false,
  isNewCoupons: false,
  isHideIsNew: false,
  // ten isShowMore jest tylko do Expire Today !
  isShowMore: false,
  seenCouponsIds: { adp: [], organic: [] },
};

export default (state = initialState, action: CouponsAction): CouponsState => {
  switch (action.type) {
    case FETCH_COUPONS:
      return {
        ...state,
        isFetched: false,
        isFetching: true,
        isFetchingError: false,
      };
    case FETCH_COUPONS_SUCCESS: {
      // po fetchu bierzemy i narzucamy pierwszego sprzedawce
      const defaultInitialSeller = action.defaultSellers[0]
        ? {
            name: action.defaultSellers[0].name || '',
            email: action.defaultSellers[0].email || '',
          }
        : { name: '', email: '' };

      return {
        ...state,
        coupons: {
          coupons: action.coupons,
          sellers: action.sellers,
          filterSeller: { name: '', email: '' },
        },
        defaultCoupons: {
          coupons: getFilteredCouponsBySeller(
            action.defaultCoupons,
            defaultInitialSeller,
          ),
          sellers: action.defaultSellers,
          filterSeller: defaultInitialSeller,
        },
        isFetched: true,
        isFetching: false,
        isFetchingError: false,
        isNewCoupons: action.isNewCoupons,
        seenCouponsIds: action.seenCouponsIds,
      };
    }
    case FETCH_COUPONS_FAILURE:
      return {
        ...state,
        isFetched: false,
        isFetching: false,
        isFetchingError: true,
      };

    case SET_FILTER_SELLER_NAME: {
      const couponObject = action.isDefaultCoupons
        ? 'defaultCoupons'
        : 'coupons';

      return {
        ...state,
        [couponObject]: {
          ...state[couponObject],
          coupons: getFilteredCouponsBySeller(
            state[couponObject].coupons,
            action.filterSeller,
          ),
          filterSeller: action.filterSeller,
        },
      };
    }

    case SET_IS_SHOW_MORE:
      return {
        ...state,
        isShowMore: action.isShow,
      };

    case SET_IS_NEW_COUPONS:
      return {
        ...state,
        isNewCoupons: action.isNewCoupons,
      };

    case SET_HIDE_IS_NEW_IN_COUPONS:
      return {
        ...state,
        isHideIsNew: true,
      };
    default:
  }

  return state;
};

import { RootState } from 'initRedux';

import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement,
  isFetched as isAgreementsFetched,
} from 'commons/hooks/useAgreements/selectors';
import {
  getFrontCommonsByField,
  isMobile as isMobileSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { FrontCommonsInterfaceUI } from 'commons/hooks/useUserConfig/types';
import { createSelector } from 'commons/utils/reselect';

import { getCurrentPage } from 'containers/App/selectors';

import { KEY, PAGE_NAME as COUPONS_PAGE_NAME } from './constants';
import { initialState } from './reducer';
import { CouponsRootState, Seller } from './types';
import { isLessThanDayDifference } from './utils';

export const getState = createSelector(
  [(state: CouponsRootState) => state?.[KEY] || initialState],
  (state) => state,
);

export const getCouponsObject = createSelector(
  [getState],
  (state) => state.coupons,
);

export const getDefaultCouponsObject = createSelector(
  [getState],
  (state) => state.defaultCoupons,
);

export const getCoupons = createSelector(
  [getCouponsObject],
  (couponsObject) => couponsObject.coupons,
);

export const getDefaultCoupons = createSelector(
  [getDefaultCouponsObject],
  (defaultCouponsObject) => defaultCouponsObject.coupons,
);

const getisCouponsLength = createSelector(
  [getCoupons],
  (coupons) => coupons.length,
);

const getisDefaultCoupons = createSelector(
  [getDefaultCoupons],
  (defaultCoupons) => defaultCoupons.length,
);

export const getFilterSeller = createSelector(
  [getCouponsObject],
  (couponsObject) => couponsObject.filterSeller,
);

export const getFilterDefaultSeller = createSelector(
  [getDefaultCouponsObject],
  (defaultCouponsObject) => defaultCouponsObject.filterSeller,
);

export const isFetched = createSelector(getState, (state) => state.isFetched);

export const isFetching = createSelector(getState, (state) => state.isFetching);

export const isFetchingError = createSelector(
  getState,
  (state) => state.isFetchingError,
);

export const getSellers = createSelector(
  getCouponsObject,
  (couponsObject) => couponsObject.sellers,
);

export const getDefaultSellers = createSelector(
  getDefaultCouponsObject,
  (defaultCouponsObject) => defaultCouponsObject.sellers,
);

export const isShowMore = createSelector(getState, (state) => state.isShowMore);

// Expire Today Kupony nie zawierają defaultowych kuponów
export const getExpireTodayCoupons = createSelector(
  [getCoupons, isShowMore, isMobileSelector],
  (allCoupons) => {
    const dateNow = new Date();

    return allCoupons.filter((p) =>
      isLessThanDayDifference(
        new Date(p.availabilityEnds || p.defaultExpirationDate),
        dateNow,
      ),
    );
  },
);

export const getNewCoupons = createSelector(getCoupons, (allCoupons) =>
  allCoupons.filter((coupon) => coupon.isNew),
);

export const getExpireTodayAndNewCouponsWithShowMore = createSelector(
  [getExpireTodayCoupons, getNewCoupons, isShowMore, isMobileSelector],
  (expireTodayCoupons, newCoupons, showMore, isMobile) => {
    const allCoupons = [...expireTodayCoupons, ...newCoupons];

    const coupons = showMore ? allCoupons : allCoupons.slice(0, 3);

    return isMobile ? expireTodayCoupons : coupons;
  },
);

export const getExpireTodayAndNewisCouponsLength = createSelector(
  [getExpireTodayCoupons, getNewCoupons],
  (expireTodayCoupons, newCoupons) =>
    [...expireTodayCoupons, ...newCoupons].length,
);

export const isShowMoreButtonVisible = createSelector(
  [isShowMore, getExpireTodayAndNewisCouponsLength],
  (showMore, expireTodayLength) => !showMore && expireTodayLength > 3,
);

export const isShowLessButtonVisible = createSelector(
  [isShowMore, getExpireTodayAndNewisCouponsLength],
  (showMore, expireTodayLength) => showMore && expireTodayLength > 3,
);

export const isShowEmptyCouponsPage = createSelector(
  [isFetched, getisCouponsLength, getisDefaultCoupons],
  (isFetchedCoupons, isCouponsLength, isDefaultCoupons) =>
    isFetchedCoupons && isCouponsLength < 1 && isDefaultCoupons < 1,
);

export const isShowCouponPage = createSelector(
  [
    (state) => isAgreement(state, { agreementId: SMART_FUNCTIONS_ID }),
    isFetched,
    getisCouponsLength,
    getisDefaultCoupons,
  ],
  (isA, isFetchedCoupons, isCouponsLength, isDefaultCoupons) =>
    isA && isFetchedCoupons && (isCouponsLength > 0 || isDefaultCoupons > 0),
);

export const isActiveSellerButtonBySellerName = createSelector(
  [
    getFilterSeller,
    getFilterDefaultSeller,
    (_: RootState, params: { seller: Seller; isDefaultCoupons: boolean }) =>
      params,
  ],
  (filterCouponSeller, filterDefaultCouponSeller, params) => {
    const { isDefaultCoupons, seller } = params;
    const filterSeller = isDefaultCoupons
      ? filterDefaultCouponSeller
      : filterCouponSeller;

    if (
      filterSeller.name &&
      filterSeller.email &&
      seller.name &&
      seller.email
    ) {
      return (
        filterSeller.name === seller.name && filterSeller.email === seller.email
      );
    }

    return (
      (filterSeller.name && filterSeller.name === seller.name) ||
      (filterSeller.email && filterSeller.email === seller.email) ||
      (!filterSeller.name &&
        !filterSeller.email &&
        !seller.name &&
        !seller.email)
    );
  },
);

export const isShowCouponNotEnabledPage = createSelector(
  [
    (state) => isAgreement(state, { agreementId: SMART_FUNCTIONS_ID }),
    isAgreementsFetched,
  ],
  (isA, isF) => !isA && isF,
);

export const isCouponsBannerOpen = createSelector(
  [
    (state) => getFrontCommonsByField(state, { field: 'interfaceUI' }),
    getCurrentPage,
  ],
  (interfaceUI, currentPage) =>
    !!((interfaceUI as FrontCommonsInterfaceUI)?.couponsBannerOpen ?? 1) &&
    currentPage === COUPONS_PAGE_NAME,
);

export const isNewCoupons = createSelector(
  getState,
  (state) => state.isNewCoupons,
);

export const getSeenCouponsIds = createSelector(
  getState,
  (state) => state.seenCouponsIds,
);

export const isHideIsNew = createSelector(
  getState,
  (state) => state.isHideIsNew,
);

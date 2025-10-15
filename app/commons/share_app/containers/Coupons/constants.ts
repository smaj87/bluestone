export const KEY = 'coupons';

export const PAGE_NAME = 'COUPONS_PAGE';

export const COUPONS_LIST_CONTAINER_ID = 'js_CouponsListContainer';

export const FETCH_COUPONS = `${KEY}/FETCH_COUPONS` as const;
export const FETCH_COUPONS_SUCCESS = `${KEY}/FETCH_COUPONS_SUCCESS` as const;
export const FETCH_COUPONS_FAILURE = `${KEY}/FETCH_COUPONS_FAILURE` as const;

export const SET_FILTER_SELLER_NAME = `${KEY}/SET_FILTER_SELLER_NAME` as const;

export const SET_IS_SHOW_MORE = `${KEY}/SET_IS_SHOW_MORE` as const;

export const SET_IS_NEW_COUPONS = `${KEY}/SET_IS_NEW_COUPONS` as const;

export const SET_HIDE_IS_NEW_IN_COUPONS =
  `${KEY}/SET_HIDE_IS_NEW_IN_COUPONS` as const;

export const COUPON_SCHEMA_TYPES = [
  'Coupon',
  'DiscountOffer',
  'http://schema.org/DiscountOffer',
];

export const PROMOCARD_SCHEMA_TYPES = [
  'PromotionCard',
  'http://schema.org/PromotionCard',
];

export const COUPONS_TAB_PARAMS = '?place=tab';

export const COUPONS_URL = 'Kupony';

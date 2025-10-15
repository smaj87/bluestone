import { Email } from 'types';

import {
  FETCH_COUPONS,
  FETCH_COUPONS_FAILURE,
  FETCH_COUPONS_SUCCESS,
  KEY,
  SET_FILTER_SELLER_NAME,
  SET_HIDE_IS_NEW_IN_COUPONS,
  SET_IS_NEW_COUPONS,
  SET_IS_SHOW_MORE,
} from './constants';

// Coupon Google i Coupon Yahoo
export interface Coupon {
  id: string;
  idUser: number;
  idMessage: number;
  schemaType: string;
  defaultExpirationDate: string;
  from: Email;
  sent: string;
  description?: string;
  headline?: string;
  title?: string;
  subjectLine?: string;
  discountCode?: string;
  code?: string;
  availabilityStarts?: string;
  availabilityEnds?: string;
  url?: string;
  image?: string;
  // Kupony maja wysylane sellerName (Tylko w przypadku yahoo) ale nie zawsze wiec nie patrzymy w ogole na sellername tylko na FROM
  sellerName?: string;
  isAdServerCoupon?: boolean;
  isDefaultCoupon?: boolean;
  isPromoCard?: boolean;
  isCoupon?: boolean;
  isCashback?: boolean;
  isBimi?: boolean;
  isHidden?: boolean;
  copyTracker?: string;
  openTracker?: string;
  source: 'organic' | 'mailing' | 'centraals' | 'goodie';
  price?: string;
  priceCurrency?: string;
  discountValue?: string;
  omnibusPrice?: string;
  isNew?: boolean;
  isDefault?: boolean;
  validThrough: string;
  type: string;
  cId: number;
}

// PromoCard to jest PromotionCard Google i nie ma description tylko ma headline
export interface PromoCard extends Omit<Coupon, 'description'> {
  // PotentialAction występuje w eSky.pl
  potentialAction?: {
    url: string;
    '@context': string;
  };
  price?: string;
  priceCurrency?: string;
  discountValue?: string;
  url: string;
  image: string;
  position?: string;
  isPromoCard: boolean;
  omnibusPrice?: string;
  isDefault?: boolean;
}

export interface CouponsRootState {
  [KEY]: CouponsState;
}

export type CouponsAction =
  | { type: typeof FETCH_COUPONS }
  | {
      type: typeof FETCH_COUPONS_SUCCESS;
      coupons: Coupon[];
      sellers: Seller[];
      defaultCoupons: Coupon[];
      defaultSellers: Seller[];
      isNewCoupons: boolean;
      seenCouponsIds: { adp: string[]; organic: string[] };
    }
  | { type: typeof FETCH_COUPONS_FAILURE }
  | {
      type: typeof SET_FILTER_SELLER_NAME;
      filterSeller: Seller;
      isDefaultCoupons: boolean;
    }
  | { type: typeof SET_IS_SHOW_MORE; isShow: boolean }
  | { type: typeof SET_IS_NEW_COUPONS; isNewCoupons: boolean }
  | { type: typeof SET_HIDE_IS_NEW_IN_COUPONS; isNew: boolean };

export type Seller = {
  name: string;
  email: string;
  isBimi?: boolean;
  image?: string;
};
export interface CouponsState {
  coupons: {
    coupons: Coupon[];
    sellers: Seller[];
    filterSeller: Seller;
  };
  defaultCoupons: {
    coupons: Coupon[];
    sellers: Seller[];
    filterSeller: Seller;
  };
  isFetched: boolean;
  isFetching: boolean;
  isFetchingError: boolean;
  isNewCoupons: boolean;
  isHideIsNew: boolean;
  isShowMore: boolean;
  seenCouponsIds: { adp: string[]; organic: string[] };
}

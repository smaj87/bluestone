import { NormalizedProduct, SlotFlatNatmailingRootState } from '../../types';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  KEY,
} from './constants';

export interface StylesInterface {
  $bgColor?: string;
  $txtColor?: string;
}

export interface Banner {
  url: string;
  image: string;
}

export interface GenericInboxRootState extends SlotFlatNatmailingRootState {
  [KEY]: GenericInboxState;
}

export interface ElementSettings {
  productBoxBackgroundColor: string;
  discountBackgroundColor: string;
  discountPriceColor: string;
  titleColor: string;
  priceBackgroundColor: string;
  priceColor: string;
  oldPriceBackgroundColor: string;
  oldPriceColor: string;
  omnibusPriceBackgroundColor: string;
  omnibusPriceColor: string;
  textColor: string;
  creationBackgroundColor: string;
  backgroundColor: string;
  text: string;
}

export interface NormalizedProducts {
  elementSettings: ElementSettings | undefined;
  banners: Banner[];
}

export interface GenericInboxState extends NormalizedProducts {
  isFetched: boolean;
  isFetching: boolean;
  elements: NormalizedProduct[];
}

export type GenericInboxAction =
  | {
      type: typeof FETCH_PRODUCTS;
    }
  | {
      type: typeof FETCH_PRODUCTS_SUCCESS;
      elementSettings: ElementSettings;
      banners: Banner[];
      elements: NormalizedProduct[];
    }
  | {
      type: typeof FETCH_PRODUCTS_FAILURE;
    };

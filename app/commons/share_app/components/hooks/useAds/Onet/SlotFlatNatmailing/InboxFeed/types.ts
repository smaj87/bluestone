import { NormalizedProduct, SlotFlatNatmailingRootState } from '../types';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  KEY,
} from './constants';

export interface InboxFeedRootState extends SlotFlatNatmailingRootState {
  [KEY]: InboxFeedState;
}

export interface InboxFeedState {
  isFetched: boolean;
  isFetching: boolean;
  product: NormalizedProduct | Record<string, never>;
}

export type InboxFeedAction =
  | {
      type: typeof FETCH_PRODUCTS;
    }
  | {
      type: typeof FETCH_PRODUCTS_SUCCESS;
      product: InboxFeedState['product'];
    }
  | {
      type: typeof FETCH_PRODUCTS_FAILURE;
    };

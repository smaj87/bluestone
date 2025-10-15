import { Product } from 'db/types';

import { FETCH_PRODUCTS, SET_GROUP_VISIBILITY } from './constants';

export interface FetchProductsPayload {
  isFetching: boolean;
  isFetched: boolean;
  isFetchedError: boolean;
  products?: { [name: string]: Product };
  groups?: Group[];
}

export interface VirtualizationResult {
  products: FetchProductsPayload['products'];
  groups: FetchProductsPayload['groups'];
}

export interface Group {
  id: number;
  items: string[];
  height: number;
}

export interface ProductsState {
  isFetching: boolean;
  isFetched: boolean;
  isFetchedError: boolean;
  products: { [name: string]: Product };

  // virtual list fields
  groups: Group[];
  checks: { [name: string]: boolean };
  groupVisibility: { [id: number]: boolean };
}

export type ProductsAction =
  | {
      type: typeof FETCH_PRODUCTS;
      payload: FetchProductsPayload;
    }
  | {
      type: typeof SET_GROUP_VISIBILITY;
      groupVisibility: ProductsState['groupVisibility'];
    };

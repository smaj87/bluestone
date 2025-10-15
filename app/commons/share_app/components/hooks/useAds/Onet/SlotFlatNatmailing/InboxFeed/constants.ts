import { KEY as PARENT_KEY } from '../constants';

export const KEY = `${PARENT_KEY}/InboxFeed/Template`;

export const FETCH_PRODUCTS = `${KEY}/FETCH_PRODUCTS` as const;
export const FETCH_PRODUCTS_SUCCESS = `${FETCH_PRODUCTS}_SUCCESS` as const;
export const FETCH_PRODUCTS_FAILURE = `${FETCH_PRODUCTS}_FAILURE` as const;

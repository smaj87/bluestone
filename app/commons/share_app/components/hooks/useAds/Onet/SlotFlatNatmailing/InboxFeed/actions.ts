import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { AppThunk } from 'commons/utils/react-redux';

import { getProducts } from '../actions';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';

export const fetchProducts = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS });

  try {
    const products = await dispatch(getProducts());

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      product: products[0] || {},
    });
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
    });
  }
};

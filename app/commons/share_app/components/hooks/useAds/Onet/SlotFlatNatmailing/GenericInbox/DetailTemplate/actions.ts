import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { AppThunk } from 'commons/utils/react-redux';

import { getProducts } from '../../actions';
import { NormalizedProduct } from '../../types';
import { getTemplateAdWithCache } from '../selectors';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';
import { GenericInboxRootState, NormalizedProducts } from './types';
import { getNormalizedData } from './utils';

export const fetchProducts = (): AppThunk => async (dispatch, getState) => {
  dispatch({ type: FETCH_PRODUCTS });

  try {
    const templateAd = getTemplateAdWithCache(
      getState() as GenericInboxRootState,
    );

    const products = await dispatch(getProducts());
    const normalized = getNormalizedData(templateAd);

    dispatch(
      fetchProductsSuccess(
        normalized.elementSettings,
        normalized.banners,
        products,
      ),
    );
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch(fetchProductsFailure());
  }
};

export const fetchProductsSuccess = (
  elementSettings: NormalizedProducts['elementSettings'],
  banners: NormalizedProducts['banners'],
  elements: NormalizedProduct[],
) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  elementSettings,
  banners,
  elements,
});

export const fetchProductsFailure = () => ({
  type: FETCH_PRODUCTS_FAILURE,
});

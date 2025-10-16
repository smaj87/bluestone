import {
  addProduct as db_addProduct,
  deleteProduct as db_deleteProduct,
  getAllProducts,
  updateProduct as db_updateProduct,
} from 'db/services';
import { Product } from 'db/types';

import { getProducts } from 'containers/Products/selectors';
import { AppThunk } from 'utils/react-redux';

import {
  FETCH_PRODUCTS,
  GROUP_COUNT,
  ITEM_HEIGHT,
  SET_GROUP_VISIBILITY,
} from './constants';
import { ProductsState } from './types';
import { getProductsForVirtualization } from './utils';

export const fetchProducts = (): AppThunk => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: {
      isFetching: true,
      isFetched: false,
      isFetchedError: false,
    },
  });

  try {
    const products = await getAllProducts();

    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        isFetching: false,
        isFetched: true,
        isFetchedError: false,
        ...getProductsForVirtualization(products, GROUP_COUNT, ITEM_HEIGHT),
      },
    });
  } catch {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        isFetching: false,
        isFetched: false,
        isFetchedError: true,
      },
    });
  }
};

export const setGroupVisibility = (
  groupVisibility: ProductsState['groupVisibility'],
) => ({
  type: SET_GROUP_VISIBILITY,
  groupVisibility,
});

export const deleteProduct =
  (name: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const stateProducts = getProducts(getState());
      delete stateProducts[name];

      // happy flow - optymistyczna aktualizacja stanu
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          ...getProductsForVirtualization(
            Object.values(stateProducts),
            GROUP_COUNT,
            ITEM_HEIGHT,
          ),
        },
      });

      // nie czekamy, od razu kończymy akcje
      db_deleteProduct(name);
    } catch {
      // happy flow
    }
  };

export const updateProduct =
  (name: string, updates: Partial<Product>): AppThunk =>
  async (dispatch, getState) => {
    try {
      const products = getProducts(getState());
      const product = products[name];
      // happy flow
      const updatedProduct = { ...product, ...updates };

      // happy flow - optymistyczna aktualizacja stanu
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          products: { ...products, [name]: updatedProduct },
        },
      });

      // nie czekamy, od razu kończymy akcje
      db_updateProduct(updatedProduct);
    } catch {
      // happy flow
    }
  };

export const addProduct =
  (product: Product): AppThunk =>
  async (dispatch, getState) => {
    try {
      const products = getProducts(getState());

      // happy flow - optymistyczna aktualizacja stanu
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          ...getProductsForVirtualization(
            [...Object.values(products), product],
            GROUP_COUNT,
            ITEM_HEIGHT,
          ),
        },
      });

      // nie czekamy, od razu kończymy akcje
      db_addProduct(product);
    } catch {
      // happy flow
    }
  };

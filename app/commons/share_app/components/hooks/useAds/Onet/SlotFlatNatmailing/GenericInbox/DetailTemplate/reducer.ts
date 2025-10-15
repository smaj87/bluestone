import { getState, removeState, setState } from 'commons/utils/webStorage';

import { STORAGE_PRODUCTS_KEY } from '../../constants';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';
import { GenericInboxAction, GenericInboxState } from './types';

const storageState = getState(STORAGE_PRODUCTS_KEY);

export const initialState: GenericInboxState = {
  elementSettings: storageState?.elementSettings,
  banners: storageState?.banners || [],
  elements: storageState?.elements || [],
  isFetching: false,
  isFetched: false,
};

const reducer = (
  state = initialState,
  action: GenericInboxAction,
): GenericInboxState => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetched: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      setState(STORAGE_PRODUCTS_KEY, {
        elementSettings: action.elementSettings,
        banners: action.banners,
        elements: action.elements,
      });

      return {
        ...state,
        isFetching: false,
        isFetched: true,
        elementSettings: action.elementSettings,
        banners: action.banners,
        elements: action.elements,
      };
    case FETCH_PRODUCTS_FAILURE:
      removeState(STORAGE_PRODUCTS_KEY);

      return {
        ...state,
        isFetching: false,
        isFetched: true,
        elementSettings: undefined,
        banners: [],
        elements: [],
      };
    default:
  }

  return state;
};

export default reducer;

import { FETCH_PRODUCTS, SET_GROUP_VISIBILITY } from './constants';
import { ProductsAction, ProductsState } from './types';

export const initialState: ProductsState = {
  isFetching: false,
  isFetched: false,
  isFetchedError: false,
  products: {},

  groups: [],
  checks: {},
  groupVisibility: {},
};

export default (state = initialState, action: ProductsAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };

    case SET_GROUP_VISIBILITY:
      return {
        ...state,
        groupVisibility: {
          ...state.groupVisibility,
          ...action.groupVisibility,
        },
      };

    default:
  }

  return state;
};

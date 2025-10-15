import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';
import { InboxFeedAction, InboxFeedState } from './types';

export const initialState: InboxFeedState = {
  product: {},
  isFetching: false,
  isFetched: false,
};

const reducer = (
  state = initialState,
  action: InboxFeedAction,
): InboxFeedState => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetched: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        product: action.product,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        product: {},
      };
    default:
  }

  return state;
};

export default reducer;

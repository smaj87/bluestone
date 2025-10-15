import { urlParamsCache } from 'commons/share_app/components/RouterHelpers/utils';

import {
  PRODUCT_URL_PROPS,
  PRODUCTS_URL_PROPS,
  SET_URL_PROPS,
} from './constants';

export const initialState = {
  [PRODUCT_URL_PROPS]: urlParamsCache[PRODUCT_URL_PROPS],
  [PRODUCTS_URL_PROPS]: urlParamsCache[PRODUCTS_URL_PROPS],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_URL_PROPS:
      return {
        ...state,
        [action.view]: action.props,
      };

    default:
  }

  return state;
};

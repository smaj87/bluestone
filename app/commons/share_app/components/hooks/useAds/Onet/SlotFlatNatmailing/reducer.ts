import { setState } from 'commons/utils/webStorage';

import {
  CLEAR_TEMPLATE_AD,
  SET_TEMPLATE_AD,
  STORAGE_AD_KEY,
} from './constants';
import { SlotFlatNatMailingAction, SlotFlatNatMailingState } from './types';

export const initialState: SlotFlatNatMailingState = {
  templateAd: undefined,
  tplCode: '',
  isRead: false,
  products: [],
  isFetchedProducts: false,
  isFetchingProducts: false,
  dataType: '',
};

export default (
  state = initialState,
  action: SlotFlatNatMailingAction,
): SlotFlatNatMailingState => {
  switch (action.type) {
    case SET_TEMPLATE_AD:
      setState(STORAGE_AD_KEY, {
        tplCode: action.tplCode,
        meta: action.templateAd.meta,
        fields: action.templateAd.fields,
      });

      return {
        ...state,
        templateAd: action.templateAd,
        tplCode: action.tplCode,
        isRead: false,
        products: [],
        dataType: action.templateAd?.fields?.titleMode?.value || '',
        isFetchedProducts: false,
        isFetchingProducts: false,
      };
    case CLEAR_TEMPLATE_AD:
      return {
        ...state,
        templateAd: undefined,
        tplCode: '',
        isRead: false,
        products: [],
        dataType: '',
        isFetchedProducts: true,
        isFetchingProducts: false,
      };
    default:
  }

  return state;
};

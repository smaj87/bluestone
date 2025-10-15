import { AppThunk } from 'commons/utils/react-redux';

import { CLEAR_TEMPLATE_AD, SET_TEMPLATE_AD } from './constants';
import { getDataFunction, getTemplateAd } from './selectors';
import {
  GetDataProduct,
  NormalizedProduct,
  SlotFlatNatmailingRootState,
  TemplateAd,
} from './types';
import { getNormalizedProducts } from './utils';

export const setTemplateAd =
  (tplCode: string, templateAd: TemplateAd): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: SET_TEMPLATE_AD,
      tplCode,
      templateAd,
    });
  };

export const clearTemplateAd = () => ({
  type: CLEAR_TEMPLATE_AD,
});

export const getProducts =
  (): AppThunk<Promise<NormalizedProduct[]>> => async (_, getState) => {
    let products: NormalizedProduct[] = [];

    try {
      const getData = getDataFunction(
        getState() as SlotFlatNatmailingRootState,
      );

      if (getData) {
        const tmpProducts: GetDataProduct[] = await new Promise((resolve) => {
          getData((__: null, data: { offers: GetDataProduct[] }) =>
            resolve(data.offers),
          );
        });

        const templateAd = getTemplateAd(
          getState() as SlotFlatNatmailingRootState,
        );

        if (templateAd) {
          products = getNormalizedProducts(templateAd, tmpProducts);
        }
      }
    } catch {}

    return products;
  };

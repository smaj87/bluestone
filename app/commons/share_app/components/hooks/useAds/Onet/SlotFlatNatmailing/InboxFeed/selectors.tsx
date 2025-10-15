import { createSelector } from 'commons/utils/reselect';

import { getCurrency, getDataType, getValueByField } from '../selectors';
import { NormalizedProduct, TitleMode } from '../types';
import { KEY } from './constants';
import { initialState } from './reducer';
import { InboxFeedRootState } from './types';

export const getState = createSelector(
  (state: InboxFeedRootState) => state?.[KEY] || initialState,
  (state) => state,
);

export const isFetching = createSelector(
  [getState],
  (state) => state.isFetching,
);

export const isFetched = createSelector([getState], (state) => state.isFetched);

export const getProduct = createSelector([getState], (state) => state.product);

export const getProductValueByField = createSelector(
  [getProduct, (_, field: keyof NormalizedProduct) => field],
  (product, field) => product?.[field] || '',
);

export const getFieldsValueByField = createSelector(
  [
    (state) => getValueByField(state, 'titleMode'),
    (_, field: keyof TitleMode['fields']) => field,
  ],
  (titleMode, field) => (titleMode as TitleMode)?.fields?.[field] || '',
);

export const deprecated_getTitleModeField = createSelector(
  [
    getFieldsValueByField,
    getProduct,
    (_, field: keyof TitleMode['fields']) => field,
    getDataType,
    getCurrency,
    (state) => getFieldsValueByField(state, 'showPrice'),
  ],
  (value, product, field, dataType, currency, showPrice) => {
    let result: JSX.Element | string | undefined =
      dataType === 'userDefined' ? (value as string) : '';

    if (dataType === 'offerData') {
      if (field === 'subtitle') {
        result = showPrice ? `${product.price} ${currency}` : '';
      } else {
        // @ts-ignore todo SPiascik
        result = product?.[field] || '';
      }
    } else if (!dataType) {
      result = undefined;
    }

    return result;
  },
);

export const getValueFromTemplate = createSelector(
  [getProduct, getValueByField, deprecated_getTitleModeField],
  (product, template = '', deprecated_value) =>
    deprecated_value !== undefined
      ? deprecated_value
      : (template as string).replace(/\[([a-z0-9_]+)\]/gi, (_, key) =>
          product && product[key as keyof NormalizedProduct] !== undefined
            ? `${product[key as keyof NormalizedProduct]}`
            : `[${key}]`,
        ),
);

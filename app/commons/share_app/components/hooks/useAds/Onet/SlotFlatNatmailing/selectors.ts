import { EMPTY_FUNC } from 'commons/utils/constants';
import { createSelector } from 'commons/utils/reselect';
import { isFunction } from 'commons/utils/tinyLodash';

import { isShowAds as isShowAdsSelector } from '../selectors';
import { KEY } from './constants';
import { initialState } from './reducer';
import { SlotFlatNatmailingRootState } from './types';

export const getState = createSelector(
  (state: SlotFlatNatmailingRootState) => state?.[KEY] || initialState,
  (state) => state,
);

export const getTemplateAd = createSelector(
  [getState],
  (state) => state.templateAd,
);

export const getTemplateFields = createSelector(
  getTemplateAd,
  (ad) => ad?.fields,
);

export const getWatchVisibility = createSelector(
  [getTemplateAd],
  (templateAd) => templateAd?.watchVisibility.bind(templateAd) || EMPTY_FUNC,
);

export const getTemplateCode = createSelector(
  [getState],
  (state) => state.tplCode,
);

export const isShowAd = createSelector(
  [isShowAdsSelector],
  (isShowAds) => isShowAds,
);

export const getCurrency = createSelector(
  [getTemplateFields],
  (fields) => fields?.dynamicfeed?.currencyDisplay?.value || 'zł',
);

export const getDataFunction = createSelector(
  [getTemplateFields],
  (fields) => fields?.dynamicfeed?.getData,
);

export const isGetData = createSelector([getDataFunction], (func) =>
  isFunction(func),
);

export const getDataType = createSelector(
  [getState],
  (state) => state.dataType,
);

export const getAdInfo = createSelector(
  [getTemplateFields],
  (fields) => fields?.adinfo || '',
);

export const getValueByField = createSelector(
  [getTemplateFields, (_, field) => field],
  (fields, field) => fields?.[field] || '',
);

export const getUrl = createSelector(getTemplateAd, (ad) => {
  let result = '';

  if (ad?.fields?.clickUrl && ad?.meta?.adclick) {
    result = `${ad?.meta?.adclick}${ad?.fields?.clickUrl}`;
  }

  return result;
});

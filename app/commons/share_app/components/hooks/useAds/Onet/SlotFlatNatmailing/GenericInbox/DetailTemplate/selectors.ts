import { createSelector } from 'commons/utils/reselect';

import { getTemplateAdWithCache } from '../selectors';
import { KEY } from './constants';
import { initialState } from './reducer';
import { GenericInboxRootState } from './types';
import { getParsedContent } from './utils';

export const getState = createSelector(
  (state: GenericInboxRootState) => state?.[KEY] || initialState,
  (state) => state,
);

export const isFetching = createSelector(
  [getState],
  (state) => state.isFetching,
);

export const isFetched = createSelector([getState], (state) => state.isFetched);

export const getElementSettings = createSelector(
  [getState],
  (state) => state.elementSettings,
);

export const getBanners = createSelector([getState], (state) => state.banners);

export const getElements = createSelector(
  [getState],
  (state) => state.elements,
);

export const getZeroGifUrl = createSelector(
  [getTemplateAdWithCache],
  (ad) => ad?.meta?.opencount || '',
);

export const getFieldsByType = createSelector(
  [getTemplateAdWithCache, (_, { type }) => type],
  (ad, type) => ad?.fields?.[type]?.[0]?.fields,
);

export const getHeaderData = createSelector(
  [(state) => getFieldsByType(state, { type: 'header' })],
  (fields) => ({
    styles: {
      backgroundColor: fields?.backgroundColor,
      color: fields?.color,
    },
    img: fields?.img || '',
    content: getParsedContent(
      fields?.text || '',
      `body{color:${fields?.color}}`,
    ),
  }),
);

export const getFooterData = createSelector(
  [(state) => getFieldsByType(state, { type: 'footer' })],
  (fields) => ({
    styles: {
      backgroundColor: fields?.backgroundColor,
      color: fields?.color,
    },
    img: fields?.img || '',
    content: getParsedContent(
      fields?.text || '',
      `body{color:${fields?.color}}`,
    ),
  }),
);

export const getAdditionalData = createSelector(
  [getTemplateAdWithCache],
  (ad) => ({
    styles: {},
    img: '',
    content: getParsedContent(ad?.fields?.additionalHTML || ''),
  }),
);

import runes from 'runes';

import { createSelector } from 'commons/utils/reselect';
import { getState } from 'commons/utils/webStorage';

import { STORAGE_AD_KEY } from '../constants';
import { getTemplateAd } from '../selectors';
import { SneakPeakFieldKeys } from '../types';

export const getTemplateAdWithCache = createSelector(
  [getTemplateAd],
  (ad) => ad || getState(STORAGE_AD_KEY) || undefined,
);

export const getValueByField = createSelector(
  [getTemplateAdWithCache, (_, field) => field],
  (ad, field: SneakPeakFieldKeys) =>
    ad?.fields?.sneakPeak?.[0]?.fields?.[field] || '',
);

export const getAvatarInitials = createSelector(
  [(state) => getValueByField(state, 'sender') as string],
  (name) => runes.substr(name.trim(), 0, 1),
);

/*
export const getAuthor = createSelector(
  [getAdBasicData],
  (data) => data?.sender || '',
);

export const getTitle = createSelector(
  [getAdBasicData],
  (data) => data?.title || '',
);

export const getSubtitle = createSelector(
  [getAdBasicData],
  (data) => data?.excerpt || '',
);

export const getCounterEndDate = createSelector(
  [getAdBasicData],
  (data) => data?.counterEndDate || '',
);

export const getCounterText = createSelector(
  [getAdBasicData],
  (data) => data?.counterText || '',
);

export const getBimiUrl = createSelector(
  [getAdBasicData],
  (data) => data?.bimi || '',
);

export const getIcon = createSelector(
  [getAdBasicData],
  (data) => data?.icon || '',
);
*/

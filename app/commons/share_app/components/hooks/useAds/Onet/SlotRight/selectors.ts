import { createSelector } from 'commons/utils/reselect';

import { getPage } from '../../selectors';
import { isShowDesktopAds as isShowDesktopAdsSelector } from '../selectors';
import { HIDDEN_SLOT_PAGES } from './constants';

export const isShowAd = createSelector(
  [isShowDesktopAdsSelector, getPage],
  (isShowDesktopAds, page) =>
    isShowDesktopAds && !HIDDEN_SLOT_PAGES.includes(page),
);

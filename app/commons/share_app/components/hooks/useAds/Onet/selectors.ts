import {
  getCreatedDate,
  isDisplayAds as isDisplayAdsSelector,
  isMobile as isMobileSelector,
  isPremium as isPremiumSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { stringToDate } from 'commons/utils/date';
import { createSelector } from 'commons/utils/reselect';

import { isPrinting as isPrintingSelector } from 'containers/App/selectors';

const newAccountTimestamp = new Date(2024, 7, 10).getTime();

export const isShowAds = createSelector(
  [isPremiumSelector, isPrintingSelector, getCreatedDate, isDisplayAdsSelector],
  (isPremium, isPrinting, createdDate, isDisplayAds) => {
    const isNewAccount = createdDate
      ? // @ts-ignore @spiascik
        stringToDate(createdDate).getTime() > newAccountTimestamp
      : false;

    return !isPrinting && (!isPremium || (isDisplayAds && isNewAccount));
  },
);

export const isShowDesktopAds = createSelector(
  [isShowAds, isMobileSelector],
  (isShowAdsValue, isMobile) => isShowAdsValue && !isMobile,
);

export const isShowMobileAds = createSelector(
  [isShowAds, isMobileSelector],
  (isShowAdsValue, isMobile) => isShowAdsValue && isMobile,
);

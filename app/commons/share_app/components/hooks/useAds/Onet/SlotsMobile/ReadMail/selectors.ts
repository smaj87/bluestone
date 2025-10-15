import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { createSelector } from 'commons/utils/reselect';

import { isShowMobileAds as isShowMobileAdsSelector } from '../../selectors';

export const isShowAd = createSelector(
  [
    isShowMobileAdsSelector,
    (state) => getMailField(state, 'mid'),
    (state) => getMailField(state, 'isMailing'),
  ],
  (isShowMobileAds, mid, isMailing) => isShowMobileAds && !!mid && !isMailing,
);

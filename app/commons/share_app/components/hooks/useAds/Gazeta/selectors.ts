import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { PAGE_NAME as MAIL_LIST_PAGE_NAME } from 'commons/share_app/containers/Mails/constants';
import { PAGE_NAME as READ_MAIL_PAGE_NAME } from 'commons/share_app/containers/ReadMail/constants';
import { createSelector } from 'commons/utils/reselect';

import { isPrinting as isPrintingSelector } from 'containers/App/selectors';

import { getPage } from '../selectors';

export const isValidPage = createSelector(
  [isMobileSelector, getPage],
  (isMobile, page) =>
    !isMobile ||
    (isMobile &&
      (page === MAIL_LIST_PAGE_NAME || page === READ_MAIL_PAGE_NAME)),
);

export const isShowAds = createSelector(
  [isPrintingSelector, isValidPage],
  (isPrinting, isValidP) => !isPrinting && isValidP,
);

export const isShowDesktopAds = createSelector(
  [isShowAds, isMobileSelector],
  (isShowAdsValue, isMobile) => isShowAdsValue && !isMobile,
);

export const isShowMobileAds = createSelector(
  [isShowAds, isMobileSelector],
  (isShowAdsValue, isMobile) => isShowAdsValue && isMobile,
);

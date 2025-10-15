import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { DEFAULT_AVATAR, KEY, MOBILE_LIMIT } from './constants';
import { initialState } from './reducer';
import { FrontCommons, UserConfigRootState } from './types';
import { getLimit as getLimitUtil } from './utils';

export const getState = createSelector(
  [(state: UserConfigRootState) => state?.[KEY] || initialState],
  (state) => state,
);

export const getKid = createSelector(getState, (state) => state.kid);

export const getMainAccount = createSelector(
  getState,
  ({ mainAccount }) => mainAccount,
);

export const getTheme = createSelector(getState, ({ theme }) => theme);

export const getThemeMode = createSelector(getTheme, ({ mode }) => mode);

export const getThemeColor = createSelector(getTheme, ({ color }) => color);

// eslint-disable-next-line camelcase
export const DEPRECATED_isUnderScreenXxxs = createSelector(
  getState,
  (state) => state.DEPRECATED_isUnderScreenXxxs,
);
// eslint-disable-next-line camelcase
export const DEPRECATED_isUnderHeightMobile = createSelector(
  getState,
  (state) => state.DEPRECATED_isUnderHeightMobile,
);

export const isMobile = createSelector(getState, (state) => state.isMobile);
export const isOnline = createSelector(getState, (state) => state.isOnline);
export const isFetching = createSelector(getState, (state) => state.isFetching);
export const isFetched = createSelector(getState, (state) => state.isFetched);
export const isFetchedWindowUserConfig = createSelector(
  getState,
  (state) => state.isFetchedWindowUserConfig,
);
export const isFetchingError = createSelector(
  getState,
  (state) => state.isFetchingError,
);

export const isDisplayAds = createSelector(
  getState,
  (state) => state.isDisplayAds,
);

export const isPartnersActive = createSelector(
  getState,
  (state) => state.isPartnersActive,
);

export const isDisplayCoupons = createSelector(
  getState,
  (state) => state.isDisplayCoupons,
);

export const getAvatar = createSelector(
  getState,
  (state) => state.avatar || DEFAULT_AVATAR,
);

export const isPremium = createSelector(getState, (state) => state.isPremium);

export const isForeverPremium = createSelector(
  getState,
  (state) => state.isForeverPremium,
);

// isPremium jest ustawione na true również dla konta plusik/standard
export const isPremiumAccount = createSelector(
  [isPremium, isDisplayAds],
  (isP, isDA) => isP && !isDA,
);

export const getFontSize = createSelector(getState, (state) => state.fontSize);

export const getDensity = createSelector(getState, (state) => state.density);

export const isScrolledTop = createSelector(
  getState,
  (state) => state.isScrolledTop,
);

export const isScrollingTop = createSelector(
  getState,
  (state) => state.isScrollingTop,
);

export const isScrollingBottom = createSelector(
  getState,
  (state) => state.isScrollingBottom,
);

export const getLimit = createSelector(
  [getState, isMobile, isPremium, isDisplayAds],
  (state, isMobileProps, premium, displayAds) =>
    isMobileProps
      ? MOBILE_LIMIT
      : getLimitUtil(premium && !displayAds, state.limit),
);

export const isAutoAbook = createSelector(
  getState,
  (state) => state.isAutoAbook,
);

export const isEprescriptions = createSelector(
  getState,
  (state) => state.isEprescriptions,
);

export const isEpayments = createSelector(
  getState,
  (state) => state.isEpayments,
);

export const isInvoiceAgreement = createSelector(
  getState,
  (state) => state.isInvoiceAgreement,
);

export const isAdblock = createSelector(
  [getState, isPremium, isDisplayAds],
  () => false,
  // (state, isPremiumProp, isDisplayAdsProp) =>
  //   state.isAdblock && (!isPremiumProp || isDisplayAdsProp),
);

export const getAliases = createSelector(getState, (state) => state.aliases);

export const getAliasesEmails = createSelector(getAliases, (aliases) =>
  aliases.map((a) => a.alias),
);

export const getLastWebAccess = createSelector(
  getState,
  (state) => state.lastWebAccess,
);

export const getName = createSelector(getState, (state) => state.name);

export const getSurname = createSelector(getState, (state) => state.surname);

export const getCreatedDate = createSelector(
  getState,
  (state) => state.createdDate,
);

export const isAttachmentsShow = createSelector(
  getState,
  (state) => state.isAttachmentsShow,
);

export const isSaveSend = createSelector(getState, (state) => state.isSaveSend);

export const isCiteOnReply = createSelector(
  getState,
  (state) => state.isCiteOnReply,
);

export const getLogin = createSelector(getState, (state) => state.login);

export const getDomain = createSelector(getState, (state) => state.domain);

export const getSenderName = createSelector(
  getState,
  (state) => state.senderName,
);

export const getSkin = createSelector(getState, (state) => state.skin);

export const getFrontCommons = createSelector(
  getState,
  (state) => state.frontCommons,
);

export const getFrontCommonsByField = createSelector(
  [
    getFrontCommons,
    (_: RootState, { field }: { field: keyof FrontCommons }) => field,
  ],
  (frontCommons, field) => frontCommons?.[field],
);

export const getOnboarding = createSelector(
  getState,
  (state) => state.onboarding,
);

export const getLocks = createSelector(getState, (state) => state.locks);
export const isSmtpBlocked = createSelector([getLocks], (locks) =>
  locks.smtp === undefined ? true : locks.smtp,
);
export const isImapBlock = createSelector([getLocks], (locks) =>
  locks.smtp === undefined ? true : locks.imap,
);
export const isPopBlock = createSelector([getLocks], (locks) =>
  locks.smtp === undefined ? true : locks.pop3,
);

export const getPremiumDate = createSelector(
  getState,
  (state) => state.premiumDate,
);

export const getPremiumInfo = createSelector(
  getState,
  (state) => state.premiumInfo,
);

export const getSubscriptionProductId = createSelector(
  getPremiumInfo,
  (premiumInfo) => premiumInfo?.product_id,
);

export const getSubscription = createSelector(
  getPremiumInfo,
  (premiumInfo) => !!premiumInfo?.subscription,
);

export const getSubscriptionActive = createSelector(
  getPremiumInfo,
  (premiumInfo) => !!premiumInfo?.subscription?.is_active,
);

export const isBetaUser = createSelector(
  getState,
  (state) => !!state.isBetaUser,
);

export const isOrdersTabVisible = createSelector(
  getState,
  (state) => !!state.isShoppingVisible,
);

export const isShowEntryOffer = createSelector(
  getState,
  (state) => !!state.showEntryOffer,
);

// TODO wywalić isShoppingShow z całej apki
export const isShoppingShow = () => true;

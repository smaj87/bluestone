import {
  SAVE_AGREEMENTS,
  SAVE_AGREEMENTS_FAILURE,
  SAVE_AGREEMENTS_SUCCESS,
  SMART_ADS_ID,
} from 'commons/hooks/useAgreements/constants';
import { screenXxxs } from 'commons/utils/breakpoints';
import { getState } from 'commons/utils/webStorage';

import {
  FETCH_USER_CONFIG,
  FETCH_USER_CONFIG_FAILURE,
  FETCH_USER_CONFIG_SUCCESS,
  FONT_SIZE_NORMAL,
  FRONT_COMMONS_KEY,
  LOCK_USER_CHANNEL,
  ON_ONLINE_STATUS_CHANGED,
  ON_WINDOW_RESIZE,
  ON_WINDOW_SCROLL,
  SET_DENSITY,
  SET_FONT_SIZE,
  SET_IS_ADBLOCK,
  SET_IS_BETA_USER,
  SET_IS_EPAYMENTS,
  SET_IS_EPRESCRIPTIONS,
  SET_IS_SHOPPING_VISIBLE,
  SET_LIMIT,
  SET_ONBOARDING_VIEW,
  SET_SENDER_NAME,
  SET_SKIN,
  SET_THEME,
  UNLOCK_USER_CHANNEL,
  UPDATE_FRONT_COMMONS,
} from './constants';
import { UserConfigAction, UserConfigState } from './types';
import { getDefaultTheme, getIsMobile, getLimit } from './utils';

const frontCommonsState =
  getState(FRONT_COMMONS_KEY, localStorage) || window?.userConfig?.frontCommons;

const isPremium =
  window?.userConfig?.premium !== undefined
    ? !!window?.userConfig?.premium
    : true;

export const initialState: UserConfigState = {
  kid: window?.userConfig?.kid || -1,
  isFetching: false,
  isFetched: false,
  isFetchingError: false,
  isFetchedWindowUserConfig: !!window?.userConfig,
  DEPRECATED_isUnderScreenXxxs: window.innerWidth <= screenXxxs,
  DEPRECATED_isUnderHeightMobile: window.innerHeight <= 575,
  isMobile: getIsMobile(),
  theme: window?.userConfig?.theme || getDefaultTheme(),
  skin: window?.userConfig?.skin || '',
  isPremium,
  isForeverPremium: !!window?.userConfig?.foreverPremium,
  isDisplayAds: !!window?.userConfig?.displayAds,
  mainAccount: window?.userConfig?.email || '',
  avatar: '',
  // TODO - Co zrobić z fontSize?
  density: 'is-density-normal',
  fontSize: FONT_SIZE_NORMAL,
  isAttachments: true,
  limit: getLimit(isPremium),
  isOnline: navigator.onLine,
  isScrolledTop: window.scrollY === 0,
  isScrollingTop: true,
  isScrollingBottom: false,
  isAutoAbook: true,
  isEprescriptions: true,
  isEpayments: true,
  isInvoiceAgreement: true,
  isPartnersActive: !!window?.userConfig?.partnersActive,
  isDisplayCoupons: !!window?.userConfig?.couponsActive,
  aliases: [],
  lastWebAccess: '',
  mailboxSize: 0,
  name: '',
  surname: '',
  createdDate: window?.userConfig?.createdDate || null,
  isAttachmentsShow: false,
  isSaveSend: true,
  isCiteOnReply: !!window?.userConfig?.citeOnReply,
  login: '',
  domain: '',
  senderName: '',
  onboarding: window?.userConfig?.onboarding || {},
  locks: {},
  frontCommons: frontCommonsState || {
    interfaceUI: {
      sidebarOpen: 1,
    },
  },
  premiumDate: window?.userConfig?.premiumDate || '',
  premiumInfo: window?.userConfig?.premiumInfo || '',
  isBetaUser: !!window?.userConfig?.betaUser,
  isShoppingVisible: !!window?.userConfig?.shopActive,
  isAdblock: false,
  showEntryOffer: false,
};

let prevScrollPos = window.scrollY;
let prevPath = window.location.pathname;

export default (
  state = initialState,
  action: UserConfigAction,
): UserConfigState => {
  switch (action.type) {
    case SET_FONT_SIZE:
      return { ...state, fontSize: action.fontSize };
    case SET_DENSITY:
      return { ...state, density: action.density };
    case SET_LIMIT:
      return { ...state, limit: action.limit };
    case SET_SENDER_NAME:
      return { ...state, senderName: action.senderName };

    case ON_ONLINE_STATUS_CHANGED:
      return {
        ...state,
        isOnline: navigator.onLine,
      };

    case SET_ONBOARDING_VIEW:
      return {
        ...state,
        onboarding: { ...state.onboarding, [action.view]: action.value },
      };

    case ON_WINDOW_RESIZE: {
      const newIsMobile = getIsMobile();
      const newUnderXxxs = window.innerWidth <= screenXxxs;
      const newUnderHeight = window.innerHeight <= 575;

      if (
        state.isMobile !== newIsMobile ||
        state.DEPRECATED_isUnderScreenXxxs !== newUnderXxxs ||
        state.DEPRECATED_isUnderHeightMobile !== newUnderHeight
      ) {
        return {
          ...state,
          isMobile: newIsMobile,
          DEPRECATED_isUnderScreenXxxs: newUnderXxxs,
          DEPRECATED_isUnderHeightMobile: newUnderHeight,
        };
      }

      break;
    }

    case ON_WINDOW_SCROLL: {
      const currentScrollPos = window.scrollY;
      const currentPath = window.location.pathname;

      const newState = {
        isScrolledTop: currentScrollPos === 0,
        isScrollingTop: prevScrollPos > currentScrollPos,
        isScrollingBottom: prevScrollPos < currentScrollPos,
      };

      prevScrollPos = currentScrollPos;

      if (
        prevPath === currentPath &&
        (state.isScrolledTop !== newState.isScrolledTop ||
          state.isScrollingTop !== newState.isScrollingTop ||
          state.isScrollingBottom !== newState.isScrollingBottom)
      ) {
        return {
          ...state,
          ...newState,
        };
      }

      if (
        prevPath !== currentPath &&
        state.isScrolledTop !== newState.isScrolledTop
      ) {
        return {
          ...state,
          isScrolledTop: newState.isScrolledTop,
        };
      }

      prevPath = currentPath;

      return state;
    }

    case SET_THEME: {
      const newTheme = {
        ...state.theme,
        ...action.theme,
      };

      return {
        ...state,
        theme: newTheme,
      };
    }

    case FETCH_USER_CONFIG:
      return { ...state, isFetching: true };
    case FETCH_USER_CONFIG_SUCCESS: {
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        isFetchingError: false,
        isFetchedWindowUserConfig: true,
        theme: action?.config?.settings?.theme || state.theme,
        skin: action?.config?.settings?.skin || state.skin,
        kid: action.config.kid,
        isPremium: action.config.isPremium,
        isForeverPremium: action.config.foreverPremium,
        isDisplayAds: !!action.config.displayAds,
        isPartnersActive: action?.config?.settings?.partnersActive,
        isDisplayCoupons: action?.config?.settings?.couponsActive,
        mainAccount: `${action.config.login}@${action.config.domain}`,
        avatar: action.config.profile.avatar,
        isAutoAbook: !!action.config.settings.autoAbook,
        isEprescriptions: action.config.settings.eprescriptionsActive,
        isEpayments: action.config.settings.epaymentsActive,
        isInvoiceAgreement: !!action.config.settings.invoiceAgreement,
        aliases: action.config.aliasesInfo,
        lastWebAccess: action.config.mailbox.lastWebAccess || '',
        mailboxSize: action.config.mailboxSize || 0,
        createdDate: action.config.createdDate || null,
        name: action.config.profile.name || '',
        surname: action.config.profile.surname || '',
        isAttachmentsShow: !!action.config.settings.attachmentIndex,
        isSaveSend: !!action.config.settings.saveAsSent,
        isCiteOnReply: !!action.config.settings.citeOnReply,
        login: action.config.login,
        domain: action.config.domain,
        senderName: action.config.settings.senderName,
        onboarding: action.config.onboarding || state.onboarding,
        locks: action.config.locks || state.locks,
        limit: getLimit(
          action.config.isPremium && !action.config.displayAds,
          action.config.settings.shownMailsCount,
        ),
        frontCommons:
          frontCommonsState ||
          action.config.settings.frontCommons ||
          state.frontCommons,
        premiumDate: action.config.premiumDate || state.premiumDate,
        premiumInfo: action.config.premiumInfo || state.premiumInfo,
        isBetaUser: action.config.settings.betaUser || state.isBetaUser,
        isShoppingVisible:
          action.config.settings.shopActive || state.isShoppingVisible,
        showEntryOffer: action.config.settings.showEntryOffer,
      };
    }
    case FETCH_USER_CONFIG_FAILURE:
      return {
        ...state,
        isFetched: false,
        isFetching: false,
        isFetchingError: true,
      };

    case SET_SKIN:
      return { ...state, skin: action.skin };

    case LOCK_USER_CHANNEL:
      return { ...state, locks: { ...state.locks, [action.lockName]: true } };
    case UNLOCK_USER_CHANNEL:
      return { ...state, locks: { ...state.locks, [action.lockName]: false } };

    case SET_IS_EPAYMENTS:
      return {
        ...state,
        isEpayments: action.isEpayments,
        isInvoiceAgreement: action.isEpayments,
      };
    case SET_IS_EPRESCRIPTIONS:
      return { ...state, isEpayments: action.isEprescriptions };

    case SAVE_AGREEMENTS:
      return {
        ...state,
      };

    case SAVE_AGREEMENTS_SUCCESS:
      return {
        ...state,
        isPartnersActive: !!action.agreements?.[SMART_ADS_ID],
        isDisplayCoupons: !!action.agreements?.[SMART_ADS_ID],
        // INFO: obecnie dostosowane do widoku Newsletterów i Kuponów
      };

    case SAVE_AGREEMENTS_FAILURE:
      return {
        ...state,
      };

    case UPDATE_FRONT_COMMONS:
      return {
        ...state,
        frontCommons: action.frontCommons,
      };

    case SET_IS_ADBLOCK:
      return {
        ...state,
        isAdblock: action.isAdblock,
      };

    case SET_IS_BETA_USER:
      return {
        ...state,
        isBetaUser: action.isBetaUser,
      };

    case SET_IS_SHOPPING_VISIBLE:
      return {
        ...state,
        isShoppingVisible: action.isShoppingVisible,
      };

    default:
  }

  return state;
};

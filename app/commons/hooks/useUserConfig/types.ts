import { Theme } from 'commons/Themes/types';

import {
  SAVE_AGREEMENTS,
  SAVE_AGREEMENTS_FAILURE,
  SAVE_AGREEMENTS_SUCCESS,
} from '../useAgreements/constants';
import { AgreementsInterface } from '../useAgreements/types';
import {
  FETCH_USER_CONFIG,
  FETCH_USER_CONFIG_FAILURE,
  FETCH_USER_CONFIG_SUCCESS,
  KEY,
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

interface Locks {
  smtp?: boolean;
  imap?: boolean;
  pop3?: boolean;
}

export interface UserConfigState {
  kid: number;
  isFetching: boolean;
  isFetched: boolean;
  isFetchingError: boolean;
  isFetchedWindowUserConfig: boolean;
  DEPRECATED_isUnderScreenXxxs: boolean;
  DEPRECATED_isUnderHeightMobile: boolean;
  isMobile: boolean;
  limit: number;
  theme: Theme;
  skin: string;
  isPremium: boolean;
  isForeverPremium: boolean;
  isDisplayAds: boolean;
  isPartnersActive: boolean;
  isDisplayCoupons: boolean;
  isAttachments: boolean;
  density: string;
  fontSize: number;
  mainAccount: string;
  avatar: string;
  isOnline: boolean;
  isScrolledTop: boolean;
  isScrollingTop: boolean;
  isScrollingBottom: boolean;
  isAutoAbook: boolean;
  isEprescriptions: boolean;
  isEpayments: boolean;
  isInvoiceAgreement: boolean;
  aliases: Alias[];
  lastWebAccess: string;
  name: string;
  surname: string;
  createdDate: string | null;
  isAttachmentsShow: boolean;
  isSaveSend: boolean;
  isCiteOnReply: boolean;
  login: string;
  domain: string;
  senderName: string;
  onboarding: object;
  locks: Locks;
  frontCommons: FrontCommons;
  premiumDate?: string;
  premiumInfo?: PremiumInfo;
  isBetaUser: boolean;
  isShoppingVisible: boolean;
  isAdblock: boolean;
  mailboxSize: number;
  showEntryOffer: boolean;
}

export interface UserConfigRootState {
  [KEY]: UserConfigState;
}

interface Alias {
  active: 1 | 0;
  alias: string;
  system: 1 | 0;
}

export interface FetchUserConfig {
  // aliases: deprecated, use aliasesInfo
  aliases: {
    system: string[];
    user: string[];
  };
  aliasesInfo: Alias[];
  settings: {
    shopActive: boolean;
    betaUser: boolean;
    theme: Theme;
    shownMailsCount: number;
    skin: string;
    autoAbook: number;
    eprescriptionsActive: boolean;
    epaymentsActive: boolean;
    invoiceAgreement: number;
    senderName: string;
    citeOnReply: number;
    saveAsSent: number;
    attachmentIndex: number;
    partnersActive: boolean;
    couponsActive: boolean;
    frontCommons: FrontCommons;
    showEntryOffer: boolean;
  };
  isPremium: UserConfigState['isPremium'];
  foreverPremium: UserConfigState['isForeverPremium'];
  displayAds: number;
  login: string;
  domain: string;
  kid: number;
  createdDate: string;
  onboarding: object;
  locks: Locks;
  profile: {
    avatar: string;
    consents: number[];
    name: string;
    surname: string;
  };
  mailbox: {
    lastWebAccess: string | null;
  };
  mailboxSize: number;
  premiumDate: string | null;
  premiumInfo?: PremiumInfo;
}

export interface FrontCommons {
  tooltips?: FrontCommonsTooltips;
  banners?: FrontCommonsValue;
  interfaceUI?: FrontCommonsInterfaceUI;
}

export interface FrontCommonsInterfaceUI {
  sidebarOpen?: number;
  mailListView?: 'detail' | 'list' | 'tile';
  mailListLabels?: number;
  customFoldersOpen?: number;
  attachmentFoldersOpen?: number;
  popsyncFoldersOpen?: number;
  shoppingFoldersOpen?: number;
  redirectToNewslettersModalHidden?: number;
  cashbacksBannerOpen?: number;
  couponsBannerOpen?: number;
  skinsRemoveBannerOpen?: number;
}

export interface FrontCommonsTooltips {
  courier: number;
}

interface FrontCommonsValue {
  [key: string]: string | number;
}

export interface ChangeUserChannelInterface {
  channel: string;
  lockName: string;
}

export interface PremiumInfoSubscription {
  is_active?: boolean;
  subscription_id?: string;
}

export interface PremiumInfo {
  product_id?: number;
  subscription?: PremiumInfoSubscription;
}

export type UserConfigAction =
  | { type: typeof FETCH_USER_CONFIG }
  | {
      type: typeof FETCH_USER_CONFIG_SUCCESS;
      config: FetchUserConfig;
    }
  | { type: typeof FETCH_USER_CONFIG_FAILURE }
  | { type: typeof ON_WINDOW_RESIZE }
  | { type: typeof ON_WINDOW_SCROLL }
  | { type: typeof SET_IS_ADBLOCK; isAdblock: boolean }
  | { type: typeof SET_IS_SHOPPING_VISIBLE; isShoppingVisible: boolean }
  | { type: typeof SET_IS_BETA_USER; isBetaUser: boolean }
  | { type: typeof SET_THEME; theme: UserConfigState['theme'] }
  | { type: typeof SET_FONT_SIZE; fontSize: number }
  | { type: typeof SET_DENSITY; density: string }
  | { type: typeof SET_SENDER_NAME; senderName: string }
  | { type: typeof SET_LIMIT; limit: number }
  | { type: typeof ON_ONLINE_STATUS_CHANGED }
  | { type: typeof LOCK_USER_CHANNEL; lockName: string; channel: string }
  | { type: typeof UNLOCK_USER_CHANNEL; lockName: string; channel: string }
  | { type: typeof SET_ONBOARDING_VIEW; view: string; value: number }
  | { type: typeof SET_IS_EPAYMENTS; isEpayments: boolean }
  | { type: typeof SET_IS_EPRESCRIPTIONS; isEprescriptions: boolean }
  | { type: typeof SET_SKIN; skin: string }
  | { type: typeof SAVE_AGREEMENTS }
  | { type: typeof SAVE_AGREEMENTS_SUCCESS; agreements: AgreementsInterface }
  | { type: typeof SAVE_AGREEMENTS_FAILURE }
  | {
      type: typeof UPDATE_FRONT_COMMONS;
      frontCommons: FrontCommons;
    };

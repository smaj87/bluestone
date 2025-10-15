export const KEY = 'userConfig';

export const FRONT_COMMONS_KEY = 'FRONT_COMMONS_KEY';

export const DEFAULT_AVATAR =
  'https://ocdn.eu/images/pulscms/ZmY7MDA_/98922b3c304c137f9755bc4c39913050.png';

export const FETCH_USER_CONFIG = `${KEY}/FETCH_USER_CONFIG` as const;
export const FETCH_USER_CONFIG_SUCCESS =
  `${FETCH_USER_CONFIG}_SUCCESS` as const;
export const FETCH_USER_CONFIG_FAILURE =
  `${FETCH_USER_CONFIG}_FAILURE` as const;
export const ON_WINDOW_RESIZE = `${KEY}/ON_WINDOW_RESIZE` as const;
export const ON_WINDOW_SCROLL = `${KEY}/ON_WINDOW_SCROLL` as const;
export const ON_ONLINE_STATUS_CHANGED =
  `${KEY}/ON_ONLINE_STATUS_CHANGED` as const;
export const SET_THEME = `${KEY}/SET_THEME` as const;
export const SET_SENDER_NAME = `${KEY}/SET_SENDER_NAME` as const;
export const SET_DENSITY = `${KEY}/SET_DENSITY` as const;
export const SET_FONT_SIZE = `${KEY}/SET_FONT_SIZE` as const;
export const SET_LIMIT = `${KEY}/SET_LIMIT` as const;
export const SET_SKIN = `${KEY}/SET_SKIN` as const;
export const SET_ONBOARDING_VIEW = `${KEY}/SET_ONBOARDING_VIEW` as const;

export const LOCK_USER_CHANNEL = `${KEY}/LOCK_USER_CHANNEL` as const;
export const UNLOCK_USER_CHANNEL = `${KEY}/UNLOCK_USER_CHANNEL` as const;
export const SET_IS_EPAYMENTS = `${KEY}/SET_IS_EPAYMENTS` as const;
export const SET_IS_EPRESCRIPTIONS = `${KEY}/SET_IS_EPRESCRIPTIONS` as const;
export const SET_IS_ADBLOCK = `${KEY}/SET_IS_ADBLOCK` as const;
export const SET_IS_BETA_USER = `${KEY}/SET_IS_BETA_USER` as const;
export const SET_IS_SHOPPING_VISIBLE =
  `${KEY}/SET_IS_SHOPPING_VISIBLE` as const;

export const UPDATE_FRONT_COMMONS = `${KEY}/UPDATE_FRONT_COMMONS` as const;

export const FONT_SIZE_COMPACT = 8;
export const FONT_SIZE_NORMAL = 10;
export const FONT_SIZE_COMFORT = 12;

export const DEFAULT_LIMIT = 30;
export const MOBILE_LIMIT = 60;

export const MAIL_LIST_DENSITY_COMPACT = 'is-density-small';
export const MAIL_LIST_DENSITY_NORMAL = 'is-density-normal';
export const MAIL_LIST_DENSITY_COMFORT = 'is-density-large';

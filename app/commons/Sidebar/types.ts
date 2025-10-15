import {
  FETCH_USER_CONFIG_SUCCESS,
  UPDATE_FRONT_COMMONS,
} from 'commons/hooks/useUserConfig/constants';
import {
  FetchUserConfig,
  FrontCommons,
} from 'commons/hooks/useUserConfig/types';

import {
  KEY,
  SET_IS_DOT_FORCE_HIDE,
  SET_IS_SIDEBAR_MOBILE_OPEN,
} from './constants';

export interface SidebarState {
  isDotForceHide: boolean;
  isSidebarMobileOpen: boolean;
}

export interface SidebarRootState {
  [KEY]: SidebarState;
}

export type SidebarAction =
  | {
      type: typeof FETCH_USER_CONFIG_SUCCESS;
      config: FetchUserConfig;
    }
  | {
      type: typeof UPDATE_FRONT_COMMONS;
      frontCommons: FrontCommons;
    }
  | { type: typeof SET_IS_DOT_FORCE_HIDE; isDotForceHide: boolean }
  | { type: typeof SET_IS_SIDEBAR_MOBILE_OPEN; isSidebarMobileOpen: boolean };

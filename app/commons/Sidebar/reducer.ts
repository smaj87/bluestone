import {
  FETCH_USER_CONFIG_SUCCESS,
  FRONT_COMMONS_KEY,
  UPDATE_FRONT_COMMONS,
} from 'commons/hooks/useUserConfig/constants';
import { initialState as userConfigInitialState } from 'commons/hooks/useUserConfig/reducer';
import { getIsMobile } from 'commons/hooks/useUserConfig/utils';
import { IS_SIDEBAR_OPEN_CLASS } from 'commons/utils/classNames';
import { getState } from 'commons/utils/webStorage';

import { SET_IS_DOT_FORCE_HIDE, SET_IS_SIDEBAR_MOBILE_OPEN } from './constants';
import { SidebarAction, SidebarState } from './types';

export const updateDOM = (isOpen: boolean) => {
  const { classList } = document.getElementById('app-body')!;

  if (isOpen) {
    classList.add(IS_SIDEBAR_OPEN_CLASS);
  } else {
    classList.remove(IS_SIDEBAR_OPEN_CLASS);
  }
};

updateDOM(
  !!userConfigInitialState?.frontCommons?.interfaceUI?.sidebarOpen &&
    !getIsMobile(),
);

export const initialState: SidebarState = {
  isDotForceHide: false,
  isSidebarMobileOpen: false,
};

export default (state = initialState, action: SidebarAction) => {
  switch (action.type) {
    case FETCH_USER_CONFIG_SUCCESS:
    case UPDATE_FRONT_COMMONS: {
      let isOpen = false;

      if (action.type === FETCH_USER_CONFIG_SUCCESS) {
        const frontCommons = getState(FRONT_COMMONS_KEY, localStorage);
        isOpen = frontCommons
          ? !!frontCommons.interfaceUI?.sidebarOpen
          : !!action.config.settings.frontCommons?.interfaceUI?.sidebarOpen;

        updateDOM(isOpen && !getIsMobile());
      } else if (!getIsMobile()) {
        isOpen = !!action.frontCommons?.interfaceUI?.sidebarOpen;
        updateDOM(!!action.frontCommons?.interfaceUI?.sidebarOpen);
      }

      if (!state.isDotForceHide && isOpen) {
        return {
          ...state,
          isDotForceHide: true,
        };
      }

      break;
    }
    case SET_IS_DOT_FORCE_HIDE:
      return {
        ...state,
        isDotForceHide: action.isDotForceHide,
      };
    case SET_IS_SIDEBAR_MOBILE_OPEN:
      updateDOM(action.isSidebarMobileOpen);

      return {
        ...state,
        isSidebarMobileOpen: action.isSidebarMobileOpen,
      };
    default:
  }

  return state;
};

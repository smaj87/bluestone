import { updateFrontCommons } from 'commons/hooks/useUserConfig/actions';
import {
  getFrontCommons,
  isMobile as isMobileSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { AppThunk } from 'commons/utils/react-redux';

import { SET_IS_DOT_FORCE_HIDE, SET_IS_SIDEBAR_MOBILE_OPEN } from './constants';

const onChange =
  (isOpen: boolean): AppThunk =>
  async (dispatch, getState) => {
    const isMobile = isMobileSelector(getState());

    if (!isMobile) {
      const frontCommons = getFrontCommons(getState());
      const newFrontCommons = {
        ...frontCommons,
        interfaceUI: {
          ...(frontCommons.interfaceUI || {}),
          sidebarOpen: Number(isOpen),
        },
      };

      dispatch(updateFrontCommons(newFrontCommons));
    } else {
      dispatch({
        type: SET_IS_SIDEBAR_MOBILE_OPEN,
        isSidebarMobileOpen: isOpen,
      });
    }
  };

export const openSidebar = (): AppThunk => async (dispatch) => {
  dispatch(onChange(true));
};

export const hideSidebar = (): AppThunk => async (dispatch) => {
  dispatch(onChange(false));
};

export const setIsDotForceHide = (isDotForceHide: boolean) => ({
  type: SET_IS_DOT_FORCE_HIDE,
  isDotForceHide,
});

export const setIsSidebarMobileOpen = (isSidebarMobileOpen: boolean) => ({
  type: SET_IS_SIDEBAR_MOBILE_OPEN,
  isSidebarMobileOpen,
});

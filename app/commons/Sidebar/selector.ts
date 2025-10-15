import { RootState } from 'initRedux';

import {
  getFrontCommonsByField,
  isMobile,
  isPremium,
} from 'commons/hooks/useUserConfig/selectors';
import {
  FrontCommonsInterfaceUI,
  FrontCommonsTooltips,
} from 'commons/hooks/useUserConfig/types';
import { initialState } from 'commons/SidePanel/reducer';
import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { SidebarRootState } from './types';

const getState = createSelector(
  (state: SidebarRootState) => state?.[KEY] || initialState,
  (state) => state,
);

export const isDotForceHide = createSelector(
  getState,
  (state) => !!state?.isDotForceHide,
);

export const isSidebarMobileOpen = createSelector(
  getState,
  (state) => !!state?.isSidebarMobileOpen,
);

export const isOpen = createSelector(
  [
    (state: RootState) =>
      getFrontCommonsByField(state, {
        field: 'interfaceUI',
      }) as FrontCommonsInterfaceUI,
    isSidebarMobileOpen,
    isMobile,
  ],
  (interfaceUI, isMOpen, isM) => (isM ? isMOpen : !!interfaceUI?.sidebarOpen),
);

export const isCourierTooltipOpen = createSelector(
  [
    (state: RootState) =>
      getFrontCommonsByField(state, {
        field: 'tooltips',
      }) as FrontCommonsTooltips,
    isOpen,
  ],
  (tooltips, isO) => !!tooltips?.courier && isO,
);

export const isSideMenuItemPlusAdOpen = createSelector(
  [isMobile, isPremium, isOpen],
  (isM, isP, isO) => !isP && !isM && isO,
);

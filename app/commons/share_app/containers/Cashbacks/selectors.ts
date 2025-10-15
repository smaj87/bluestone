import { getFrontCommonsByField } from 'commons/hooks/useUserConfig/selectors';
import { FrontCommonsInterfaceUI } from 'commons/hooks/useUserConfig/types';
import {
  KEY,
  PAGE_NAME as CASHBACKS_PAGE_NAME,
} from 'commons/share_app/containers/Cashbacks/constants';
import { createSelector } from 'commons/utils/reselect';

import { getCurrentPage } from 'containers/App/selectors';

import { initialState } from './reducer';
import { CashbacksRootState, CashbacksState } from './types';

export const getState = createSelector(
  (state: CashbacksRootState) => state?.[KEY] || initialState,
  (state): CashbacksState => state,
);

export const getCashbacks = createSelector(
  getState,
  (state) => state.cashbacks,
);

export const getDefaultCashbacks = createSelector(
  getState,
  (state) => state.defaultCashbacks,
);

export const isCashbacksBannerOpen = createSelector(
  [
    (state) => getFrontCommonsByField(state, { field: 'interfaceUI' }),
    getCurrentPage,
  ],
  (interfaceUI, currentPage) =>
    !!((interfaceUI as FrontCommonsInterfaceUI)?.cashbacksBannerOpen ?? 1) &&
    currentPage === CASHBACKS_PAGE_NAME,
);

export const isNewCashbacks = createSelector(
  getState,
  (state) => state.isNewCashbacks,
);

export const isHideIsNew = createSelector(
  getState,
  (state) => state.isHideIsNew,
);

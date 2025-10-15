// TODO change RootState to searchState
import { RootState } from 'initRedux';

import { isMobile } from 'commons/hooks/useUserConfig/selectors';
import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';

export const getState = createSelector(
  (state: RootState) => state?.[KEY],
  (state) => state,
);
export const isOpen = createSelector(
  [getState, isMobile],
  (state, isM) => !!state.isOpen && isM,
);

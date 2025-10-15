import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { SubmenuRootState, SubmenuState } from './types';

const getState = createSelector(
  (state: SubmenuRootState) => state?.[KEY] || initialState,
  (state): SubmenuState => state,
);

export const getSubmenuId = (state: SubmenuRootState) =>
  state[KEY]?.submenuId || initialState.submenuId;

export const getParams = createSelector(getState, ({ params }: any) => params);

export const isOpenBySubmenuId = createSelector(
  [getSubmenuId, (_: RootState, submenuId: string) => submenuId],
  (submenuId, currentSubmenuId) =>
    !!currentSubmenuId && !!submenuId && submenuId === currentSubmenuId,
);

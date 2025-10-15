import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { AdsRootState } from './types';

export const getState = createSelector(
  (state: AdsRootState) => state?.[KEY] || initialState,
  (state) => state,
);

export const getReFetchFlag = createSelector(
  getState,
  (state) => state.reFetchFlag,
);

export const getPage = createSelector(getState, (state) => state.page);

export const getFolderUrlName = createSelector(
  getState,
  (state) => state.folderUrlName,
);

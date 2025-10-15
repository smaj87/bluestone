import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { NavTreeRootState } from './types';

export const getState = createSelector(
  [(state: NavTreeRootState) => state?.[KEY] || initialState],
  (state) => state,
);

const getById = createSelector(getState, (state) => state.byId);

const getCurrentGroup = createSelector(getState, (state) => state.currentGroup);

export const getGroups = createSelector(getState, (state) => state.groups);

export const getGroup = createSelector(
  [getGroups, getCurrentGroup],
  (groups, currentGroup) => groups[currentGroup] || [],
);

export const getCurrentElementId = createSelector(
  getState,
  (state) => state.currentElementId,
);

export const getElementById = createSelector(
  [getById, (_, id) => id],
  (byId, id) => byId[id],
);

export const isSelected = createSelector(
  [getCurrentElementId, (_, id) => id],
  (currentElementId, id) =>
    // defaultowo currentElementId jest '', wiec nie ma elementu
    // i nie ma co porownywac
    currentElementId !== '' && currentElementId === id,
);

export const getLastElementOfParentStack = createSelector(
  getState,
  (state) => state.parentStack[state.parentStack.length - 1] || null,
);

export const isEnabled = createSelector(getState, (state) => state.isEnabled);

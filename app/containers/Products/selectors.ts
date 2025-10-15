import { RootState } from 'initRedux';

import { createCachedSelector, createSelector } from 'utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';

export const getState = createSelector(
  (state: RootState) => state?.[KEY] || initialState,
  (state) => state,
);

export const isFetching = createSelector(getState, (state) => state.isFetching);
export const isFetched = createSelector(getState, (state) => state.isFetched);

export const isFetchedError = createSelector(
  getState,
  (state) => state.isFetchedError,
);

export const getProducts = createSelector(getState, (state) => state.products);

export const getProductByName = createSelector(
  [getProducts, (_: RootState, name: string) => name],
  (products, name) => products[name],
);

export const getProductsCount = createSelector(
  getProducts,
  (products) => Object.keys(products).length,
);

export const getGroups = createSelector(getState, (state) => state.groups);

export const getGroupsCount = createSelector(
  getGroups,
  (groups) => groups.length,
);

export const getGroupVisibility = createSelector(
  getState,
  (state) => state.groupVisibility,
);

export const isVisibleByGroupId = createCachedSelector(
  [
    getGroupVisibility,
    getGroupsCount,
    (_: RootState, groupId: number) => groupId,
  ],
  (groupVisibility, groupsCount, groupId) =>
    !!groupVisibility[groupId] || groupsCount < 5,
)((_, groupId) => groupId);

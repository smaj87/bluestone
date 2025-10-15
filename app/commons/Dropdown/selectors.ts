import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import {
  Dropdown,
  DropdownParams,
  DropdownRootState,
  DropdownState,
} from './types';

export const getState = createSelector(
  (state: DropdownRootState) => state?.[KEY] || initialState,
  (state): DropdownState => state,
);

export const getDropdowns = createSelector(
  getState,
  ({ dropdowns }): DropdownState['dropdowns'] => dropdowns,
);

export const getDropdownById = createSelector(
  [getDropdowns, (_: RootState, { id }: { id: string }) => id],
  (dropdowns, currentDropdownId): Dropdown | undefined =>
    dropdowns[currentDropdownId],
);

export const getDropdownParams = createSelector(
  [getDropdownById],
  (dropdown): DropdownParams | undefined => dropdown?.params,
);

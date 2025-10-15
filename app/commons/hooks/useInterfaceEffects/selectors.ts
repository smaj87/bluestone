import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { InterfaceEffectsRootState } from './types';

export const getState = createSelector(
  [(state: InterfaceEffectsRootState) => state?.[KEY] || initialState],
  (state) => state,
);

export const isFetching = createSelector(getState, (state) => state.isFetching);
export const isFetched = createSelector(getState, (state) => state.isFetched);

export const getInterfaceEffects = createSelector(
  getState,
  (state) => state.interfaceEffects,
);

export const getInterfaceEffectByType = createSelector(
  [getInterfaceEffects, (_: RootState, { type }: { type: string }) => type],
  (interfaceEffects, type) => interfaceEffects[type],
);

export const getInterfaceEffectBySubtype = createSelector(
  [getInterfaceEffectByType, (_, { subtype }: { subtype: string }) => subtype],
  (interfaceEffect, subtype) =>
    interfaceEffect?.params?.subtype === subtype ? interfaceEffect : undefined,
);

export const getInterfaceEffectId = createSelector(
  getInterfaceEffectBySubtype,
  (interfaceEffect) => interfaceEffect?.id,
);

export const getInterfaceEffectParams = createSelector(
  getInterfaceEffectBySubtype,
  (interfaceEffect) => interfaceEffect?.params,
);

export const getInterfaceEffectCustomButtons = createSelector(
  getInterfaceEffectParams,
  (params) => params?.customButtons,
);

export const isAnyFolderListShowNewLabel = createSelector(
  getInterfaceEffectByType,
  (interfaceEffect) => !!interfaceEffect?.id,
);

export const isFolderListShowNewLabel = createSelector(
  getInterfaceEffectBySubtype,
  (interfaceEffect) => !!interfaceEffect?.id,
);

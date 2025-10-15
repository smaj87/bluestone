import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { ModalRootState, ModalState } from './types';

const getState = createSelector(
  (state: ModalRootState) => state?.[KEY] || initialState,
  (state): ModalState => state,
);

export const getModalId = createSelector(
  getState,
  ({ modalId }): ModalState['modalId'] => modalId,
);

export const getParams = createSelector(getState, ({ params }: any) => params);

export const isOpenByModalId = createSelector(
  [getModalId, (_: RootState, modalId: ModalState['modalId']) => modalId],
  (modalId, currentModalId): boolean =>
    !!currentModalId && !!modalId && modalId === currentModalId,
);

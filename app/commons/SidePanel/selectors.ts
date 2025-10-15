import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { SidePanelRootState, SidePanelState } from './types';

const getState = createSelector(
  (state: SidePanelRootState) => state?.[KEY] || initialState,
  (state): SidePanelState => state,
);

export const getSidePanelId = createSelector(
  getState,
  ({ sidePanelId }): SidePanelState['sidePanelId'] => sidePanelId,
);

export const getParams = createSelector(getState, ({ params }: any) => params);

export const isOpenBySidePanelId = createSelector(
  [
    getSidePanelId,
    (
      _: RootState,
      { sidePanelId }: { sidePanelId: SidePanelState['sidePanelId'] },
    ) => sidePanelId,
  ],
  (sidePanelId, currentSidePanelId) =>
    !!currentSidePanelId && !!sidePanelId && sidePanelId === currentSidePanelId,
);

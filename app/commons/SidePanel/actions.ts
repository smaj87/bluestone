import { CLOSE, OPEN } from './constants';
import { SidePanelState } from './types';

export const open = (
  sidePanelId: SidePanelState['sidePanelId'],
  params = {},
) => ({
  type: OPEN,
  sidePanelId,
  params,
});

export const close = () => ({
  type: CLOSE,
});

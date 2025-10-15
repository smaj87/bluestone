import { CLOSE, KEY, OPEN } from './constants';

export interface SidePanelState {
  sidePanelId: string;
  params: {
    [key: string]: unknown;
  };
}

export interface SidePanelRootState {
  [KEY]: SidePanelState;
}

export type SidePanelAction =
  | {
      type: typeof OPEN;
      sidePanelId: SidePanelState['sidePanelId'];
      params: SidePanelState['params'];
    }
  | { type: typeof CLOSE; sidePanelId: SidePanelState['sidePanelId'] };

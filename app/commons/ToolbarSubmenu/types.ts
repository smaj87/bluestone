import { ON_WINDOW_RESIZE } from 'commons/hooks/useUserConfig/constants';

import { CLOSE, KEY, OPEN } from './constants';

export interface SubmenuState {
  submenuId: ToolbarSubmenusIds;
  params: {
    [key: string]: unknown;
  };
}

export interface SubmenuRootState {
  [KEY]: SubmenuState;
}

export type ToolbarSubmenusIds = string;

export type ToolBarAction =
  | {
      type: typeof OPEN;
      submenuId: string;
      params: SubmenuState['params'];
    }
  | {
      type: typeof CLOSE;
    }
  | {
      type: typeof ON_WINDOW_RESIZE;
    };

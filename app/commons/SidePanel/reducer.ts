import { IS_SIDE_PANEL_OPEN_CLASS } from 'commons/utils/classNames';

import { CLOSE, OPEN } from './constants';
import { SidePanelAction, SidePanelState } from './types';

export const initialState: SidePanelState = {
  sidePanelId: '',
  params: {},
};

export default (state = initialState, action: SidePanelAction) => {
  switch (action.type) {
    case OPEN:
      document
        .getElementById('app-body')
        ?.classList.add(IS_SIDE_PANEL_OPEN_CLASS);

      return {
        ...state,
        sidePanelId: action.sidePanelId,
        params: action.params,
      };
    case CLOSE:
      document
        .getElementById('app-body')
        ?.classList.remove(IS_SIDE_PANEL_OPEN_CLASS);

      return { ...state, sidePanelId: '', params: {} };
    default:
  }

  return state;
};

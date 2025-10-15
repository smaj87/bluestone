import { ON_WINDOW_RESIZE } from 'commons/hooks/useUserConfig/constants';
import { getIsMobile } from 'commons/hooks/useUserConfig/utils';
import { IS_SUBMENU_OPEN_CLASS } from 'commons/utils/classNames';

import { CLOSE, OPEN } from './constants';
import { SubmenuState, ToolBarAction } from './types';

export const initialState: SubmenuState = {
  submenuId: '',
  params: {},
};

export default (state = initialState, action: ToolBarAction) => {
  switch (action.type) {
    case OPEN:
      document.getElementById('app-body')?.classList.add(IS_SUBMENU_OPEN_CLASS);

      return { ...state, submenuId: action.submenuId, params: action.params };
    case CLOSE:
      document
        .getElementById('app-body')
        ?.classList.remove(IS_SUBMENU_OPEN_CLASS);

      return { ...state, submenuId: '', params: {} };
    case ON_WINDOW_RESIZE: {
      if (!getIsMobile()) {
        document
          .getElementById('app-body')
          ?.classList.remove(IS_SUBMENU_OPEN_CLASS);

        return { ...state, submenuId: '' };
      }

      break;
    }
    default:
  }

  return state;
};

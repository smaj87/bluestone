import { IS_MODAL_OPEN_CLASS } from 'commons/utils/classNames';

import { CLOSE, OPEN, UPDATE_MODAL_PARAMS } from './constants';
import { ModalAction, ModalState } from './types';

export const initialState: ModalState = {
  modalId: '',
  params: {},
};

export default (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case OPEN:
      document.getElementById('app-body')?.classList.add(IS_MODAL_OPEN_CLASS);

      return { ...state, modalId: action.modalId, params: action.params };
    case CLOSE:
      document
        .getElementById('app-body')
        ?.classList.remove(IS_MODAL_OPEN_CLASS);

      return { ...state, modalId: '', params: {} };
    case UPDATE_MODAL_PARAMS: {
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };
    }

    default:
  }

  return state;
};

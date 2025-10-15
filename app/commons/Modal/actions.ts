import { CLOSE, OPEN, UPDATE_MODAL_PARAMS } from './constants';
import { ModalState } from './types';

export const open = (modalId: ModalState['modalId'], params = {}) => ({
  type: OPEN,
  modalId,
  params,
});

export const close = () => ({
  type: CLOSE,
});

export const updateModalParams = (params: ModalState['params']) => ({
  type: UPDATE_MODAL_PARAMS,
  params,
});

export { open as openModal };

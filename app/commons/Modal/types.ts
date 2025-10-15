import { CLOSE, KEY, OPEN, UPDATE_MODAL_PARAMS } from './constants';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalState {
  modalId: string;
  params: {
    [key: string]: unknown;
  };
}

export interface ModalRootState {
  [KEY]: ModalState;
}

export type ModalAction =
  | {
      type: typeof OPEN;
      modalId: ModalState['modalId'];
      params: ModalState['params'];
    }
  | { type: typeof CLOSE; modalId: ModalState['modalId'] }
  | { type: typeof UPDATE_MODAL_PARAMS; params: ModalState['params'] };

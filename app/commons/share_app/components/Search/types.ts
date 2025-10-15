import { SET_IS_OPEN } from './constants';

export interface SearchState {
  isOpen: boolean;
}

export type SearchAction = { type: typeof SET_IS_OPEN; isOpen: boolean };

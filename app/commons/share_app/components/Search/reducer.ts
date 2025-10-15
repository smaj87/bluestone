import { SET_IS_OPEN } from './constants';
import { SearchAction, SearchState } from './types';

export const initialState: SearchState = {
  isOpen: false,
};

export default (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case SET_IS_OPEN:
      return { ...state, isOpen: action.isOpen };
    default:
  }

  return state;
};

import { CLOSE, OPEN } from './constants';
import { EmojiAction, EmojiState } from './types';

export const initialState: EmojiState = {
  isOpen: false,
  emojiCallback: () => {},
};

export default (state = initialState, action: EmojiAction) => {
  switch (action.type) {
    case OPEN:
      return { ...state, isOpen: true, emojiCallback: action.emojiCallback };
    case CLOSE:
      return { ...state, isOpen: false, emojiCallback: () => {} };

    default:
  }

  return state;
};

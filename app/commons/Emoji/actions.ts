import { CLOSE, OPEN } from './constants';
import { EmojiState } from './types';

export const showEmoji = (
  emojiCallback: EmojiState['emojiCallback'] = () => {},
) => ({
  type: OPEN,
  emojiCallback,
});

export const closeEmoji = () => ({
  type: CLOSE,
});

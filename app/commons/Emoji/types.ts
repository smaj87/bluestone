import { CLOSE, KEY, OPEN } from './constants';

export interface EmojiState {
  isOpen: boolean;
  emojiCallback: (emoji: string) => void;
}

export interface EmojiRootState {
  [KEY]: EmojiState;
}

export type EmojiAction =
  | {
      type: typeof OPEN;
      emojiCallback: EmojiState['emojiCallback'];
    }
  | { type: typeof CLOSE };

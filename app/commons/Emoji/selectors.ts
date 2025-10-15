import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { EmojiRootState, EmojiState } from './types';

const getComponentState = createSelector(
  (state: EmojiRootState) => state[KEY] || initialState,
  (state): EmojiState => state,
);

const isOpen = createSelector([getComponentState], (state) => state.isOpen);

const getCallback = createSelector(
  [getComponentState],
  (state) => state.emojiCallback,
);

export { getCallback, isOpen };

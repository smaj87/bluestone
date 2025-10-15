import { closeDropdown } from 'commons/Dropdown/actions';
import { FC, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { EMOJI, EMOJI_HAPPY, EMOJI_SAD } from '../constants';
import { ButtonEmoji, Emojis, EmojisList } from './styles';

interface Props {
  dropdownId?: string;
  hide?: VoidFunction;
  onEmoji: (emoji: string) => void;
}

const EmojiContent: FC<Props> = ({ dropdownId, hide: parentHide, onEmoji }) => {
  const onClick = useCallback(
    (e) => {
      const emojiStr = e?.target?.dataset?.emoji || '';

      if (dropdownId) {
        dispatch(closeDropdown(dropdownId));
      }

      parentHide?.();

      if (emojiStr) {
        if (onEmoji) {
          onEmoji(emojiStr);
        }
      }
    },
    [onEmoji, parentHide],
  );

  return (
    <EmojisList>
      <Emojis>
        {EMOJI_HAPPY.map((e) => (
          <ButtonEmoji key={e} data-emoji={e} onClick={onClick} type="button">
            {e}
          </ButtonEmoji>
        ))}
      </Emojis>
      <hr />
      <Emojis>
        {EMOJI_SAD.map((e) => (
          <ButtonEmoji key={e} data-emoji={e} onClick={onClick} type="button">
            {e}
          </ButtonEmoji>
        ))}
      </Emojis>
      <hr />
      <Emojis>
        {EMOJI.map((e) => (
          <ButtonEmoji key={e} data-emoji={e} onClick={onClick} type="button">
            {e}
          </ButtonEmoji>
        ))}
      </Emojis>
    </EmojisList>
  );
};

export default EmojiContent;

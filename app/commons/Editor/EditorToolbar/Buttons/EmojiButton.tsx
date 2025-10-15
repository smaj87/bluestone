import { getEditorById } from 'commons/Editor/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import EmojiDropdown from '../Dropdowns/EmojiDropdown';

interface Props {
  editorId: string;
}

const EmojiButton: FC<Props> = ({ editorId }) => {
  const editor = useSelector(getEditorById, editorId);

  const chooseEmoji = useCallback(
    (emoji) => {
      if (emoji) {
        const emojiSpan = document.createElement('span');
        emojiSpan.textContent = emoji;

        editor?.insertElement(emojiSpan);
      }
    },
    [editor],
  );

  return <EmojiDropdown editorId={editorId} onEmoji={chooseEmoji} />;
};

export default memo(EmojiButton);

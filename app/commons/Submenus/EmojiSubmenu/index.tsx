import { closeEmoji } from 'commons/Emoji/actions';
import EmojiContent from 'commons/Emoji/EmojiContent';
import { getCallback, isOpen as isOpenSelector } from 'commons/Emoji/selectors';
import Submenu from 'commons/ToolbarSubmenu/Submenu';
import { IS_SUBMENU_OPEN_CLASS } from 'commons/utils/classNames';
import {
  FC,
  memo,
  useCallback,
  useEffectWithoutMount,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const EmojiSubmenu: FC = () => {
  const isOpen = useSelector(isOpenSelector);
  const callback = useSelector(getCallback);

  const hide = useCallback(() => {
    dispatch(closeEmoji());
  }, []);

  useEffectWithoutMount(() => {
    if (isOpen) {
      document.getElementById('app-body')?.classList.add(IS_SUBMENU_OPEN_CLASS);
    } else {
      document
        .getElementById('app-body')
        ?.classList.remove(IS_SUBMENU_OPEN_CLASS);
    }
  }, [isOpen]);

  return isOpen ? (
    <Submenu
      content={<EmojiContent hide={hide} onEmoji={callback} />}
      hide={hide}
    />
  ) : null;
};

EmojiSubmenu.displayName = 'EmojiSubmenu';

export default memo(EmojiSubmenu);

import Button from 'commons/Button';
import Dropdown from 'commons/Dropdown';
import { open } from 'commons/Dropdown/actions';
import EmojiContent from 'commons/Emoji/EmojiContent';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import ToolbarSubmenu from 'commons/ToolbarSubmenu';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  EDITOR_EMOJI_MENU_SUBMENU_ID,
} from './constants';

interface Props {
  onEmoji: (emoji: string) => void;
  editorId: string;
}

const EmojiDropdown: FC<Props> = ({ editorId, onEmoji }) => {
  const t = useTranslations();
  const buttonId = useMemo(
    () => `${DROPDOWN_TARGET_ID}${editorId}`,
    [editorId],
  );
  const popUpId = useMemo(() => `${DROPDOWN_POPUP_ID}${editorId}`, [editorId]);
  const submenuId = useMemo(
    () => `${EDITOR_EMOJI_MENU_SUBMENU_ID}${editorId}`,
    [editorId],
  );

  const openDropdown = useCallback(() => {
    dispatch(
      open(popUpId, {
        targetId: buttonId,
        params: {
          menuSize: 'lg',
        },
      }),
    );
  }, [buttonId, popUpId]);

  return (
    <MobileLoader
      desktop={
        <>
          <Button
            color="secondary"
            cypressId="DROPDOWN-EMOJI"
            icon="emoji"
            id={buttonId}
            onClick={openDropdown}
            shape="square"
            size="md"
            title={t('emojiModalTitle')}
          />
          <Dropdown id={popUpId}>
            <EmojiContent dropdownId={popUpId} onEmoji={onEmoji} />
          </Dropdown>
        </>
      }
      mobile={
        <ToolbarSubmenu
          closeLabel={t('ctaClose')}
          color="secondary"
          content={EmojiContent}
          contentProps={{ onEmoji, dropdownId: popUpId }}
          icon="emoji"
          shape="square"
          size="md"
          submenuId={submenuId}
          title={t('emojiModalTitle')}
        />
      }
    />
  );
};

export default memo(EmojiDropdown);

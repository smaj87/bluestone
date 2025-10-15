import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dropdown from 'commons/Dropdown';
import { open } from 'commons/Dropdown/actions';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import ToolbarSubmenu from 'commons/ToolbarSubmenu';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  EDITOR_FONT_SIZE_MENU_SUBMENU_ID,
} from './constants';
import FontSizeDropdownContent from './Content';

interface Props {
  editorId: string;
}

const FontSizeDropdown: FC<Props> = ({ editorId }) => {
  const t = useTranslations();
  const buttonId = useMemo(
    () => `${DROPDOWN_TARGET_ID}${editorId}`,
    [editorId],
  );
  const popUpId = useMemo(() => `${DROPDOWN_POPUP_ID}${editorId}`, [editorId]);
  const submenuId = useMemo(
    () => `${EDITOR_FONT_SIZE_MENU_SUBMENU_ID}${editorId}`,
    [editorId],
  );

  const openDropdown = useCallback(() => {
    dispatch(
      open(popUpId, {
        targetId: buttonId,
        params: {
          menuSize: 'md',
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
            icon="formatSize"
            id={buttonId}
            onClick={openDropdown}
            size="md"
            title={t('textFontSize')}
          >
            <CtaIcon $image="chevronDown" $size="md" />
          </Button>

          <Dropdown id={popUpId}>
            <FontSizeDropdownContent editorId={editorId} popUpId={popUpId} />
          </Dropdown>
        </>
      }
      mobile={
        <ToolbarSubmenu
          closeLabel={t('ctaClose')}
          color="secondary"
          content={FontSizeDropdownContent}
          contentProps={{ editorId }}
          icon="formatSize"
          size="md"
          submenuId={submenuId}
          title={t('textFontSize')}
        />
      }
    />
  );
};

export default memo(FontSizeDropdown);

import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dropdown from 'commons/Dropdown';
import { closeDropdown, open } from 'commons/Dropdown/actions';
import { TEXT_COLORS } from 'commons/Editor/constants';
import { getTextColor } from 'commons/Editor/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { close, open as openSubmenu } from 'commons/ToolbarSubmenu/actions';
import { isOpenBySubmenuId } from 'commons/ToolbarSubmenu/selectors';
import Submenu from 'commons/ToolbarSubmenu/Submenu';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { CurrentColorInfoStyled } from '../styles';
import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  EDITOR_TXT_COLORS_MENU_SUBMENU_ID,
} from './constants';
import ColorsDropdownContent from './Content';

interface Props {
  editorId: string;
}

const ColorsDropdown: FC<Props> = ({ editorId }) => {
  const t = useTranslations();
  const buttonId = useMemo(
    () => `${DROPDOWN_TARGET_ID}${editorId}`,
    [editorId],
  );
  const popUpId = useMemo(() => `${DROPDOWN_POPUP_ID}${editorId}`, [editorId]);
  const submenuId = useMemo(
    () => `${EDITOR_TXT_COLORS_MENU_SUBMENU_ID}${editorId}`,
    [editorId],
  );
  const isOpen = useSelector(isOpenBySubmenuId, submenuId);

  const currentColor = useSelector(getTextColor, editorId);

  const openDropdown = useCallback(() => {
    dispatch(
      open(popUpId, {
        targetId: buttonId,
        params: {
          menuSize: 'fit',
        },
      }),
    );
  }, [buttonId, popUpId]);

  const onOpenSubmenu = useCallback(() => {
    dispatch(openSubmenu(submenuId));
  }, []);

  const onCloseSubmenu = useCallback(() => {
    dispatch(closeDropdown(popUpId));
    dispatch(close());
  }, []);

  return (
    <MobileLoader
      desktop={
        <>
          <Button
            color="secondary"
            icon="formatColor"
            id={buttonId}
            onClick={openDropdown}
            size="md"
            title={t('setColor')}
          >
            <CurrentColorInfoStyled $bg={currentColor || TEXT_COLORS.black} />
            <CtaIcon $image="chevronDown" $size="md" />
          </Button>
          <Dropdown id={popUpId}>
            <ColorsDropdownContent editorId={editorId} popUpId={popUpId} />
          </Dropdown>
        </>
      }
      mobile={
        <>
          <Button
            color="secondary"
            icon="formatColor"
            onClick={onOpenSubmenu}
            size="md"
            title={t('setColor')}
          >
            <CurrentColorInfoStyled $bg={currentColor || TEXT_COLORS.black} />
            <MobileLoader
              desktop={<CtaIcon $image="chevronDown" $size="md" />}
            />
          </Button>
          {isOpen ? (
            <Submenu
              content={
                <ColorsDropdownContent
                  editorId={editorId}
                  popUpId={submenuId}
                />
              }
              hide={onCloseSubmenu}
            />
          ) : null}
        </>
      }
    />
  );
};

export default memo(ColorsDropdown);

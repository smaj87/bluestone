import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dropdown from 'commons/Dropdown';
import { closeDropdown, open } from 'commons/Dropdown/actions';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import {
  reSortNotification,
  setIsOpen,
} from 'commons/share_app/components/NotificationBell/actions';
import { shouldSort } from 'commons/share_app/components/NotificationBell/selectors';
import { close, open as openSubmenu } from 'commons/ToolbarSubmenu/actions';
import { isOpenBySubmenuId } from 'commons/ToolbarSubmenu/selectors';
import Submenu from 'commons/ToolbarSubmenu/Submenu';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getScheduleSendTime } from 'containers/NewMail/selectors';

import { DROPDOWN_POPUP_ID, DROPDOWN_TARGET_ID } from './constants';
import Content from './Content';

const SetHourDropdown: FC = () => {
  const t = useTranslations();

  const isSubmenuOpen = useSelector(isOpenBySubmenuId, DROPDOWN_POPUP_ID);

  const label = useSelector(getScheduleSendTime);

  const openContextMenu = useCallback(() => {
    dispatch(setIsOpen(true));

    if (getStateValueBySelector(shouldSort)) {
      dispatch(reSortNotification());
    }

    if (getStateValueBySelector(isMobileSelector)) {
      dispatch(openSubmenu(DROPDOWN_POPUP_ID));
    } else {
      dispatch(
        open(DROPDOWN_POPUP_ID, {
          targetId: DROPDOWN_TARGET_ID,
          params: {
            menuSize: 'sm',
          },
        }),
      );
    }
  }, []);

  const hideSubmenu = useCallback(() => {
    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  return (
    <>
      <Button
        color="default"
        id={DROPDOWN_TARGET_ID}
        isDisabled={false}
        label={label}
        onClick={openContextMenu}
        shape="full"
        size="md"
      >
        <CtaIcon $image="chevronDown" $size="md" />
      </Button>
      <MobileLoader
        desktop={
          <Dropdown id={DROPDOWN_POPUP_ID}>
            <Content />
          </Dropdown>
        }
        mobile={
          isSubmenuOpen ? (
            <Submenu
              content={<Content />}
              hide={hideSubmenu}
              isFullScreen
              label={t('ctaClose')}
            />
          ) : undefined
        }
      />
    </>
  );
};

export default memo(SetHourDropdown);

import Button from 'commons/Button';
import Dropdown from 'commons/Dropdown';
import { closeDropdown, open } from 'commons/Dropdown/actions';
import { GroupTitleStyled } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { close, open as openSubmenu } from 'commons/ToolbarSubmenu/actions';
import { isOpenBySubmenuId } from 'commons/ToolbarSubmenu/selectors';
import Submenu from 'commons/ToolbarSubmenu/Submenu';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { reSortNotification, setIsOpen } from './actions';
import { DROPDOWN_POPUP_ID, DROPDOWN_TARGET_ID } from './constants';
import Content from './Content';
import Hooks from './Hooks';
import NotificationsCounter from './NotificationsCounter';
import { getUnreadCount, shouldSort } from './selectors';

const NotificationBell: FC = () => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const isSubmenuOpen = useSelector(isOpenBySubmenuId, DROPDOWN_POPUP_ID);
  const number = useSelector(getUnreadCount);

  const openContextMenu = useCallback(() => {
    dispatch(setIsOpen(true));

    if (getStateValueBySelector(shouldSort)) {
      dispatch(reSortNotification());
    }

    if (isMobile) {
      dispatch(openSubmenu(DROPDOWN_POPUP_ID));
    } else {
      dispatch(
        open(DROPDOWN_POPUP_ID, {
          targetId: DROPDOWN_TARGET_ID,
          params: {
            menuSize: 'lg',
          },
        }),
      );
    }
  }, [isMobile]);

  const hideSubmenu = useCallback(() => {
    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  return (
    <>
      <Hooks />
      <Button
        color="navbar"
        icon="bell"
        id={DROPDOWN_TARGET_ID}
        onClick={openContextMenu}
        size="md"
      >
        <span className={VISUALLY_HIDDEN_CLASS}>
          {t('ctaNotificationBell', { counter: number })}
        </span>
        <NotificationsCounter />
      </Button>
      {!isMobile ? (
        <Dropdown id={DROPDOWN_POPUP_ID} placement="bottom">
          <GroupTitleStyled>{t('notificationBellTitle')}</GroupTitleStyled>
          <Content />
        </Dropdown>
      ) : null}
      {isSubmenuOpen && isMobile ? (
        <Submenu
          content={
            <>
              <GroupTitleStyled>{t('notificationBellTitle')}</GroupTitleStyled>
              <Content />
            </>
          }
          hide={hideSubmenu}
          isFullScreen
          label={t('ctaClose')}
        />
      ) : null}
    </>
  );
};

export default memo(NotificationBell);

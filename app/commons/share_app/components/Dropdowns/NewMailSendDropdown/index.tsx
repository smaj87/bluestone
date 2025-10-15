import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dropdown from 'commons/Dropdown';
import { open } from 'commons/Dropdown/actions';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import ToolbarSubmenu from 'commons/ToolbarSubmenu';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { isSendingDisabled } from 'containers/NewMail/selectors';

import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  SEND_SUBMENU_ID,
} from './constants';
import Content from './Content';

const NewMailSendDropdown: FC = () => {
  const t = useTranslations();

  const isDisabled = useSelector(isSendingDisabled);

  const openDropdown = useCallback(() => {
    dispatch(
      open(DROPDOWN_POPUP_ID, {
        targetId: DROPDOWN_TARGET_ID,
        params: {
          menuSize: 'md',
        },
      }),
    );
  }, []);

  return (
    <MobileLoader
      desktop={
        <>
          <Button
            className="stats_send-dropdown-button"
            color="primary"
            id={DROPDOWN_TARGET_ID}
            isDisabled={isDisabled}
            isMobile
            onClick={openDropdown}
            size="md"
            title={t('ctaMore')}
          >
            <CtaIcon $image="chevronDown" $size="md" />
            <span className={VISUALLY_HIDDEN_CLASS}>
              {`${t('ctaSend')}, ${t('ctaSendSchedule')}`}
            </span>
          </Button>
          <Dropdown id={DROPDOWN_POPUP_ID}>
            <Content />
          </Dropdown>
        </>
      }
      mobile={
        <ToolbarSubmenu
          classNameButton="stats_send-dropdown-button"
          color={isDisabled ? 'toolbarSubmenu' : 'primary'}
          content={Content}
          icon="chevronDown"
          isDisabled={isDisabled}
          isMobile
          submenuId={SEND_SUBMENU_ID}
        />
      }
    />
  );
};

export default memo(NewMailSendDropdown);

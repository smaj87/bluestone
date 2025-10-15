import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dropdown from 'commons/Dropdown';
import { open } from 'commons/Dropdown/actions';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import ToolbarSubmenu from 'commons/ToolbarSubmenu';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  REPLY_SUBMENU_ID,
} from './constants';
import Content from './Content';

const ReadMailReplyDropdown: FC = () => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const isDisabled =
    (useSelector(getMailField, 'mid') as ReadMailParsed['mid']) <= 0;
  const isMobileButtonDisabled = isMobile && isDisabled;

  const openDropdown = useCallback(() => {
    dispatch(
      open(DROPDOWN_POPUP_ID, {
        targetId: DROPDOWN_TARGET_ID,
        params: {
          menuSize: 'lg',
        },
      }),
    );
  }, []);

  return (
    <MobileLoader
      desktop={
        <>
          <Button
            color="primary"
            cypressId="BUTTON-MORE-REPLY-OPTIONS"
            id={DROPDOWN_TARGET_ID}
            isDisabled={isDisabled}
            isMobile
            onClick={openDropdown}
            size="md"
            title={t('ctaMore')}
          >
            <CtaIcon $image="chevronDown" $size="md" />
            <span className={VISUALLY_HIDDEN_CLASS}>
              {`${t('ctaMore')}: ${t('ctaReply')}, ${t('ctaReplyAll')}, ${t('ctaForward')}`}
            </span>
          </Button>
          <Dropdown id={DROPDOWN_POPUP_ID}>
            <Content />
          </Dropdown>
        </>
      }
      mobile={
        <ToolbarSubmenu
          color={isMobileButtonDisabled ? 'toolbarSubmenu' : 'primary'}
          content={Content}
          cypressId="BUTTON-MORE-REPLY-OPTIONS"
          icon="chevronDown"
          isDisabled={isDisabled}
          isMobile
          submenuId={REPLY_SUBMENU_ID}
        />
      }
    />
  );
};

export default memo(ReadMailReplyDropdown);

import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dot from 'commons/Dot';
import Dropdown from 'commons/Dropdown';
import { open } from 'commons/Dropdown/actions';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { ShoppingToolbarStyled } from 'commons/share_app/components/ShoppingPages/styles';
import ToolbarSubmenu from 'commons/ToolbarSubmenu';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { isDot as isDotSelector } from '../selectors';
import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  NEWSLETTER_SORT_SUBMENU_ID,
} from './constants';
import Content from './Content';

const NewslettersSortDropdown: FC = () => {
  const t = useTranslations();

  const isDot = useSelector(isDotSelector);

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
    <ShoppingToolbarStyled role="toolbar">
      <MobileLoader
        desktop={
          <>
            <Button
              color="secondary"
              cypressId="BUTTON-NEWSLETTERS-SORT-OPTIONS"
              icon="sort"
              id={DROPDOWN_TARGET_ID}
              label={t('titleSort')}
              onClick={openDropdown}
              size="md"
              title={t('titleSort')}
            >
              {!!isDot && <Dot location="dropdown" />}
              <CtaIcon $image="chevronDown" $size="md" />
            </Button>

            <Dropdown id={DROPDOWN_POPUP_ID} placement="bottom-end">
              <Content />
            </Dropdown>
          </>
        }
        mobile={
          <ToolbarSubmenu
            closeLabel={t('ctaClose')}
            color="secondary"
            content={Content}
            cypressId="BUTTON-NEWSLETTERS-SORT-OPTIONS"
            icon="sort"
            isDot={isDot}
            size="sm"
            submenuId={NEWSLETTER_SORT_SUBMENU_ID}
            title={t('titleSort')}
          />
        }
      />
    </ShoppingToolbarStyled>
  );
};

export default memo(NewslettersSortDropdown);

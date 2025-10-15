import Button from 'commons/Button';
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
  NEWSLETTER_MENU_SUBMENU_ID,
} from './constants';
import Content from './Content';
import { NewsletterMenuDropdownStyled } from './styles';

interface Props {
  name?: string;
  email: string;
  mid: number;
  count: number;
}

const NewsletterMenuDropdown: FC<Props> = (props) => {
  const t = useTranslations();
  const buttonId = useMemo(
    () => `${DROPDOWN_TARGET_ID}${props.mid}`,
    [props.mid],
  );
  const popUpId = useMemo(
    () => `${DROPDOWN_POPUP_ID}${props.mid}`,
    [props.mid],
  );
  const submenuId = useMemo(
    () => `${NEWSLETTER_MENU_SUBMENU_ID}${props.mid}`,
    [props.mid],
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
    <NewsletterMenuDropdownStyled>
      <MobileLoader
        desktop={
          <>
            <Button
              color="secondary"
              cypressId="BUTTON-NEWSLETTER-MENU"
              icon="menuMoreVertical"
              id={buttonId}
              isMobile
              onClick={openDropdown}
              size="md"
            />

            <Dropdown id={popUpId} placement="bottom-end">
              <Content {...props} popUpId={popUpId} />
            </Dropdown>
          </>
        }
        mobile={
          <ToolbarSubmenu
            closeLabel={t('ctaClose')}
            color="secondary"
            content={Content}
            contentProps={props}
            cypressId="BUTTON-NEWSLETTER-MENU"
            icon="menuMoreVertical"
            isMobile
            submenuId={submenuId}
          />
        }
      />
    </NewsletterMenuDropdownStyled>
  );
};

NewsletterMenuDropdown.displayName = 'NewsletterMenuDropdown';

export default memo(NewsletterMenuDropdown);

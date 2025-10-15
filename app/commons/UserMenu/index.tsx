import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dropdown from 'commons/Dropdown';
import { close, open } from 'commons/Dropdown/actions';
import { getDropdownById } from 'commons/Dropdown/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import {
  getMainAccount,
  isMobile as isMobileSelector,
} from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import { close as closeModal } from 'commons/Modal/actions';
import { isOpenByModalId } from 'commons/Modal/selectors';
import UserMenuModal from 'commons/Modals/UserMenuModal';
import { USER_MENU_MODAL_ID } from 'commons/Modals/UserMenuModal/constants';
import { addIdToParentStack } from 'commons/NavTree/actions';
import NavTreeGroup from 'commons/NavTree/NavTreeGroup';
import { FC, memo, useCallback, useEffect, useMemo } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  USER_MENU_NAV_GROUP_ID,
} from './constants';
import Content from './Content';
import { UserMenuStyled } from './styles';

interface Props {
  clientId: string;
  panelId: string;
}

const UserMenu: FC<Props> = ({ clientId, panelId }) => {
  const t = useTranslations();
  const selectorDropdownId = useMemo(() => ({ id: DROPDOWN_POPUP_ID }), []);
  const dropdown = useSelector(getDropdownById, selectorDropdownId);
  const isMobile = useSelector(isMobileSelector);
  const accountName = useSelector(getMainAccount);

  const contentProps = useMemo(
    () => ({
      clientId,
      panelId,
    }),
    [clientId, panelId],
  );

  useEffect(() => {
    closeDropdown();
  }, [isMobile]);

  const openDropdown = useCallback(() => {
    // FIX dla narratora windowsowego - musimy dodac samemu idGrupy, poniewaz zabiera nam kontrole nad eventami onEnter, space escape itp
    dispatch(addIdToParentStack(USER_MENU_NAV_GROUP_ID));

    dispatch(
      open(DROPDOWN_POPUP_ID, {
        targetId: DROPDOWN_TARGET_ID,
        params: {
          menuSize: 'md',
        },
      }),
    );
  }, []);

  const closeDropdown = useCallback(() => {
    if (getStateValueBySelector(isOpenByModalId, USER_MENU_MODAL_ID)) {
      dispatch(closeModal());
    }

    dispatch(close(DROPDOWN_POPUP_ID));
  }, []);

  return (
    <UserMenuStyled aria-label={t('ariaUserMenu')}>
      <MobileLoader
        desktop={
          <NavTreeGroup
            groupId={USER_MENU_NAV_GROUP_ID}
            isShow
            onEnter={openDropdown}
            onEscape={closeDropdown}
          >
            <Button
              ariaControls={DROPDOWN_POPUP_ID}
              ariaExpanded={dropdown?.isOpen}
              ariaHasPopup="true"
              color="navbar"
              cypressId="USER-MENU"
              id={DROPDOWN_TARGET_ID}
              label={accountName}
              onClick={openDropdown}
              size="md"
            >
              <CtaIcon $image="chevronDown" $size="md" aria-hidden="true" />
            </Button>
            <Dropdown
              ariaLabelledBy={DROPDOWN_TARGET_ID}
              id={DROPDOWN_POPUP_ID}
              placement="bottom-end"
            >
              <Content {...contentProps} />
            </Dropdown>
          </NavTreeGroup>
        }
        mobile={
          <UserMenuModal
            content={Content}
            contentProps={contentProps}
            modal={USER_MENU_MODAL_ID}
          />
        }
      />
    </UserMenuStyled>
  );
};

export default memo(UserMenu);

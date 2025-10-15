import { closeDropdown } from 'commons/Dropdown/actions';
import {
  GroupButton,
  GroupLink,
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import { close as closeModal } from 'commons/Modal/actions';
import { open as openSidePanel } from 'commons/SidePanel/actions';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from './constants';

interface Props {
  clientId?: string;
  panelId: string;
}

const Content: FC<Props> = ({ clientId, panelId }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);

  const onChangeSkin = useCallback(() => {
    if (isMobile) {
      dispatch(closeModal());
    } else {
      dispatch(closeDropdown(DROPDOWN_POPUP_ID));
    }
    dispatch(openSidePanel(panelId, {}));
  }, [isMobile]);

  return (
    <GroupListStyled>
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          ariaHasPopup="true"
          icon="skins"
          label={t('appSettings')}
          onClick={onChangeSkin}
          size="md"
        />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupLink
          $align="left"
          href={process.env.ACCOUNT_PROFILE_URL}
          icon="settings"
          label={t('ctaAccountSettings')}
          size="md"
        />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupLink
          $align="left"
          href={process.env.BOK_URL}
          icon="help"
          label={t('ctaReportProblem')}
          size="md"
        />
      </GroupListItemStyled>
      <MobileLoader
        mobile={
          <GroupListItemStyled>
            <hr aria-hidden="true" />
          </GroupListItemStyled>
        }
      />
      <GroupListItemStyled>
        <GroupLink
          $align="left"
          href={`${process.env.LOGOUT_URL}${clientId}`}
          icon="logout"
          label={t('ctaLogout')}
          size="md"
        />
      </GroupListItemStyled>
    </GroupListStyled>
  );
};

export default Content;

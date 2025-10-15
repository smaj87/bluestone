import { closeDropdown } from 'commons/Dropdown/actions';
import {
  GroupButton,
  GroupLink,
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import {
  isMobile as isMobileSelector,
  isPremium as isPremiumSelector,
} from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import { close as closeModal } from 'commons/Modal/actions';
import { addIdToParentStack } from 'commons/NavTree/actions';
import NavTreeGroup from 'commons/NavTree/NavTreeGroup';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import PremiumAd from 'commons/PremiumAd';
import { PremiumAdContainerStyled } from 'commons/PremiumAd/styles';
import { open as openSidePanel } from 'commons/SidePanel/actions';
import { FC, useCallback, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from './constants';

interface Props {
  clientId?: string;
  panelId: string;
}

let step: 0 | 1 = 0;

const Content: FC<Props> = ({ clientId, panelId }) => {
  const t = useTranslations();

  const isPremium = useSelector(isPremiumSelector);
  const isMobile = useSelector(isMobileSelector);

  const onChangeSkin = useCallback(() => {
    if (isMobile) {
      dispatch(closeModal());
    } else {
      dispatch(closeDropdown(DROPDOWN_POPUP_ID));
    }

    // FIX dla narratora windowsowego - musimy dodac samemu idGrupy, poniewaz zabiera nam kontrole nad eventami onEnter, space escape itp
    dispatch(addIdToParentStack(panelId));

    dispatch(openSidePanel(panelId, {}));
  }, [isMobile]);

  useEffect(
    () => () => {
      step = step === 1 ? 0 : 1;
    },
    [],
  );

  return (
    <>
      <GroupListStyled>
        <GroupListItemStyled>
          <NavTreeGroup
            groupId={panelId}
            offset="inside"
            onEnter={onChangeSkin}
            width="full"
          >
            <GroupButton
              $align="left"
              ariaHasPopup="true"
              icon="skins"
              label={t('appSettings')}
              onClick={onChangeSkin}
              size="md"
            />
          </NavTreeGroup>
        </GroupListItemStyled>
        <GroupListItemStyled>
          <NavTreeItem
            offset="inside"
            onEnter={() => historyPush(process.env.ACCOUNT_PROFILE_URL || '')}
            width="full"
          >
            <GroupLink
              $align="left"
              href={process.env.ACCOUNT_PROFILE_URL}
              icon="settings"
              label={t('ctaAccountSettings')}
              size="md"
            />
          </NavTreeItem>
        </GroupListItemStyled>
        <GroupListItemStyled>
          <NavTreeItem
            offset="inside"
            onEnter={() => historyPush(process.env.BOK_URL || '')}
            width="full"
          >
            <GroupLink
              $align="left"
              href={process.env.BOK_URL}
              icon="help"
              label={t('ctaReportProblem')}
              size="md"
            />
          </NavTreeItem>
        </GroupListItemStyled>
        <GroupListItemStyled>
          <NavTreeItem
            offset="inside"
            onEnter={() =>
              historyPush(`${process.env.SWITCH_ACCOUNT_URL}${clientId}`)
            }
            width="full"
          >
            <GroupLink
              $align="left"
              href={`${process.env.SWITCH_ACCOUNT_URL}${clientId}`}
              icon="arrowRight"
              label={t('ctaSwitchAccount')}
              size="md"
            />
          </NavTreeItem>
        </GroupListItemStyled>
        <MobileLoader
          mobile={
            <GroupListItemStyled>
              <hr aria-hidden="true" />
            </GroupListItemStyled>
          }
        />
        <GroupListItemStyled>
          <NavTreeItem
            offset="inside"
            onEnter={() => historyPush(`${process.env.LOGOUT_URL}${clientId}`)}
            width="full"
          >
            <GroupLink
              $align="left"
              href={`${process.env.LOGOUT_URL}${clientId}`}
              icon="logout"
              label={t('ctaLogout')}
              size="md"
            />
          </NavTreeItem>
        </GroupListItemStyled>
      </GroupListStyled>
      <PremiumAdContainerStyled>
        {!isMobile && !isPremium ? (
          <PremiumAd placement="navbar" step={step} />
        ) : null}
      </PremiumAdContainerStyled>
    </>
  );
};

export default Content;

import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import PremiumAd, { sendEvent } from 'commons/PremiumAd';
import { PremiumAdContainerStyled } from 'commons/PremiumAd/styles';
import {
  SIDEMENU_LINK_CLASS,
  SIDEMENU_LINK_LABEL_CLASS,
} from 'commons/Sidebar/constants';
import {
  isOpen as isOpenSelector,
  isSideMenuItemPlusAdOpen as isSideMenuItemPlusAdOpenSelector,
} from 'commons/Sidebar/selector';
import { FC, memo, useCallback, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import {
  SideMenuIconStyled,
  SideMenuItemContentStyled,
  SideMenuItemStyled,
  SideMenuLabelStyled,
  SideMenuLinkStyled,
} from './styles';

const SideMenuItemPlus: FC = () => {
  const t = useTranslations();
  const label = t('webmailPlus');

  const isOpen = useSelector(isOpenSelector);
  const isAdShow = useSelector(isSideMenuItemPlusAdOpenSelector);
  const [step, setStep] = useState<0 | 1>(0);

  const onMouseEnter = useCallback(() => {
    sendEvent('view_premium_', step, 'sidebar');
  }, [step]);

  const onMouseLeave = useCallback(() => {
    setStep(step === 0 ? 1 : 0);
  }, [step]);

  const onEnter = useCallback(() => {
    if (process.env.PAYMENTS_URL) {
      historyPush(process.env.PAYMENTS_URL);
    }
  }, []);

  return (
    <SideMenuItemStyled onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SideMenuItemContentStyled>
        <NavTreeItem
          isDisabled={process.env.PAYMENTS_URL === process.env.HOST}
          isShow={isOpen}
          onEnter={onEnter}
        >
          <SideMenuLinkStyled
            $isActive={process.env.PAYMENTS_URL === process.env.HOST}
            aria-label={label}
            className={SIDEMENU_LINK_CLASS}
            href={process.env.PAYMENTS_URL!}
            title={label}
          >
            <SideMenuIconStyled $image="envelopePlus" aria-hidden />
            <MobileLoader
              desktop={
                <SideMenuLabelStyled
                  aria-hidden="true"
                  className={SIDEMENU_LINK_LABEL_CLASS}
                >
                  {label}
                </SideMenuLabelStyled>
              }
            />
          </SideMenuLinkStyled>
          <PremiumAdContainerStyled>
            {isAdShow ? <PremiumAd placement="sidebar" step={step} /> : null}
          </PremiumAdContainerStyled>
        </NavTreeItem>
      </SideMenuItemContentStyled>
    </SideMenuItemStyled>
  );
};

export default memo(SideMenuItemPlus);

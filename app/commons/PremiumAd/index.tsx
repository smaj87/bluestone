import useTranslations from 'commons/hooks/useTranslations';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import {
  PREMIUM_AD_CLASS,
  PREMIUM_BANNER_ID,
  PREMIUM_DATE,
} from 'commons/PremiumAd/constants';
import { PremiumAdPlacement } from 'commons/PremiumAd/types';
import { dataLayerPush } from 'commons/utils/ads';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';

import promo01 from './images/onet_poczta_upgrade_1.webp';
import promo02 from './images/onet_poczta_upgrade_2.webp';
import { PremiumAdContentStyled, PremiumAdStyled } from './styles';

export interface PremiumAdProps {
  placement: PremiumAdPlacement;
  step?: 0 | 1;
}

const rotate = [promo01, promo02];

export const sendEvent = (
  eventPrefix: 'go_to_premium_' | 'view_premium_',
  step: PremiumAdProps['step'],
  placement: PremiumAdProps['placement'],
) => {
  dataLayerPush({ ecommerce: null }); // Clear the previous ecommerce object.
  dataLayerPush({
    event: `${eventPrefix}${placement === 'navbar' ? 'top_banner' : 'left_side'}`,
    creation_variant: step
      ? `onet_business_${PREMIUM_DATE}`
      : `onet_plus_${PREMIUM_DATE}`,
    acc_variant: `promo_banners_${PREMIUM_DATE}`,
  });
};

const PremiumAd: FC<PremiumAdProps> = ({ placement, step = 0 }) => {
  const t = useTranslations();
  const altText = [t('webmailBannerAlt01'), t('webmailBannerAlt02')];
  const altDescription = [t('webmailBannerDesc01'), t('webmailBannerDesc02')];
  const bannerId = [
    `${PREMIUM_BANNER_ID}${placement}_01`,
    `${PREMIUM_BANNER_ID}${placement}_02`,
  ];

  const onClick = useCallback(() => {
    sendEvent('go_to_premium_', step, placement);
    window.open(`${process.env.PAYMENTS_URL}`, '_blank');
  }, [placement, step]);

  useEffect(() => {
    if (placement === 'navbar') {
      sendEvent('view_premium_', step, placement);
    }
  }, [placement, step]);

  return (
    <PremiumAdStyled $placement={placement} className={PREMIUM_AD_CLASS}>
      <NavTreeItem isShow={placement === 'navbar'} onEnter={onClick}>
        <PremiumAdContentStyled
          $placement={placement}
          aria-label={t('webmailPlus')}
          onClick={onClick}
          title={t('webmailPlus')}
          type="button"
        >
          <img
            alt={altText[step]}
            aria-describedby={bannerId[step]}
            src={rotate[step]}
          />
          <p className={VISUALLY_HIDDEN_CLASS} id={bannerId[step]}>
            {altDescription[step]}
          </p>
        </PremiumAdContentStyled>
      </NavTreeItem>
    </PremiumAdStyled>
  );
};

export default memo(PremiumAd);

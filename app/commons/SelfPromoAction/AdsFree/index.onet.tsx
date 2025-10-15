import useTranslations from 'commons/hooks/useTranslations';
import { isPremium as isPremiumSelector } from 'commons/hooks/useUserConfig/selectors';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { dataLayerPush } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { BadgeSelfPromoAction, SelfPromoActionButton } from '../styles';

const sendEvent = (prefix: 'go_to_' | 'view_') => {
  dataLayerPush({ ecommerce: null }); // Clear the previous ecommerce object.
  dataLayerPush({
    event: `${prefix}premium_top_bar`,
    creation_variant: 'buy_plan',
    acc_variant: `buy_plan`,
  });
};

const AdsFree: FC = () => {
  const t = useTranslations();
  const isPremium = useSelector(isPremiumSelector);

  const onRedirect = useCallback(() => {
    sendEvent('go_to_');
    window.open(`${process.env.PAYMENTS_URL}`, '_blank');
  }, []);

  const color = 'primary';

  return !isPremium ? (
    <NavTreeItem onEnter={onRedirect}>
      <SelfPromoActionButton
        $color={color}
        label={t('noAdsWebmail')}
        onClick={onRedirect}
      >
        <BadgeSelfPromoAction $color={color} label={t('ctaCheck')} size="sm" />
      </SelfPromoActionButton>
    </NavTreeItem>
  ) : null;
};

export default memo(AdsFree);

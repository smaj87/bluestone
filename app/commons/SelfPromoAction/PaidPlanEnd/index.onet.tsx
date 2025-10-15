import useTranslations from 'commons/hooks/useTranslations';
import {
  getPremiumDate,
  getSubscription,
  isPremium as isPremiumSelector,
} from 'commons/hooks/useUserConfig/selectors';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { dataLayerPush } from 'commons/utils/ads';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { BadgeSelfPromoAction, SelfPromoActionButton } from '../styles';
import {
  DATA_LAYER_SELF_PROMO_PREFIX,
  END_DAYS_VALUE,
  START_DAYS_VALUE,
} from './constants';

const sendEvent = (prefix: 'go_to_' | 'view_') => {
  dataLayerPush({ ecommerce: null }); // Clear the previous ecommerce object.
  dataLayerPush({
    event: `${prefix}premium_top_bar`,
    creation_variant: `${DATA_LAYER_SELF_PROMO_PREFIX}paid_plan`,
    acc_variant: `${DATA_LAYER_SELF_PROMO_PREFIX}paid_plan`,
  });
};

const PaidPlanEnd: FC = () => {
  const t = useTranslations();
  const isPremium = useSelector(isPremiumSelector);
  const isSubscription = useSelector(getSubscription);
  const premiumDate = useSelector(getPremiumDate);

  const onRedirect = useCallback(() => {
    sendEvent('go_to_');
    window.open(`${process.env.PAYMENTS_URL}`, '_blank');
  }, []);

  const dayTillEndPlan = useMemo(() => {
    if (!premiumDate) {
      return -1;
    }

    const currentDate = new Date();
    const endDate = new Date(premiumDate);

    const dateDiff = endDate.getTime() - currentDate.getTime();
    return Math.round(dateDiff / (1000 * 60 * 60 * 24));
  }, [premiumDate]);

  const color = 'primary';

  const isShowPromo =
    isPremium &&
    premiumDate &&
    !isSubscription &&
    dayTillEndPlan >= END_DAYS_VALUE &&
    dayTillEndPlan <= START_DAYS_VALUE;

  return isShowPromo ? (
    <NavTreeItem onEnter={onRedirect}>
      <SelfPromoActionButton
        $color={color}
        label={
          dayTillEndPlan === END_DAYS_VALUE
            ? t('paidPlanEndToday')
            : t('paidPlanEnd', { counter: dayTillEndPlan })
        }
        onClick={onRedirect}
      >
        <BadgeSelfPromoAction $color={color} label={t('ctaRenew')} size="sm" />
      </SelfPromoActionButton>
    </NavTreeItem>
  ) : null;
};

export default memo(PaidPlanEnd);

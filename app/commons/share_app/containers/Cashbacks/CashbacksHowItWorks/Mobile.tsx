import useTranslations from 'commons/hooks/useTranslations';
import { updateFrontCommons } from 'commons/hooks/useUserConfig/actions';
import { getFrontCommons } from 'commons/hooks/useUserConfig/selectors';
import BannerMobile from 'commons/share_app/components/Banner/BannerMobile';
import { HowItWorksMobileActionButtonStyled } from 'commons/share_app/components/ShoppingPages/HowItWorks/styles';
import {
  DEFAULT_COUPONS_ID,
  DEFAULT_HEADERS_CLASS,
} from 'commons/share_app/components/ShoppingPages/ShoppingBanner/constants';
import { scrollToElementById } from 'commons/share_app/utils/scroll';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { GOODIE_OFFER_URL } from '../constants';
import Content from './Content';

interface Props {
  isDefaultCoupons?: boolean;
  isGoodieAgreement?: boolean;
}

export const Mobile: FC<Props> = ({ isDefaultCoupons, isGoodieAgreement }) => {
  const t = useTranslations();
  const closeBanner = useCallback(() => {
    const frontCommons = getStateValueBySelector(getFrontCommons);

    dispatch(
      updateFrontCommons({
        ...frontCommons,
        interfaceUI: {
          ...(frontCommons.interfaceUI || {}),
          cashbacksBannerOpen: 0,
        },
      }),
    );

    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'cashbacks_howitworks_closed_banner',
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_cashbacks_howitworks_closed_banner',
      mp_params: [
        {
          default_coupons_length: !!isDefaultCoupons,
        },
      ],
    });
  }, []);

  const goToGoodie = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'action',
        event_details: { action: 'clicked', element: 'activate' },
      }),
    );

    dataLayerPush({
      event: 'ga4_cashbacks_action',
      mp_params: [
        {
          action: 'clicked',
          element: 'activate',
        },
      ],
    });

    window.open(GOODIE_OFFER_URL, '_blank');
  }, []);

  const scrollToAttachments = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'cashbacks_howitworks_scroll_to_default',
        event_details: {
          default_coupons_length: !!isDefaultCoupons,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_cashbacks_howitworks_scroll_to_default',
      mp_params: [
        {
          default_coupons_length: !!isDefaultCoupons,
        },
      ],
    });

    const timer = setTimeout(() => {
      scrollToElementById(DEFAULT_COUPONS_ID);
      closeBanner();
    }, 100);

    setTimeout(() => {
      document
        .getElementById(DEFAULT_COUPONS_ID)
        ?.classList?.add?.(DEFAULT_HEADERS_CLASS);
    }, 500);

    setTimeout(() => {
      document
        .getElementById(DEFAULT_COUPONS_ID)
        ?.classList?.remove?.(DEFAULT_HEADERS_CLASS);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BannerMobile>
      <Content
        isDefaultCoupons={isDefaultCoupons}
        isGoodieAgreement={isGoodieAgreement}
      />
      {isGoodieAgreement ? (
        <HowItWorksMobileActionButtonStyled
          color="primary"
          label={t('cashbacksShow')}
          onClick={scrollToAttachments}
          size="md"
        />
      ) : (
        <HowItWorksMobileActionButtonStyled
          color="primary"
          label={t('cashbacksGoTo')}
          onClick={goToGoodie}
          size="md"
        />
      )}
    </BannerMobile>
  );
};

export default memo(Mobile);

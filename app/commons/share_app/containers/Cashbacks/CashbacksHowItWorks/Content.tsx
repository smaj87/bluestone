import useTranslations from 'commons/hooks/useTranslations';
import { updateFrontCommons } from 'commons/hooks/useUserConfig/actions';
import { getFrontCommons } from 'commons/hooks/useUserConfig/selectors';
import ButtonClose from 'commons/share_app/components/Banner/ButtonClose';
import {
  HowItWorksTitleStyled,
  HowItWorksWrapperStyled,
} from 'commons/share_app/components/ShoppingPages/HowItWorks/styles';
import {
  ShoppingBannerContentStyled,
  ShoppingBannerStyled,
} from 'commons/share_app/components/ShoppingPages/ShoppingBanner/styles';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import ContentDefault from './ContentDefault';
import ContentGoodie from './ContentGoodie';

interface Props {
  isDefaultCoupons?: boolean;
  isGoodieAgreement?: boolean;
}

const Content: FC<Props> = ({ isDefaultCoupons, isGoodieAgreement }) => {
  const t = useTranslations();

  useEffect(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'cashbacks_howitworks_viewed',
        event_details: {
          default_coupons_length: !!isDefaultCoupons,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_cashbacks_howitworks_viewe',
      mp_params: [
        {
          default_coupons_length: !!isDefaultCoupons,
        },
      ],
    });
  }, []);

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
        event_category: 'cashbacks',
        event_action: 'cashbacks_howitworks_closed_banner',
        event_details: {
          default_coupons_length: !!isDefaultCoupons,
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

  return (
    <ShoppingBannerStyled>
      <HowItWorksTitleStyled>
        {t('howItWorksCahbacksTitle')}
      </HowItWorksTitleStyled>

      <ShoppingBannerContentStyled>
        <HowItWorksWrapperStyled>
          {isGoodieAgreement ? <ContentGoodie /> : <ContentDefault />}
        </HowItWorksWrapperStyled>
      </ShoppingBannerContentStyled>

      <ButtonClose onClick={closeBanner} />
    </ShoppingBannerStyled>
  );
};

export default memo(Content);

import useTranslations from 'commons/hooks/useTranslations';
import { updateFrontCommons } from 'commons/hooks/useUserConfig/actions';
import { getFrontCommons } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import { HowItWorksVisibleButtonStyled } from 'commons/share_app/components/ShoppingPages/HowItWorks/styles';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { isCashbacksBannerOpen } from '../selectors';
import Desktop from './Desktop';
import Mobile from './Mobile';

interface Props {
  isDefaultCoupons?: boolean;
  isCouponsLength?: boolean;
  isGoodieAgreement?: boolean;
}

const CouponsHowItWorks: FC<Props> = ({
  isCouponsLength,
  isDefaultCoupons,
  isGoodieAgreement,
}) => {
  const t = useTranslations();
  const isBannerVisible = useSelector(isCashbacksBannerOpen);

  useEffect(() => {
    const frontCommons = getStateValueBySelector(getFrontCommons);
    if (isCouponsLength) {
      dispatch(
        updateFrontCommons({
          ...frontCommons,
          interfaceUI: {
            ...(frontCommons.interfaceUI || {}),
            couponsBannerOpen: 0,
          },
        }),
      );
    } else {
      dispatch(
        updateFrontCommons({
          ...frontCommons,
          interfaceUI: {
            ...(frontCommons.interfaceUI || {}),
            couponsBannerOpen: 1,
          },
        }),
      );
    }
  }, []);

  const openBanner = useCallback(() => {
    const frontCommons = getStateValueBySelector(getFrontCommons);

    dispatch(
      updateFrontCommons({
        ...frontCommons,
        interfaceUI: {
          ...(frontCommons.interfaceUI || {}),
          cashbacksBannerOpen: 1,
        },
      }),
    );

    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'cashbacks_howitworks_clicked_open',
        event_details: {
          coupons_length: !!isCouponsLength,
          default_coupons_length: !!isDefaultCoupons,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_coupons_howitworks_clicked_open',
      mp_params: [
        {
          default_coupons_length: !!isDefaultCoupons,
        },
      ],
    });
  }, []);

  return isBannerVisible ? (
    <MobileLoader
      desktop={
        <Desktop
          isDefaultCoupons={isDefaultCoupons}
          isGoodieAgreement={isGoodieAgreement}
        />
      }
      mobile={
        <Mobile
          isDefaultCoupons={isDefaultCoupons}
          isGoodieAgreement={isGoodieAgreement}
        />
      }
    />
  ) : (
    <HowItWorksVisibleButtonStyled
      color="primary"
      label={t('howItWorks')}
      onClick={openBanner}
      size="md"
    />
  );
};

export default memo(CouponsHowItWorks);

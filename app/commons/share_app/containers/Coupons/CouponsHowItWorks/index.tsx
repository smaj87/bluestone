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

import { isCouponsBannerOpen } from '../selectors';
import Desktop from './Desktop';
import Mobile from './Mobile';

interface Props {
  isCouponsLength?: boolean;
  isDefaultCoupons?: boolean;
}

const CouponsHowItWorks: FC<Props> = ({
  isCouponsLength,
  isDefaultCoupons,
}) => {
  const t = useTranslations();
  const isBannerVisible = useSelector(isCouponsBannerOpen);

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
          couponsBannerOpen: 1,
        },
      }),
    );
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'coupons_howitworks_clicked_open',
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
      desktop={<Desktop isDefaultCoupons={isDefaultCoupons} />}
      mobile={<Mobile isDefaultCoupons={isDefaultCoupons} />}
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

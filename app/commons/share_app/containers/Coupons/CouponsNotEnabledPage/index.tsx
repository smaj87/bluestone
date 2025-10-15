import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import Infobar from 'commons/Infobar';
import {
  CardContentStyled,
  CardStyled,
} from 'commons/share_app/components/Card/styles';
import { CouponsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { isShowCouponNotEnabledPage as isShowCouponNotEnabledPageSelector } from '../selectors';
import Placeholder from './Placeholder';

const CouponsNotEnabled: FC = () => {
  const t = useTranslations();

  const isShow = useContext(CouponsRouterIsShowContext);
  const isShowCouponNotEnabledPage = useSelector(
    isShowCouponNotEnabledPageSelector,
  );

  useEffect(() => {
    if (isShowCouponNotEnabledPage && isShow) {
      const agreements = getStateValueBySelector(getAgreements);

      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'view_visited',
          event_details: {
            view: 'disabled',
            from: runtimeData?.couponsViewVisitedFrom || 'direct',
            sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          },
        }),
      );

      dataLayerPush({
        event: 'GA4_coupons_view_visited_disabled',
        mp_params: [
          {
            view: 'disabled',
            from: runtimeData?.couponsViewVisitedFrom || 'direct',
            sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          },
        ],
      });

      delete runtimeData?.couponsViewVisitedFrom;
    }
  }, [isShowCouponNotEnabledPage, isShow]);

  return isShowCouponNotEnabledPage ? (
    <CardStyled>
      <Infobar isOpen>
        <Infobar.Icon $image="galaxy" />
        <Infobar.Content>{t('smartFunctionsText')}</Infobar.Content>
      </Infobar>
      <CardContentStyled>
        <Placeholder />
      </CardContentStyled>
    </CardStyled>
  ) : null;
};

CouponsNotEnabled.displayName = 'CouponsNotEnabled';

export default memo(CouponsNotEnabled);

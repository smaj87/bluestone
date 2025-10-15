import EmptyPage from 'commons/EmptyPage';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
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

import CouponsHowItWorks from '../CouponsHowItWorks';
import { isShowEmptyCouponsPage } from '../selectors';

const CouponsEmptyPage: FC = () => {
  const t = useTranslations();

  const isShow = useContext(CouponsRouterIsShowContext);
  const isEmptyCouponsPageVisible = useSelector(isShowEmptyCouponsPage);

  useEffect(() => {
    if (isEmptyCouponsPageVisible && isShow) {
      const agreements = getStateValueBySelector(getAgreements);

      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'view_visited',
          event_details: {
            view: 'empty',
            from: runtimeData?.couponsViewVisitedFrom || 'direct',
            sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          },
        }),
      );

      dataLayerPush({
        event: 'GA4_view_visited_coupons_empty_page',
        mp_params: [
          {
            view: 'empty',
            from: runtimeData?.couponsViewVisitedFrom || 'direct',
            sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          },
        ],
      });

      delete runtimeData?.couponsViewVisitedFrom;
    }
  }, [isEmptyCouponsPageVisible, isShow]);

  return isEmptyCouponsPageVisible ? (
    <>
      <CouponsHowItWorks />
      <EmptyPage
        description={t('couponsEmptyDescription')}
        icon="coupon"
        title={t('couponsEmptyTitle')}
      />
    </>
  ) : null;
};

export default memo(CouponsEmptyPage);

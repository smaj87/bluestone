import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
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

import CouponsDefaultSellers from '../CouponsDefaultSellers';
import CouponsHowItWorks from '../CouponsHowItWorks';
import CouponsSellers from '../CouponsSellers';
import { getCoupons, getDefaultCoupons, isShowCouponPage } from '../selectors';
import CouponsList from './CouponsList';
import ExpireTodayAndNew from './ExpireTodayAndNew';
import { CouponsDefaultWrapperStyled } from './styles';

const CouponPage: FC = () => {
  const isShow = useContext(CouponsRouterIsShowContext);
  const isContentVisible = useSelector(isShowCouponPage);
  const coupons = useSelector(getCoupons);
  const defaultCoupons = useSelector(getDefaultCoupons);

  useEffect(() => {
    if (isContentVisible && isShow) {
      const agreements = getStateValueBySelector(getAgreements);

      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'view_visited',
          event_details: {
            view: 'list',
            from: runtimeData?.couponsViewVisitedFrom || 'direct',
            sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          },
        }),
      );

      delete runtimeData?.couponsViewVisitedFrom;

      dataLayerPush({
        event: 'coupons_list_page',
      });
    }
  }, [isShow, isContentVisible]);

  return isContentVisible ? (
    <>
      <CouponsHowItWorks
        isCouponsLength={!!coupons.length}
        isDefaultCoupons={!!defaultCoupons.length}
      />
      <ExpireTodayAndNew />
      <CouponsSellers />
      <CouponsList coupons={coupons} />
      <CouponsDefaultSellers />
      <CouponsDefaultWrapperStyled>
        <CouponsList coupons={defaultCoupons} />
      </CouponsDefaultWrapperStyled>
    </>
  ) : null;
};

export default memo(CouponPage);

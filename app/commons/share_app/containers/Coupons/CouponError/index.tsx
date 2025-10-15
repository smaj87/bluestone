import ErrorPage from 'commons/ErrorPage';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { isFetchingError as isUserConfigFetchingErrorSelector } from 'commons/hooks/useUserConfig/selectors';
import { CouponsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import {
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
} from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { fetchCoupons } from '../actions';
import { isFetchingError as isFetchingErrorSelector } from '../selectors';

const CouponErrorPage: FC = () => {
  const t = useTranslations();

  const isShow = useContext(CouponsRouterIsShowContext);
  const isFetchingError = useSelector(isFetchingErrorSelector);
  const isUserConfigFetchingError = useSelector(
    isUserConfigFetchingErrorSelector,
  );
  const onClick = useCallback(() => dispatch(fetchCoupons()), []);

  useEffect(() => {
    if ((isFetchingError || isUserConfigFetchingError) && isShow) {
      const agreements = getStateValueBySelector(getAgreements);

      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'view_visited',
          event_details: {
            view: 'error',
            from: runtimeData?.couponsViewVisitedFrom || 'direct',
            sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          },
        }),
      );

      dataLayerPush({
        event: 'GA4_coupons_view_visited_error',
        mp_params: [
          {
            view: 'error',
            from: runtimeData?.couponsViewVisitedFrom || 'direct',
            sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          },
        ],
      });

      delete runtimeData?.couponsViewVisitedFrom;
    }
  }, [isFetchingError, isUserConfigFetchingError, isShow]);

  return isFetchingError || isUserConfigFetchingError ? (
    <ErrorPage
      color="error"
      label={t('ctaTryAgain')}
      onClick={onClick}
      title={t('couponsError')}
    />
  ) : null;
};

CouponErrorPage.displayName = 'CouponErrorPage';

export default memo(CouponErrorPage);

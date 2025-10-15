import ErrorPage from 'commons/ErrorPage';
import {
  SMART_ADS_ID,
  SMART_FUNCTIONS_ID,
} from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { isFetchingError as isUserConfigFetchingErrorSelector } from 'commons/hooks/useUserConfig/selectors';
import {
  getCurrentListName,
  isFetchingError as isFetchingErrorSelector,
} from 'commons/share_app/containers/Orders/selectors';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { fetchOrders } from '../actions';

const OrdersError: FC = () => {
  const t = useTranslations();

  const isFetchingError = useSelector(isFetchingErrorSelector);
  const isUserConfigFetchingError = useSelector(
    isUserConfigFetchingErrorSelector,
  );
  const currentListName = useSelector(getCurrentListName);

  const onClick = useCallback(
    () => dispatch(fetchOrders(currentListName)),
    [currentListName],
  );

  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'view_visited',
        event_details: {
          view: 'error',
          from: runtimeData?.ordersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          mkt_consent: !!agreements?.[SMART_ADS_ID],
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_orders_view_visited_error',
      mp_params: [
        {
          view: 'error',
          from: runtimeData?.ordersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          mkt_consent: !!agreements?.[SMART_ADS_ID],
        },
      ],
    });

    delete runtimeData?.ordersViewVisitedFrom;
  }, []);

  return isFetchingError || isUserConfigFetchingError ? (
    <ErrorPage
      color="error"
      label={t('ctaTryAgain')}
      onClick={onClick}
      title={t('ordersError')}
    />
  ) : null;
};

export default memo(OrdersError);

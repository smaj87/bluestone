import {
  SMART_ADS_ID,
  SMART_FUNCTIONS_ID,
} from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import OrdersFetchStatusesInfo from '../OrdersFetchStatusesInfo';
import OrdersList from '../OrdersList';
import OrdersDelivered from './OrdersDelivered';
import OrdersNavbar from './OrdersNavbar';

const OrdersContent: FC = () => {
  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'view_visited',
        event_details: {
          view: 'list',
          from: runtimeData?.ordersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          mkt_consent: !!agreements?.[SMART_ADS_ID],
        },
      }),
    );

    delete runtimeData?.ordersViewVisitedFrom;

    dataLayerPush({
      event: 'orders_page',
    });
  }, []);

  return (
    <>
      <OrdersFetchStatusesInfo />
      <OrdersDelivered />
      <OrdersNavbar />
      <OrdersList />
    </>
  );
};

export default memo(OrdersContent);

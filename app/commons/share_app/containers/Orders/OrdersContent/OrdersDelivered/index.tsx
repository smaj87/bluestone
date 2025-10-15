import useTranslations from 'commons/hooks/useTranslations';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import history from 'commons/utils/history';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ORDERS_PICKUP_AVAILABLE_URL } from '../../constants';
import { getPickupAvailableOrdersLength } from '../../selectors';
import {
  OrdersDeliveredButton,
  OrdersDeliveredIconStyled,
  OrdersDeliveredStyled,
} from './styles';

const OrdersDelivered: FC = () => {
  const t = useTranslations();
  const onClick = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'sorting_list',
        event_details: {
          view: 'pickup_available_message',
        },
      }),
    );

    dataLayerPush({
      event: 'orders_sorting_list_pickup_available_message',
    });

    history.push(`/${ORDERS_PICKUP_AVAILABLE_URL}`);
  }, []);

  const pickupAvailableOrdersNumber = useSelector(
    getPickupAvailableOrdersLength,
  );

  if (!pickupAvailableOrdersNumber) {
    return null;
  }

  return (
    <OrdersDeliveredStyled>
      <OrdersDeliveredIconStyled $image="furgonetka" />
      <p>{t('ordersDelivered', { pickupAvailableOrdersNumber })}</p>
      <OrdersDeliveredButton
        color="primary"
        label={t('ctaShow')}
        onClick={onClick}
        size="md"
      />
    </OrdersDeliveredStyled>
  );
};

export default memo(OrdersDelivered);

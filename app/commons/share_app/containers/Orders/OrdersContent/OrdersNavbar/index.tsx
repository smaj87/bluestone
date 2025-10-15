import { IS_ACTIVE_CLASS } from 'commons/Chips/constants';
import { ChipsButtonStyled, ChipsNameStyled } from 'commons/Chips/styles';
import useTranslations from 'commons/hooks/useTranslations';
import {
  DONE_ORDERS_LIST_NAME,
  IN_PROGRESS_ORDERS_LIST_NAME,
  ORDERS_DONE_URL,
  ORDERS_IN_PROGRESS_URL,
  ORDERS_PICKUP_AVAILABLE_URL,
  PICKUP_AVAILABLE_LIST_NAME,
} from 'commons/share_app/containers/Orders/constants';
import {
  getCountByListName,
  getCurrentListName,
  isAnyOrdersExist as isAnyOrdersExistSelector,
} from 'commons/share_app/containers/Orders/selectors';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import history from 'commons/utils/history';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { OrderNavbarStyled } from './styles';

const OrdersNavbar: FC = () => {
  const t = useTranslations();
  const inProgressOrdersNumber = useSelector(
    getCountByListName,
    IN_PROGRESS_ORDERS_LIST_NAME,
  );
  const currentListName = useSelector(getCurrentListName);
  const isAnyOrdersExist = useSelector(isAnyOrdersExistSelector);

  const showInProgressOrders = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'sorting_list',
        event_details: {
          view: 'in_progress',
        },
      }),
    );

    dataLayerPush({
      event: 'orders_sorting_list_in_progress',
    });

    history.push(`/${ORDERS_IN_PROGRESS_URL}`);
  }, []);

  const showPickupAvailableOrders = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'sorting_list',
        event_details: {
          view: 'pickup_available',
        },
      }),
    );

    dataLayerPush({
      event: 'orders_sorting_list_pickup_available',
    });

    history.push(`/${ORDERS_PICKUP_AVAILABLE_URL}`);
  }, []);

  const showDoneOrders = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'sorting_list',
        event_details: {
          view: 'done',
        },
      }),
    );

    dataLayerPush({
      event: 'orders_sorting_list_done',
    });

    history.push(`/${ORDERS_DONE_URL}`);
  }, []);

  if (!isAnyOrdersExist) {
    return null;
  }

  return (
    <OrderNavbarStyled role="group">
      <ChipsButtonStyled
        className={
          currentListName === IN_PROGRESS_ORDERS_LIST_NAME
            ? IS_ACTIVE_CLASS
            : ''
        }
        onClick={showInProgressOrders}
      >
        <ChipsNameStyled>
          {t('ordersInProgress')}
          {inProgressOrdersNumber > 0 && <> ({inProgressOrdersNumber})</>}
        </ChipsNameStyled>
      </ChipsButtonStyled>
      <ChipsButtonStyled
        className={
          currentListName === PICKUP_AVAILABLE_LIST_NAME ? IS_ACTIVE_CLASS : ''
        }
        onClick={showPickupAvailableOrders}
      >
        <ChipsNameStyled>{t('ordersPickupAvailable')}</ChipsNameStyled>
      </ChipsButtonStyled>
      <ChipsButtonStyled
        className={
          currentListName === DONE_ORDERS_LIST_NAME ? IS_ACTIVE_CLASS : ''
        }
        onClick={showDoneOrders}
      >
        <ChipsNameStyled>{t('ordersDone')}</ChipsNameStyled>
      </ChipsButtonStyled>
    </OrderNavbarStyled>
  );
};

export default memo(OrdersNavbar);

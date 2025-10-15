import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncing from 'commons/LoaderBouncing';
import LoadingPage from 'commons/LoadingPage';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { fetchOrders } from '../actions';
import OrderEditMenu from '../OrderEditMenu';
import OrdersError from '../OrdersError';
import OrdersListItem from '../OrdersListItem';
import {
  getCurrentListName,
  getCurrentListOrders,
  getCurrentListOrdersLength,
  getIsLoadMoreButtonVisible,
  isAnyOrdersExist as isAnyOrdersExistSelector,
  isFetched,
  isFetching,
  isFetchingError,
} from '../selectors';
import { Order } from '../types';
import {
  OrdersHeadingStyled,
  OrdersListActionBoxStyled,
  OrdersListStyled,
} from './styles';

const OrdersList: FC = () => {
  const t = useTranslations();
  const isFetchedOrders = useSelector(isFetched);
  const isFetchingOrdersError = useSelector(isFetchingError);
  const ordersLength = useSelector(getCurrentListOrdersLength);
  const isAnyOrdersExist = useSelector(isAnyOrdersExistSelector);

  const orders = useSelector(getCurrentListOrders) as Order[];
  const currentListName = useSelector(getCurrentListName);
  const isFetchingOrders = useSelector(isFetching);
  const isLoadMoreButtonVisible = useSelector(getIsLoadMoreButtonVisible);

  const fetchOrdersAgain = useCallback(
    () => dispatch(fetchOrders(currentListName)),
    [currentListName],
  );

  if (!isFetchedOrders && !isFetchingOrdersError) {
    return <LoadingPage />;
  }

  if (isFetchingOrdersError) {
    return <OrdersError />;
  }

  if (!isAnyOrdersExist) {
    return (
      <OrdersHeadingStyled>
        {t('ordersEmptyAllLists', undefined)}
      </OrdersHeadingStyled>
    );
  }

  if (isFetchedOrders && !ordersLength) {
    return (
      <OrdersHeadingStyled>
        {t('ordersEmptyList', undefined)}
      </OrdersHeadingStyled>
    );
  }

  return (
    <>
      <OrdersListStyled>
        {orders.map((order) => (
          <OrdersListItem
            key={order.id}
            id={order.id}
            orderDate={order.orderDate}
            schema={order.schema}
            status={order.status}
          />
        ))}
      </OrdersListStyled>
      {isLoadMoreButtonVisible && !isFetchingOrders && (
        <OrdersListActionBoxStyled>
          <Button
            color="defaultNeutral"
            label={t('ordersLoadMore')}
            onClick={fetchOrdersAgain}
            shape="full"
            size="lg"
          />
        </OrdersListActionBoxStyled>
      )}
      <OrderEditMenu />
      {isFetchingOrders && <LoaderBouncing />}
    </>
  );
};

export default memo(OrdersList);

import { createSelector } from 'commons/utils/reselect';

import {
  getOrdersUrlProps,
  getSingleOrderUrlProps,
} from 'containers/App/selectors';

import {
  FETCH_ORDERS_LIMIT,
  IN_PROGRESS_ORDERS_LIST_NAME,
  KEY,
  PICKUP_AVAILABLE_LIST_NAME,
} from './constants';
import { initialState } from './reducer';
import { Order, OrderData, OrderListType, OrdersRootState } from './types';

export const getState = createSelector(
  [(state: OrdersRootState) => state?.[KEY] || initialState],
  (state) => state,
);

export const getCurrentListName = createSelector(
  [(state) => getOrdersUrlProps(state, 'listUrlName')],
  (listUrlName) => listUrlName,
);

export const getOrderById = createSelector(
  [getState, (_: OrdersRootState, id?: number) => id],
  (state, id): Order | undefined => {
    let order: Order | undefined;

    if (id) {
      Object.values(state.orders).forEach((ordersListData) => {
        ordersListData.list.forEach((o) => {
          if (o.id === id) {
            order = o;
          }
        });
      });
    }

    return order;
  },
);

export const getPage = createSelector(
  [getState, getCurrentListName],
  (state, currentList) => state.orders[currentList].page,
);

export const isFetched = createSelector(
  [getState, getCurrentListName],
  (state, currentList) => state.orders[currentList].isFetched,
);

export const isFetching = createSelector(
  [getState, getCurrentListName],
  (state, currentList) => state.orders[currentList].isFetching,
);

export const isFetchingError = createSelector(
  [getState, getCurrentListName],
  (state, currentList) => state.orders[currentList].isFetchingError,
);

export const getIsLoadMoreButtonVisible = createSelector(
  [getState, getCurrentListName, getPage],
  (state, currentList, page) => {
    if (currentList === IN_PROGRESS_ORDERS_LIST_NAME) {
      return false;
    }
    return (page - 1) * FETCH_ORDERS_LIMIT < state.orders[currentList].count;
  },
);

export const isFetchedSingleOrder = createSelector(
  getState,
  (state) => state.isFetchedSingleOrder,
);

export const isFetchingErrorSingleOrder = createSelector(
  getState,
  (state) => state.isFetchingErrorSingleOrder,
);

export const getSingleOrder = createSelector(
  [getState, (state) => getSingleOrderUrlProps(state, 'id')],
  (state, currentOrderId) => state.ordersDetails[currentOrderId],
);

export const getCurrentListOrders = createSelector(
  [getState, getCurrentListName],
  (state, currentList) => state.orders[currentList].list,
);

export const getCurrentListOrdersLength = createSelector(
  [getCurrentListOrders],
  (orders) => orders.length,
);

export const getOrdersDataByListName = createSelector(
  [getState, (_: unknown, listName: OrderListType) => listName],
  (state, listName) => state.orders[listName],
);

export const getCountByListName = createSelector(
  [getOrdersDataByListName],
  (ordersData) => ordersData?.count,
);

export const getPickupAvailableOrdersLength = createSelector(
  [
    (state) => getOrdersDataByListName(state, IN_PROGRESS_ORDERS_LIST_NAME),
    (state) => getCountByListName(state, PICKUP_AVAILABLE_LIST_NAME),
  ],
  (inProgressOrdersData: OrderData, pickupAvailableOrdersLength) =>
    pickupAvailableOrdersLength > 0
      ? pickupAvailableOrdersLength
      : inProgressOrdersData.list.filter(
          (o) => o.status === 'OrderPickupAvailable',
        ).length,
);

export const isFetchingLatestStatuses = createSelector(
  getState,
  (state) => state.isFetchingLatestStatuses,
);

export const isFetchingLatestStatusesError = createSelector(
  getState,
  (state) => state.isFetchingLatestStatusesError,
);

export const isAnyOrdersExist = createSelector(
  getState,
  (state) => state.allOrdersCount > 0 && state.isFetchedOrders,
);

export const isToolbarMenuDotVisible = createSelector(
  getState,
  (state) => state.isMenuDotVisible,
);

export const getIsFirstTimeViewVisible = createSelector(
  getState,
  (state) => state.isFirstTimeViewVisible,
);

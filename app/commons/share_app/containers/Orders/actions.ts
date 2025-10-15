import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { openModal } from 'commons/Modal/actions';
import { showError, showSuccess } from 'commons/Notifications/actions';
import t from 'commons/translations/t';
import { WEBMAIL_API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';
import { getState as getWebStorageState } from 'commons/utils/webStorage';

import { ORDERS_CHANGE_DELIVERED_MODAL_ID } from 'components/Modals/OrdersChangeToDeliveredModal/constants';

import {
  FETCH_LATEST_STATUSES,
  FETCH_LATEST_STATUSES_FAILURE,
  FETCH_LATEST_STATUSES_SUCCESS,
  FETCH_ORDERS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_LIMIT,
  FETCH_ORDERS_SUCCESS,
  FETCH_SINGLE_ORDER,
  IN_PROGRESS_ORDERS_LIST_NAME,
  MARK_AS_DELIVERED,
  ORDER_LIST_STATUSES,
  RESET_STATE,
  SET_CURRENT_LIST,
  SET_FIRST_TIME_VIEW_VISIBLE,
  SET_MENU_DOT_VISIBILITY,
} from './constants';
import { getPage } from './selectors';
import {
  Order,
  OrderListType,
  OrdersResponse,
  StatusesResponse,
} from './types';
import {
  getFetchLatestStatusesOrderParams,
  getOrderIdsOlderThan30Days,
} from './utils';

const fetchOrdersSuccess = (
  orders: Order[],
  currentListName: OrderListType,
  count: number,
  allOrdersCount: number = 0,
) => ({
  type: FETCH_ORDERS_SUCCESS,
  orders,
  currentListName,
  count,
  allOrdersCount,
});

export const fetchOrders =
  (currentListName: OrderListType): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: FETCH_ORDERS, currentListName });

    try {
      const page = getPage(getState());
      const queryParams = new URLSearchParams({});

      if (currentListName !== IN_PROGRESS_ORDERS_LIST_NAME) {
        queryParams.append('limit', `${FETCH_ORDERS_LIMIT}`);
        queryParams.append('offset', `${(page - 1) * FETCH_ORDERS_LIMIT}`);
      }

      ORDER_LIST_STATUSES[currentListName].forEach((status) => {
        queryParams.append('orderStatus[]', status);
      });

      const ordersResponse = (await request(
        `${WEBMAIL_API_URL}/shopping?${queryParams.toString()}`,
      )) as OrdersResponse;

      dispatch(
        fetchOrdersSuccess(
          ordersResponse.results,
          currentListName,
          ordersResponse.ordersWithStatusesCount || ordersResponse.count,
          ordersResponse.allOrdersCount,
        ),
      );

      if (currentListName === IN_PROGRESS_ORDERS_LIST_NAME) {
        const oldOrderIds = getOrderIdsOlderThan30Days(ordersResponse.results);
        const lastModalOpeningDate = getWebStorageState(
          ORDERS_CHANGE_DELIVERED_MODAL_ID,
          localStorage,
        );

        if (oldOrderIds.length > 0 && !lastModalOpeningDate) {
          dispatch(
            openModal(ORDERS_CHANGE_DELIVERED_MODAL_ID, {
              orderIds: oldOrderIds,
            }),
          );
        }
        // Z kazdym fetchem jak przyjda zamowienia to robimy zapytanie o ich najnowsze statusy
        dispatch(fetchLatestStatuses(ordersResponse.results));
      }
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch({ type: FETCH_ORDERS_FAILURE, currentListName });
    }
  };

const fetchLatestStatusesSuccess = (statuses: StatusesResponse['orders']) => ({
  type: FETCH_LATEST_STATUSES_SUCCESS,
  statuses,
});

const fetchLatestStatusesFailure = () => ({
  type: FETCH_LATEST_STATUSES_FAILURE,
});

export const fetchLatestStatuses =
  (orders: Order[]): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_LATEST_STATUSES });

    try {
      const statuses = (await request(`${WEBMAIL_API_URL}/shopping/status`, {
        method: 'POST',
        body: {
          orders: getFetchLatestStatusesOrderParams(orders),
        },
      })) as StatusesResponse;

      dispatch(fetchLatestStatusesSuccess(statuses.orders));
    } catch (e) {
      dispatch(fetchLatestStatusesFailure());
      reportCatchErrorFromAction(e as Error);
    }
  };

export const fetchSingleOrder =
  (orderId: string): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: FETCH_SINGLE_ORDER,
      isFetchedSingleOrder: false,
      isFetchingErrorSingleOrder: false,
    });

    try {
      const order = (await request(
        `${WEBMAIL_API_URL}/shopping/${orderId}`,
      )) as Order;

      dispatch({
        type: FETCH_SINGLE_ORDER,
        isFetchedSingleOrder: true,
        isFetchingErrorSingleOrder: false,
        order,
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch({
        type: FETCH_SINGLE_ORDER,
        isFetchedSingleOrder: false,
        isFetchingErrorSingleOrder: true,
      });
    }
  };

export const setCurrentList = (listName: OrderListType) => ({
  type: SET_CURRENT_LIST,
  listName,
});

export const changeOrderStatusesToDelivered =
  (orderIds: number[]): AppThunk =>
  async (dispatch) => {
    try {
      await request(`${WEBMAIL_API_URL}/shopping/close`, {
        method: 'PATCH',
        body: {
          ids: orderIds,
        },
      });

      orderIds.forEach((orderId) => {
        dispatch({
          type: MARK_AS_DELIVERED,
          orderId,
        });
      });
      dispatch(showSuccess(t('ordersUpdated')));
    } catch (e) {
      dispatch(showError(t('orderUpdateError')));
      reportCatchErrorFromAction(e as Error);
    }
  };

export const setOrdersMenuDotVisibility = (isVisible: boolean) => ({
  type: SET_MENU_DOT_VISIBILITY,
  isVisible,
});

export const setFirstTimeOrdersViewVisible = (
  isFirstTimeViewVisible: boolean,
) => ({
  type: SET_FIRST_TIME_VIEW_VISIBLE,
  isFirstTimeViewVisible,
});

export const resetOrdersData = () => ({
  type: RESET_STATE,
});

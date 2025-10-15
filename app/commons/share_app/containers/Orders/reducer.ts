import {
  DONE_ORDERS_LIST_NAME,
  FETCH_LATEST_STATUSES,
  FETCH_LATEST_STATUSES_FAILURE,
  FETCH_LATEST_STATUSES_SUCCESS,
  FETCH_ORDERS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_SUCCESS,
  FETCH_SINGLE_ORDER,
  IN_PROGRESS_ORDERS_LIST_NAME,
  MARK_AS_DELIVERED,
  ORDER_LIST_STATUSES,
  PICKUP_AVAILABLE_LIST_NAME,
  RESET_STATE,
  SET_CURRENT_LIST,
  SET_FIRST_TIME_VIEW_VISIBLE,
  SET_MENU_DOT_VISIBILITY,
} from './constants';
import { OrdersAction, OrdersState } from './types';

export const initialState: OrdersState = {
  orders: {
    [IN_PROGRESS_ORDERS_LIST_NAME]: {
      list: [],
      page: 1,
      isFetched: false,
      isFetching: false,
      isFetchingError: false,
      count: 0,
    },
    [PICKUP_AVAILABLE_LIST_NAME]: {
      list: [],
      page: 1,
      isFetched: false,
      isFetching: false,
      isFetchingError: false,
      count: 0,
    },
    [DONE_ORDERS_LIST_NAME]: {
      list: [],
      page: 1,
      isFetched: false,
      isFetching: false,
      isFetchingError: false,
      count: 0,
    },
  },
  ordersDetails: {},
  isFetchedOrders: false,
  isFetchedSingleOrder: false,
  isFetchingErrorSingleOrder: false,
  isFetchingLatestStatuses: false,
  isFetchingLatestStatusesError: false,
  currentListName: IN_PROGRESS_ORDERS_LIST_NAME,
  isMenuDotVisible: false,
  allOrdersCount: 0,
  isFirstTimeViewVisible: false,
};

export default (state = initialState, action: OrdersAction): OrdersState => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: {
          ...state.orders,
          [action.currentListName]: {
            ...state.orders[action.currentListName],
            isFetching: true,
            isFetchingError: false,
          },
        },
      };
    case FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        allOrdersCount: action.allOrdersCount,
        isFetchedOrders: true,
        orders: {
          ...state.orders,
          [action.currentListName]: {
            ...state.orders[action.currentListName],
            list: [
              ...state.orders[action.currentListName].list,
              ...action.orders,
            ],
            isFetched: true,
            isFetching: false,
            isFetchingError: false,
            page: state.orders[action.currentListName].page + 1,
            count: action.count,
          },
        },
      };
    }
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        orders: {
          ...state.orders,
          [action.currentListName]: {
            ...state.orders[action.currentListName],
            isFetching: false,
            isFetchingError: true,
          },
        },
      };
    case FETCH_SINGLE_ORDER: {
      const newState = { ...state };

      if (action.order) {
        newState.ordersDetails = {
          ...newState.ordersDetails,
          [action.order.id]: action.order,
        };
      }

      return {
        ...newState,
        isFetchedSingleOrder:
          action.isFetchedSingleOrder ?? state.isFetchedSingleOrder,
        isFetchingErrorSingleOrder:
          action.isFetchingErrorSingleOrder ?? state.isFetchingErrorSingleOrder,
      };
    }
    case MARK_AS_DELIVERED: {
      const newState = {
        ...state,
      };

      if (action.orderId) {
        if (newState.currentListName === DONE_ORDERS_LIST_NAME) {
          newState.orders[DONE_ORDERS_LIST_NAME].list = [
            ...newState.orders[DONE_ORDERS_LIST_NAME].list.map((order) => {
              if (order.id === action.orderId) {
                const editedOrder = { ...order };
                editedOrder.status = 'OrderDelivered';
                return editedOrder;
              }
              return order;
            }),
          ];
        } else {
          [IN_PROGRESS_ORDERS_LIST_NAME, PICKUP_AVAILABLE_LIST_NAME].forEach(
            (listName) => {
              const listContainsOrder =
                newState.orders[listName].list.findIndex(
                  (order) => order.id === action.orderId,
                ) >= 0;
              newState.orders[listName] = {
                ...newState.orders[listName],
                list: newState.orders[listName].list.filter(
                  (order) => order.id !== action.orderId,
                ),
                count:
                  newState.orders[listName].count > 0 && listContainsOrder
                    ? newState.orders[listName].count - 1
                    : newState.orders[listName].count,
              };
            },
          );
          newState.orders[DONE_ORDERS_LIST_NAME] =
            initialState.orders[DONE_ORDERS_LIST_NAME];
        }
      }

      return newState;
    }
    case FETCH_LATEST_STATUSES:
      return {
        ...state,
        isFetchingLatestStatuses: true,
        isFetchingLatestStatusesError: false,
      };
    case FETCH_LATEST_STATUSES_SUCCESS: {
      const newState = {
        ...state,
        isFetchingLatestStatuses: false,
        isFetchingLatestStatusesError: false,
      };

      const ordersToRemove = action.statuses
        .filter((statusData) =>
          ORDER_LIST_STATUSES[DONE_ORDERS_LIST_NAME].includes(
            statusData.orderStatus,
          ),
        )
        .map((statusData) => statusData.id);

      newState.orders[IN_PROGRESS_ORDERS_LIST_NAME].count -=
        ordersToRemove.length;

      [IN_PROGRESS_ORDERS_LIST_NAME, PICKUP_AVAILABLE_LIST_NAME].forEach(
        (listName) => {
          newState.orders[listName] = {
            ...newState.orders[listName],
            list: state.orders[listName].list
              .filter((o) => !ordersToRemove.includes(o.id))
              .map((o) => {
                const statusData = action.statuses.find((s) => s.id === o.id);
                const newStatus = statusData?.orderStatus;

                if (newStatus) {
                  const editedOrder = {
                    ...o,
                    status: newStatus,
                    updatedAt: statusData?.orderStatusDate || o.updatedAt,
                  };

                  return editedOrder;
                }

                return o;
              }),
          };
        },
      );

      newState.orders[DONE_ORDERS_LIST_NAME] =
        initialState.orders[DONE_ORDERS_LIST_NAME];

      return newState;
    }
    case FETCH_LATEST_STATUSES_FAILURE:
      return {
        ...state,
        isFetchingLatestStatuses: false,
        isFetchingLatestStatusesError: true,
      };
    case SET_CURRENT_LIST:
      return {
        ...state,
        currentListName: action.listName,
      };
    case SET_MENU_DOT_VISIBILITY:
      return {
        ...state,
        isMenuDotVisible: action.isVisible,
      };
    case SET_FIRST_TIME_VIEW_VISIBLE:
      return {
        ...state,
        isFirstTimeViewVisible: action.isFirstTimeViewVisible,
      };
    case RESET_STATE:
      return initialState;
    default:
  }

  return state;
};

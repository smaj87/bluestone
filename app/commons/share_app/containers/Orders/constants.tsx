import { IconImage } from 'commons/Icon/iconImage';

import { OrderListType, OrderStatus, OrderStatusesUrlType } from './types';

export const KEY = 'ordersTab';

export const ORDERS_CONTAINER_ID = 'js_OrdersContainer';

export const PAGE_NAME = 'Zamówienia';
export const ORDERS_URL_NAME = 'Zamowienia';

export const ORDERS_IN_PROGRESS_URL = `${ORDERS_URL_NAME}/_listUrlName/W-trakcie`;
export const ORDERS_PICKUP_AVAILABLE_URL = `${ORDERS_URL_NAME}/_listUrlName/Gotowe-do-odbioru`;
export const ORDERS_DONE_URL = `${ORDERS_URL_NAME}/_listUrlName/Zakonczone`;

export const FETCH_ORDERS = `${KEY}/FETCH_ORDERS` as const;
export const FETCH_ORDERS_SUCCESS = `${KEY}/FETCH_ORDERS_SUCCESS` as const;
export const FETCH_ORDERS_FAILURE = `${KEY}/FETCH_ORDERS_FAILURE` as const;
export const FETCH_SINGLE_ORDER = `${KEY}/FETCH_SINGLE_ORDER` as const;

export const SET_CURRENT_LIST = `${KEY}/SET_CURRENT_LIST` as const;
export const MARK_AS_DELIVERED = `${KEY}/MARK_AS_DELIVERED` as const;
export const SET_MENU_DOT_VISIBILITY =
  `${KEY}/SET_MENU_DOT_VISIBILITY` as const;
export const SET_FIRST_TIME_VIEW_VISIBLE =
  `${KEY}/SET_FIRST_TIME_VIEW_VISIBLE` as const;
export const RESET_STATE = `${KEY}/RESET_STATE` as const;

export const FETCH_ORDERS_LIMIT = 20;
export const FETCH_LATEST_STATUS_TIME_LIMIT = 3600000; // Sprawdzenie, czy różnica wynosi co najmniej godzinę (3600000 ms)

export const FETCH_LATEST_STATUSES = `${KEY}/FETCH_LATEST_STATUSES` as const;
export const FETCH_LATEST_STATUSES_SUCCESS =
  `${KEY}/FETCH_LATEST_STATUSES_SUCCESS` as const;
export const FETCH_LATEST_STATUSES_FAILURE =
  `${KEY}/FETCH_LATEST_STATUSES_FAILURE` as const;

export const IN_PROGRESS_ORDERS_LIST_NAME = 'in-progress' as const;
export const PICKUP_AVAILABLE_LIST_NAME = 'pick-up' as const;
export const DONE_ORDERS_LIST_NAME = 'done' as const;

export const ORDER_LISTS_URL_NAMES: {
  [listName in OrderStatusesUrlType]: OrderListType;
} = {
  'W-trakcie': IN_PROGRESS_ORDERS_LIST_NAME,
  'Gotowe-do-odbioru': PICKUP_AVAILABLE_LIST_NAME,
  Zakonczone: DONE_ORDERS_LIST_NAME,
};

export const STATUSES: {
  [statusType in OrderStatus]: {
    icon: IconImage;
    color: string;
  };
} = {
  OrderProcessing: {
    icon: 'refresh',
    color: 'var(--order-status-bg--processing)',
  },
  OrderInTransit: {
    icon: 'truck',
    color: 'var(--order-status-bg--transit)',
  },
  OrderDelivered: {
    icon: 'check',
    color: 'var(--order-status-bg--delivered)',
  },
  OrderCancelled: {
    icon: 'error',
    color: 'var(--order-status-bg--error)',
  },
  OrderPaymentDue: {
    icon: 'dollar',
    color: 'var(--order-status-bg--processing)',
  },
  OrderPickupAvailable: {
    icon: 'furgonetka',
    color: 'var(--order-status-bg--pickup)',
  },
  OrderProblem: {
    icon: 'alert',
    color: 'var(--order-status-bg--error)',
  },
  OrderReturned: {
    icon: 'answer',
    color: 'var(--order-status-bg--delivered)',
  },
  OrderNew: {
    icon: 'basket',
    color: 'var(--order-status-bg--processing)',
  },
  OrderDelayed: {
    icon: 'error',
    color: 'var(--order-status-bg--processing)',
  },
};

export const ORDER_LIST_STATUSES: {
  [listName in OrderListType]: OrderStatus[];
} = {
  [IN_PROGRESS_ORDERS_LIST_NAME]: [
    'OrderInTransit',
    'OrderPaymentDue',
    'OrderPickupAvailable',
    'OrderProblem',
    'OrderProcessing',
    'OrderNew',
    'OrderDelayed',
  ],
  [PICKUP_AVAILABLE_LIST_NAME]: ['OrderPickupAvailable'],
  [DONE_ORDERS_LIST_NAME]: [
    'OrderCancelled',
    'OrderDelivered',
    'OrderReturned',
  ],
};

export const IS_ACTIVE_CLASS = 'is-active';

export const CARRIERS = [
  'allegro',
  'inpost',
  'dpd',
  'orlen',
  'poczta',
  'gls',
  'fedex',
  'ups',
  'pocztex',
  'dhl',
  'meest',
  'raben',
  'hellmann',
  'rohling',
  'geis',
  'erontrans',
  'rhenus',
  'ambro',
] as const;

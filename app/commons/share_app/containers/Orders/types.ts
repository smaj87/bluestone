import {
  CARRIERS,
  DONE_ORDERS_LIST_NAME,
  FETCH_LATEST_STATUSES,
  FETCH_LATEST_STATUSES_FAILURE,
  FETCH_LATEST_STATUSES_SUCCESS,
  FETCH_ORDERS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_SUCCESS,
  FETCH_SINGLE_ORDER,
  IN_PROGRESS_ORDERS_LIST_NAME,
  KEY,
  MARK_AS_DELIVERED,
  PICKUP_AVAILABLE_LIST_NAME,
  RESET_STATE,
  SET_CURRENT_LIST,
  SET_FIRST_TIME_VIEW_VISIBLE,
  SET_MENU_DOT_VISIBILITY,
} from './constants';

export interface UrlParamsInterface {
  listUrlName: OrderListType;
}

export interface OrdersResponse {
  count: number; // TODO do usuniecia
  ordersWithStatusesCount: number;
  allOrdersCount: number;
  results: Order[];
}

export interface StatusesResponse {
  orders: {
    id: number;
    orderStatusDate: string;
    orderStatus: OrderStatus;
    trackingNumber: string;
  }[];
}

export type OrderListType =
  | typeof IN_PROGRESS_ORDERS_LIST_NAME
  | typeof DONE_ORDERS_LIST_NAME
  | typeof PICKUP_AVAILABLE_LIST_NAME;

export type OrderStatusesUrlType =
  | 'W-trakcie'
  | 'Gotowe-do-odbioru'
  | 'Zakonczone';

export interface OrdersState {
  orders: {
    [type in OrderListType]: OrderData;
  };
  ordersDetails: {
    [orderId: number]: Order;
  };
  isFetchedOrders: boolean;
  isFetchedSingleOrder: boolean;
  isFetchingErrorSingleOrder: boolean;
  isFetchingLatestStatuses: boolean;
  isFetchingLatestStatusesError: boolean;
  currentListName: OrderListType;
  isMenuDotVisible: boolean;
  allOrdersCount: number;
  isFirstTimeViewVisible: boolean;
}

export interface OrderData {
  list: Order[];
  page: number;
  isFetched: boolean;
  isFetching: boolean;
  isFetchingError: boolean;
  count: number;
}

export interface Address {
  name?: string;
  postalCode?: string;
  addressRegion?: string;
  streetAddress?: string;
  addressCountry?: string;
  addressLocality?: string;
}

export interface Offer {
  price?: number;
  priceCurrency?: string; // WALUTA
  seller?: {
    name?: string;
  };
  itemOffered?: {
    name?: string;
    url?: string; // URL
    image?: string; // URL
    sku?: string;
    color?: string;
    description?: string;
    brand?: {
      name?: string;
    };
  };
  eligibleQuantity?: {
    value?: number;
  };
}

export type OrderStatus =
  | 'OrderCancelled'
  | 'OrderDelivered'
  | 'OrderInTransit'
  | 'OrderPaymentDue'
  | 'OrderPickupAvailable'
  | 'OrderProblem'
  | 'OrderProcessing'
  | 'OrderReturned'
  | 'OrderNew'
  | 'OrderDelayed';

export interface Order {
  id: number;
  status: OrderStatus;
  orderDate: string; // DateTime string
  schema: {
    trackingUrl?: string;
    trackingNumber?: string;
    expectedArrivalFrom?: string; // DateTime string
    expectedArrivalUntil?: string; // DateTime string
    additionalProperties: {
      '@type': string;
      name: 'pickupCode' | 'phoneNumber' | 'carrierPhoneNumber' | 'sendingCode';
      value: string;
    }[];
    carrier?: {
      name?: string;
      sameAs?: string;
    };
    // itemShipped to jest przesyłka, a nie produkty w przesyłce
    itemShipped?: {
      name?: string;
      url?: string; // URL
      image?: string; // URL
      sku?: string;
      color?: string;
      description?: string;
      brand?: {
        name?: string;
      };
    };
    partOfOrder?: {
      orderNumber?: string;
      orderDate?: string; // DateTime string
      orderDateStatus?: string; // data ostatniej zmiany statusu
      price?: number;
      priceCurrency?: string; // WALUTA
      priceSpecification?: {
        price?: number;
        priceCurrency?: string; // WALUTA
      };
      discount: number;
      discountCurrency: string; // WALUTA
      merchant?: {
        name?: string;
      };
      customer?: {
        name?: string;
      };
      paymentMethodId?: string;
      potentialAction?: {
        url?: string;
      };
      acceptedOffer?: Offer[];
      paymentMethod?: {
        name?: string;
      };
      billingAddress?: Address;
      imagesOffer?: string[];
    };
    originAddress?: Address;
    deliveryAddress?: Address;
    hasDeliveryMethod?: {
      name?: string;
    };
  };
  // createdAt: string; // DateTime string
  updatedAt: string; // DateTime string
  // isShowMore?: boolean;
}

export type Carrier = (typeof CARRIERS)[number];

export interface OrdersRootState {
  [KEY]: OrdersState;
}

export type OrdersAction =
  | {
      type: typeof FETCH_ORDERS;
      currentListName: OrderListType;
    }
  | {
      type: typeof FETCH_ORDERS_SUCCESS;
      orders: Order[];
      currentListName: OrderListType;
      count: number;
      allOrdersCount: number;
    }
  | {
      type: typeof FETCH_SINGLE_ORDER;
      isFetchedSingleOrder?: boolean;
      isFetchingErrorSingleOrder?: boolean;
      order?: Order;
    }
  | { type: typeof FETCH_ORDERS_FAILURE; currentListName: OrderListType }
  | {
      type: typeof MARK_AS_DELIVERED;
      orderId: Order['id'];
    }
  | {
      type: typeof FETCH_LATEST_STATUSES;
    }
  | {
      type: typeof FETCH_LATEST_STATUSES_SUCCESS;
      statuses: StatusesResponse['orders'];
    }
  | {
      type: typeof FETCH_LATEST_STATUSES_FAILURE;
    }
  | {
      type: typeof SET_CURRENT_LIST;
      listName: OrderListType;
    }
  | {
      type: typeof SET_MENU_DOT_VISIBILITY;
      isVisible: boolean;
    }
  | {
      type: typeof SET_FIRST_TIME_VIEW_VISIBLE;
      isFirstTimeViewVisible: boolean;
    }
  | {
      type: typeof RESET_STATE;
    };

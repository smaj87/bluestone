import { NormalizedUrlResult } from 'commons/share_app/components/RouterHelpers/utils';

import {
  FETCH_LATEST_STATUS_TIME_LIMIT,
  IN_PROGRESS_ORDERS_LIST_NAME,
  ORDER_LISTS_URL_NAMES,
} from './constants';
import {
  Offer,
  Order,
  OrderStatusesUrlType,
  UrlParamsInterface,
} from './types';

export const getOrderIdsOlderThan30Days = (orders: Order[]) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const thirtyDaysAgoTimestamp = thirtyDaysAgo.getTime();

  return orders
    .filter((order) => {
      if (order.orderDate) {
        const orderDate = new Date(order.orderDate);
        const orderTimestamp = orderDate.getTime();

        return orderTimestamp < thirtyDaysAgoTimestamp;
      }
      return false;
    })
    .map((order) => order.id);
};

// Tutaj sprawdzamy kiedy był robiony ostatni update i bierzemy ordery, które nie miały aktualizacji przez ostatnia godzine
export const getFetchLatestStatusesOrderParams = (orders: Order[]) =>
  orders
    .filter((order) => {
      if (order.updatedAt) {
        const updateDate = new Date(order.updatedAt);
        const currentDate = new Date();

        const timeDifference = currentDate.getTime() - updateDate.getTime();

        if (
          order.schema.trackingNumber &&
          order.id &&
          timeDifference >= FETCH_LATEST_STATUS_TIME_LIMIT
        ) {
          return true;
        }
      }
      return false;
    })
    .map((order) => ({
      id: order.id || '',
      trackingNumber: order.schema.trackingNumber || '',
      status: order.status || '',
    }));

export const getOrderSellers = (offers: Offer[] | undefined) => {
  const result: string[] = [];

  offers?.forEach((offer) => {
    if (offer.seller?.name && !result.includes(offer.seller?.name)) {
      result.push(offer.seller?.name);
    }
  });

  return result;
};

export const defaultUrlParams: UrlParamsInterface = {
  listUrlName: IN_PROGRESS_ORDERS_LIST_NAME,
};
Object.freeze(defaultUrlParams);

export const normalizedUrlParams = (
  urlParams: NormalizedUrlResult,
): UrlParamsInterface => ({
  listUrlName:
    urlParams.listUrlName &&
    Object.keys(ORDER_LISTS_URL_NAMES).includes(urlParams.listUrlName)
      ? ORDER_LISTS_URL_NAMES[urlParams.listUrlName as OrderStatusesUrlType]
      : IN_PROGRESS_ORDERS_LIST_NAME,
});

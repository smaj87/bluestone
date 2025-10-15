import { OrderStatus } from 'commons/share_app/components/OrderAndDelivery/types';

// TODO zobaczyc czym moze byc hasDeliveryMethod oraz deliveryStatus

export interface Delivery {
  deliveryAddress: {
    name: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode: string;
  };
  originAddress: {
    name: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode: string;
  };
  expectedArrivalFrom: string;
  expectedArrivalUntil: string;
  carrier: {
    name: string;
    url: string;
  };
  itemShipped: {
    name: string;
    url: string;
    image: string;
    sku: string;
    description: string;
    brand: {
      name: string;
    };
    color: string;
  };
  trackingNumber: string;
  trackingUrl: string;
  potentialAction: {
    url: string;
  };
  hasDeliveryMethod: {
    name: string;
  };
  partOfOrder: {
    orderNumber: string;
    merchant: {
      name: string;
      sameAs: string;
    };
    orderStatus: OrderStatus;
  };
}

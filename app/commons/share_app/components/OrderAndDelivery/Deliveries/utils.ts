import { schemaOrgRegex } from 'commons/share_app/components/OrderAndDelivery/constants';
import getUniqueId from 'commons/utils/uniqueId';

import { Delivery } from './types';

const isValidDelivery = (delivery: Delivery) =>
  delivery.deliveryAddress?.streetAddress &&
  delivery.deliveryAddress?.addressLocality &&
  delivery.deliveryAddress?.addressRegion &&
  delivery.deliveryAddress?.addressCountry &&
  delivery.deliveryAddress?.postalCode &&
  delivery.expectedArrivalUntil &&
  delivery.carrier?.name &&
  delivery.itemShipped?.name &&
  delivery.partOfOrder?.orderNumber &&
  delivery.partOfOrder?.merchant?.name;

export const normalizeDeliveriesData = (data: Delivery[]) =>
  data
    .filter((d) => isValidDelivery(d))
    .map((d) => ({
      id: getUniqueId('delivery'),
      deliveryAddress: {
        name: d.deliveryAddress?.name || '',
        streetAddress: d.deliveryAddress?.streetAddress || '',
        addressLocality: d.deliveryAddress?.addressLocality || '',
        addressRegion: d.deliveryAddress?.addressRegion || '',
        addressCountry: d.deliveryAddress?.addressCountry || '',
        postalCode: d.deliveryAddress?.postalCode || '',
      },
      originAddress: {
        name: d.originAddress?.name || '',
        streetAddress: d.originAddress?.streetAddress || '',
        addressLocality: d.originAddress?.addressLocality || '',
        addressRegion: d.originAddress?.addressRegion || '',
        addressCountry: d.originAddress?.addressCountry || '',
        postalCode: d.originAddress?.postalCode || '',
      },
      expectedArrivalFrom: d.expectedArrivalFrom || '',
      expectedArrivalUntil: d.expectedArrivalUntil || '',
      carrier: {
        name: d.carrier?.name || '',
        url: d.carrier?.url || '',
      },
      itemShipped: {
        name: d.itemShipped?.name || '',
        url: d.itemShipped?.url || '',
        image: d.itemShipped?.image || '',
        sku: d.itemShipped?.sku || '',
        description: d.itemShipped?.description || '',
        brand: {
          name: d.itemShipped?.brand?.name || '',
        },
        color: d.itemShipped?.color || '',
      },
      trackingNumber: d.trackingNumber || '',
      trackingUrl: d.trackingUrl || '',
      potentialAction: {
        url: d.potentialAction?.url || '',
      },
      hasDeliveryMethod: {
        name: d?.hasDeliveryMethod?.name || '',
      },
      partOfOrder: {
        orderNumber: d.partOfOrder?.orderNumber || '',
        merchant: {
          name: d.partOfOrder?.merchant?.name || '',
          sameAs: d.partOfOrder?.merchant?.sameAs || '',
        },
        orderStatus:
          d.partOfOrder?.orderStatus
            ?.replace?.(schemaOrgRegex, '')
            ?.replace?.('Order', '')
            ?.toLowerCase?.() || '',
      },
    }));

import getUniqueId from 'commons/utils/uniqueId';

import { schemaOrgRegex } from './constants';
import { Offer, Order } from './types';

const isValidOffer = (offer: Offer) =>
  !!offer?.itemOffered &&
  !!offer?.itemOffered?.name &&
  !!offer?.price &&
  !!offer?.priceCurrency &&
  !!offer?.eligibleQuantity?.value;

const isValidOrder = (order: Order) =>
  (!!order.merchant?.name || !!order.seller?.name) &&
  !!order.orderNumber &&
  !!order.priceCurrency &&
  !!order.price &&
  (Array.isArray(order.acceptedOffer)
    ? order.acceptedOffer?.every((offer) => isValidOffer(offer))
    : isValidOffer(order.acceptedOffer));

const normalizeOffer = (o: Offer) => ({
  id: getUniqueId('offer'),
  itemOffered: {
    name: o.itemOffered.name,
    sku: o.itemOffered.sku || '',
    url: o.itemOffered.url || '',
    image: o.itemOffered.image || '',
    color: o.itemOffered.color || '',
  },
  price: o.price || '',
  priceCurrency: o.priceCurrency || '',
  eligibleQuantity: {
    value: o.eligibleQuantity.value || '',
  },
  seller: {
    // eslint-disable-next-line prettier/prettier
    name: o.seller?.name || '',
  },
  priceSpecification: {
    price: o.priceSpecification?.price || '',
    priceCurrency: o.priceSpecification?.priceCurrency || '',
  },
});

export const normalizeOrdersData = (data: Order[]) =>
  data
    .filter((o) => isValidOrder(o))
    .map((o) => ({
      id: getUniqueId('order'),
      merchant: {
        name: o.merchant?.name || o.seller?.name || '',
        sameAs: o.merchant?.sameAs || '',
      },
      orderNumber: o.orderNumber || '',
      priceCurrency: o.priceCurrency || '',
      price: o.price || '',
      // Oferta moze przyjsc jako array obiektow lub obiekt
      acceptedOffer: Array.isArray(o.acceptedOffer)
        ? o.acceptedOffer.map((offer) => normalizeOffer(offer))
        : [normalizeOffer(o.acceptedOffer)],
      priceSpecification: {
        validFrom: o.priceSpecification?.validFrom || '',
      },
      url: o.url || '',
      // Tutaj usuwamy Order bo niektore przychodza jako PickupAvailable a niektore jako OrderPickupAvailable
      orderStatus:
        o?.orderStatus
          ?.replace?.(schemaOrgRegex, '')
          ?.replace?.('Order', '')
          ?.toLowerCase?.() || '',
      paymentMethod: {
        name: o.paymentMethod?.name?.replace?.(schemaOrgRegex, '') || '',
      },
      potentialAction: {
        url: o.potentialAction?.url || '',
      },
      paymentMethodId: o.paymentMethodId || '',
      orderDate: o.orderDate || '',
      isGift: o.isGift === 'true',
      discount: o.discount || '',
      discountCurrency: o.discountCurrency || '',
      customer: {
        name: o.customer?.name || '',
      },
      billingAddress: {
        name: o.billingAddress?.name || '',
        streetAddress: o.billingAddress?.streetAddress || '',
        addressLocality: o.billingAddress?.addressLocality || '',
        addressRegion: o.billingAddress?.addressRegion || '',
        addressCountry: o.billingAddress?.addressCountry || '',
      },
    }));

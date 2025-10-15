export interface Offer {
  id: string;
  itemOffered: {
    name: string;
    sku: string;
    url: string;
    image: string;
    color: string;
  };
  price: string;
  priceCurrency: string;
  eligibleQuantity: {
    value: string;
  };
  seller: {
    name: string;
  };
  priceSpecification: {
    price: number | string;
    priceCurrency: string;
  };
}

export type OrderStatus =
  | 'processing'
  | 'pickupavailable'
  | 'delivered'
  | 'intransit'
  | 'cancelled'
  | 'problem'
  | 'returned'
  | 'paymentdue';

export interface Order {
  id: string;
  merchant: {
    name: string;
    sameAs: string;
  };
  seller?: {
    name: string;
  };
  orderNumber: string;
  priceCurrency: string;
  price: string;
  acceptedOffer: Array<Offer>;
  priceSpecification: {
    validFrom: string;
  };
  url: string;
  orderStatus: OrderStatus;
  paymentMethod: {
    name: string;
  };
  potentialAction: {
    url: string;
  };

  paymentMethodId: string;
  orderDate: string;
  isGift: 'true' | 'false';
  discount: number | string;
  discountCurrency: string;
  customer: {
    name: string;
  };
  billingAddress: {
    name: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

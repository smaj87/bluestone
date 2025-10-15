import { Delivery } from 'commons/share_app/components/OrderAndDelivery/Deliveries/types';
import { Order } from 'commons/share_app/components/OrderAndDelivery/types';
import { Cashback } from 'commons/share_app/containers/Cashbacks/types';
import { Coupon, PromoCard } from 'commons/share_app/containers/Coupons/types';

import { TabDataType } from 'components/Schema/Events/types';

export interface Email {
  name: string;
  email: string;
}

type SchemaDataType = {
  type: string;
  properties: object;
};

export type SchemaTypeKeyword = '@type' | 'type';

// extend schema interface
export interface SchemaOrg {
  type: 'json-ld' | 'microdata';
  typeKeyword: SchemaTypeKeyword;
  clearedData: TabDataType[];
  data: SchemaDataType[];
  promoCards: PromoCard[];
  coupons: Coupon[];
  cashbacks: Cashback[];
  deliveries: Delivery[];
  orders: Order[];
  payments: object[];
  delayedSend: {
    delayDate?: string;
    messageQid?: string;
  };
  isAnyCoupons: boolean; // no adserver coupons
  isAnyPromoCards: boolean; // no adserver promocards
  isAnyCashbacks: boolean; // no adserver cashbacks
  isAnyAdsCoupons: boolean; // adserver coupons
  isAnyAdsPromoCards: boolean; // adserver promo
  isAnyAdsCashbacks: boolean; // adserver cashbacks
  isAnyPayments: boolean;
  isAnyOrders: boolean;
  isAnyDeliveries: boolean;
  isAnyReservations: boolean;
  isDiscounts: boolean;
  isInvoicePreparing: boolean;
  isAdsDiscounts: boolean;
  discountsLength: number;
  activeEventTabKey: string;
  activeEventTabData: TabDataType;
}

export interface RawSchemaOrg {
  'json-ld': JsonLd[];
  microdata: MicroData[];
  from: Email; // dodawany w locie przed normalizacja
}

export interface JsonLd extends PromoCard {
  '@context': string;
  '@type': string;
}

export interface MicroData {
  context: string;
  type: string;
  properties: { [key: string]: any };
}

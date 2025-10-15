import { ReactText } from 'commons/utils/react';

import { AdsRootState } from '../../types';
import { CLEAR_TEMPLATE_AD, KEY, SET_TEMPLATE_AD } from './constants';
import { ElementSettings } from './GenericInbox/DetailTemplate/types';
import { getValueByField as genericSelector } from './GenericInbox/selectors';
import {
  getProductValueByField as inboxFeedProductByField,
  getValueFromTemplate as inboxFeedSelector,
} from './InboxFeed/selectors';
import { getValueByField as inboxSelector } from './selectors';

export type Selector =
  | typeof inboxSelector
  | typeof genericSelector
  | typeof inboxFeedSelector
  | typeof inboxFeedProductByField;

export interface SlotFlatNatmailingRootState extends AdsRootState {
  [KEY]: SlotFlatNatMailingState;
}

export interface SlotFlatNatMailingState {
  templateAd?: TemplateAd;
  tplCode: string;
  isRead: boolean;
  products: SlotFlatNatMailingProduct[];
  isFetchedProducts: boolean;
  isFetchingProducts: boolean;
  dataType: TitleMode['value'];
}

export interface SlotFlatNatMailingProduct {
  offer_special_price: number;
  offer_price: number;
  offer_old_price: number;
  offer_url: string;
  offer_discount_percentage: string;
  offer_currency: string;
  offer_image: string;
  offer_name: string;
}

export interface SneakPeakField {
  fields: {
    counterEndDate: string | null;
    counterText: string;
    excerpt: string;
    sender: string;
    showCounter: number;
    title: string;
    bimi: string | undefined;
    icon: string | undefined;
  };
  visible: boolean;
}

export type SneakPeakFieldKeys = keyof SneakPeakField['fields'];

export interface Banner {
  fields: {
    image: string;
    url: string;
  };
}

export interface HeaderFooter {
  fields: {
    backgroundColor: string;
    img: string;
    color: string;
    text: string;
  };
}

export interface Element {
  fields: {
    currency: string;
    discount: ReactText;
    img: string;
    logo: string;
    oldPrice: ReactText;
    price: number;
    omnibusPrice: ReactText;
    title: string;
    url: string;
  };
}

export interface TitleMode {
  fields: {
    title?: string;
    subtitle?: string;
    disableOmnibusLogic?: boolean;
    showOldPrice?: boolean;
    showPrice?: boolean;
    showCtaButton?: boolean;
    showDescription?: boolean;
  };
  value: 'userDefined' | 'offerData' | '';
}

export interface TemplateAd {
  fields: {
    clickUrl: string;
    sender: string;
    title: string;
    subtitle: string;
    counterEndDate: number;
    counterText: string;
    bimi: string;
    icon: string;
    adinfo: string;
    sneakPeak: SneakPeakField[] | undefined;
    header: HeaderFooter[];
    footer: HeaderFooter[];
    banners: Banner[];
    elements: Element[];
    elementSettings?: { fields: ElementSettings }[];
    dynamicfeed: any;
    feed: any;
    titleMode: TitleMode;
    [key: string]:
      | null
      | undefined
      | ReactText
      | SneakPeakField[]
      | Banner[]
      | object[]
      | TitleMode;
  };
  meta: {
    adclick: string;
    opencount: string;
    [key: string]: null | ReactText;
  };
  tplCode: string;
  setContainerSize: (width: number, height: number) => void;
  watchVisibility: (ref: HTMLDivElement | null) => void;
  [key: string]: unknown;
}

export type SlotFlatNatMailingAction =
  | {
      type: typeof SET_TEMPLATE_AD;
      tplCode: string;
      templateAd: TemplateAd;
    }
  | {
      type: typeof CLEAR_TEMPLATE_AD;
    };

export interface GetDataProduct {
  offer_special_price: number;
  offer_price: number;
  offer_old_price: number;
  offer_omnibus_price: number;
  offer_url: string;
  offer_discount_percentage: string;
  offer_currency: string;
  offer_image: string;
  offer_name: string;
  offer_category: string;
  offer_ckp_category: string;
  offer_custom_fields: string; // empty or JSON string
  offer_brand: string;
}

export interface NormalizedProductCommons {
  url: string;
  img: string;
  title: string;
  logo: string;
  currency: string;
  category: string;
  ckp_category: string;
  brand: string;
  price: number;
  omnibusPrice: number;
  oldPrice: number;
  // ...reset from offer_custom_fields, ex. description, custom1, custom2, ...
}

export interface NormalizedProduct extends NormalizedProductCommons {
  text: string;
  omnibusDiscount: number;
  isPromoShow: boolean;
  isPromoTextShow: boolean;
  isDescriptionShow: boolean;
  isPriceShow: boolean;
  isOldPriceShow: boolean;
  isOmnibusPriceShow: boolean;
  isCtaButtonShow: boolean;
}

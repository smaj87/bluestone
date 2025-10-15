import { JsonLd, MicroData, RawSchemaOrg, SchemaOrg } from 'types';

import { CashbackDetail } from 'commons/share_app/components/CashbackCards/types';
import { normalizeCashbacksData } from 'commons/share_app/components/CashbackCards/utils';
import { Delivery } from 'commons/share_app/components/OrderAndDelivery/Deliveries/types';
import { normalizeDeliveriesData } from 'commons/share_app/components/OrderAndDelivery/Deliveries/utils';
import { Order } from 'commons/share_app/components/OrderAndDelivery/types';
import { normalizeOrdersData } from 'commons/share_app/components/OrderAndDelivery/utils';
import { normalizePromoCardsData } from 'commons/share_app/components/PromoCards/utils';
import { PromoCard } from 'commons/share_app/containers/Coupons/types';
import { isEmpty, isObject, size } from 'commons/utils/tinyLodash';

import { normalizeCouponsData } from 'components/Schema/Coupons/utils';
import { normalizePaymentsData } from 'components/Schema/Payments/utils';
import { clearActions } from 'components/Schema/Reservations/utils';
import {
  getEventType,
  isCashbacks,
  isCoupon,
  isDelayedSend,
  isDeliveries,
  isOrders,
  isPayment,
  isPromoCards,
  isReservations,
} from 'components/Schema/schemaUtils';

const convertMicrodataToJSON = (microdata: MicroData) => {
  const result: { [key: string]: any } = {};

  if (microdata.properties) {
    Object.keys(microdata.properties).forEach((prop) => {
      const value = microdata.properties[prop];

      if (isObject(value)) {
        // Jeśli wartość jest obiektem, zastosuj rekurencję
        result[prop] = convertMicrodataToJSON(value as MicroData);
      } else {
        // W przeciwnym razie, użyj wartości jako właściwości
        result[prop] = value;
      }
    });
  }

  return result;
};

export const normalizeSchemaData = (
  schemaOrg: RawSchemaOrg,
): (JsonLd | MicroData)[] => {
  const jsonLd = schemaOrg['json-ld'];
  const { microdata } = schemaOrg;

  if (jsonLd?.length > 0) {
    return jsonLd.map((el) => {
      const { '@context': _, '@type': type = '', ...rest } = el;

      return {
        ...rest,
        type: type?.replace ? type.replace('http://schema.org/', '') : '',
      };
    }) as JsonLd[];
  }

  if (microdata?.length > 0) {
    return microdata.map((el) => ({
      ...convertMicrodataToJSON(el),
      type: el.type?.replace ? el.type.replace('http://schema.org/', '') : '',
    })) as MicroData[];
  }

  return [];
};

// Schema Events
const parseEventsData = (
  schemaData: (JsonLd | MicroData)[],
  type: 'json-ld' | 'microdata',
) => {
  const eventObj = getEventType(schemaData[0]);

  if (!isEmpty(eventObj)) {
    const additionalProps = {
      isReverse: eventObj?.isReverse,
      icon: eventObj?.icon || null,
    };

    // @ts-ignore todo dlaczego to nie jest w ts jeszcze?
    const clearedData = clearActions(eventObj.normalize(schemaData, type)).map(
      (tab: object) => ({ ...tab, ...additionalProps }),
    );

    const activeKey = clearedData[0].key;

    return {
      activeEventTabKey: activeKey,
      activeEventTabData: clearedData.find(
        ({ key }: { key: string }) => key === activeKey,
      ),
      clearedData,
    };
  }
  return {};
};

const isAnyByItemsHelper = (items: { isAdServerCoupon?: boolean }[]) => {
  let isAny = false;
  let isAnyAds = false;

  items.every(({ isAdServerCoupon }) => {
    if (!isAdServerCoupon) {
      isAny = true;
    } else {
      isAnyAds = true;
    }

    return !(isAny && isAnyAds);
  });

  return [isAny, isAnyAds];
};

const normalizeDelayedSendData = (schema: any[]) => {
  let result = {};

  schema.forEach(
    (data: {
      type: string;
      additionalProperty: { name: string; value: string }[];
    }) => {
      const messageQid = data?.additionalProperty?.find(
        (elem) => elem.name === 'messageQid',
      )?.value;
      const delayDate = data?.additionalProperty?.find(
        (elem) => elem.name === 'delayDate',
      )?.value;

      if (data.type === 'EmailMessage' && messageQid && delayDate) {
        result = { delayDate, messageQid };
      }
    },
  );

  return result;
};

export function normalizeSchemaOrg(schemaOrg: RawSchemaOrg): SchemaOrg {
  let data: (JsonLd | MicroData)[] = [];
  const jsonLd = schemaOrg['json-ld'];

  const { microdata } = schemaOrg;

  if (size(jsonLd)) {
    data = jsonLd;
  } else if (size(microdata)) {
    data = microdata;
  }

  const normalizedSchemaOrg = normalizeSchemaData(schemaOrg);

  const delayedSend = isDelayedSend(normalizedSchemaOrg)
    ? normalizeDelayedSendData(normalizedSchemaOrg)
    : {};

  const coupons = isCoupon(data)
    ? normalizeCouponsData(data, schemaOrg.from)
    : [];
  const payments = isPayment(data) ? normalizePaymentsData(data) : [];

  const promoCards = isPromoCards(normalizedSchemaOrg)
    ? normalizePromoCardsData(
        normalizedSchemaOrg as PromoCard[],
        schemaOrg.from,
      )
    : [];

  const cashbacks = isCashbacks(normalizedSchemaOrg)
    ? normalizeCashbacksData(
        normalizedSchemaOrg as CashbackDetail[],
        schemaOrg.from,
      )
    : [];

  const orders = isOrders(normalizedSchemaOrg)
    ? // @ts-ignore todo @spiascik
      normalizeOrdersData(normalizedSchemaOrg as Order[])
    : [];

  const deliveries = isDeliveries(normalizedSchemaOrg)
    ? // @ts-ignore todo @spiascik
      normalizeDeliveriesData(normalizedSchemaOrg as Delivery[])
    : [];

  const [isAnyCoupons, isAnyAdsCoupons] = isAnyByItemsHelper(coupons);
  const [isAnyPromoCards, isAnyAdsPromoCards] = isAnyByItemsHelper(promoCards);
  const [isAnyCashbacks, isAnyAdsCashbacks] = isAnyByItemsHelper(cashbacks);

  const type = size(jsonLd) ? 'json-ld' : 'microdata';

  return {
    type,
    typeKeyword: type === 'json-ld' ? '@type' : 'type',
    // @ts-ignore todo @spiascik
    data,
    // @ts-ignore todo @spiascik
    promoCards,
    coupons,
    // @ts-ignore todo @spiascik
    cashbacks,
    // @ts-ignore todo @spiascik
    deliveries,
    // @ts-ignore todo @spiascik
    orders,
    payments,
    delayedSend,
    isAnyCoupons, // no adserver coupons
    isAnyPromoCards, // no adserver promocards
    isAnyCashbacks, // no adserver cashbacks
    isAnyAdsCoupons, // adserver coupons
    isAnyAdsPromoCards, // adserver promo
    isAnyAdsCashbacks, // adserver cashbacks
    isAnyPayments: isPayment(data),
    isAnyOrders: isOrders(data),
    isAnyDeliveries: isDeliveries(data),
    isAnyReservations: isReservations(data),
    isInvoicePreparing: false,
    isDiscounts: isAnyCoupons || isAnyPromoCards || isAnyCashbacks,
    isAdsDiscounts: isAnyAdsCoupons || isAnyAdsPromoCards || isAnyAdsCashbacks,
    discountsLength: cashbacks.length + coupons.length + promoCards.length,
    ...(size(data) ? parseEventsData(data, type) : {}),
  };
}

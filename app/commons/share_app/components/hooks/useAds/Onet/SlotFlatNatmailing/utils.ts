import { leadingZero } from 'commons/utils/date';
import { isString } from 'commons/utils/tinyLodash';
import { changeGetParams } from 'commons/utils/url';

import { NormalizedProducts } from './GenericInbox/DetailTemplate/types';
import {
  GetDataProduct,
  NormalizedProduct,
  NormalizedProductCommons,
  TemplateAd,
} from './types';

export const getCounterHours = (seconds: number) => {
  const days = Math.floor((seconds % 31536000) / 86400);
  const hours = Math.floor(((seconds % 31536000) % 86400) / 3600);

  return hours > 0 ? `${leadingZero(hours + 24 * days)}` : '00';
};

export const getCounterMinutes = (seconds: number) => {
  const minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  return minutes > 0 ? `${leadingZero(minutes)}` : '00';
};

export const getCounterSeconds = (seconds: number) => {
  const result = (((seconds % 31536000) % 86400) % 3600) % 60;
  return result > 0 ? `${leadingZero(result)}` : '00';
};

export const normalizePrice = (price: string | number): number => {
  let result = price || -1;

  if (result && isString(result)) {
    result = Number.parseFloat(
      result.replace(/[^0-9,.]+/gi, '').replace(',', '.'),
    );

    if (!Number.isFinite(result)) {
      result = -1;
    }
  }

  return result as number;
};

export const getDiscount = (oldPrice: number, newPrice: number) => {
  let result = 0;

  if (oldPrice > 0) {
    const discount = (newPrice * 100) / oldPrice;

    result = Number.isFinite(discount) ? 100 - Math.round(discount) : 0;
  }

  return result;
};

// @ts-ignore
const _getCommonFields = (
  product: NormalizedProductCommons,
  adClickUrl: string,
  elementSettings: NormalizedProducts['elementSettings'],
  templateAdFields: TemplateAd['fields'],
): NormalizedProduct => {
  const url = changeGetParams(
    product.url,
    ['utm_campaign', 'utm_medium', 'utm_source', 'utm_term'],
    templateAdFields?.utm_campaign ? templateAdFields : elementSettings,
  );

  const isCtaButtonShow = !!templateAdFields?.showCtaButton;
  const isDescriptionShow = !!templateAdFields?.showDescription;
  const showPrice = !!templateAdFields?.showPrice;
  const showOldPrice = !!templateAdFields?.showOldPrice;
  const showDiscount = !!templateAdFields?.showDiscount;
  const disableOmnibusLogic = !!templateAdFields?.disableOmnibusLogic;

  const onlyPriceVisible =
    showPrice && !disableOmnibusLogic && product.price > product.omnibusPrice;

  const isPriceShow = showPrice && product.price > 0;

  const isOldPriceShow =
    !onlyPriceVisible &&
    showOldPrice &&
    product.oldPrice > 0 &&
    product.omnibusPrice > 0 &&
    product.price < product.oldPrice;

  const omnibusDiscount =
    isPriceShow && product.omnibusPrice
      ? getDiscount(product.omnibusPrice, product.price)
      : -1;

  const isPromoShow = !onlyPriceVisible && showDiscount && omnibusDiscount >= 5;
  const isPromoTextShow =
    !onlyPriceVisible &&
    showDiscount &&
    ((omnibusDiscount > 0 && omnibusDiscount < 5) ||
      (omnibusDiscount <= 0 && product.price < product.oldPrice));

  const commonOmnibusPriseShow = isPriceShow && (showOldPrice || showDiscount);

  const isOmnibusPriceShow =
    !onlyPriceVisible &&
    commonOmnibusPriseShow &&
    product.omnibusPrice > 0 &&
    (disableOmnibusLogic ||
      (!disableOmnibusLogic && product.price <= product.omnibusPrice));

  return {
    ...product,
    url: adClickUrl ? `${adClickUrl}${encodeURIComponent(url)}` : url,
    text: elementSettings?.text || '',
    omnibusDiscount,
    isPromoShow,
    isPromoTextShow,
    isDescriptionShow,
    isPriceShow,
    isOldPriceShow,
    isOmnibusPriceShow,
    isCtaButtonShow,
  };
};

const deprecated_getCommonFields = (
  product: NormalizedProductCommons,
  adClickUrl: string,
  elementSettings: NormalizedProducts['elementSettings'],
  templateAdFields: TemplateAd['fields'],
): NormalizedProduct => {
  const url = changeGetParams(
    product.url,
    ['utm_campaign', 'utm_medium', 'utm_source', 'utm_term'],
    templateAdFields?.utm_campaign ? templateAdFields : elementSettings,
  );

  const showCtaButton = templateAdFields?.showCtaButton;
  const showDescription = templateAdFields?.showDescription; // flaga sterujaca, byc moze niepotrzebna
  // const showPrice = templateAdFields?.showPrice; // flaga sterujaca, byc moze niepotrzebna
  const showOldPrice = !!templateAdFields?.showOldPrice; // flaga sterujaca, byc moze niepotrzebna
  const disableOmnibusLogic = !!templateAdFields?.disableOmnibusLogic; // flaga sterujaca, byc moze niepotrzebna

  const isPriceShow = product.price > 0;

  const isOldPriceShow =
    showOldPrice &&
    product.oldPrice > 0 &&
    product.omnibusPrice > 0 &&
    product.price < product.oldPrice;

  const omnibusDiscount =
    isPriceShow && product.omnibusPrice
      ? getDiscount(product.omnibusPrice, product.price)
      : -1;

  const isPromoShow = omnibusDiscount >= 5;
  const isPromoTextShow =
    (omnibusDiscount > 0 && omnibusDiscount < 5) ||
    (omnibusDiscount <= 0 && product.price < product.oldPrice);

  const isOmnibusPriceShow =
    (disableOmnibusLogic && product.omnibusPrice > 0) ||
    (!disableOmnibusLogic &&
      product.omnibusPrice > 0 &&
      product.omnibusPrice > product.price);

  return {
    ...product,
    url: adClickUrl ? `${adClickUrl}${encodeURIComponent(url)}` : url,
    text: elementSettings?.text || '',
    omnibusDiscount,
    isPromoShow,
    isPromoTextShow,
    isDescriptionShow: !!showDescription,
    isPriceShow,
    isOldPriceShow,
    isOmnibusPriceShow,
    isCtaButtonShow: !!showCtaButton,
  };
};

export const getNormalizedProducts = (
  templateAd: TemplateAd,
  products: GetDataProduct[],
): NormalizedProduct[] =>
  products?.map?.((product) => {
    const data = templateAd?.fields;

    const price = normalizePrice(product.offer_price);
    const omnibusPrice = normalizePrice(product.offer_omnibus_price || '');
    const oldPrice = normalizePrice(product.offer_old_price || '');

    let customFields = {};

    if (product.offer_custom_fields) {
      try {
        customFields = JSON.parse(product.offer_custom_fields);
      } catch {}
    }

    return deprecated_getCommonFields(
      {
        img: product.offer_image || '',
        title: product.offer_name || '',
        category: product.offer_category || '',
        ckp_category: product.offer_ckp_category || '',
        brand: product.offer_brand || '',
        logo: '',
        currency: product.offer_currency || 'zł',
        url: product.offer_url,
        price,
        omnibusPrice,
        oldPrice,
        ...customFields,
      },
      templateAd?.meta?.adclick || '',
      data?.elementSettings?.[0]?.fields,
      data,
    );
  }) || [];

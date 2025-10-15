import { CashbackDetail } from 'commons/share_app/components/CashbackCards/types';
import { hashCode } from 'commons/utils/hashCode';
import getUniqueId from 'commons/utils/uniqueId';

import { COUPON_SCHEMA_TYPES, PROMOCARD_SCHEMA_TYPES } from './constants';
import { Coupon, PromoCard, Seller } from './types';

export const isLessThanDayDifference = (d1: Date, d2: Date) => {
  const dayDifference = (d1.getTime() - d2.getTime()) / 1000 / 60 / 60 / 24;

  return dayDifference > 0 && dayDifference < 1;
};

const isValidCoupon = (coupon: Coupon) =>
  (!!coupon.discountCode || !!coupon.url) &&
  (!!coupon.description || !!coupon.headline);

export const isValidPromoCard = (promoCard: PromoCard) =>
  promoCard.url || promoCard?.potentialAction?.url;

export const getCouponsCollectionData = (
  adCoupons: Coupon[] | PromoCard[],
  orgCoupons: Coupon[] | PromoCard[],
  defCoupons: Coupon[] | PromoCard[],
) => {
  const organicCoupons: Coupon[] = [];
  const adServerCoupons: Coupon[] = [];
  const defaultCoupons: Coupon[] = [];
  const sellers: Seller[] = [];
  const defaultSellers: Seller[] = [];

  // wyciagamy teraz id (w przypadku adp) lub mid (w przypadku organic) aby nie robic dwa razy mapa po wszystkim, bo potrzebujemy wszysktkich idkow co przyjda nawet przed walidacją
  let seenCouponsIds: { organic: string[]; adp: string[] } = {
    adp: [],
    organic: [],
  };

  orgCoupons.forEach((c) => {
    const seller = { ...c.from, isBimi: !!c.isBimi };

    if (
      (!seller.name && !seller.email) ||
      (!c.headline && !(c as Coupon).description)
    ) {
      return;
    }

    if (!seenCouponsIds.organic.includes(c.idMessage.toString())) {
      seenCouponsIds = {
        ...seenCouponsIds,
        organic: [...seenCouponsIds.organic, c.idMessage.toString()],
      };
    }

    if (COUPON_SCHEMA_TYPES.includes(c.schemaType) && isValidCoupon(c)) {
      if (
        !sellers.find((s) => {
          if (c.source === 'mailing') {
            return c.from.name === s.name;
          }

          return (
            (s.name && s.name === seller.name) ||
            (s.email && s.email === seller.email)
          );
        })
      ) {
        sellers.push(seller);
      }

      // Tutaj dodajemy id, aby mógł sobie react optymaliazować po key którym będzie id, bo tylko organic nie maja id tylko Mid
      organicCoupons.push({
        ...c,
        id: getUniqueId('coupon'),
        isCoupon: true,
        copyTracker: (c as any)._copyTracker,
        openTracker: (c as any)._openTracker,
        source: c.source,
        schemaType: c.schemaType || '',
      });

      return;
    }

    if (
      PROMOCARD_SCHEMA_TYPES.includes(c.schemaType) &&
      isValidPromoCard(c as PromoCard)
    ) {
      if (
        !sellers.find((s) => {
          if (c.source === 'mailing') {
            return c.from.name === s.name;
          }

          return (
            (s.name && s.name === seller.name) ||
            (s.email && s.email === seller.email)
          );
        })
      ) {
        sellers.push(seller);
      }

      organicCoupons.push({
        ...c,
        id: getUniqueId('coupon'),
        headline: c.headline,
        url: c.url || (c as PromoCard).potentialAction?.url,
        isPromoCard: true,
        copyTracker: (c as any)._copyTracker,
        openTracker: (c as any)._openTracker,
        source: c.source,
        schemaType: c.schemaType || '',
      } as PromoCard);
    }
  });

  // Tylko w Adsach mamy kupony CASHBACK z goodie dlatego tylko tutaj przeszukujemy cashbacki
  adCoupons.forEach((c) => {
    const seller = { ...c.from, isBimi: !!c.isBimi };

    if (!seller.name && !seller.email) {
      return;
    }

    if (!seenCouponsIds.adp.includes(c.id)) {
      seenCouponsIds = {
        ...seenCouponsIds,
        adp: [...seenCouponsIds.adp, c.id],
      };
    }

    if (COUPON_SCHEMA_TYPES.includes(c.schemaType) && isValidCoupon(c)) {
      if (
        !sellers.find((s) => {
          if (c.source === 'mailing') {
            return c.from.name === s.name;
          }

          return (
            (s.name && s.name === seller.name) ||
            (s.email && s.email === seller.email)
          );
        })
      ) {
        sellers.push(seller);
      }

      adServerCoupons.push({
        ...c,
        isCoupon: true,
        isAdServerCoupon: true,
        copyTracker: (c as any)._copyTracker,
        openTracker: (c as any)._openTracker,
        source: c.source,
        schemaType: c.schemaType || '',
      });
    }

    if (
      PROMOCARD_SCHEMA_TYPES.includes(c.schemaType) &&
      isValidPromoCard(c as PromoCard)
    ) {
      if (
        !sellers.find((s) => {
          if (c.source === 'mailing') {
            return c.from.name === s.name;
          }

          return (
            (s.name && s.name === seller.name) ||
            (s.email && s.email === seller.email)
          );
        })
      ) {
        sellers.push(seller);
      }

      adServerCoupons.push({
        ...c,
        headline: c.headline || c.url || (c as PromoCard).potentialAction?.url,
        url: c.url || (c as PromoCard).potentialAction?.url,
        isPromoCard: true,
        isAdServerCoupon: true,
        copyTracker: (c as any)._copyTracker,
        openTracker: (c as any)._openTracker,
        source: c.source,
        schemaType: c.schemaType || '',
      });
    }
  });

  // IMPORTANT
  // w kuponach defaultowych nie ma bimi zazwyczaj u nas w backendzie wiec bierzemy logo firmy z urli i wrzucamy jako bimi
  defCoupons.forEach((c) => {
    const seller = { ...c.from, isBimi: !!c.isBimi, image: c.image };

    if (!seller.name && !seller.email) {
      return;
    }

    if (!seenCouponsIds.adp.includes(c.id)) {
      seenCouponsIds = {
        ...seenCouponsIds,
        adp: [...seenCouponsIds.adp, c.id],
      };
    }

    if (COUPON_SCHEMA_TYPES.includes(c.schemaType) && isValidCoupon(c)) {
      if (
        !defaultSellers.find((s) => {
          if (c.source === 'mailing') {
            return c.from.name === s.name;
          }

          return (
            (s.name && s.name === seller.name) ||
            (s.email && s.email === seller.email)
          );
        })
      ) {
        defaultSellers.push(seller);
      }

      defaultCoupons.push({
        ...c,
        isCoupon: true,
        isAdServerCoupon: true,
        isDefaultCoupon: true,
        copyTracker: (c as any)._copyTracker,
        openTracker: (c as any)._openTracker,
        source: c.source,
        schemaType: c.schemaType || '',
      });
    }

    if (
      PROMOCARD_SCHEMA_TYPES.includes(c.schemaType) &&
      isValidPromoCard(c as PromoCard)
    ) {
      if (
        !defaultSellers.find((s) => {
          if (c.source === 'mailing') {
            return c.from.name === s.name;
          }

          return (
            (s.name && s.name === seller.name) ||
            (s.email && s.email === seller.email)
          );
        })
      ) {
        defaultSellers.push(seller);
      }

      defaultCoupons.push({
        ...c,
        headline: c.headline || c.url || (c as PromoCard).potentialAction?.url,
        url: c.url || (c as PromoCard).potentialAction?.url,
        isPromoCard: true,
        isAdServerCoupon: true,
        isDefaultCoupon: true,
        copyTracker: (c as any)._copyTracker,
        openTracker: (c as any)._openTracker,
        source: c.source,
        schemaType: c.schemaType || '',
      });
    }
  });

  // tutaj posortowane są kupony z backendu po availabilityEnds lub po defaultExpirationDate
  // oraz sortujemy alfabetycznie sellers, aby potem wyświetlać ich bez potrzeby sortowania
  return {
    coupons: [...organicCoupons, ...adServerCoupons],
    defaultCoupons,
    defaultSellers: defaultSellers.sort((a, b) =>
      (a.name || a.email).localeCompare(b.name || b.email),
    ),
    sellers: sellers.sort((a, b) =>
      (a.name || a.email).localeCompare(b.name || b.email),
    ),
    seenCouponsIds,
  };
};

export const getFilteredCouponsBySeller = (
  coupons: Coupon[],
  filterValue: Seller,
) => {
  if (filterValue.name === '' && filterValue.email === '') {
    return coupons.map((c) => ({ ...c, isHidden: false }));
  }

  // sprawdzamy czy mailing, bo w mailingu mamy tylko name, bo email to zawsze mailing_reklamowy@onet.pl
  return coupons.map((c) => {
    if (c.source === 'mailing') {
      return { ...c, isHidden: c.from.name !== filterValue.name };
    }

    return {
      ...c,
      isHidden:
        (!!c.from.name && c.from.name !== filterValue.name) ||
        (!!c.from.email && c.from.email !== filterValue.email),
    };
  });
};

export const getCouponId = (c: Coupon) =>
  hashCode(
    `${c.discountCode || c.code || ''}${
      c.description || c.headline || c.title || c.subjectLine || ''
    }${c.url || ''}${c.image || ''}`,
  );

export const sortCoupons = (coupons: Coupon[] | CashbackDetail[]) =>
  coupons.sort((a, b) => {
    // Sortowanie po isNew
    if (a.isNew !== b.isNew) {
      return a.isNew ? -1 : 1;
    }

    // Jeśli isNew jest takie samo, sortowanie po isAdServerCoupon
    if (a.isAdServerCoupon !== b.isAdServerCoupon) {
      return a.isAdServerCoupon ? 1 : -1;
    }

    // Jeśli isNew i isAdserver są takie same, sortowanie po dacie
    const dateA = a.availabilityEnds
      ? new Date(a.availabilityEnds)
      : new Date(a.defaultExpirationDate);
    const dateB = b.availabilityEnds
      ? new Date(b.availabilityEnds)
      : new Date(b.defaultExpirationDate);

    return dateA.getTime() - dateB.getTime();
  });

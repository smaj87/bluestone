import { Email } from 'types';

import { PromoCard } from 'commons/share_app/containers/Coupons/types';
import { isValidPromoCard } from 'commons/share_app/containers/Coupons/utils';
import getUniqueId from 'commons/utils/uniqueId';

export const normalizePromoCardsData = (data: PromoCard[], from: Email) =>
  data
    .filter((p) => (p as any).type === 'PromotionCard' && isValidPromoCard(p))
    .map((p) => ({
      id: getUniqueId('promoCard'),
      headline: p.headline,
      image: p.image || '',
      url: p.url || p.potentialAction?.url || '',
      price: p.price || '',
      priceCurrency: p.priceCurrency || '',
      discountValue: p.discountValue || '',
      position: p.position || '',
      isAdServerCoupon: !!p.isAdServerCoupon,
      availabilityEnds: p.availabilityEnds || '',
      defaultExpirationDate: p.defaultExpirationDate || '',
      source: p.source,
      isPromoCard: true,
      omnibusPrice: p.omnibusPrice || '',
      from,
    }));

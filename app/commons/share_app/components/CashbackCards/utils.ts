import { Email } from 'types';

import { CASHBACK_SCHEMA_TYPE } from 'commons/share_app/containers/Cashbacks/constants';
import getUniqueId from 'commons/utils/uniqueId';

import { CashbackDetail } from './types';

const isValidCashback = (c: CashbackDetail) => !!c.url && !!c.headline;

export const normalizeCashbacksData = (data: CashbackDetail[], from: Email) =>
  data
    .filter(
      (c) => (c as any).type === CASHBACK_SCHEMA_TYPE && isValidCashback(c),
    )
    .map((c) => ({
      id: getUniqueId('cashback'),
      priceCurrency: c.priceCurrency || '',
      price: c.price || '',
      url: c.url || '',
      image: c.image || '',
      headline: c.headline || '',
      isAdServerCoupon: c.isAdServerCoupon,
      source: c.source,
      isCashback: true,
      availabilityEnds: c.availabilityEnds,
      defaultExpirationDate: c.defaultExpirationDate,
      from,
    }));

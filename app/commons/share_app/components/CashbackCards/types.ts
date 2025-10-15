import { Email } from 'types';

export interface CashbackDetail {
  id: string;
  priceCurrency?: string;
  price: string;
  url: string;
  image: string;
  headline: string;
  isAdServerCoupon: boolean;
  defaultExpirationDate: string;
  availabilityEnds?: string;
  source: 'organic' | 'mailing' | 'centraals' | 'goodie';
  isCashback?: boolean;
  isNew?: boolean;
  isDefault?: boolean;
  from: Email;
}

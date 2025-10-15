import { CashbackDetail } from 'commons/share_app/components/CashbackCards/types';
import { hashCode } from 'commons/utils/hashCode';

export const getCashbackId = (c: CashbackDetail) =>
  hashCode(`${c.headline || ''}${c.url || ''}${c.image || ''}`);

import {
  getCashbacksFromSchema,
  getMailField,
  isCashbacks as isCashbacksSelector,
  isShowMoreDiscounts,
} from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import CashbackItem from './CashbackItem';
import { CashbackDetail } from './types';

const CashbacksCards: FC = () => {
  const mid = useSelector(getMailField, 'mid') as number;
  const showMoreDiscounts = useSelector(isShowMoreDiscounts);
  const isCashbacks = useSelector(isCashbacksSelector);
  const cashbacks: CashbackDetail[] = useSelector(getCashbacksFromSchema);

  return isCashbacks ? (
    <>
      {cashbacks.map((c) => (
        <CashbackItem
          key={c.id}
          $isShow={showMoreDiscounts}
          cashback={c}
          mid={mid}
          sender={c.from}
        />
      ))}
    </>
  ) : null;
};

export default memo(CashbacksCards);

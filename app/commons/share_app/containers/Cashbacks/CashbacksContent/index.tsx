import LoadingPage from 'commons/LoadingPage';
import CashbacksEmptyPage from 'commons/share_app/containers/Cashbacks/CashbacksEmptyPage';
import CashbacksError from 'commons/share_app/containers/Cashbacks/CashbacksError';
import CashbacksList from 'commons/share_app/containers/Cashbacks/CashbacksList';
import {
  getCashbacks,
  getDefaultCashbacks,
} from 'commons/share_app/containers/Cashbacks/selectors';
import {
  isFetched as isFetchedCashbacksSelector,
  isFetching as isFetchingCashbacksSelector,
  isFetchingError as isFetchingCashbacksErrorSelector,
} from 'commons/share_app/containers/Coupons/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import HowWrapper from './HowWrapper';

const CashbacksContent: FC = () => {
  const cashbacks = useSelector(getCashbacks);
  const defaultCashbacks = useSelector(getDefaultCashbacks);

  const isFetchedCashbacks = useSelector(isFetchedCashbacksSelector);
  const isFetchingCashbacks = useSelector(isFetchingCashbacksSelector);
  const isFetchingCashbacksError = useSelector(
    isFetchingCashbacksErrorSelector,
  );

  if (isFetchedCashbacks && !cashbacks.length && !defaultCashbacks.length) {
    return <CashbacksEmptyPage />;
  }

  if (
    isFetchingCashbacks ||
    (!isFetchingCashbacks && !isFetchedCashbacks && !isFetchingCashbacksError)
  ) {
    return <LoadingPage />;
  }

  if (isFetchingCashbacksError) {
    return <CashbacksError />;
  }

  return (
    <>
      <HowWrapper />
      <CashbacksList cashbacks={cashbacks} />
      <CashbacksList cashbacks={defaultCashbacks} isDefault />
    </>
  );
};

export default memo(CashbacksContent);

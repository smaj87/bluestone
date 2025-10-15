import { isFetchedWindowUserConfig as isFetchedWindowUserConfigSelector } from 'commons/hooks/useUserConfig/selectors';
import LoadingPage from 'commons/LoadingPage';
import { isFetching as isFetchingSelector } from 'commons/share_app/containers/Coupons/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const CashbacksLoader: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const isFetchedWindowUserConfig = useSelector(
    isFetchedWindowUserConfigSelector,
  );

  return isFetching || !isFetchedWindowUserConfig ? <LoadingPage /> : null;
};

CashbacksLoader.displayName = 'CashbacksLoader';

export default memo(CashbacksLoader);

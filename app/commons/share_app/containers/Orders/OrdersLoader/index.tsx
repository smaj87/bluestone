import { isFetchedWindowUserConfig as isFetchedWindowUserConfigSelector } from 'commons/hooks/useUserConfig/selectors';
import LoadingPage from 'commons/LoadingPage';
import { isFetching as isFetchingSelector } from 'commons/share_app/containers/Orders/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const OrdersLoader: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const isFetchedWindowUserConfig = useSelector(
    isFetchedWindowUserConfigSelector,
  );

  return isFetching || !isFetchedWindowUserConfig ? <LoadingPage /> : null;
};

export default memo(OrdersLoader);

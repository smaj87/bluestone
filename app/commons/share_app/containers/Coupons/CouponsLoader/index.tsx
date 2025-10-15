import {
  isFetched as isFetchedSelector,
  isFetchingError as isFetchingErrorSelector,
} from 'commons/hooks/useUserConfig/selectors';
import LoadingPage from 'commons/LoadingPage';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isFetching as isFetchingSelector } from '../selectors';

const CouponsLoader: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const isFetched = useSelector(isFetchedSelector);
  const isFetchedError = useSelector(isFetchingErrorSelector);

  return (isFetching || !isFetched) && !isFetchedError ? <LoadingPage /> : null;
};

CouponsLoader.displayName = 'CouponsLoader';

export default memo(CouponsLoader);

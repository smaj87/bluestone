import { isFetchedWindowUserConfig as isFetchedWindowUserConfigSelector } from 'commons/hooks/useUserConfig/selectors';
import LoadingPage from 'commons/LoadingPage';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isFetching as isFetchingSelector } from '../selectors';

const NewsLettersLoader: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const isFetchedWindowUserConfig = useSelector(
    isFetchedWindowUserConfigSelector,
  );

  return isFetching || !isFetchedWindowUserConfig ? <LoadingPage /> : null;
};

NewsLettersLoader.displayName = 'NewsLettersLoader';

export default memo(NewsLettersLoader);

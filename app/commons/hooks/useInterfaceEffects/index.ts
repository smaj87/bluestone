import { isFetched as isFetchedUserConfigSelector } from 'commons/hooks/useUserConfig/selectors';
import { useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { fetchInterfaceEffects } from './actions';
import {
  isFetched as isFetchedSelector,
  isFetching as isFetchingSelector,
} from './selectors';

const useInterfaceEffects = () => {
  // !IMPORTANT - waiting for userconfig because of targets
  const isFetchedUserConfig = useSelector(isFetchedUserConfigSelector);

  useEffect(() => {
    if (isFetchedUserConfig) {
      const isFetched = getStateValueBySelector(isFetchedSelector);
      const isFetching = getStateValueBySelector(isFetchingSelector);

      if (!isFetched && !isFetching) {
        dispatch(fetchInterfaceEffects());
      }
    }
  }, [isFetchedUserConfig]);

  return null;
};

useInterfaceEffects.displayName = 'useInterfaceEffects';

export default useInterfaceEffects;

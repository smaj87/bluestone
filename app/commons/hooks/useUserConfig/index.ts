import { useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  detectAndSetAdblock,
  fetchUserConfig,
  onOnlineStatusChanged,
  onWindowResize,
  onWindowScroll,
  refreshSession,
} from './actions';
import {
  isFetched as isFetchedSelector,
  isFetching as isFetchingSelector,
} from './selectors';

let alreadyRendered = false;

const useUserConfig = () => {
  useEffect(() => {
    if (alreadyRendered) {
      throw new Error(
        `This hook (useUserConfig) can only be used once in the application!`,
      );
    } else {
      alreadyRendered = true;
    }

    const isFetched = getStateValueBySelector(isFetchedSelector);
    const isFetching = getStateValueBySelector(isFetchingSelector);

    if (!isFetched && !isFetching) {
      dispatch(fetchUserConfig());
    }

    const onResize = () => {
      dispatch(onWindowResize());
    };

    const onScroll = () => {
      dispatch(onWindowScroll());
    };

    const onOnline = () => {
      dispatch(onOnlineStatusChanged());
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('offline', onOnline);
    window.addEventListener('online', onOnline);

    const refsess = setInterval(() => {
      dispatch(refreshSession);
    }, 28800000); // 8h

    dispatch(detectAndSetAdblock());

    return () => {
      alreadyRendered = false;

      window.document.removeEventListener('resize', onResize);
      window.document.removeEventListener('scroll', onScroll);
      window.document.removeEventListener('offline', onOnline);
      window.document.removeEventListener('online', onOnline);

      clearInterval(refsess);
    };
  }, []);

  return null;
};

useUserConfig.displayName = 'useUserConfig';

export default useUserConfig;

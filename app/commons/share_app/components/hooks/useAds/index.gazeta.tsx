import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { useEffect, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

// import { KEY } from './constants';
import { invokeAdsFetch } from './Gazeta/actions';
import { isShowAds as isShowAdsSelector } from './Gazeta/selectors';
import { destroy, fetch, refresh } from './Gazeta/utils';
// import reducer from './reducer';
import { getReFetchFlag } from './selectors';

const useAds = () => {
  const isShowAds = useSelector(isShowAdsSelector);
  const isMobile = useSelector(isMobileSelector);
  const reFetchFlag = useSelector(getReFetchFlag);

  const isFetched = useRef(false);
  isFetched.current = false;

  const isShowAdsRef = useRef(isShowAds);
  isShowAdsRef.current = isShowAds;

  useEffect(() => {
    // injectReducer(KEY, reducer); // move to initRedux because class component problem
  }, []);

  useEffect(() => {
    if (isShowAds) {
      fetch();
      isFetched.current = true;
    } else {
      destroy();
    }
  }, [isShowAds, isMobile]);

  useEffect(() => {
    if (isShowAdsRef.current && !isFetched.current) {
      refresh();
    }
  }, [reFetchFlag]);

  return null;
};

export { invokeAdsFetch };
export default useAds;

import {
  isFetched as isFetchedSelector,
  isFetchedWindowUserConfig as isFetchedWindowUserConfigSelector,
  isOrdersTabVisible as isOrdersTabVisibleSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { MAUTIC_URL_NAME } from 'commons/share_app/containers/Communities/Mautic/constants';
import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

const useRedirectToMautic = (isShow: boolean) => {
  const isOrdersTabVisible = useSelector(isOrdersTabVisibleSelector);
  const isFetchedWindowUserConfig = useSelector(
    isFetchedWindowUserConfigSelector,
  );
  const isFetched = useSelector(isFetchedSelector);

  const shouldRedirect =
    !isOrdersTabVisible && (isFetchedWindowUserConfig || isFetched);

  useEffect(() => {
    if (shouldRedirect && isShow) {
      historyPush(`/${MAUTIC_URL_NAME}`);
    }
  }, [shouldRedirect, isShow]);

  return null;
};

export default useRedirectToMautic;

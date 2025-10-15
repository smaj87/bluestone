import { usePathname } from 'commons/utils/history';
import { FC, useRef } from 'commons/utils/react';

import MainRouter from 'containers/MainRouter';

import { getUrlParamsCache, normalizedUrl, urlParamsCache } from './utils';

const RouterHelper: FC = () => {
  const pathname = usePathname();

  const firstRenderRef = useRef(true);

  let param = urlParamsCache;

  if (!firstRenderRef.current) {
    const urlParams = normalizedUrl(pathname);

    param = getUrlParamsCache(urlParams);
  }

  firstRenderRef.current = false;

  return <MainRouter urlParamsCache={param} />;
};

export default RouterHelper;

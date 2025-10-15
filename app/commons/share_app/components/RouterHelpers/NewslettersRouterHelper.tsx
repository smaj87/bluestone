import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import Newsletters from 'commons/share_app/containers/Newsletters';
import { PAGE_NAME } from 'commons/share_app/containers/Newsletters/constants';
import { UrlParamsInterface } from 'commons/share_app/containers/Newsletters/types';
import { FC, memo, useEffect, useRef, useState } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setCurrentPage, setUrlProps } from 'containers/App/actions';
import { NEWSLETTERS_VIEW_URL_PROPS } from 'containers/App/constants';

import { NewslettersRouterIsShowContext } from './constants';

interface Props {
  isShow: boolean;
  params: UrlParamsInterface;
}

const NewslettersRouterHelper: FC<Props> = ({ isShow, params }) => {
  const [cachedSort, setCachedSort] = useState(params.sort);
  const cachedSortRef = useRef(cachedSort);
  cachedSortRef.current = cachedSort;

  const lastIsShowRef = useRef(isShow);
  const isShowView =
    isShow && (lastIsShowRef.current || cachedSort === params.sort);

  useEffect(() => {
    if (isShow) {
      dispatch(setUrlProps(NEWSLETTERS_VIEW_URL_PROPS, params));

      dispatch(invokeAdsFetch(PAGE_NAME, ''));
      dispatch(setCurrentPage(PAGE_NAME));

      if (params.sort !== cachedSortRef.current) {
        setTimeout(() => setCachedSort(params.sort), 0);
      }
    }

    lastIsShowRef.current = isShow;
  }, [params.sort, isShow]);

  return (
    <NewslettersRouterIsShowContext.Provider value={isShowView}>
      <Newsletters />
    </NewslettersRouterIsShowContext.Provider>
  );
};

export default memo(NewslettersRouterHelper);

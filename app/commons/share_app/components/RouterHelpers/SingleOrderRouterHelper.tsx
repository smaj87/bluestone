import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import useRedirectToMautic from 'commons/share_app/containers/Communities/Mautic/hooks/useRedirectToMautic';
import SingleOrder from 'commons/share_app/containers/SingleOrder';
import { PAGE_NAME } from 'commons/share_app/containers/SingleOrder/constants';
import { UrlParamsInterface } from 'commons/share_app/containers/SingleOrder/types';
import { FC, memo, useEffect, useRef, useState } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { goBack, setCurrentPage, setUrlProps } from 'containers/App/actions';
import { SINGLE_ORDER_VIEW_URL_PROPS } from 'containers/App/constants';

import { SingleOrderRouterIsShowContext } from './constants';

interface Props {
  isShow: boolean;
  params: UrlParamsInterface;
}

const SingleOrderRouterHelper: FC<Props> = ({ isShow, params }) => {
  const [cachedId, setCachedId] = useState(-1);
  const cachedIdRef = useRef(cachedId);
  cachedIdRef.current = cachedId;

  const lastIsShowRef = useRef(isShow);
  const isShowView =
    isShow &&
    (lastIsShowRef.current || params.id < 0 || params.id === cachedId);

  useRedirectToMautic(isShow);

  useEffect(() => {
    if (isShow && params.id < 0) {
      dispatch(goBack());
    } else if (isShow && params.id > 0) {
      dispatch(
        setUrlProps(SINGLE_ORDER_VIEW_URL_PROPS, {
          id: params.id,
        }),
      );

      dispatch(invokeAdsFetch(PAGE_NAME, ''));
      dispatch(setCurrentPage(PAGE_NAME));

      // setState wymusza rerender nawet jezeli wartosc sie nie zmienila
      if (params.id !== cachedIdRef.current) {
        // celowe opoznienie, useDisplayContainer jest za szybki dla reacta
        setTimeout(() => setCachedId(params.id), 0);
      }
    }

    lastIsShowRef.current = isShow;
  }, [params.id, isShow]);

  return (
    <SingleOrderRouterIsShowContext.Provider value={isShowView}>
      <SingleOrder />
    </SingleOrderRouterIsShowContext.Provider>
  );
};

export default memo(SingleOrderRouterHelper);

import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import useRedirectToMautic from 'commons/share_app/containers/Communities/Mautic/hooks/useRedirectToMautic';
import Orders from 'commons/share_app/containers/Orders';
import { PAGE_NAME } from 'commons/share_app/containers/Orders/constants';
import { UrlParamsInterface } from 'commons/share_app/containers/Orders/types';
import { FC, memo, useEffect, useRef, useState } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setCurrentPage, setUrlProps } from 'containers/App/actions';
import { ORDERS_VIEW_URL_PROPS } from 'containers/App/constants';

import { OrdersRouterIsShowContext } from './constants';

interface Props {
  isShow: boolean;
  params: UrlParamsInterface;
}

const OrdersRouterHelper: FC<Props> = ({ isShow, params }) => {
  const [cachedList, setCachedList] = useState('');
  const cachedListRef = useRef(cachedList);
  cachedListRef.current = cachedList;

  const lastIsShowRef = useRef(isShow);
  const isShowView =
    isShow &&
    (lastIsShowRef.current ||
      !params.listUrlName ||
      params.listUrlName === cachedList);

  useRedirectToMautic(isShow);

  useEffect(() => {
    if (isShow) {
      dispatch(
        setUrlProps(ORDERS_VIEW_URL_PROPS, {
          listUrlName: params.listUrlName,
        }),
      );

      dispatch(invokeAdsFetch(PAGE_NAME, ''));
      dispatch(setCurrentPage(PAGE_NAME));

      // setState wymusza rerender nawet jezeli wartosc sie nie zmienila
      if (params.listUrlName !== cachedListRef.current) {
        // celowe opoznienie, useDisplayContainer jest za szybki dla reacta
        setTimeout(() => setCachedList(params.listUrlName), 0);
      }
    }

    lastIsShowRef.current = isShow;
  }, [isShow, params.listUrlName]);

  return (
    <OrdersRouterIsShowContext.Provider value={isShowView}>
      <Orders />
    </OrdersRouterIsShowContext.Provider>
  );
};

export default memo(OrdersRouterHelper);

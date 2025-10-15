import CashbacksRouterHelper from 'commons/share_app/components/RouterHelpers/CashbacksRouterHelper';
import CouponsRouterHelper from 'commons/share_app/components/RouterHelpers/CouponsRouterHelper';
import MauticRouterHelper from 'commons/share_app/components/RouterHelpers/MauticRouterHelpers';
import NewslettersRouterHelper from 'commons/share_app/components/RouterHelpers/NewslettersRouterHelper';
import OrdersRouterHelper from 'commons/share_app/components/RouterHelpers/OrdersRouterHelper';
import SingleOrderRouterHelper from 'commons/share_app/components/RouterHelpers/SingleOrderRouterHelper';
import { UrlParamsCacheType } from 'commons/share_app/components/RouterHelpers/utils';
import GazetkaMail from 'commons/share_app/containers/GazetkaMail';
import InboxMail from 'commons/share_app/containers/InboxMail';
import { FC, memo } from 'commons/utils/react';

import {
  MAUTIC_VIEW_URL_PROPS,
  NEWSLETTERS_VIEW_URL_PROPS,
  ORDERS_VIEW_URL_PROPS,
  SINGLE_ORDER_VIEW_URL_PROPS,
} from 'containers/App/constants';

interface Props {
  urlParamsCache: UrlParamsCacheType;
}

const Others: FC<Props> = ({ urlParamsCache }) => (
  <>
    <CouponsRouterHelper isShow={urlParamsCache.isCouponsShow} />
    <CashbacksRouterHelper isShow={urlParamsCache.isCashbackShow} />
    <NewslettersRouterHelper
      isShow={urlParamsCache.isNewslettersShow}
      params={urlParamsCache[NEWSLETTERS_VIEW_URL_PROPS]}
    />
    <OrdersRouterHelper
      isShow={urlParamsCache.isOrdersShow}
      params={urlParamsCache[ORDERS_VIEW_URL_PROPS]}
    />
    <SingleOrderRouterHelper
      isShow={urlParamsCache.isSingleOrderShow}
      params={urlParamsCache[SINGLE_ORDER_VIEW_URL_PROPS]}
    />
    <MauticRouterHelper
      isShow={urlParamsCache.isMauticShow}
      params={urlParamsCache[MAUTIC_VIEW_URL_PROPS]}
    />
    <InboxMail isShow={urlParamsCache.isInboxMailShow} />
    <GazetkaMail isShow={urlParamsCache.isGazetkaMailShow} />
  </>
);

export default memo(Others);

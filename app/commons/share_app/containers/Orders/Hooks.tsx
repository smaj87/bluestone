import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementsSelector,
  isFetched as isFetchedAgreementsSelector,
} from 'commons/hooks/useAgreements/selectors';
import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import { isOrdersTabVisible as isOrdersTabVisibleSelector } from 'commons/hooks/useUserConfig/selectors';
import { OrdersRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getOrdersUrlProps } from 'containers/App/selectors';
import { setNotificationShoppingFolder } from 'containers/Folders/actions';

import {
  fetchOrders,
  setCurrentList,
  setOrdersMenuDotVisibility,
} from './actions';
import { ORDERS_CONTAINER_ID } from './constants';
import { isFetched } from './selectors';

const agreementProps = { agreementId: SMART_FUNCTIONS_ID };

const Hooks: FC = () => {
  const isShow = useContext(OrdersRouterIsShowContext);
  const listUrlName = useSelector(getOrdersUrlProps, 'listUrlName');

  useDisplayContainer(ORDERS_CONTAINER_ID, isShow, true);

  const isFetchedOrders = useSelector(isFetched);
  const isAgreements = useSelector(isAgreementsSelector, agreementProps);
  const isFetchedAgreements = useSelector(isFetchedAgreementsSelector);
  const isOrdersTabVisible = useSelector(isOrdersTabVisibleSelector);

  useEffect(() => {
    if (isShow) {
      dispatch(setCurrentList(listUrlName));
      dispatch(setOrdersMenuDotVisibility(false));
    }
  }, [isShow, listUrlName]);

  useEffect(() => {
    if (
      !isFetchedOrders &&
      isShow &&
      isAgreements &&
      isFetchedAgreements &&
      isOrdersTabVisible
    ) {
      dispatch(fetchOrders(listUrlName));
      dispatch(setNotificationShoppingFolder(0));
    }
  }, [
    isShow,
    isAgreements,
    isFetchedAgreements,
    listUrlName,
    isOrdersTabVisible,
    isFetchedOrders,
  ]);

  return null;
};

export default memo(Hooks);

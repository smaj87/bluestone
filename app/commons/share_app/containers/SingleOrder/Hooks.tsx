import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import { SingleOrderRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';

import { SINGLE_ORDER_CONTAINER_ID } from './constants';
import useFetchSingleOrder from './useFetchSingleOrder';

const Hooks: FC = () => {
  const isShow = useContext(SingleOrderRouterIsShowContext);

  useDisplayContainer(SINGLE_ORDER_CONTAINER_ID, isShow, true);
  useFetchSingleOrder(isShow);

  return null;
};

export default memo(Hooks);

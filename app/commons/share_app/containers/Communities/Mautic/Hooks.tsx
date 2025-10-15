import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import { MauticRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, useContext } from 'commons/utils/react';

import { MAUTIC_CONTAINER_ID } from './constants';

const Hooks: FC = () => {
  const isShow = useContext(MauticRouterIsShowContext);
  useDisplayContainer(MAUTIC_CONTAINER_ID, isShow, true);

  return null;
};

export default Hooks;

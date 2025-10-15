import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import { ReadMailRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';

import { READ_MAIL_CONTAINER_ID } from './constants';
import useFetchReadMail from './useFetchReadMail';
import useFetchWhiteList from './useFetchWhiteList';

const Hooks: FC = () => {
  const isShow = useContext(ReadMailRouterIsShowContext);

  useDisplayContainer(READ_MAIL_CONTAINER_ID, isShow, true);
  useFetchWhiteList(isShow);
  useFetchReadMail(isShow);

  return null;
};

export default memo(Hooks);

import useOnLoadNext from 'commons/ListIntersectionObserver/useOnLoadNext';
import LoadingList from 'commons/share_app/components/ListElements/LoadingList';
import { AttachmentsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { infinityLoaderFetch } from './actions';
import { isInfinityLoaderShow } from './selectors';

const InfinityLoader: FC = () => {
  const isShow = useContext(AttachmentsRouterIsShowContext);
  const isShowLoader = useSelector(isInfinityLoaderShow);

  useOnLoadNext(isShow && isShowLoader, infinityLoaderFetch);

  return isShow && isShowLoader ? <LoadingList /> : null;
};

export default memo(InfinityLoader);

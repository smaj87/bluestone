import NotificationBellEmpty from 'commons/share_app/components/NotificationBell/NotificationBellEmpty';
import NotificationBellError from 'commons/share_app/components/NotificationBell/NotificationBellError';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import NotificationBellList from './NotificationBellList';
import NotificationBellLoading from './NotificationBellLoading';
import {
  getCounter,
  getNotificationsLength,
  isFetched as isFetchedSelector,
  isFetchedCounter as isFetchedCounterSelector,
  isFetchedError as isFetchedErrorSelector,
  isFetching as isFetchingSelector,
} from './selectors';

const Content: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const isFetched = useSelector(isFetchedSelector);
  const isFetchedError = useSelector(isFetchedErrorSelector);
  const length = useSelector(getNotificationsLength);

  const isFetchedCounter = useSelector(isFetchedCounterSelector);
  const counter = useSelector(getCounter);

  // todo || isfetching counter
  if (isFetching) {
    return <NotificationBellLoading />;
  }

  // todo || isFetchedErrorCounter
  if (isFetchedError) {
    return <NotificationBellError />;
  }

  if (isFetched || (isFetchedCounter && counter <= 0)) {
    return length ? <NotificationBellList /> : <NotificationBellEmpty />;
  }

  return null;
};

export default memo(Content);

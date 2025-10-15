import Counter from 'commons/Counter';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  getCounter,
  getUnreadCount,
  isFetchedCounter as isFetchedCounterSelector,
} from './selectors';

const NotificationsCounter: FC = () => {
  const number = useSelector(getUnreadCount);
  const isFetchedCounter = useSelector(isFetchedCounterSelector);
  const counter = useSelector(getCounter);
  const isDotShown = isFetchedCounter && counter > 0;

  return number > 0 || isDotShown ? <Counter value={number || -1} /> : null;
};

export default memo(NotificationsCounter);

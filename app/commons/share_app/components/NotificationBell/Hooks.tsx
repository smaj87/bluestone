import { FC, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';
import { getState } from 'commons/utils/webStorage';

import { fetchCounter, fetchNotifications } from './actions';
import { FETCH_NOTIFICATIONS_SUCCESS, KEY } from './constants';
import {
  getCounter,
  isFetched as isFetchedSelector,
  isFetchedCounter as isFetchedCounterSelector,
  isFetchedError as isFetchedErrorSelector,
  isFetchedErrorCounter as isFetchedErrorCounterSelector,
  isFetching as isFetchingSelector,
  isFetchingCounter as isFetchingCounterSelector,
  isOpen as isOpenSelector,
} from './selectors';
import { filterNotifications } from './utils';

const Hooks: FC = () => {
  const isFetchedCounter = useSelector(isFetchedCounterSelector);
  const isFetchingCounter = useSelector(isFetchingCounterSelector);
  const isFetchedErrorCounter = useSelector(isFetchedErrorCounterSelector);
  const counter = useSelector(getCounter);

  const isFetched = useSelector(isFetchedSelector);
  const isFetching = useSelector(isFetchingSelector);
  const isFetchedError = useSelector(isFetchedErrorSelector);
  const isOpen = useSelector(isOpenSelector);

  useEffect(() => {
    if (!isFetchedErrorCounter && !isFetchedCounter && !isFetchingCounter) {
      dispatch(fetchCounter());
    }
  }, [isFetchedErrorCounter, isFetchedCounter, isFetchingCounter]);

  useEffect(() => {
    if (isFetchedErrorCounter || (isFetchedCounter && counter <= 0)) {
      let cachedNotifications = getState(KEY, localStorage);
      cachedNotifications &&= filterNotifications(cachedNotifications);

      if (cachedNotifications) {
        dispatch({
          type: FETCH_NOTIFICATIONS_SUCCESS,
          notifications: cachedNotifications,
        });
      }
    }
  }, [isFetchedErrorCounter, isFetchedCounter, counter]);

  useEffect(() => {
    if (
      !isFetchedError &&
      !isFetched &&
      !isFetching &&
      isOpen &&
      isFetchedCounter &&
      counter > 0
    ) {
      dispatch(fetchNotifications());
    }
  }, [
    isOpen,
    counter,
    isFetchedCounter,
    isFetchedError,
    isFetched,
    isFetching,
  ]);

  return null;
};

export default Hooks;

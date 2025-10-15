import { useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch, injectReducer } from 'commons/utils/store';

import { fetchTodayEvents } from './actions';
import { KEY } from './constants';
import reducer from './reducer';
import {
  isFetched as isFetchedSelector,
  isFetching as isFetchingSelector,
} from './selectors';

const useTodayCalendarEvents = () => {
  useEffect(() => {
    injectReducer(KEY, reducer);

    const isFetched = getStateValueBySelector(isFetchedSelector);
    const isFetching = getStateValueBySelector(isFetchingSelector);

    if (!isFetched && !isFetching) {
      dispatch(fetchTodayEvents());
    }
  }, []);

  return null;
};

useTodayCalendarEvents.displayName = 'useTodayCalendarEvents';

export default useTodayCalendarEvents;

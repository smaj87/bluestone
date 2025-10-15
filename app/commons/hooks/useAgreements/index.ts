import { useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch, injectReducer } from 'commons/utils/store';

import { fetchAgreements } from './actions';
import { KEY } from './constants';
import reducer from './reducer';
import {
  isFetched as isFetchedSelector,
  isFetching as isFetchingSelector,
} from './selectors';

const useAgreements = () => {
  useEffect(() => {
    injectReducer(KEY, reducer);

    const isFetched = getStateValueBySelector(isFetchedSelector);
    const isFetching = getStateValueBySelector(isFetchingSelector);

    // on prod window.userConfig.agreements (only when 111 and 113 not set)
    if (process.env.NODE_ENV === 'development' && !isFetched && !isFetching) {
      dispatch(fetchAgreements());
    }
  }, []);

  return null;
};

useAgreements.displayName = 'useAgreements';

export default useAgreements;

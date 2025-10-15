import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { fetchWhiteList } from './actions';
import {
  isWhiteListFetched as isWhiteListFetchedSelector,
  isWhiteListFetchedError as isWhiteListFetchedErrorSelector,
  isWhiteListFetching as isWhiteListFetchingSelector,
} from './selectors';

const useFetchReadMail = (isShow = false) => {
  const isWhiteListFetched = useSelector(isWhiteListFetchedSelector);
  const isWhiteListFetching = useSelector(isWhiteListFetchingSelector);
  const isWhiteListFetchedError = useSelector(isWhiteListFetchedErrorSelector);

  useEffect(() => {
    if (
      !isWhiteListFetchedError &&
      !isWhiteListFetched &&
      !isWhiteListFetching &&
      isShow
    ) {
      dispatch(fetchWhiteList());
    }
  }, [
    isShow,
    isWhiteListFetched,
    isWhiteListFetching,
    isWhiteListFetchedError,
  ]);

  return null;
};

export default useFetchReadMail;

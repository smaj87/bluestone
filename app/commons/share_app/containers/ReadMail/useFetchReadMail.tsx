import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { scrollPage } from 'commons/utils/scroll';
import { dispatch } from 'commons/utils/store';

import { getReadMailUrlProps } from 'containers/App/selectors';

import { fetchReadMail } from './actions';
import { getMailField } from './selectors';

const useFetchReadMail = (isShow = false) => {
  const isFetched = useSelector(getMailField, 'isFetched');
  const isFetching = useSelector(getMailField, 'isFetching');
  const isFetchedError = useSelector(getMailField, 'isFetchedError');
  const mid = useSelector(getReadMailUrlProps, 'mid');

  useEffect(() => {
    if (!isFetchedError && !isFetched && !isFetching && isShow && mid > 0) {
      dispatch(fetchReadMail(mid));
    }
  }, [isShow, isFetchedError, isFetched, isFetching, mid]);

  useEffect(() => {
    if (isShow && mid > 0) {
      scrollPage();
    }
  }, [isShow, mid]);

  return null;
};

export default useFetchReadMail;

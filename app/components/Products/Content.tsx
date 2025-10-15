import ErrorPage from 'components/ErrorPage';
import Loader from 'components/Loader';
import {
  isFetched,
  isFetchedError,
  isFetching,
} from 'containers/Products/selectors';
import { FC, memo } from 'utils/react';
import { useSelector } from 'utils/react-redux';

import List from './List';

const Product: FC = () => {
  const fetching = useSelector(isFetching);
  const fetched = useSelector(isFetched);
  const fetchedError = useSelector(isFetchedError);

  if (fetching) {
    return <Loader label="Ładowanie produktów..." />;
  }

  if (fetchedError) {
    return <ErrorPage label="Błąd pobierania produktów" />;
  }

  if (fetched) {
    return <List />;
  }

  return null;
};

export default memo(Product);

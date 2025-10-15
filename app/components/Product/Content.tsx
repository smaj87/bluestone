import ErrorPage from 'components/ErrorPage';
import Loader from 'components/Loader';
import {
  isFetched,
  isFetchedError,
  isFetching,
} from 'containers/Products/selectors';
import { FC, memo } from 'utils/react';
import { useSelector } from 'utils/react-redux';

import Product from './Product';

interface ContentProps {
  name: string;
}

const Content: FC<ContentProps> = ({ name }) => {
  const fetching = useSelector(isFetching);
  const fetched = useSelector(isFetched);
  const fetchedError = useSelector(isFetchedError);

  if (fetching) {
    return <Loader label="Ładowanie produktu..." />;
  }

  if (fetchedError) {
    return <ErrorPage label="Błąd pobierania produktu" />;
  }

  if (fetched) {
    return <Product name={name} />;
  }

  return null;
};

export default memo(Content);

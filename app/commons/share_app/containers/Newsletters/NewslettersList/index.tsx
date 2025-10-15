import LoadingPage from 'commons/LoadingPage';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import NewslettersEmptyPage from '../NewslettersEmptyPage';
import NewslettersError from '../NewslettersError';
import NewslettersSortDropdown from '../NewslettersSortDropdown';
import {
  getNewsletters,
  isFetched as isFetchedSelector,
  isFetching as isFetchingSelector,
  isFetchingError as isFetchingErrorSelector,
} from '../selectors';
import List from './List';

const NewslettersList: FC = () => {
  const newsletters = useSelector(getNewsletters);
  const isFetching = useSelector(isFetchingSelector);
  const isFetched = useSelector(isFetchedSelector);
  const isFetchingError = useSelector(isFetchingErrorSelector);

  if (isFetching || (!isFetching && !isFetched && !isFetchingError)) {
    return <LoadingPage />;
  }

  if (isFetchingError) {
    return <NewslettersError />;
  }

  if (isFetched && !newsletters.length) {
    return <NewslettersEmptyPage />;
  }

  return (
    <>
      <NewslettersSortDropdown />
      <List newsletters={newsletters} />
    </>
  );
};

NewslettersList.displayName = 'NewslettersList';

export default memo(NewslettersList);

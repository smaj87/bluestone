import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import List from './List';
import MailsEmptyPage from './MailsEmptyPage';
import MailsErrorPage from './MailsErrorPage';
import MailsLoading from './MailsLoading';
import {
  getGroupsCount,
  isFetched as isFetchedSelector,
  isFetchedError as isFetchedErrorSelector,
  isFetching as isFetchingSelector,
  isLoadingAfterRemove as isLoadingAfterRemoveSelector,
} from './selectors';

const Content: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const isLoadingAfterRemove = useSelector(isLoadingAfterRemoveSelector);
  const isFetched = useSelector(isFetchedSelector);
  const isFetchedError = useSelector(isFetchedErrorSelector);
  const groupsCount = useSelector(getGroupsCount);

  if (isFetching && !isLoadingAfterRemove) {
    return <MailsLoading />;
  }

  if (isFetchedError) {
    return <MailsErrorPage />;
  }

  if (isFetched) {
    return groupsCount || isLoadingAfterRemove ? <List /> : <MailsEmptyPage />;
  }

  return null;
};

export default memo(Content);

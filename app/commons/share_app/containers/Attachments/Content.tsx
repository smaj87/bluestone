import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import AttachmentsEmptyPage from './AttachmentsEmptyPage';
import AttachmentsErrorPage from './AttachmentsErrorPage';
import AttachmentsLoading from './AttachmentsLoading';
import List from './List';
import {
  getGroupsCount,
  isFetched as isFetchedSelector,
  isFetchedError as isFetchedErrorSelector,
  isFetching as isFetchingSelector,
} from './selectors';

const Content: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const isFetched = useSelector(isFetchedSelector);
  const isFetchedError = useSelector(isFetchedErrorSelector);
  const groupsCount = useSelector(getGroupsCount);

  if (isFetching) {
    return <AttachmentsLoading />;
  }

  if (isFetchedError) {
    return <AttachmentsErrorPage />;
  }

  if (isFetched) {
    return groupsCount ? <List /> : <AttachmentsEmptyPage />;
  }

  return null;
};

export default memo(Content);

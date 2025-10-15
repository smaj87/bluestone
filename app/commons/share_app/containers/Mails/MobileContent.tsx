import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import InfinityLoader from './InfinityLoader';
import List from './List';
import LoadingListError from './LoadingListError';
import MailsEmptyPage from './MailsEmptyPage';
import {
  getGroupsCount,
  isFetched as isFetchedSelector,
  isFetching as isFetchingSelector,
} from './selectors';

const MobileContent: FC = () => {
  const isFetched = useSelector(isFetchedSelector);
  const isFetching = useSelector(isFetchingSelector);
  const groupsCount = useSelector(getGroupsCount);

  return (
    <>
      {!isFetching && isFetched && !groupsCount ? (
        <MailsEmptyPage />
      ) : (
        <>
          <List />
          <LoadingListError />
        </>
      )}
      <InfinityLoader />
    </>
  );
};

export default memo(MobileContent);

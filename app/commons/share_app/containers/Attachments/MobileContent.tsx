import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import AttachmentsEmptyPage from './AttachmentsEmptyPage';
import InfinityLoader from './InfinityLoader';
import List from './List';
import LoadingListError from './LoadingListError';
import { getGroupsCount, isFetched as isFetchedSelector } from './selectors';

const MobileContent: FC = () => {
  const isFetched = useSelector(isFetchedSelector);
  const groupsCount = useSelector(getGroupsCount);

  if (isFetched && !groupsCount) {
    return <AttachmentsEmptyPage />;
  }

  return (
    <>
      <List />
      <InfinityLoader />
      <LoadingListError />
    </>
  );
};

export default memo(MobileContent);

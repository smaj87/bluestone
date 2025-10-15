import LoaderBouncing from 'commons/LoaderBouncing';
import { ListStatusStyled } from 'commons/share_app/components/ListElements/ListStatus/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isLoadingAfterRemove as isLoadingAfterRemoveSelector } from './selectors';

const LoadingItemDesktop: FC = () => {
  const isLoadingAfterRemove = useSelector(isLoadingAfterRemoveSelector);

  return isLoadingAfterRemove ? (
    <ListStatusStyled $status="default">
      <LoaderBouncing size="md" />
    </ListStatusStyled>
  ) : null;
};

export default memo(LoadingItemDesktop);

import useTranslations from 'commons/hooks/useTranslations';
import LoadingListErrorParent from 'commons/share_app/components/ListElements/LoadingListError';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { infinityLoaderFetch } from './actions';
import { isFetchedError as isFetchedErrorSelector } from './selectors';

const LoadingListError: FC = () => {
  const t = useTranslations();
  const isFetchedError = useSelector(isFetchedErrorSelector);

  const onRetry = useCallback(() => {
    dispatch(infinityLoaderFetch());
  }, []);

  return isFetchedError ? (
    <LoadingListErrorParent
      onRetry={onRetry}
      text={`${t('mailsErrorPageTitle')}.`}
    />
  ) : null;
};

export default memo(LoadingListError);

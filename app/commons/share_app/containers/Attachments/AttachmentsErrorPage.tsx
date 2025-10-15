import ErrorPage from 'commons/ErrorPage';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { fetch } from './actions';

const AttachmentsErrorPage: FC = () => {
  const t = useTranslations();

  const onFetch = useCallback(() => {
    dispatch(fetch());
  }, []);

  return (
    <ErrorPage
      color="error"
      label={t('ctaTryAgain')}
      onClick={onFetch}
      title={t('attachmentsErrorPageTitle')}
    />
  );
};

export default memo(AttachmentsErrorPage);

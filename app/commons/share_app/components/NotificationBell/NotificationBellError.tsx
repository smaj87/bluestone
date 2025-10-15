import ErrorPage from 'commons/ErrorPage';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { fetchNotifications } from './actions';

const NotificationBellError: FC = () => {
  const t = useTranslations();

  const onFetch = useCallback(() => {
    dispatch(fetchNotifications());
  }, []);

  return (
    <ErrorPage
      color="error"
      label={t('ctaTryAgain')}
      onClick={onFetch}
      size="md"
      stretch="full"
      title={t('notificationBellErrorTitle')}
    />
  );
};

export default memo(NotificationBellError);

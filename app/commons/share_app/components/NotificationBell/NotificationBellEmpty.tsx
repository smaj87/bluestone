import EmptyPage from 'commons/EmptyPage';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

const NotificationBellEmpty: FC = () => {
  const t = useTranslations();

  return (
    <EmptyPage
      icon="bell"
      size="md"
      stretch="full"
      title={t('notificationBellEmptyTitle')}
    />
  );
};

export default memo(NotificationBellEmpty);

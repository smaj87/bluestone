import LoadingPage from 'commons/LoadingPage';
import { FC, memo } from 'commons/utils/react';

const NotificationBellLoading: FC = () => (
  <LoadingPage size="md" stretch="full" />
);

export default memo(NotificationBellLoading);

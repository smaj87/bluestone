import ComponentClientNotFound from 'commons/ClientComponentNotFound';
import { FC, memo } from 'commons/utils/react';

const NotificationBell: FC = () => <ComponentClientNotFound />;

export default memo(NotificationBell);

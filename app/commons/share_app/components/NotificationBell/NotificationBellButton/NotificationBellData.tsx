import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import DateTime from 'components/DateTime';

import { Notification } from '../types';
import {
  NotificationBellDataStyled,
  NotificationBellDateStyled,
  NotificationBellDescriptionStyled,
  NotificationBellTitleStyled,
  NotificationCounterStyled,
} from './styles';

interface Props {
  notification: Notification;
}

const NotificationBellData: FC<Props> = ({ notification }) => {
  const t = useTranslations();

  return (
    <NotificationBellDataStyled>
      <NotificationBellTitleStyled>
        {t('notificationBellSingleTitle', {
          value: `_${notification.notification_type_id}`,
        })}
      </NotificationBellTitleStyled>
      <NotificationBellDescriptionStyled>
        {t('notificationBellSingleDescription', {
          value: `_${notification.notification_type_id}`,
        })}
      </NotificationBellDescriptionStyled>
      <NotificationBellDateStyled>
        <DateTime
          dateAccuracy="minutes"
          dateTime={new Date(notification.ctimestamp)}
        />
        {notification.count > 1 ? (
          <NotificationCounterStyled
            title={t('notificationBellTypeCounter', {
              value: notification.count,
            })}
          >
            {notification.count}
          </NotificationCounterStyled>
        ) : null}
      </NotificationBellDateStyled>
    </NotificationBellDataStyled>
  );
};

export default memo(NotificationBellData);

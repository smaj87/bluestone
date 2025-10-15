import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setRead } from '../actions';
import { Notification, NotificationBellState } from '../types';
import {
  IS_UNREAD_CLASS,
  NOTIFICATION_IMAGE_BY_STATE,
  NOTIFICATION_IMAGE_BY_TYPE,
} from './constants';
import NotificationBellData from './NotificationBellData';
import NotificationBellImage from './NotificationBellImage';
import { NotificationBellButtonStyled } from './styles';

interface Props {
  notification: Notification;
}

const NotificationBellButton: FC<Props> = ({ notification }) => {
  const onClick = useCallback(() => {
    dispatch(
      setRead(notification.notification_type_id, notification.nids_group),
    );

    window.open(notification.redirect_url, '_blank');
  }, [
    notification.notification_type_id,
    notification.redirect_url,
    notification.nids_group,
  ]);

  return (
    <NotificationBellButtonStyled
      className={
        notification.processing_state === 'SENT' ? IS_UNREAD_CLASS : ''
      }
      onClick={onClick}
      type="button"
    >
      <NotificationBellImage
        icon={
          NOTIFICATION_IMAGE_BY_TYPE[
            notification.notification_type_id
          ] as IconImage
        }
        state={
          NOTIFICATION_IMAGE_BY_STATE[
            notification.notification_type_id
          ] as NotificationBellState
        }
      />
      <NotificationBellData notification={notification} />
    </NotificationBellButtonStyled>
  );
};

export default memo(NotificationBellButton);

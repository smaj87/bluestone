import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import NotificationBellButton from '../NotificationBellButton';
import { getNotifications } from '../selectors';
import {
  NotificationBellItemStyled,
  NotificationBellListStyled,
} from './styles';

export const NotificationBellList: FC = () => (
  <NotificationBellListStyled>
    {useSelector(getNotifications).map((notification) => (
      <NotificationBellItemStyled key={notification.nid}>
        <NotificationBellButton notification={notification} />
        <hr />
      </NotificationBellItemStyled>
    ))}
  </NotificationBellListStyled>
);

export default memo(NotificationBellList);

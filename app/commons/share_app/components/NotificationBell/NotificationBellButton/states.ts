import { css } from 'commons/Goober';

import { NotificationBellState } from '../types';
import { NotificationBellImageStyledProps } from './styles';

const notificationBellImageStates: Record<NotificationBellState, any> = {
  info: css`
    background: var(--notification-bell-btn-avatar-bg);
    color: var(--notification-bell-btn-avatar-txt);
  `,
  success: css`
    background: var(--state-success);
    color: var(--state-success-txt);
  `,
  error: css`
    background: var(--state-error);
    color: var(--state-error-txt);
  `,
};

export const notificationBellIconStatesFunc = ({
  $state,
}: {
  $state?: NotificationBellImageStyledProps['$state'];
}) =>
  $state
    ? notificationBellImageStates[$state]
    : notificationBellImageStates.info;

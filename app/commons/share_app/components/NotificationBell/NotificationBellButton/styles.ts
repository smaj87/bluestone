import styled from 'commons/Goober';
import { notificationBellIconStatesFunc } from 'commons/share_app/components/NotificationBell/NotificationBellButton/states';
import { NotificationBellState } from 'commons/share_app/components/NotificationBell/types';
import { focusVisibleInsideStyles } from 'commons/utils/commonStyles';
import { corner } from 'commons/utils/variables';

import { IS_UNREAD_CLASS } from './constants';

export const NotificationBellButtonStyled = styled('button')`
  position: relative;
  display: grid;
  grid-template-columns: 4.4rem 1fr;
  grid-column-gap: 1.6rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.8rem 2.8rem 0.8rem 1.6rem;
  width: 100%;
  border-radius: ${corner};
  background: var(--notification-bell-btn-bg);
  text-align: left;
  cursor: pointer;

  &.${IS_UNREAD_CLASS} {
    &:before {
      content: '';
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      transform: translate3d(0, 0, 0);
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: var(--app-primary-bg);
    }
  }

  @media (hover: hover) {
    &:hover {
      background: var(--notification-bell-btn-bg--hover);
    }
  }

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }
`;

export interface NotificationBellImageStyledProps {
  $state?: NotificationBellState;
}

export const NotificationBellImageStyled = styled(
  'figure',
)<NotificationBellImageStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  font-size: 2.8rem;
  overflow: hidden;

  ${notificationBellIconStatesFunc}

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const NotificationBellDataStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.4rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NotificationBellTitleStyled = styled('div')`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--notification-bell-btn-txt--secondary);

  .${IS_UNREAD_CLASS} & {
    color: var(--notification-bell-btn-txt--primary);
  }
`;

export const NotificationBellDescriptionStyled = styled('div')`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: var(--notification-bell-btn-txt--secondary);

  .${IS_UNREAD_CLASS} & {
    color: var(--notification-bell-btn-txt--primary);
  }
`;

export const NotificationBellDateStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.5rem;
  color: var(--notification-bell-btn-txt--secondary);
`;

export const NotificationCounterStyled = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  min-width: 24px;
  border-radius: 10px;
  background: var(--notification-bell-btn-counter-bg);
  font-weight: 700;
  color: var(--notification-bell-btn-counter-txt);
  font-size: 1.2rem;
  line-height: 1;
`;

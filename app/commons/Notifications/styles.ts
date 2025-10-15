import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { LOADER_DOT_CLASS } from 'commons/LoaderBouncing/constants';
import { TOOLBAR_HEIGHT_MOBILE } from 'commons/Toolbar/constants';
import { screenMdAbove, screenXsAbove } from 'commons/utils/breakpoints';
import { LAYER_NOTIFICATIONS } from 'commons/utils/layers';
import { corner, navbarHeight } from 'commons/utils/variables';

const IconSignColors = {
  info: css`
    color: var(--state-info);
  `,
  success: css`
    color: var(--state-success);
  `,
  error: css`
    color: var(--state-error);
  `,
  warning: css`
    color: var(--state-warning);
  `,
};

export const NotificationsStyled = styled('aside')`
  // 7.2rem - wysokość BottomNavigation
  position: fixed;
  right: 0;
  left: 0;
  bottom: calc(${TOOLBAR_HEIGHT_MOBILE} + 7.2rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  max-height: calc(100% - ${navbarHeight} - ${TOOLBAR_HEIGHT_MOBILE} - 7.2rem);
  background: transparent;
  z-index: ${LAYER_NOTIFICATIONS};
  pointer-events: none;

  @media screen and (min-width: ${screenMdAbove}) {
    bottom: 7.2rem;
    max-height: calc(100% - ${navbarHeight} - 7.2rem);
  }

  @media print {
    display: none;
  }
`;

export const NotificationsContentStyled = styled('div')`
  width: 100%;
  min-width: 0;
  max-width: 32rem;
  height: 100%;
  overflow: auto;
`;

export const NotificationsListStyled = styled('ul')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  padding: 0 0.8rem;
  list-style: none;
  pointer-events: initial;

  &:empty {
    padding: 0;
  }

  @media screen and (min-width: ${screenXsAbove}) {
    width: 100%;
    max-width: 32rem;
  }
`;

export const NotificationItemStyled = styled('li')`
  position: relative;
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.4rem 0;
  padding: 0.8rem 2.4rem 0.8rem 0.8rem;
  width: 100%;
  border-radius: ${corner};
  background: var(--notification-bg);
  filter: drop-shadow(0 0 0.5rem var(--notification-shadow));
  overflow: hidden;
`;

export const MessageStyled = styled('div')`
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--notification-txt);
  word-break: break-word;
  overflow: hidden;

  p {
    display: inline-flex;
    justify-content: flex-start;
    column-gap: 0.8rem;
  }
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  padding: 0;
  width: 2.4rem;
  height: 2.4rem;
  background: var(--notification-close-bg);
  color: var(--notification-close-txt);

  @media (hover: hover) {
    &:hover {
      background: var(--notification-close-bg--hover);
      color: var(--notification-close-txt--hover);
    }
  }
`;

export const ProgressBarStyled = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 0.4rem;
  overflow: hidden;
`;

export const ProgressStyled = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--notification-progress-bg);
`;

export const IconSign = styled(Icon)<{ type?: keyof typeof IconSignColors }>`
  display: inline-flex;
  font-size: 2rem;
  line-height: 1;
  ${({ type }) => (type ? IconSignColors[type] : IconSignColors.info)};
`;

export const notificationButtonDisabledStyles = css`
  color: var(--notification-txt--disabled);
`;

export const NotificationButton = styled(Button)`
  flex-shrink: 0;
  padding: 0;
  border-width: 0;
  font-size: 1.3rem;
  line-height: 2rem;
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 0.1rem;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      text-decoration-thickness: 0.2rem;
    }
  }

  &:disabled {
    ${notificationButtonDisabledStyles};
  }

  .${LOADER_DOT_CLASS} {
    background: var(--notification-loader-bg);
  }

  ${({ isDisabled }) => isDisabled && notificationButtonDisabledStyles};
`;

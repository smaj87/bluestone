import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import { TOOLBAR_HEIGHT_MOBILE } from 'commons/Toolbar/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { LAYER_MODAL } from 'commons/utils/layers';
import { ReactNode } from 'commons/utils/react';
import { corner } from 'commons/utils/variables';

interface ToolbarSubmenuContentType {
  $isFullScreen?: boolean;
  children: ReactNode;
  role?: string;
  tabIndex?: number;
}

const isFullScreenStyles = css`
  height: 100%;
`;

export const ToolbarSubmenuContentStyled = styled<ToolbarSubmenuContentType>(
  'div',
)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${LAYER_MODAL};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  max-height: 100%;
  background: var(--context-menu-bg);
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-transform: none;
  color: var(--context-menu-txt);
  cursor: default;
  filter: drop-shadow(0 0 0.5rem var(--context-menu-shadow));
  ${({ $isFullScreen }) => ($isFullScreen ? isFullScreenStyles : '')};

  p {
    margin: 0.8rem 0;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--context-menu-txt);
  }

  hr {
    clear: both;
    margin: 1.6rem 0;
    width: 100%;
    height: 0.1rem;
    border: 0;
    background: var(--context-menu-hr);
    opacity: 0.5;
  }
`;

export const SubmenuContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 2.4rem 0.8rem;
  width: 100%;
  overflow: auto;
`;

export const SubmenuClose = styled(Button)`
  flex: 0 0 ${TOOLBAR_HEIGHT_MOBILE};
  height: ${TOOLBAR_HEIGHT_MOBILE};
  border-radius: initial;
  border-color: var(--toolbar-bg--mobile); // border zawsze będzie miał kolor bg
  background: var(--toolbar-bg--mobile);
  font-weight: 500;
  text-transform: uppercase;
  color: var(--toolbar-txt--mobile);

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--toolbar-bg--mobile--hover);
      background: var(--toolbar-bg--mobile--hover);
      color: var(--toolbar-txt--mobile--hover);
    }
  }

  @media screen and (min-width: ${screenMdAbove}) {
    border-color: var(--toolbar-bg);
    background: var(--toolbar-bg);
    color: var(--toolbar-txt);
  }
`;

export const ToolbarSubmenuButton = styled('Button')``;

export const CounterStyled = styled('span')`
  display: inline-flex;
  place-content: center;
  padding: 0.2rem 0.4rem;
  border-radius: ${corner};
  background: var(--cta-primary-bg);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  color: var(--cta-primary-txt);
  text-align: center;
`;

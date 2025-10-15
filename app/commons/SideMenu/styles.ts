import { BackdropStyled } from 'commons/Backdrop/styles';
import styled, { css } from 'commons/Goober';
import {
  IS_MOVING_CLASS,
  TOOLBAR_HEIGHT,
  TOOLBAR_HEIGHT_MOVING,
} from 'commons/Toolbar/constants';
import { screenMdAbove, screenMdUnder } from 'commons/utils/breakpoints';
import { IS_SIDEBAR_OPEN_CLASS } from 'commons/utils/classNames';
import { LAYER_SIDE_MENU_MOBILE } from 'commons/utils/layers';
import {
  animationStyle,
  navbarHeight,
  sidebarWidth,
  sideMenuWidth,
} from 'commons/utils/variables';

import { GRID_SIDE_MENU } from './constants';

export const SideMenuStyled = styled('nav')`
  user-select: none;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-area: ${GRID_SIDE_MENU};
    width: 21.6rem;
  }

  @media screen and (max-width: ${screenMdUnder}) {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: ${LAYER_SIDE_MENU_MOBILE};
    padding: 0.8rem;
    width: ${sideMenuWidth};
    height: 100%;
    background: var(--side-menu-bg);
    box-shadow: var(--side-menu-shadow--mobile) 0 0 0;
    transform: translate3d(${sidebarWidth}, 0, 0);
    overflow-y: auto;

    .${IS_SIDEBAR_OPEN_CLASS} & {
      display: block;
      box-shadow: var(--side-menu-shadow--mobile) 0.2rem 0 1rem 0;
    }
  }

  hr {
    margin: 0.8rem;
    border-top: 0.1rem solid var(--side-menu-line);
  }
`;

export const SideMenuContentStyled = styled('div')`
  @media screen and (min-width: ${screenMdAbove}) {
    width: 100%;
  }
`;

export const BackdropSideMenuStyled = styled(BackdropStyled)`
  display: none;

  .${IS_SIDEBAR_OPEN_CLASS} & {
    display: block;
  }
`;

export const scrollableMdSideMenuStyles = css`
  @media screen and (min-width: ${screenMdAbove}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    overflow: hidden;
  }
`;

export const scrollableMdSideMenuContentStyles = css`
  @media screen and (min-width: ${screenMdAbove}) {
    overflow-y: auto;
  }
`;

export const SideMenuTopStyled = styled('div')`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 -0.8rem -0.8rem;
  padding: 0.8rem;
  background: var(--side-menu-bg);
  transform: translate3d(0, -0.8rem, 0);

  @media screen and (min-width: ${screenMdAbove}) {
    margin: 0;
    padding: 0;
    width: 100%;
    top: ${navbarHeight};
    flex: none;
    height: ${TOOLBAR_HEIGHT_MOVING};
    transform: translate3d(0, 0, 0);

    &.${IS_MOVING_CLASS} {
      position: sticky;
      margin-inline: -0.8rem;
      width: auto;
      z-index: 200;
    }
  }
`;

export const SideMenuTopContentStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: ${screenMdAbove}) {
    align-items: center;
    height: ${TOOLBAR_HEIGHT}; // wysokość toolbara - elementy są na jednym poziomie, wyglądają i działają tak samo na scroll
    transition: height ${animationStyle};

    .${IS_MOVING_CLASS} & {
      padding: 0 0.8rem;
      height: ${TOOLBAR_HEIGHT_MOVING}; // wysokość toolbara podczas scroll - elementy są na jednym poziomie, wyglądają i działają tak samo na scroll
      background: var(--toolbar-bg--moving);
      box-shadow: -0.2rem 0.2rem 0.2rem 0 var(--toolbar-shadow);
    }
  }
`;

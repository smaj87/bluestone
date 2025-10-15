import styled, { css } from 'commons/Goober';
import { screenMdAbove, screenXsAbove } from 'commons/utils/breakpoints';
import {
  IS_PRINTING_VIEW_CLASS,
  IS_SIDEBAR_OPEN_CLASS,
} from 'commons/utils/classNames';
import { LAYER_NAVBAR } from 'commons/utils/layers';
import { navbarHeight, sidebarWidth } from 'commons/utils/variables';

import { GRID_NAVBAR } from './constants';

export const NavbarStyled = styled('header')`
  position: sticky;
  top: 0;
  z-index: ${LAYER_NAVBAR};
  grid-area: ${GRID_NAVBAR};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 ${navbarHeight};
  padding: 0.8rem;
  width: 100%;
  height: ${navbarHeight};
  background: var(--navbar-bg);

  @media screen and (min-width: ${screenMdAbove}) {
    column-gap: 1.6rem;

    .${IS_SIDEBAR_OPEN_CLASS} & {
      margin-left: -${sidebarWidth};
      width: calc(100% + ${sidebarWidth});
    }
  }

  @media print {
    display: none;
  }

  .${IS_PRINTING_VIEW_CLASS} & {
    display: none;
  }
`;

const navbarContentStyles = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 0;
  max-width: 100%;

  &:empty {
    display: none;
  }
`;

export const NavbarContentLeftStyled = styled('div')`
  ${navbarContentStyles};
  justify-content: flex-start;
  flex: 1;
  margin-right: auto;
`;

export const NavbarContentRightStyled = styled('div')`
  ${navbarContentStyles};
  flex: 0 0 auto;
  justify-content: flex-end;
`;

export const NavbarLabelStyled = styled('div')`
  padding: 0 1.6rem 0 0;
  min-width: 0;
  font-size: calc(1.6rem);
  line-height: 1.5;
  color: var(--navbar-txt);
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: ${screenXsAbove}) {
    padding-left: 1.6rem;
  }
`;

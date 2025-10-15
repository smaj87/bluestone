import styled from 'commons/Goober';
import { IS_SIDEBAR_OPEN_CLASS } from 'commons/utils/classNames';
import {
  animationStyle,
  navbarHeight,
  sidebarWidth,
} from 'commons/utils/variables';

export const SidebarOpenStyled = styled('div')`
  position: relative;
  z-index: 1;
  isolation: isolate;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 ${sidebarWidth};
  margin: -0.8rem 0 -0.8rem -0.8rem;
  width: ${sidebarWidth};
  height: ${navbarHeight};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: none;
    //transform: translate3d(-${sidebarWidth}, 0, 0);
    width: 100%;
    height: 100%;
    background: var(--sidebar-bg);
    // transition: transform ${animationStyle};
    // will-change: transform;
  }

  .${IS_SIDEBAR_OPEN_CLASS} & {
    &:before {
      display: block;
      //transform: translate3d(0, 0, 0);
    }
  }
`;

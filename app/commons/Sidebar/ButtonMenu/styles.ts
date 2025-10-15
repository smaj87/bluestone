import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import {
  sideMenuIconStyles,
  sideMenuLinkHoverStyles,
  sideMenuLinkStyles,
  sonarAnimationStyles,
} from 'commons/Sidebar/styles';

export const ButtonMenuStyled = styled('button')`
  ${sideMenuLinkStyles};
  color: var(--sidebar-btn-txt);
  @media (hover: hover) {
    &:hover {
      ${sideMenuLinkHoverStyles};
    }
  }
`;

export const ButtonMenuIconStyled = styled(Icon)`
  ${sideMenuIconStyles};
`;

export const SideMenuDotStyled = styled('span')`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  transform: translate3d(-25%, 25%, 0);
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: var(--app-primary-bg);
  pointer-events: none;
  ${sonarAnimationStyles};
`;

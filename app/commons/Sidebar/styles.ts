import { CTA_CLASS, CTA_LABEL_CLASS } from 'commons/CallToAction/constants';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { PREMIUM_AD_CLASS } from 'commons/PremiumAd/constants';
import {
  SIDEMENU_LINK_CLASS,
  SIDEMENU_LINK_LABEL_CLASS,
} from 'commons/Sidebar/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { IS_PRINTING_VIEW_CLASS } from 'commons/utils/classNames';
import { LAYER_SIDEBAR } from 'commons/utils/layers';
import { animationStyle, corner, sidebarWidth } from 'commons/utils/variables';

const itemSize = '4rem';

export const SidebarStyled = styled('nav')`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${LAYER_SIDEBAR};
  display: block;

  .${IS_PRINTING_VIEW_CLASS} & {
    display: none;
  }

  @media print {
    display: none;
  }
`;

export const SidebarMenuStyled = styled('ul')`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  width: ${sidebarWidth};
  height: 100%;
  background: var(--sidebar-bg);
  overflow-y: auto;

  @media (min-width: ${screenMdAbove}) {
    overflow: initial;
  }
`;

const lastItemStyles = css`
  justify-self: flex-end;
  margin-top: auto;
`;

export interface SideMenuItemStyledProps {
  $isLast?: boolean;
}

export interface SideMenuLinkStyledProps {
  $isActive?: boolean;
}

export const sideMenuLinkStyles = css`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: ${itemSize};
  height: ${itemSize};
  border-radius: ${corner};
  background: transparent;
  text-decoration: none;
  cursor: pointer;
`;

export const sideMenuLinkHoverStyles = css`
  background: var(--sidebar-btn-bg--hover);
  color: var(--sidebar-btn-txt--hover);
`;

export const SideMenuLinkStyled = styled('a')<SideMenuLinkStyledProps>`
  ${sideMenuLinkStyles};
  color: ${({ $isActive }) =>
    $isActive ? 'var(--sidebar-btn-txt--active)' : 'var(--sidebar-btn-txt)'};
`;

export const SideMenuItemStyled = styled('li')<SideMenuItemStyledProps>`
  position: relative;
  isolation: isolate;
  margin: 0.8rem auto;
  padding: 0;
  width: ${itemSize};
  height: ${itemSize};
  ${({ $isLast }) => ($isLast ? lastItemStyles : '')}

  .${CTA_CLASS} {
    height: auto;
  }

  .${CTA_LABEL_CLASS} {
    font-size: 1.3rem;
  }

  @media (hover: hover) {
    &:hover {
      z-index: 1;
    }
  }
`;

export const SideMenuItemContentStyled = styled('div')`
  @media (hover: hover) {
    &:hover {
      .${PREMIUM_AD_CLASS} {
        transform: scale(1);
        transition: transform ${animationStyle};
      }
      .${SIDEMENU_LINK_CLASS} {
        ${sideMenuLinkHoverStyles};
        transition:
          background ${animationStyle},
          color ${animationStyle},
          width ${animationStyle};
        will-change: background, color, width;
      }
      .${SIDEMENU_LINK_LABEL_CLASS} {
        width: 100%;
        transition:
          color ${animationStyle},
          width ${animationStyle};
      }
    }
  }

  @media (min-width: ${screenMdAbove}) and (hover: hover) {
    &:hover {
      .${SIDEMENU_LINK_CLASS} {
        width: 18.4rem;
      }
    }
  }
`;

export const SideMenuLabelStyled = styled('span')`
  display: block;
  margin-left: 0.8rem;
  width: 0;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: var(--sidebar-btn-txt--hover);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition:
    color ${animationStyle},
    width ${animationStyle};
  will-change: color, width;
  z-index: 10;
`;

export const SideMenuBadgeStyled = styled('span')`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 20;
  transform: translate3d(-50%, -0.8rem, 0) skewX(-10deg);
  padding: 0.1rem 0.2rem;
  border-radius: ${corner};
  background: var(--cta-primary-bg); // temp
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1;
  color: var(--cta-primary-txt); // temp
  text-align: center;
  @media (min-width: ${screenMdAbove}) and (hover: hover) {
    display: none;
  }
  @media (hover: none) {
    display: block;
  }
`;

export const SideMenuBadgeLabelStyled = styled('span')`
  display: inline-block;
  transform: skewX(10deg);
`;

export const sideMenuIconStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 ${itemSize};
  width: ${itemSize};
  font-size: 2.4rem;
  line-height: 1;
`;

export const SideMenuIconStyled = styled(Icon)`
  ${sideMenuIconStyles};
`;

export const sonarAnimationStyles = css`
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: sonar-dot 1s ease 0.3s infinite;
  }
  &:before {
    border: 1px solid var(--app-primary-bg);
  }
  &:after {
    background: var(--app-primary-bg);
    opacity: 0.2;
  }

  @keyframes sonar-dot {
    0% {
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

export const SideMenuCounterStyled = styled('span')`
  position: absolute;
  top: 0.8rem;
  left: 4rem;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: var(--app-primary-bg);
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1;
  color: var(--app-primary-txt);
  transform: scale(1) translate3d(-75%, -25%, 0);
  transition: transform ${animationStyle};
  pointer-events: none;
  ${sonarAnimationStyles};
`;

export const SideMenuCounterLabelStyled = styled('span')`
  position: relative;
  z-index: 1;
`;

export const SideMenuTooltipStyled = styled('div')`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate3d(1.6rem, -50%, 0);
  z-index: -1;
  padding: 0.8rem 2.4rem 0.8rem 0.8rem;
  width: 24rem;
  border-radius: ${corner};
  background: var(--cta-primary-bg); //temp
  color: var(--cta-primary-txt); //temp
  font-size: 1.2rem;
  line-height: 1.2;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    height: 0;
    border-top: 0.8rem solid transparent;
    border-right: 0.8rem solid var(--cta-primary-bg); //temp
    border-bottom: 0.8rem solid transparent;
    transform: translate3d(-100%, -50%, 0);
  }
`;

export const ButtonCloseTooltipStyled = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${corner};
  border: 0;
  background: var(--cta-primary-bg);
  color: var(--cta-primary-txt);
  cursor: pointer;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: var(--cta-primary-bg--hover);
      color: var(--cta-primary-txt--hover);
    }
  }
`;

export const ButtonCloseIcon = styled(Icon)`
  font-size: 1.4rem;
`;

import Button from 'commons/Button';
import {
  CTA_ICON_CLASS,
  CTA_LABEL_CLASS,
} from 'commons/CallToAction/constants';
import styled, { css } from 'commons/Goober';
import { TOOLBAR_HEIGHT_MOBILE } from 'commons/Toolbar/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { IS_SIDEBAR_OPEN_CLASS } from 'commons/utils/classNames';
import { LAYER_BOTTOM_NAVIGATION } from 'commons/utils/layers';
import {
  animationStyle,
  animationStyle2x,
  sidebarWidth,
} from 'commons/utils/variables';

export const BottomNavigationStyled = styled('div')<{ $isBottomNav?: boolean }>`
  position: fixed;
  right: 0;
  bottom: ${({ $isBottomNav }) =>
    $isBottomNav ? `${TOOLBAR_HEIGHT_MOBILE}` : '0'};
  left: 0;
  z-index: ${LAYER_BOTTOM_NAVIGATION};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  pointer-events: none;
  transition:
    bottom ${animationStyle},
    left ${animationStyle};
  will-change: bottom, left;

  @media screen and (min-width: ${screenMdAbove}) {
    bottom: 0;
    .${IS_SIDEBAR_OPEN_CLASS} & {
      left: ${sidebarWidth};
    }
  }
  @media print {
    display: none;
  }
`;

export const BottomNavActionsStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
`;

export const ctaBottomNavStyles = css`
  justify-content: center;
  gap: 0.8rem;
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  min-width: 5.6rem;
  height: 5.6rem;
  border-radius: 2.8rem;
  font-size: 1.5rem;
  pointer-events: all;
  box-shadow:
    0 0.6rem 0.8rem 0 var(--cta-bottom-nav-shadow),
    0 0.1rem 1.6rem 0 var(--cta-bottom-nav-shadow),
    0 0.2rem 0.4rem -0.1rem var(--cta-bottom-nav-shadow);

  .${CTA_ICON_CLASS} {
    font-size: 2.4rem;
  }
`;

const hideLabelStyles = css`
  gap: 0;

  .${CTA_LABEL_CLASS} {
    max-width: 0;
    opacity: 0;
  }
`;

export const ButtonActionStyled = styled(Button)<{
  $hideLabel: boolean;
}>`
  ${ctaBottomNavStyles};
  transition: gap ${animationStyle2x};

  .${CTA_LABEL_CLASS} {
    max-width: 22.4rem;
    opacity: 1;
    transition:
      max-width ${animationStyle2x},
      opacity ${animationStyle2x};
  }
  ${({ $hideLabel }) => ($hideLabel ? hideLabelStyles : '')}
`;

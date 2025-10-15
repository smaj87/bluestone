import Button from 'commons/Button';
import { CTA_LABEL_CLASS } from 'commons/CallToAction/constants';
import styled, { css } from 'commons/Goober';
import { toolbarGroupSpacesFunc } from 'commons/Toolbar/space';
import { ToolbarGroupSpace } from 'commons/Toolbar/types';
import {
  screenLgUnder,
  screenMdAbove,
  screenMdUnder,
  screenSmAbove,
} from 'commons/utils/breakpoints';
import { LAYER_TOOLBAR_SUBMENU } from 'commons/utils/layers';
import { animationStyle, corner, navbarHeight } from 'commons/utils/variables';

import {
  IS_MOVING_CLASS,
  TOOLBAR_HEIGHT,
  TOOLBAR_HEIGHT_MOBILE,
  TOOLBAR_HEIGHT_MOVING,
} from './constants';

const toolbarBasicStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0;
  height: ${TOOLBAR_HEIGHT};
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 100;
`;

const toolbarMdAboveStyles = css`
  padding: 0.8rem;
  border-radius: ${corner};
  background: var(--toolbar-bg);
`;

export const toolbarStyles = css`
  ${toolbarBasicStyles};
  background: var(--toolbar-bg--mobile);

  @media screen and (min-width: ${screenMdAbove}) {
    ${toolbarMdAboveStyles};
    margin-bottom: 0.8rem;
  }
  @media screen and (max-width: ${screenMdUnder}) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${TOOLBAR_HEIGHT_MOBILE};
    overflow: hidden;
  }
`;

export const toolbarPrintingStyles = css`
  border-radius: 0;
  background: var(--toolbar-bg--neutral);

  @media screen and (min-width: ${screenMdAbove}) {
    border-radius: 0;
    background: var(--toolbar-bg--neutral);

    .${IS_MOVING_CLASS} & {
      border-radius: 0;
      background: var(--toolbar-bg--neutral);
    }
  }
`;

interface ToolbarWrapperStyledProps {
  $noNavbar?: boolean;
}

export const ToolbarWrapperStyled = styled('div')<ToolbarWrapperStyledProps>`
  @media screen and (min-width: ${screenMdAbove}) {
    position: sticky;
    top: ${({ $noNavbar }) => ($noNavbar ? '-0.1rem' : navbarHeight)};
    z-index: 100;
    height: ${TOOLBAR_HEIGHT_MOVING};
  }
  @media print {
    display: none;
  }
`;

interface ToolbarStyledProps {
  $isPrinting?: boolean;
}

export const ToolbarStyled = styled('div')<ToolbarStyledProps>`
  ${toolbarStyles};

  @media screen and (min-width: ${screenMdAbove}) {
    height: ${TOOLBAR_HEIGHT};
    transition: height ${animationStyle};

    .${IS_MOVING_CLASS} & {
      border-radius: 0 0 ${corner} 0;
      height: ${TOOLBAR_HEIGHT_MOVING};
      background: var(--toolbar-bg--moving);
      box-shadow: -0.2rem 0.2rem 0.2rem 0 var(--toolbar-shadow);
    }
  }

  ${({ $isPrinting }) => ($isPrinting ? toolbarPrintingStyles : '')};
`;

export const ToolbarContentStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: ${screenMdUnder}) {
    align-items: center;
    flex-wrap: wrap;
    column-gap: 0.4rem;
    padding: 0 0.8rem;
    height: ${TOOLBAR_HEIGHT_MOBILE};
  }
`;

export const CheckedMailsActionsStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;

  @media screen and (max-width: ${screenMdUnder}) {
    width: 100%;
    height: ${TOOLBAR_HEIGHT_MOBILE};
  }
`;

export const ToolbarBottomStyled = styled('div')`
  ${toolbarStyles};
  ${toolbarMdAboveStyles};
  bottom: 0;
  margin-top: 0.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 0;
  }
`;

export const ToolbarBottomContentStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 0.8rem;
  align-items: center;
  width: 100%;
`;

export interface ToolbarGroupStyledProps {
  $space: ToolbarGroupSpace;
}

export const ToolbarGroupStyled = styled('div')<ToolbarGroupStyledProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, auto));
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  ${toolbarGroupSpacesFunc};
`;

export const ToolbarGroupItemStyled = styled('div')``;

const toLeftStyles = css`
  justify-content: flex-start;
`;

const toRightStyles = css`
  justify-self: flex-end;
  margin-left: auto;
`;

const isMobileStyles = css`
  @media screen and (min-width: ${screenSmAbove}) {
    display: none;
  }
`;

export interface ToolbarButtonsStyledProps {
  $toLeft?: boolean;
  $toRight?: boolean;
  $isMobile?: boolean;
}

export const ToolbarButtonsStyled = styled('div')<ToolbarButtonsStyledProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
  padding: 0;
  list-style: none;
  &:empty {
    display: none;
  }
  ${({ $toLeft }) => $toLeft && toLeftStyles};
  ${({ $toRight }) => $toRight && toRightStyles};
  ${({ $isMobile }) => $isMobile && isMobileStyles};
`;

export const ToolbarOptionsStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

export const ToolbarNavStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface ToolbarMobileStyledProps {
  $isToggled?: boolean;
}

const toolbarMobileStyles = css`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: ${LAYER_TOOLBAR_SUBMENU};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${TOOLBAR_HEIGHT_MOBILE};
  background: var(--toolbar-bg--mobile);
`;

const isMobileSubmenuToggledStyles = css`
  bottom: -${TOOLBAR_HEIGHT_MOBILE};
`;

export const ToolbarMobileStyled = styled('div')<ToolbarMobileStyledProps>`
  ${toolbarMobileStyles};
  padding-inline: 0.8rem;
  ${({ $isToggled }) => !!$isToggled && isMobileSubmenuToggledStyles};
`;

export const ButtonToolbar = styled(Button)`
  @media screen and (min-width: ${screenMdAbove}) and (max-width: ${screenLgUnder}) {
    .${CTA_LABEL_CLASS} {
      display: none;
    }
  }
`;

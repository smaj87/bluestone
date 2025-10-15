import styled, { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

import { bouncingDotColorsFunc } from './colors';
import { loaderPositionsFunc } from './position';
import { bouncingDotSizesFunc } from './sizes';
import { BouncingDotColor, BouncingDotSize, LoaderPosition } from './types';

export const LoaderBouncingContainerStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    height: 19.2rem;
  }
`;

export const LoaderBouncingContainerMobileListStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.8rem;
`;

export interface LoaderBouncingStyledProps {
  $position?: LoaderPosition;
}

export const LoaderBouncingDotsStyled = styled(
  'div',
)<LoaderBouncingStyledProps>`
  ${loaderPositionsFunc};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface BouncingDotStyledProps {
  $color?: BouncingDotColor;
  $size?: BouncingDotSize;
}

export const loaderDotStyles = css`
  display: block;
  margin: 0 0.2rem;
  border-radius: 50%;
  animation-duration: 600ms;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  &:nth-child(2) {
    animation-delay: 200ms;
  }
  &:nth-child(3) {
    animation-delay: 400ms;
  }
`;

export const BouncingDotStyled = styled('div')<BouncingDotStyledProps>`
  ${bouncingDotColorsFunc};
  ${bouncingDotSizesFunc};
  ${loaderDotStyles};
`;

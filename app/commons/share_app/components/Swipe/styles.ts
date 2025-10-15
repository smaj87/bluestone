import styled, { css } from 'commons/Goober';

import { swipeBgColorsFunc } from './colors';
import { SwipeBgColor } from './types';

export interface SwipeStyledProps {
  $bg: SwipeBgColor;
}

const swipeStyles = css`
  ${swipeBgColorsFunc};
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SwipeLeftStyled = styled('div')<SwipeStyledProps>`
  ${swipeStyles};
  left: 0;
  justify-content: flex-start;
`;

export const SwipeRightStyled = styled('div')<SwipeStyledProps>`
  ${swipeStyles};
  right: 0;
  justify-content: flex-end;
`;

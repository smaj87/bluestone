import { css } from 'commons/Goober';

import { SwipeStyledProps } from './styles';
import { SwipeBgColor } from './types';

export const swipeBgColors: Record<SwipeBgColor, any> = {
  primary: css`
    background: var(--swipe-bg--primary);
  `,
  secondary: css`
    background: var(--swipe-bg--secondary);
  `,
};

export const swipeBgColorsFunc = ({
  $bg,
}: {
  $bg?: SwipeStyledProps['$bg'];
}) => ($bg ? swipeBgColors[$bg] : 'primary');

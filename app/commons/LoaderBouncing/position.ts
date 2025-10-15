import { css } from 'commons/Goober';

import { LoaderBouncingStyledProps } from './styles';
import { LoaderPosition } from './types';

export const abs = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const rel = css`
  position: relative;
`;

export const loaderPositions: Record<LoaderPosition, any> = {
  absolute: abs,
  relative: rel,
};

export const loaderPositionsFunc = ({
  $position,
}: {
  $position?: LoaderBouncingStyledProps['$position'];
}) => ($position ? loaderPositions[$position] : loaderPositions.relative);

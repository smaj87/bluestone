import { css } from 'commons/Goober';

import { BouncingDotStyledProps } from './styles';
import { BouncingDotSize } from './types';

const dotSizeSm = '0.8rem';
const dotSizeMd = '1.2rem';
const dotSizeLg = '1.6rem';
const dotSizeSmMove = '0.4rem';
const dotSizeMdMove = '0.6rem';
const dotSizeLgMove = '0.8rem';

export const sizeSm = css`
  width: ${dotSizeSm};
  height: ${dotSizeSm};
  transform: translate3d(0, ${dotSizeSmMove}, 0);
  animation-name: bouncing-loader-sm;

  @keyframes bouncing-loader-sm {
    to {
      transform: translate3d(0, -${dotSizeSmMove}, 0);
    }
  }
`;

export const sizeMd = css`
  width: ${dotSizeMd};
  height: ${dotSizeMd};
  transform: translate3d(0, ${dotSizeMdMove}, 0);
  animation-name: bouncing-loader-md;

  @keyframes bouncing-loader-md {
    to {
      transform: translate3d(0, -${dotSizeMdMove}, 0);
    }
  }
`;

export const sizeLg = css`
  width: ${dotSizeLg};
  height: ${dotSizeLg};
  transform: translate3d(0, ${dotSizeLgMove}, 0);
  animation-name: bouncing-loader-lg;

  @keyframes bouncing-loader-lg {
    to {
      transform: translate3d(0, -${dotSizeLgMove}, 0);
    }
  }
`;

export const bouncingDotSizes: Record<BouncingDotSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const bouncingDotSizesFunc = ({
  $size,
}: {
  $size?: BouncingDotStyledProps['$size'];
}) => ($size ? bouncingDotSizes[$size] : bouncingDotSizes.lg);

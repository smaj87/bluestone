import { FC, memo } from 'commons/utils/react';

import { LOADER_DOT_CLASS } from './constants';
import { BouncingDotStyled, LoaderBouncingDotsStyled } from './styles';
import { BouncingDotColor, BouncingDotSize, LoaderPosition } from './types';

interface LoaderBouncingDotsProps {
  position?: LoaderPosition;
  color?: BouncingDotColor;
  size?: BouncingDotSize;
}

const LoaderBouncingDots: FC<LoaderBouncingDotsProps> = ({
  color,
  position,
  size,
}) => (
  <LoaderBouncingDotsStyled $position={position}>
    <BouncingDotStyled
      $color={color}
      $size={size}
      className={LOADER_DOT_CLASS}
    />
    <BouncingDotStyled
      $color={color}
      $size={size}
      className={LOADER_DOT_CLASS}
    />
    <BouncingDotStyled
      $color={color}
      $size={size}
      className={LOADER_DOT_CLASS}
    />
  </LoaderBouncingDotsStyled>
);

LoaderBouncingDots.displayName = 'LoaderBouncingDots';

export default memo(LoaderBouncingDots);

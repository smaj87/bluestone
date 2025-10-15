import { css } from 'commons/Goober';

import {
  PlaceholderTileImageStyledProps,
  PlaceholderTileStyledProps,
} from './styles';
import { PlaceholderTileSize } from './types';

export const sizeSm = css`
  grid-template-columns: 3.2rem 1fr;
`;

export const sizeMd = css`
  grid-template-columns: 4.8rem 1fr;
`;

export const sizeLg = css`
  grid-template-columns: 6.4rem 1fr;
`;

export const placeholderTileSizes: Record<PlaceholderTileSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const placeholderTileSizesFunc = ({
  $size,
}: {
  $size?: PlaceholderTileStyledProps['$size'];
}) => ($size ? placeholderTileSizes[$size] : '');

export const sizeImageSm = css`
  height: 3.2rem;
`;

export const sizeImageMd = css`
  height: 4.8rem;
`;

export const sizeImageLg = css`
  height: 6.4rem;
`;

export const placeholderTileImageSizes: Record<PlaceholderTileSize, any> = {
  sm: sizeImageSm,
  md: sizeImageMd,
  lg: sizeImageLg,
};

export const placeholderTileImageSizesFunc = ({
  $size,
}: {
  $size?: PlaceholderTileImageStyledProps['$size'];
}) => ($size ? placeholderTileImageSizes[$size] : '');

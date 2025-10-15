import { PlaceholderTileSize } from 'commons/share_app/components/PlaceholderTile/types';
import { FC, memo } from 'commons/utils/react';

import {
  PlaceholderDataStyled,
  PlaceholderImgStyled,
  PlaceholderLongStyled,
  PlaceholderRowStyled,
  PlaceholderShortStyled,
  PlaceholderTileStyled,
} from './styles';

interface PlaceholderTileProps {
  size: PlaceholderTileSize;
}

const PlaceholderTile: FC<PlaceholderTileProps> = ({ size }) => (
  <PlaceholderTileStyled $size={size}>
    <PlaceholderImgStyled $size={size} />
    <PlaceholderDataStyled>
      <PlaceholderLongStyled />
      <PlaceholderLongStyled />
      <PlaceholderRowStyled>
        <PlaceholderShortStyled />
        <PlaceholderShortStyled />
      </PlaceholderRowStyled>
    </PlaceholderDataStyled>
  </PlaceholderTileStyled>
);

PlaceholderTile.displayName = 'PlaceholderTile';

export default memo(PlaceholderTile);

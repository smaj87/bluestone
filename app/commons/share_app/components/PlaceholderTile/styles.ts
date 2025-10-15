import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import {
  placeholderTileImageSizesFunc,
  placeholderTileSizesFunc,
} from 'commons/share_app/components/PlaceholderTile/sizes';
import { PlaceholderTileSize } from 'commons/share_app/components/PlaceholderTile/types';
import { corner } from 'commons/utils/variables';

export const PlaceholderStyled = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  height: 8rem;
`;

export interface PlaceholderTileStyledProps {
  $size?: PlaceholderTileSize;
}

export const PlaceholderTileStyled = styled('div')<PlaceholderTileStyledProps>`
  display: grid;
  gap: 0.8rem;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  padding: 0.8rem;
  border-radius: ${corner};
  border: 0.1rem solid var(--shopping-tile-border);
  background: var(--shopping-tile-bg);
  width: 100%;
  height: 100%;
  ${placeholderTileSizesFunc};
`;

const placeholderItemStyles = css`
  background: var(--shopping-placeholder-bg);
  border-radius: ${corner};
  filter: blur(0.2rem);
`;

export interface PlaceholderTileImageStyledProps {
  $size?: PlaceholderTileSize;
}

export const PlaceholderImgStyled = styled(
  'div',
)<PlaceholderTileImageStyledProps>`
  ${placeholderItemStyles};
  width: 100%;
  ${placeholderTileImageSizesFunc};
`;

export const PlaceholderDataStyled = styled('div')`
  display: grid;
  gap: 0.8rem;
  grid-template-rows: auto auto 1fr;
`;

export const PlaceholderLongStyled = styled('div')`
  ${placeholderItemStyles};
  width: 100%;
  height: 0.8rem;
`;

export const PlaceholderShortStyled = styled('div')`
  ${placeholderItemStyles};
  width: 20%;
  height: 0.8rem;
`;

export const PlaceholderRowStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PlaceholderButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

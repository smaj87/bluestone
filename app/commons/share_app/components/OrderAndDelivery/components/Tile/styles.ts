import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { corner } from 'commons/utils/variables';

import { TILE_CONTENT_AREA, TILE_ICON_AREA } from './constants';
import { tileIconRolesFunc, tileRolesFunc, tileValueRolesFunc } from './roles';
import { TileRole } from './types';

export interface TileStyledProps {
  $role: TileRole;
}

export const TileStyled = styled('div')<TileStyledProps>`
  display: grid;
  justify-content: flex-start;
  grid-template-areas: '${TILE_ICON_AREA} ${TILE_CONTENT_AREA}';

  ${tileRolesFunc};
`;

export const TileIconBoxStyled = styled('figure')`
  grid-area: ${TILE_ICON_AREA};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: ${corner};
  background: var(--schema-bg--secondary);
`;

export interface TileIconStyledProps {
  $role: TileRole;
}

export const TileIcon = styled(Icon)<TileIconStyledProps>`
  grid-area: ${TILE_ICON_AREA};
  font-size: 1.6rem;
  color: var(--schema-txt--option);
  ${tileIconRolesFunc};
`;

const tileContentSingleLineStyles = css`
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.4rem;
`;

interface TileContentStyledProps {
  $isSingleLine?: boolean;
}

export const TileContentStyled = styled('div')<TileContentStyledProps>`
  ${({ $isSingleLine }) => ($isSingleLine ? tileContentSingleLineStyles : '')};
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-area: ${TILE_CONTENT_AREA};
`;

export const TileLabelStyled = styled('span')`
  font-size: 1.3rem;
  line-height: 1.54;
  color: var(--schema-txt--option);
`;

export interface TileValueStyledProps {
  $role: TileRole;
}

export const TileValueStyled = styled('span')<TileValueStyledProps>`
  color: var(--schema-txt);
  ${tileValueRolesFunc};
`;

export const ButtonTile = styled(Button)`
  padding: 0;
  border-width: 0;
  height: initial;
  background: none;
  text-decoration: underline;
  text-decoration-thickness: 0.1rem;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: none;
      text-decoration-thickness: 0.2rem;
    }
  }
`;

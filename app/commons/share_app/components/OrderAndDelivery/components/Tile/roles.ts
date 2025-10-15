import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

import { TILE_CONTENT_AREA } from './constants';
import {
  TileIconStyledProps,
  TileStyledProps,
  TileValueStyledProps,
} from './styles';
import { TileRole } from './types';

export const tileRoles: Record<TileRole, any> = {
  main: css`
    grid-template-columns: 4rem 1fr;
    grid-column-gap: 0.8rem;
    align-items: center;

    @media screen and (min-width: ${screenMdAbove}) {
      grid-template-areas: '${TILE_CONTENT_AREA}';
      grid-template-columns: initial;
      grid-column-gap: 1.2rem;
      align-items: flex-start;
    }
  `,
  default: css`
    grid-template-columns: 4rem 1fr;
    grid-column-gap: 0.8rem;
    align-items: flex-start;

    @media screen and (min-width: ${screenMdAbove}) {
      grid-template-columns: 1.6rem 1fr;
      grid-column-gap: 1.2rem;
    }
  `,
};

export const tileRolesFunc = ({
  $role,
}: {
  $role?: TileStyledProps['$role'];
}) => ($role ? tileRoles[$role] : '');

export const tileIconRoles: Record<TileRole, any> = {
  main: css`
    font-size: 2.8rem;
  `,
  default: css`
    font-size: 2rem;

    @media screen and (min-width: ${screenMdAbove}) {
      font-size: 1.8rem;
    }
  `,
};

export const tileIconRolesFunc = ({
  $role,
}: {
  $role?: TileIconStyledProps['$role'];
}) => ($role ? tileIconRoles[$role] : '');

export const tileValueRoles: Record<TileRole, any> = {
  main: css`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.2;
  `,
  default: css`
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.54;
  `,
};

export const tileValueRolesFunc = ({
  $role,
}: {
  $role?: TileValueStyledProps['$role'];
}) => ($role ? tileValueRoles[$role] : '');

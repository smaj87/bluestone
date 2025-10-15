import styled, { css } from 'commons/Goober';

import { navTreeHeightFunc, navTreeWidthFunc } from './dimension';
import { navTreeOffsetFunc } from './offset';
import { NavTreeDimension, NavTreeOffset } from './types';

export interface NavTreeItemStylesProps {
  $isSelected?: boolean;
  $width?: NavTreeDimension;
  $height?: NavTreeDimension;
  $offset?: NavTreeOffset;
}

const navTreeItemSelectedStyles = css`
  ${navTreeOffsetFunc};
`;

export const NavTreeItemStyled = styled('div')<NavTreeItemStylesProps>`
  flex-shrink: 0;
  max-width: 100%;
  ${navTreeWidthFunc};
  ${navTreeHeightFunc};
  ${({ $isSelected }) => ($isSelected ? navTreeItemSelectedStyles : undefined)};
`;

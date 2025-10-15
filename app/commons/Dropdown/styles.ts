import { contextMenuSizesFunc } from 'commons/ContextMenu/sizes';
import {
  contextMenuArrowStyles,
  contextMenuColorsStyles,
  contextMenuContentStyles,
  ContextMenuStyledProps,
  contextMenuStyles,
} from 'commons/ContextMenu/styles';
import styled from 'commons/Goober';

export const DropdownMenuStyled = styled('div')<ContextMenuStyledProps>`
  ${contextMenuStyles}
  ${contextMenuColorsStyles}
  ${contextMenuSizesFunc}
`;

interface ddProps {
  $maxHeight?: number;
}

export const DropdownMenuContentStyled = styled('div')<ddProps>`
  ${contextMenuContentStyles};
  max-height: ${({ $maxHeight }) =>
    $maxHeight ? `${$maxHeight}px` : 'calc(50vh - 4.4rem'};
`;

export const DropdownArrowStyled = styled('div')`
  ${contextMenuArrowStyles}
`;

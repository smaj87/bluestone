import { contextMenuSizesFunc } from 'commons/ContextMenu/sizes';
import {
  contextMenuArrowStyles,
  contextMenuColorsStyles,
  contextMenuContentStyles,
  ContextMenuStyledProps,
  contextMenuStyles,
} from 'commons/ContextMenu/styles';
import styled from 'commons/Goober';

export const TooltipWrapperStyled = styled('div')`
  display: inline-flex;
  min-width: 0;
  max-width: 100%;
`;

export const TooltipMenuStyled = styled('div')<ContextMenuStyledProps>`
  ${contextMenuStyles}
  ${contextMenuColorsStyles}
  ${contextMenuSizesFunc}

  &[data-popper-placement^='top'] {
    margin-bottom: -0.1rem;
  }

  &[data-popper-placement^='bottom'] {
    margin-top: -0.1rem;
  }

  &[data-popper-placement^='left'] {
    margin-right: -0.1rem;
  }

  &[data-popper-placement^='right'] {
    margin-left: -0.1rem;
  }
`;

export const TooltipMenuContentStyled = styled('div')`
  ${contextMenuContentStyles};
  max-height: calc(50vh - 4.4rem); // 4.4rem - lg button
`;

export const TooltipArrowStyled = styled('div')`
  ${contextMenuArrowStyles}
`;

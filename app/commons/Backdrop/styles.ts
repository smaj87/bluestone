import styled from 'commons/Goober';
import { LAYER_MODAL_BACKDROP } from 'commons/utils/layers';

export interface BackdropStyledProps {
  $zIndex?: number;
}

export const BackdropStyled = styled('div')<BackdropStyledProps>`
  position: fixed;
  z-index: ${({ $zIndex }) => $zIndex || LAYER_MODAL_BACKDROP};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--overlay-bg);
  pointer-events: auto;
`;

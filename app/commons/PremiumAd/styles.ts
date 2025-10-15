import styled from 'commons/Goober';

import {
  premiumAdContentPlacementFunc,
  premiumAdPlacementFunc,
} from './placement';
import { PremiumAdPlacement } from './types';

export interface PremiumAdStyledProps {
  $placement?: PremiumAdPlacement;
}

export const PremiumAdContainerStyled = styled('div')`
  &:empty {
    display: none;
  }
`;

export const PremiumAdStyled = styled('div')<PremiumAdStyledProps>`
  ${premiumAdPlacementFunc};
  position: absolute;
  z-index: 1;
  width: 32rem;
  background: var(--context-menu-bg);
`;

export const PremiumAdContentStyled = styled('button')<PremiumAdStyledProps>`
  ${premiumAdContentPlacementFunc};
  cursor: pointer;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

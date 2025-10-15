import styled, { css } from 'commons/Goober';
import { shoppingTileHeight } from 'commons/share_app/components/CouponsInDetail/constants';
import { lastSeenFunc } from 'commons/share_app/components/LastSeen/styles';
import { focusVisibleStyles } from 'commons/utils/commonStyles';
import { animationStyle, corner } from 'commons/utils/variables';

import { shoppingTileLayoutFunc } from './layout';
import { ShoppingTileLayout } from './types';

export interface ShoppingPagesTileStyledProps {
  $layout?: ShoppingTileLayout;
  $isUrl?: boolean;
}

export const shoppingTileStyles = css`
  position: relative;
  display: grid;
  grid-column-gap: 0.8rem;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  border-radius: ${corner};
  border: 0.1rem solid var(--shopping-tile-border);
  background: var(--shopping-tile-bg);
  color: var(--shopping-tile-txt);
  overflow: hidden;
  ${shoppingTileLayoutFunc};

  ${lastSeenFunc(
    'var(--shopping-tile-bg)',
    'var(--shopping-tile-bg--highlight)',
  )}
`;

export const ShoppingPagesTileStyled = styled(
  'div',
)<ShoppingPagesTileStyledProps>`
  ${shoppingTileStyles};
  min-height: ${shoppingTileHeight};
  cursor: default;
`;

export const ShoppingPagesButtonTileStyled = styled(
  'button',
)<ShoppingPagesTileStyledProps>`
  ${shoppingTileStyles};
  min-height: ${shoppingTileHeight};
  cursor: pointer;
  filter: drop-shadow(0 0 0 var(--shopping-tile-shadow));
  transition: filter ${animationStyle};
  will-change: filter;

  @media (hover: hover) {
    &:hover {
      filter: drop-shadow(0 0 0.2rem var(--shopping-tile-shadow));
    }
  }

  &:focus-visible {
    ${focusVisibleStyles};
  }
`;

export const shoppingPagesTileActionsStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.4rem;
  margin-top: auto;
`;

export const ShoppingPagesTileActionsStyled = styled('div')`
  ${shoppingPagesTileActionsStyles};
`;

export const shoppingTileButtonStyles = css`
  padding: 0.1rem 0.8rem;
  max-width: fit-content;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;
`;

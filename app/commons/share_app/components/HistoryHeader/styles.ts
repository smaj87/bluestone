import styled from 'commons/Goober';
import {
  shoppingPagesTileActionsStyles,
  shoppingTileStyles,
} from 'commons/share_app/components/ShoppingPages/ShoppingTile/styles';

export const HistoryHeaderStyled = styled('div')`
  padding: 0.8rem;
  background: var(--history-header-bg);
`;

export const HistoryHeaderTileStyled = styled('div')`
  ${shoppingTileStyles};
`;

export const HistoryHeaderTileActionsStyled = styled('div')`
  ${shoppingPagesTileActionsStyles};
`;

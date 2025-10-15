import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const ListItemActionsStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 0.8rem;
  min-width: 10.4rem;
  height: 100%;

  @media screen and (min-width: ${screenMdAbove}) {
    position: absolute;
    top: 0;
    right: 0;
    padding-left: 0.8rem;
    background: var(--list-item-actions-bg);
  }
`;

export const ListItemActionsItemStyled = styled('div')`
  height: 100%;
`;

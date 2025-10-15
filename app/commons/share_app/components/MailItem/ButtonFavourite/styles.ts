import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import {
  LIST_ITEM_IS_CHECKED_CLASS,
  LIST_ITEM_IS_HOVER_CLASS,
  LIST_ITEM_IS_MAILING_MARKED_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';

const isFavouritveActiveStyles = css`
  color: var(--list-item-txt--favourite--active);

  @media (hover: hover) {
    &:hover:not(:disabled) {
      color: var(--list-item-txt--favourite--active);
    }
  }
`;

export const ButtonFavouriteStyled = styled(Button)`
  @media screen and (min-width: ${screenMdAbove}) {
    align-items: flex-start;
    padding: 0.8rem;
    width: 100%;
    height: 100%;
  }

  .${LIST_ITEM_IS_MAILING_MARKED_CLASS}:not(.${LIST_ITEM_IS_HOVER_CLASS}) & {
    color: var(--list-item-txt--primary--mailing-marked);
  }

  .${LIST_ITEM_IS_CHECKED_CLASS}:not(.${LIST_ITEM_IS_HOVER_CLASS}) & {
    color: var(--list-item-txt--primary--checked);
  }

  ${({ $isActive }) => ($isActive ? isFavouritveActiveStyles : undefined)};
`;

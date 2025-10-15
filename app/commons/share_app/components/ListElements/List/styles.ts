import styled, { css } from 'commons/Goober';
import { lastSeenFunc } from 'commons/share_app/components/LastSeen/styles';
import { ListItemSizes } from 'commons/share_app/components/ListElements/List/types';
import { screenMdAbove, screenMdUnder } from 'commons/utils/breakpoints';
import { VISIBLE_STATE_CLASS } from 'commons/utils/classNames';
import { focusVisibleInsideStyles } from 'commons/utils/commonStyles';

import {
  LIST_ITEM_CLASS,
  LIST_ITEM_IS_CHECKED_CLASS,
  LIST_ITEM_IS_HOVER_CLASS,
  LIST_ITEM_IS_MAILING_MARKED_CLASS,
} from './constants';

export const ListStyled = styled('div')`
  width: 100%;
  background: var(--list-bg);
`;

export const listItemVisibleStyles = css`
  position: relative;
  isolation: isolate;
  display: block;
  width: 100%;
  overflow: hidden;
`;

export const listItemStyles = css`
  display: none;

  ${lastSeenFunc('var(--list-item-bg)', 'var(--list-item-bg--highlight)')};

  .${VISIBLE_STATE_CLASS} & {
    ${listItemVisibleStyles}
  }
`;

export interface ListItemContentStyledProps {
  $size: ListItemSizes;
}

export const listItemContentStyles = css`
  position: relative;
  z-index: 10;
  display: grid;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 100%;
  background: var(--list-item-bg);

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }

  .${LIST_ITEM_IS_MAILING_MARKED_CLASS} & {
    background: var(--list-item-bg--mailing-marked);
  }

  .${LIST_ITEM_IS_CHECKED_CLASS} & {
    background: var(--list-item-bg--checked);
  }

  .${LIST_ITEM_IS_HOVER_CLASS} & {
    background: var(--list-item-bg--hover);
  }

  @media (hover: hover) and (max-width: ${screenMdUnder}) {
    &:hover {
      background: var(--list-item-bg--hover);
    }
  }

  @media screen and (max-width: ${screenMdUnder}) {
    box-shadow:
      0.4rem 0 1.6rem 0.4rem var(--list-item-shadow),
      -0.4rem 0 1.6rem 0.4rem var(--list-item-shadow),
      inset 0 -0.1rem 0 0 var(--list-item-border),
      inset 0 -0.1rem 0 0 transparent;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    .${LIST_ITEM_CLASS}:not(:last-child) & {
      box-shadow: inset 0 -0.1rem 0 0 var(--list-item-border);
    }
  }
`;

export const listItemAreaStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
  min-height: 2rem;
  color: var(--list-item-txt--primary);

  .${LIST_ITEM_IS_MAILING_MARKED_CLASS} & {
    color: var(--list-item-txt--primary--mailing-marked);
  }

  .${LIST_ITEM_IS_CHECKED_CLASS} & {
    color: var(--list-item-txt--primary--checked);
  }

  @media (hover: hover) {
    .${LIST_ITEM_CLASS}:hover & {
      color: var(--list-item-txt--primary--hover);
    }
  }
`;

export const ListItemAreaContentStyled = styled('div')`
  min-width: 0;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

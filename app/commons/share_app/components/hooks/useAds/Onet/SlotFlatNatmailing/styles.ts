import styled, { css } from 'commons/Goober';
import {
  LIST_ITEM_CLASS,
  LIST_ITEM_IS_CHECKED_CLASS,
  LIST_ITEM_IS_MAILING_MARKED_CLASS,
  LIST_ITEM_IS_UNSEEN_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { listItemSizeFunc } from 'commons/share_app/components/ListElements/List/size';
import {
  listItemAreaStyles,
  ListItemContentStyledProps,
  listItemContentStyles,
  listItemVisibleStyles,
} from 'commons/share_app/components/ListElements/List/styles';
import { mailDataStyles } from 'commons/share_app/components/MailItem/styles';
import { screenLgAbove, screenMdAbove } from 'commons/utils/breakpoints';

export const SlotFlatItemStyled = styled('div')`
  ${listItemVisibleStyles};
  box-shadow: inset 0 -0.1rem 0 0 var(--list-item-border);
  overflow: hidden;
`;

interface SlotFlatItemContentStyledProps extends ListItemContentStyledProps {
  $isSpam?: boolean;
}

const slotFlatItemContentDefaultMdAboveStyles = css`
  grid-template-columns: 4rem 7.2rem 1fr auto;
`;

const slotFlatItemContentIsSpamMdAboveStyles = css`
  grid-template-columns: 4rem 3.2rem 1fr 7.2rem auto;
`;

export const SlotFlatItemContentStyled = styled(
  'button',
)<SlotFlatItemContentStyledProps>`
  ${listItemContentStyles};
  ${listItemSizeFunc};
  grid-template-columns: 4.8rem 1fr;
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: ${screenMdAbove}) {
    ${({ $isSpam }) =>
      $isSpam
        ? slotFlatItemContentIsSpamMdAboveStyles
        : slotFlatItemContentDefaultMdAboveStyles}
  }

  @media (hover: hover) {
    &:hover {
      background: var(--list-item-bg--hover);
    }
  }
`;

export const SlotFlatDataStyled = styled('div')`
  ${mailDataStyles};
  grid-template-rows: 1fr;
  grid-template-columns: 16rem 1fr;
  align-items: flex-start;
  padding: 0.8rem;

  @media screen and (min-width: ${screenLgAbove}) {
    grid-template-columns: 20rem 1fr;
  }
`;

export const SlotFlatDataMobileStyled = styled('div')`
  ${mailDataStyles};
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-row-gap: 0;
  grid-column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.8rem;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`;

export const SlotFlatDataDetailsStyled = styled('div')`
  display: grid;
  grid-column-gap: 0.8rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 0;
  width: 100%;
  overflow: hidden;
`;

export const SlotFlatDataDetailsContentStyled = styled('div')`
  display: grid;
  grid-column-gap: 0.4rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 0;
  width: 100%;
  overflow: hidden;
`;

export const SlotFlatDetailsMobileStyled = styled('div')`
  ${mailDataStyles};
  grid-template-columns: 1fr;
  grid-row-gap: 0;
  overflow: hidden;
`;

export const SlotFlatDetailsMobileTopStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.4rem;
  min-width: 0;
`;

export const SlotFlatFromStyled = styled('div')`
  ${listItemAreaStyles};
  text-align: left;

  .${LIST_ITEM_IS_UNSEEN_CLASS} & {
    font-weight: 700;
  }
`;

export const SlotFlatSubjectStyled = styled('div')`
  ${listItemAreaStyles};
  text-align: left;

  .${LIST_ITEM_IS_UNSEEN_CLASS} & {
    font-weight: 700;
  }
`;

export const SlotFlatSnippetStyled = styled('div')`
  ${listItemAreaStyles};
  text-align: left;
  color: var(--list-item-txt--secondary);

  .${LIST_ITEM_IS_MAILING_MARKED_CLASS} & {
    color: var(--list-item-txt--secondary--mailing-marked);
  }

  .${LIST_ITEM_IS_CHECKED_CLASS} & {
    color: var(--list-item-txt--secondary--checked);
  }

  @media (hover: hover) {
    .${LIST_ITEM_CLASS}:hover & {
      color: var(--list-item-txt--secondary--hover);
    }
  }
`;

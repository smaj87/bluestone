import styled, { css } from 'commons/Goober';
import {
  LIST_ITEM_IS_CHECKED_CLASS,
  LIST_ITEM_IS_HOVER_CLASS,
  LIST_ITEM_IS_UNSEEN_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { listItemSizeFunc } from 'commons/share_app/components/ListElements/List/size';
import {
  listItemAreaStyles,
  ListItemContentStyledProps,
  listItemContentStyles,
  listItemStyles,
  listItemVisibleStyles,
} from 'commons/share_app/components/ListElements/List/styles';
import { screenLgAbove, screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

import { MAIL_ITEM_AREAS } from './constants';
import { MailItemViews } from './types';
import { mailDetailsViewFunc } from './view';

export const MailItemStyled = styled('li')`
  ${listItemStyles};
`;

export const AdItemStyled = styled('li')<ListItemContentStyledProps>`
  ${listItemVisibleStyles};
  ${listItemSizeFunc};
  overflow: visible;
`;

interface MailItemContentStyledProps extends ListItemContentStyledProps {
  $isSpam?: boolean;
}

const mailItemContentMdAboveStyles = css`
  grid-template-columns: 4rem 4rem 3.2rem 1fr;
`;

const mailItemContentIsSpamMdAboveStyles = css`
  grid-template-columns: 4rem 3.2rem 1fr;
`;

export const MailItemContentStyled = styled('div')<MailItemContentStyledProps>`
  ${listItemContentStyles};
  ${listItemSizeFunc};
  grid-template-columns: 4.8rem 1fr;

  @media screen and (min-width: ${screenMdAbove}) {
    ${({ $isSpam }) =>
      $isSpam
        ? mailItemContentIsSpamMdAboveStyles
        : mailItemContentMdAboveStyles}
  }
`;

export const mailDataStyles = css`
  display: grid;
  grid-row-gap: 0.4rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-width: 0;
  font-size: 1.3rem;
  line-height: 1.25;
  cursor: pointer;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-column-gap: 0.8rem;
  }
`;

export interface MailDataStyledProps {
  $isFolderShow: boolean;
}

export const mailDataDefaultStyles = css`
  grid-template-columns: 1fr;
`;

export const mailDataFolderStyles = css`
  grid-template-columns: 1fr 7.2rem;
`;

export const MailDataStyled = styled('div')<MailDataStyledProps>`
  ${mailDataStyles};
  grid-template-rows: 1fr;
  align-items: flex-start;
  padding: 0.8rem;
  ${({ $isFolderShow }) =>
    $isFolderShow ? mailDataFolderStyles : mailDataDefaultStyles}
`;

export const MailDataMobileStyled = styled('div')`
  ${mailDataStyles};
  grid-row-gap: 0;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.8rem;
  width: 100%;
  min-width: 0;
`;

export const MailDataContentStyled = styled('div')`
  ${mailDataStyles};
  grid-template-rows: 1fr;
  grid-template-columns: 16rem 1fr auto;

  @media screen and (min-width: ${screenLgAbove}) {
    grid-template-columns: 20rem 1fr auto;
  }
`;

export const MailDataContentTopStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.4rem;
  min-width: 0;
  width: 100%;
`;

export const MailDataContentBottomStyled = styled('div')`
  display: grid;
  grid-auto-columns: 1fr auto;
  grid-template-areas: '${MAIL_ITEM_AREAS.SUBJECT} ${MAIL_ITEM_AREAS.FAVOURITE}' '${MAIL_ITEM_AREAS.SNIPPET} ${MAIL_ITEM_AREAS.FAVOURITE}';
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 0.4rem;
  min-width: 0;
  width: 100%;
`;

export const MailDataContentBottomRowStyled = styled('div')`
  grid-area: ${MAIL_ITEM_AREAS.SNIPPET};
  display: flex;
  column-gap: 0.4rem;
  overflow: hidden;
`;

export const MailFromStyled = styled('div')`
  ${listItemAreaStyles};
  text-align: left;

  .${LIST_ITEM_IS_UNSEEN_CLASS} & {
    font-weight: 700;
    color: var(--list-item-txt--primary--unseen);
  }
`;

export interface MailDetailsStyledProps {
  $view: MailItemViews;
}

export const MailDetailsStyled = styled('div')<MailDetailsStyledProps>`
  display: grid;
  grid-column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 0;
  width: 100%;
  overflow: hidden;
  ${mailDetailsViewFunc}
`;

export const MailSubjectStyled = styled('div')`
  ${listItemAreaStyles};
  text-align: left;

  .${LIST_ITEM_IS_UNSEEN_CLASS} & {
    font-weight: 700;
    color: var(--list-item-txt--primary--unseen);
  }
`;

export const MailDateStyled = styled('div')`
  ${listItemAreaStyles};
  grid-area: ${MAIL_ITEM_AREAS.DATE};
  flex-shrink: 0;
  margin-left: auto;
  text-align: right;

  .${LIST_ITEM_IS_UNSEEN_CLASS} & {
    font-weight: 700;
    color: var(--list-item-txt--primary--unseen);
  }

  @media screen and (min-width: ${screenMdAbove}) {
    grid-area: auto;
    padding-left: 1.6rem;
  }
`;

export const MailFolderStyled = styled('div')`
  ${listItemAreaStyles};
  grid-area: ${MAIL_ITEM_AREAS.FOLDER};
  flex-shrink: 0;
  margin-left: auto;
  text-align: right;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-area: initial;
  }
`;

export const MailItemCheckMobileStyled = styled('div')`
  width: 4.8rem;
`;

export const MailItemCheckStyled = styled('div')`
  width: 4rem;
`;

export const MailItemFavStyled = styled('div')`
  grid-area: ${MAIL_ITEM_AREAS.FAVOURITE};
  margin-left: auto;
  margin-top: auto;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-area: initial;
    margin-top: initial;
    margin-left: initial;
    width: 4rem;
  }
`;

export const MailItemStatusStyled = styled('div')`
  width: 3.2rem;
`;

export const SearchQueryStyled = styled('span')`
  padding: 0 0.2rem;
  border-radius: ${corner};
  background: var(--search-query-bg);
  font-weight: 700;
  color: var(--search-query-txt);

  .${LIST_ITEM_IS_CHECKED_CLASS}:not(.${LIST_ITEM_IS_HOVER_CLASS}) & {
    background: var(--search-query-bg--checked);
    color: var(--search-query-txt--checked);
  }
`;

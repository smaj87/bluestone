import styled from 'commons/Goober';
import { LIST_ITEM_HEIGHT } from 'commons/share_app/components/ListElements/List/constants';
import {
  listItemAreaStyles,
  listItemContentStyles,
  listItemStyles,
} from 'commons/share_app/components/ListElements/List/styles';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { VISIBLE_STATE_CLASS } from 'commons/utils/classNames';
import { corner } from 'commons/utils/variables';

import { ATTACHMENT_ITEM_AREAS } from './constants';

export const AttachmentItemStyled = styled('li')`
  ${listItemStyles};

  .${VISIBLE_STATE_CLASS} & {
    height: ${LIST_ITEM_HEIGHT.LG}rem;

    @media screen and (min-width: ${screenMdAbove}) {
      height: ${LIST_ITEM_HEIGHT.MD}rem;
    }
  }
`;

export const AttchmentItemContentStyled = styled('div')`
  ${listItemContentStyles};
  grid-template-columns: 4rem 1fr;
`;

export const AttachmentDataStyled = styled('div')`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 4rem 1fr 10.4rem;
  grid-template-areas:
    '${ATTACHMENT_ITEM_AREAS.PREVIEW} ${ATTACHMENT_ITEM_AREAS.FILE_NAME} ${ATTACHMENT_ITEM_AREAS.DATE}'
    '${ATTACHMENT_ITEM_AREAS.PREVIEW} ${ATTACHMENT_ITEM_AREAS.FROM} ${ATTACHMENT_ITEM_AREAS.DATE}'
    '${ATTACHMENT_ITEM_AREAS.PREVIEW} ${ATTACHMENT_ITEM_AREAS.SUBJECT} ${ATTACHMENT_ITEM_AREAS.SIZE}';
  grid-column-gap: 0.8rem;
  grid-row-gap: 0;
  align-items: center;
  padding: 0.8rem;
  width: 100%;
  min-width: 0;
  font-size: 1.3rem;
  line-height: 1.25;
  cursor: pointer;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 4rem 2fr 1fr 10.4rem;
    grid-template-areas: '${ATTACHMENT_ITEM_AREAS.PREVIEW} ${ATTACHMENT_ITEM_AREAS.FILE_NAME} ${ATTACHMENT_ITEM_AREAS.FROM} ${ATTACHMENT_ITEM_AREAS.DATE}' '${ATTACHMENT_ITEM_AREAS.PREVIEW} ${ATTACHMENT_ITEM_AREAS.SIZE} ${ATTACHMENT_ITEM_AREAS.SUBJECT} .';
  }
`;

export const AttachmentFileNameStyled = styled('div')`
  ${listItemAreaStyles};
  grid-area: ${ATTACHMENT_ITEM_AREAS.FILE_NAME};
  text-align: left;
`;

export const AttachmentSizeStyled = styled('div')`
  ${listItemAreaStyles};
  grid-area: ${ATTACHMENT_ITEM_AREAS.SIZE};
  text-align: right;

  @media screen and (min-width: ${screenMdAbove}) {
    text-align: left;
  }
`;

export const AttachmentFromStyled = styled('div')`
  ${listItemAreaStyles};
  grid-area: ${ATTACHMENT_ITEM_AREAS.FROM};
  text-align: left;
`;

export const AttachmentSubjectStyled = styled('div')`
  ${listItemAreaStyles};
  grid-area: ${ATTACHMENT_ITEM_AREAS.SUBJECT};
  text-align: left;
`;

export const AttachmentDateStyled = styled('div')`
  ${listItemAreaStyles};
  grid-area: ${ATTACHMENT_ITEM_AREAS.DATE};
  text-align: right;
`;

export const AttachmentItemCheckStyled = styled('div')`
  width: 4rem;
`;

export const AttachmentPreviewStyled = styled('figure')`
  ${listItemAreaStyles};
  grid-area: ${ATTACHMENT_ITEM_AREAS.PREVIEW};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: ${corner};
  width: 100%;
  height: 100%;
  font-size: 3.2rem;
  color: var(--list-item-txt--primary);
  overflow: hidden;
`;

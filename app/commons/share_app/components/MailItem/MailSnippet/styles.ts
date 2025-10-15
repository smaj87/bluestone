import Badge from 'commons/Badge';
import styled from 'commons/Goober';
import {
  LIST_ITEM_CLASS,
  LIST_ITEM_IS_CHECKED_CLASS,
  LIST_ITEM_IS_MAILING_MARKED_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { listItemAreaStyles } from 'commons/share_app/components/ListElements/List/styles';
import { screenMdAbove } from 'commons/utils/breakpoints';

import { MAIL_ITEM_AREAS } from '../constants';

export const MailSnippetStyled = styled('div')`
  grid-area: ${MAIL_ITEM_AREAS.SNIPPET};
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

  @media screen and (min-width: ${screenMdAbove}) {
    grid-area: unset;
  }
`;

export const SchemaBadge = styled(Badge)`
  font-size: 1.2rem;
  overflow: hidden;
`;

export const SchemaPaymentDataStyled = styled('span')`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SchemaScheduleDateStyled = styled('span')`
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const SchemaSnippetCtaStyled = styled('span')`
  display: inline-block;
  max-width: 100%;
  line-height: 1.4rem;
  text-decoration: underline;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (hover: hover) {
    &:hover {
      text-decoration-thickness: 0.2rem;
    }
  }
`;

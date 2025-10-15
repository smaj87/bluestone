import styled from 'commons/Goober/styled';
import Icon from 'commons/Icon';
import {
  LIST_ITEM_IS_CHECKED_CLASS,
  LIST_ITEM_IS_HOVER_CLASS,
  LIST_ITEM_IS_MAILING_CLASS,
  LIST_ITEM_IS_MAILING_MARKED_CLASS,
  LIST_ITEM_IS_UNSEEN_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { focusVisibleInsideStyles } from 'commons/utils/commonStyles';
import { corner } from 'commons/utils/variables';

import { mailFlagTypesFunc } from './flag';
import { MailFlagType } from './types';

export const MailStatusStyled = styled('button')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0.8rem 0.4rem;
  border-radius: ${corner};
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }

  @media (hover: hover) {
    &:hover {
      background: var(--cta-secondary-bg--hover);
    }
  }
`;

export const MailStatusDotStyled = styled('span')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;

  &:before {
    content: '';
    display: inline-flex;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--list-status-bg--seen--primary);

    .${LIST_ITEM_IS_UNSEEN_CLASS} & {
      background: var(--list-status-bg--unseen);
    }

    .${LIST_ITEM_IS_UNSEEN_CLASS} .${LIST_ITEM_IS_MAILING_CLASS} & {
      background: var(--list-status-bg--mailing);
    }

    .${LIST_ITEM_IS_UNSEEN_CLASS}.${LIST_ITEM_IS_MAILING_MARKED_CLASS}:not(.${LIST_ITEM_IS_HOVER_CLASS})
      .${LIST_ITEM_IS_MAILING_CLASS}
      & {
      background: var(--list-status-bg--mailing-marked);
    }

    .${LIST_ITEM_IS_UNSEEN_CLASS}.${LIST_ITEM_IS_CHECKED_CLASS}:not(.${LIST_ITEM_IS_HOVER_CLASS})
      & {
      background: var(--list-status-bg--checked);
    }
  }
`;

export interface MailFlagStyledProps {
  $flag: MailFlagType;
}

export const MailFlagStyled = styled(Icon)<MailFlagStyledProps>`
  font-size: 2rem;
  line-height: 1;
  color: var(--list-status-txt--seen);

  @media screen and (min-width: ${screenMdAbove}) {
    color: var(--list-status-bg--seen--primary);
  }

  ${mailFlagTypesFunc};
`;

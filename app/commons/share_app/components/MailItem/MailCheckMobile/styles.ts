import { bimiStyles } from 'commons/Bimi/styles';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import {
  LIST_ITEM_IS_CHECKED_CLASS,
  LIST_ITEM_IS_MAILING_CLASS,
  LIST_ITEM_IS_MAILING_MARKED_CLASS,
  LIST_ITEM_IS_UNSEEN_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { animationStyle2x } from 'commons/utils/variables';

export const MailBimiMobileStyled = styled('figure')`
  ${bimiStyles};
  width: 3.2rem;
  height: 3.2rem;
  border-width: 0;
  text-transform: uppercase;
  transform: rotate(0);
  transition:
    transform ${animationStyle2x},
    opacity ${animationStyle2x};
  will-change: transform, opacity;

  .${LIST_ITEM_IS_CHECKED_CLASS} & {
    opacity: 0;
    transform: rotate(180deg);
  }
`;

export const MailCheckButtonMobileStyled = styled('button')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

interface MailCheckButtonContentStyledProps {
  $isImageLoaded: boolean;
}

const isImageStyles = css`
  background: transparent;
`;

const isNoImageStyles = css`
  background: var(--list-status-bg--seen--secondary);

  .${LIST_ITEM_IS_UNSEEN_CLASS} & {
    background: var(--list-status-bg--unseen);
    color: var(--list-status-txt--unseen);
  }

  .${LIST_ITEM_IS_UNSEEN_CLASS} .${LIST_ITEM_IS_MAILING_CLASS} & {
    background: var(--list-status-bg--mailing);
    color: var(--list-status-txt--mailing);
  }
`;

export const MailCheckButtonContentStyled = styled(
  'span',
)<MailCheckButtonContentStyledProps>`
  ${({ $isImageLoaded }) => ($isImageLoaded ? isImageStyles : isNoImageStyles)};
  position: relative;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  color: var(--list-status-txt--seen);

  .${LIST_ITEM_IS_MAILING_MARKED_CLASS} .${LIST_ITEM_IS_MAILING_CLASS} & {
    background: var(--list-status-bg--mailing-marked);
    color: var(--list-status-txt--mailing-marked);
  }

  .${LIST_ITEM_IS_CHECKED_CLASS} &,
  .${LIST_ITEM_IS_CHECKED_CLASS} .${LIST_ITEM_IS_MAILING_CLASS} & {
    background: var(--list-status-bg--checked);
    color: var(--list-status-txt--checked);
  }
`;

export const MailCheckIconMobile = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate3d(-50%, -50%, 0) rotate(-180deg);
  opacity: 0;
  transition:
    transform ${animationStyle2x},
    opacity ${animationStyle2x};
  will-change: transform, opacity;

  .${LIST_ITEM_IS_CHECKED_CLASS} & {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
`;

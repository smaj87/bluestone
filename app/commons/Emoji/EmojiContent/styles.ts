import {
  secondaryHoverStyles,
  secondaryStyles,
} from 'commons/CallToAction/colors';
import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const Emojis = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.2rem;

  @media screen and (min-width: ${screenMdAbove}) {
    justify-content: flex-start;
  }
`;

export const EmojisList = styled('div')`
  padding: 1.6rem;
  hr {
    margin: 1.6rem 0;
    height: 0.1rem;
    background: var(--context-menu-hr);
  }

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 0 0.4rem;
  }
`;

export const ButtonEmoji = styled('button')`
  ${secondaryStyles};
  padding: 0.4rem;
  border-radius: ${corner};
  border: none;
  width: 3.6rem;
  height: 3.6rem;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  ${secondaryHoverStyles};
`;

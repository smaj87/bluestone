import styled, { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const MailHeadersListStyled = styled('ul')`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
`;

interface MailHeadersItemStyledProps {
  $isLabel?: boolean;
}

const isMailHeaderItemLabelStyles = css`
  &:not(:first-child) {
    margin-top: 1.6rem;
  }
`;

export const MailHeadersItemStyled = styled('li')<MailHeadersItemStyledProps>`
  ${({ $isLabel }) => ($isLabel ? isMailHeaderItemLabelStyles : '')};
  min-width: 0;
  font-size: 1.2rem;
  line-height: 1.5;
  word-wrap: break-word;

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.3rem;
  }
`;

export const LoadingStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 9.6rem;
`;

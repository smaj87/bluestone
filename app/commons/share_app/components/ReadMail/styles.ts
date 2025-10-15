import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const readMailDataTypoStyles = css`
  font-size: 1.2rem;
  line-height: 2rem;
  color: var(--readmail-txt--primary);

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.4rem;
  }
`;

export const textEllipsisStyles = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

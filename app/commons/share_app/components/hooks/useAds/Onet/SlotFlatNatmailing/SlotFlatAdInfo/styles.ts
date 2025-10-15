import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const SlotFlatAdInfoStyled = styled('div')`
  flex-shrink: 0;
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2;
  color: var(--list-item-txt--secondary);
  text-align: right;
  text-transform: uppercase;

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 0.8rem;
    line-height: 2;
    text-align: center;
  }
`;

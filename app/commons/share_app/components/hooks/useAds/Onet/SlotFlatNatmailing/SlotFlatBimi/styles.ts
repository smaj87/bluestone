import { bimiStyles } from 'commons/Bimi/styles';
import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const SlotFlatBimiStyled = styled('figure')`
  ${bimiStyles};
  margin: 0.8rem;
  border-width: 0;
  width: 3.2rem;
  height: 3.2rem;
  background: transparent;

  @media screen and (min-width: ${screenMdAbove}) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

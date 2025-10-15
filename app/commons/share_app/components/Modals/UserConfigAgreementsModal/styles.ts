import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const TitleStyled = styled('h3')`
  margin-bottom: 2rem;
  width: 100%;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;

  @media screen and (min-width: ${screenMdAbove}) {
    text-align: left;
  }
`;

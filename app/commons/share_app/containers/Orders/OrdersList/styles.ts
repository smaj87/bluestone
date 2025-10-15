import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const OrdersListStyled = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const OrdersListActionBoxStyled = styled('div')`
  margin-top: 1.6rem;
  max-width: 90rem;
`;

export const OrdersHeadingStyled = styled('h3')`
  margin: 6rem auto 0;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: ${screenMdAbove}) {
    max-width: 90rem;
    margin-inline: 0;
  }
`;

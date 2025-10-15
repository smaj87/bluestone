import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const orderAndDeliveryItemDataStyles = css`
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6rem;

  @media screen and (min-width: ${screenMdAbove}) {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
  }
`;

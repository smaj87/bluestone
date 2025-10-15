import Button from 'commons/Button';
import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenSmAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const OrdersDeliveredStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  box-shadow: 0 0.4rem 0.4rem 0 var(--shopping-seller-shadow);
  padding: 1.6rem;
  margin-bottom: 2.4rem;
  border-radius: ${corner};
  color: var(--shopping-txt--secondary);
  background: var(--shopping-tile-bg);

  @media screen and (min-width: ${screenSmAbove}) {
    max-width: 90rem;
  }

  p {
    font-size: 1.2rem;
    word-wrap: break-word;
    color: var(--shopping-txt--secondary);
  }
`;

export const OrdersDeliveredIconStyled = styled(Icon)`
  font-size: 2.4rem;
`;

export const OrdersDeliveredButton = styled(Button)`
  white-space: nowrap;
  min-width: fit-content;

  span {
    display: block;
    white-space: nowrap;
  }
`;

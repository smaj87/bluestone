import styled from 'commons/Goober';
import { couponListStyles } from 'commons/share_app/components/ShoppingPages/styles';

export const CashbackListStyled = styled('ul')`
  margin-top: 4rem;
  ${couponListStyles};
`;

export const CashbackListItemStyled = styled('li')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

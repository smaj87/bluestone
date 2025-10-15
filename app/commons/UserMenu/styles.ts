import styled from 'commons/Goober';
import { screenLgAbove } from 'commons/utils/breakpoints';

export const UserMenuStyled = styled('nav')`
  max-width: 16rem;

  @media screen and (min-width: ${screenLgAbove}) {
    max-width: 24rem;
  }
`;

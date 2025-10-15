import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const ModalLogoStyled = styled('figure')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.2rem;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 2.4rem;
  }
`;

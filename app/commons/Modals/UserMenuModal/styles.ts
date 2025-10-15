import { sizeMd } from 'commons/CallToAction/sizes';
import styled from 'commons/Goober';

export const UserDataMobileStyled = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3.2rem 0 0.8rem;
`;

export const UserNameStyled = styled('div')`
  ${sizeMd};
  padding: 0;
  height: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

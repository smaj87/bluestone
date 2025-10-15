import styled from 'commons/Goober';
import { corner } from 'commons/utils/variables';

export const OffersListStyled = styled('ul')`
  margin: 0;
  padding: 0.8rem;
  list-style: none;
  border: 0.1rem solid var(--schema-border);
  border-radius: ${corner};
`;

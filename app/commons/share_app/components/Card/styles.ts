import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const CardStyled = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: ${corner};
  background: var(--shopping-card-bg);
`;

export const CardContentStyled = styled('div')`
  padding: 1.6rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-top: -0.8rem;
  }
`;

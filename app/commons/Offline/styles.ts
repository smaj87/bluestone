import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const OfflineStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.8rem;
  width: 100%;
  background: var(--state-error);
  color: var(--state-error-txt);
  pointer-events: auto;

  @media screen and (min-width: ${screenMdAbove}) {
    justify-content: center;
  }
`;

export const OfflineContentStyled = styled('div')`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2rem;
`;

export const OfflineIcon = styled(Icon)`
  margin-right: 0.8rem;
  font-size: 2rem;
`;

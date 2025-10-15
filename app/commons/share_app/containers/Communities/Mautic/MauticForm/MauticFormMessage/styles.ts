import styled from 'commons/Goober';
import Icon from 'commons/Icon';

export const MauticResponseHeadingStyled = styled('p')`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1.6rem 0;
`;

export const MauticResponseTextStyled = styled('p')`
  font-size: 1.4rem;
`;

export const MauticResponseIconStyled = styled(Icon)`
  font-size: 1.8rem;
  color: var(--state-success);
  border-radius: 50%;
  border: 1px solid var(--cta-secondary-neutral-border--active);
  width: 32px;
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

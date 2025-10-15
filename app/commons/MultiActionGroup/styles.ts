import Button from 'commons/Button';
import { CTA_CLASS } from 'commons/CallToAction/constants';
import styled from 'commons/Goober';
import { corner } from 'commons/utils/variables';

export const MultiActionGroupStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.1rem;

  > .${CTA_CLASS} {
    &:first-child {
      border-radius: ${corner} 0 0 ${corner};
    }
    &:last-child {
      border-radius: 0 ${corner} ${corner} 0;
    }
  }
`;

export const MainActionButton = styled(Button)`
  min-width: 6.4rem;
`;

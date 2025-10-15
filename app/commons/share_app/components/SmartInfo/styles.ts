import Button from 'commons/Button';
import { CTA_LABEL_CLASS } from 'commons/CallToAction/constants';
import styled from 'commons/Goober';
import { corner } from 'commons/utils/variables';

export const SmartInfoStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
`;

export const SmartInfoButton = styled(Button)`
  width: fit-content;
  background: var(--shopping-btn-bg);
  font-size: 1.2rem;
  color: var(--shopping-txt);
  border-radius: 0 0 ${corner} ${corner};

  .${CTA_LABEL_CLASS} {
    text-decoration: underline;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: var(--shopping-btn-bg--hover);
      border-color: var(--shopping-btn-bg--hover);
      color: var(--shopping-btn-txt);
    }
  }
`;

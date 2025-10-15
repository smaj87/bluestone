import { FormFieldSize } from 'commons/FormElements/types';
import styled from 'commons/Goober';
import { corner } from 'commons/utils/variables';

export const ErrorTooltipStyled = styled('div')`
  position: relative;
  flex: 1;
`;

interface ErrorTooltipContentProps {
  sizeField?: FormFieldSize;
}

export const ErrorTooltipContent = styled('div')<ErrorTooltipContentProps>`
  position: absolute;
  top: 0;
  margin-inline: 0.8rem;
  padding: 0.4rem;
  width: 100%;
  max-width: 32rem;
  z-index: 10;

  ${({ sizeField }) => sizeField === 'lg' && 'margin-top: 4.2rem'};
  ${({ sizeField }) => sizeField === 'md' && 'margin-top: 3.2rem'};
  ${({ sizeField }) => sizeField === 'sm' && 'margin-top: 2rem'};

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-transform: none;

  border: 0.1rem solid var(--context-menu-border);
  background: var(--context-menu-bg);
  color: var(--context-menu-txt);
  filter: drop-shadow(0 0 0.5rem var(--context-menu-shadow));
  border-radius: ${corner};

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -0.6rem;

    border-right: 0.6rem solid transparent;
    border-left: 0.6rem solid transparent;
    border-bottom: 0.6rem solid var(--context-menu-border);
  }
`;

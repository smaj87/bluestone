import { FormFieldSize } from 'commons/FormElements/types';
import styled from 'commons/Goober';
import { corner } from 'commons/utils/variables';

export const TooltipStyled = styled('div')`
  position: relative;
  width: 100%;
`;

interface TooltipContentProps {
  sizeField?: FormFieldSize;
}

export const TooltipContent = styled('div')<TooltipContentProps>`
  position: absolute;
  top: 100%;
  width: 90%;
  margin: 0 0 0 5%;
  padding: 0.4rem;
  z-index: 10;
  transform: translateY(0.8rem);

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

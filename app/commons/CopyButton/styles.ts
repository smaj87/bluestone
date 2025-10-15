import styled from 'commons/Goober';
import { corner } from 'commons/utils/variables';

import { CLOUD_ANIMATION_TIME } from './constants';

export const CopyButtonStyled = styled('div')`
  position: relative;
  display: inline-flex;
`;

export const CloudStyled = styled('span')`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-25%, -50%, 0);
  z-index: 1;
  padding: 0.8rem;
  border-radius: ${corner};
  background: var(--context-menu-bg);
  font-size: 1.2rem;
  line-height: 1;
  color: var(--context-menu-txt);
  filter: drop-shadow(0 0 0.5rem var(--context-menu-shadow));
  opacity: 0;
  animation: fade-out-cloud ${CLOUD_ANIMATION_TIME}ms ease-out;
  pointer-events: none;

  @keyframes fade-out-cloud {
    0% {
      transform: translate3d(-50%, -50%, 0) scale(1);
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate3d(-50%, -150%, 0) scale(1.25);
      opacity: 0;
    }
  }
`;

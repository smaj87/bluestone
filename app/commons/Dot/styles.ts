import styled, { css } from 'commons/Goober';

import { dotLocationFunc } from './location';
import { DotLocation } from './types';

export const sonarAnimationStyles = css`
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--cta-primary-bg);
    animation: sonar-dot 1s ease 0.3s infinite;
  }

  &:after {
    opacity: 0.2;
  }

  @keyframes sonar-dot {
    0% {
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

export interface DotStyledProps {
  $location?: DotLocation;
}

export const DotStyled = styled('span')<DotStyledProps>`
  ${dotLocationFunc};
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: var(--cta-primary-bg);
  ${sonarAnimationStyles};
`;

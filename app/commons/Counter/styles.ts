import styled, { css } from 'commons/Goober';
import { animationStyle } from 'commons/utils/variables';

export const sonarAnimationStyles = css`
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: sonar-dot 1s ease 0.3s infinite;
  }
  &:before {
    border: 1px solid var(--app-primary-bg);
  }
  &:after {
    background: var(--app-primary-bg);
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

export const CounterStyled = styled('span')`
  position: absolute;
  isolation: isolate;
  top: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  background-color: var(--cta-primary-bg);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;
  color: var(--counter-txt); // TODO - do zmiany po zejściu z pozostałych skórek
  transform: scale(1) translate3d(-25%, -25%, 0);
  transition: transform ${animationStyle};
  pointer-events: none;
  ${sonarAnimationStyles};
`;

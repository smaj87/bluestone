import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import { focusVisibleStyles } from 'commons/utils/commonStyles';
import { animationStyle, corner } from 'commons/utils/variables';

import { CHANGE_MODE_STATE_CLASS, DOT_SIZE_CSS } from './constants';

export const ChangeModeSwitcherStyled = styled('span')`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  border: 0.2rem solid var(--navbar-txt);
  background: transparent;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${DOT_SIZE_CSS};
    height: ${DOT_SIZE_CSS};
    border-radius: 50%;
    background: var(--cta-navbar-txt);
    opacity: 1;
    transform: translate(-2rem, -50%);
    transition:
      transform ${animationStyle},
      background ${animationStyle},
      opacity ${animationStyle};
    will-change: transform, background, opacity;
    z-index: 1;
  }
`;

interface StateIconProps {
  $isChecked?: boolean;
}

export const StateIconStyled = styled(Icon)<StateIconProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${DOT_SIZE_CSS};
  height: ${DOT_SIZE_CSS};
  font-size: ${DOT_SIZE_CSS};
  color: ${({ $isChecked }) =>
    $isChecked ? 'var(--cta-navbar-txt--disabled)' : 'var(--navbar-bg)'};
  transition: color ${animationStyle};
  will-change: color;
  z-index: 10;
`;

export const ChangeModeStyled = styled('label')`
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  justify-self: flex-end;
  align-content: center;
  align-items: center;
  padding-inline: 0.6rem;
  border-radius: ${corner};
  height: 3rem;
  background: var(--cta-navbar-bg);
  color: var(--cta-navbar-txt);
  cursor: pointer;

  input[type='checkbox'] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 10;

    &:focus-visible {
      ~ .${CHANGE_MODE_STATE_CLASS} {
        ${focusVisibleStyles};
      }
    }

    &:checked {
      ~ .${CHANGE_MODE_STATE_CLASS} {
        &:before {
          transform: translate(0.4rem, -50%);
        }
      }

      &:disabled {
        ~ .${CHANGE_MODE_STATE_CLASS} {
          &:before {
            opacity: 0;
          }
        }
      }
    }
  }

  @media (hover: hover) {
    &:hover {
      background: var(--cta-navbar-bg--hover);
    }
  }
`;

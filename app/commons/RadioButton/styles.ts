import styled, { css } from 'commons/Goober';

import { RADIO_LABEL_CLASS } from './constants';
import { placementTypes } from './placement';
import { RadioPlacement } from './types';

export const radioButtonStyles = css`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.1rem solid var(--checkbox-border);
  background: var(--checkbox-bg);
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--checkbox-txt);
  text-align: center;
`;

export const RadioButtonLabelStyled = styled('span')<{
  $placement?: RadioPlacement;
}>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  min-height: 2rem;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--checkbox-txt);
  text-align: left;
  cursor: pointer;
  &:before {
    ${radioButtonStyles};
    content: '';
  }
  ${({ $placement }) =>
    $placement ? placementTypes[$placement] : placementTypes.default};
`;

export const RadioButtonStyled = styled('label')`
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;

    &:checked {
      + .${RADIO_LABEL_CLASS} {
        &:after {
          content: '';
          position: absolute;
          z-index: 1;
          top: 0.4rem;
          left: 0.4rem;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          background: var(--checkbox-txt);
        }
      }
    }
  }
`;

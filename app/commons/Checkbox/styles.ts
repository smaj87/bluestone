import { placementTypes } from 'commons/Checkbox/placement';
import { CheckboxPlacement } from 'commons/Checkbox/types';
import styled, { css } from 'commons/Goober';
import { focusVisibleStyles } from 'commons/utils/commonStyles';
import { corner } from 'commons/utils/variables';

import { CHECKBOX_LABEL_CLASS } from './constants';

export const checkboxStyles = css`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: ${corner};
  border: 0.1rem solid var(--checkbox-border);
  background: var(--checkbox-bg);
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--checkbox-txt);
  text-align: center;
`;

export const checkboxDisabledStyles = css`
  color: var(--checkbox-txt--disabled);

  &:before {
    border-color: var(--checkbox-border--disabled);
    background: var(--checkbox-bg--disabled);
    color: var(--checkbox-txt--disabled);
  }
`;

export const CheckboxLabelStyled = styled('span')<{
  $placement?: CheckboxPlacement;
}>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  max-width: 100%;
  min-height: 2rem;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--checkbox-txt);
  text-align: left;
  cursor: pointer;
  &:before {
    ${checkboxStyles};
    content: '';
    font-family: 'webmail';
  }
  ${({ $placement }) =>
    $placement ? placementTypes[$placement] : placementTypes.default};
`;

export const CheckboxStyled = styled('label')`
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 0;
  max-width: 100%;

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
      + .${CHECKBOX_LABEL_CLASS} {
        &:before {
          content: '\\e94f';
        }
      }
    }

    &:focus-visible {
      + .${CHECKBOX_LABEL_CLASS} {
        ${focusVisibleStyles};
      }
    }

    &:disabled,
    &[disabled] {
      + .${CHECKBOX_LABEL_CLASS} {
        ${checkboxDisabledStyles};
      }
    }
  }
`;

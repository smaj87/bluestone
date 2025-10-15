import styled, { css } from 'commons/Goober';
import { corner } from 'commons/utils/variables';

import { formFieldSizesFunc } from './sizes';
import { FormFieldSize } from './types';

export interface FormFieldStyledProps {
  $isError?: boolean;
  $sizeField?: FormFieldSize;
}

export const fieldErrorStyles = css`
  border-color: var(--error-border);
  color: var(--error-txt);

  &::placeholder {
    color: var(--error-txt);
  }
`;

export const formFieldStyles = css<FormFieldStyledProps>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: ${corner};
  border: 0.1rem solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-txt);
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  ${formFieldSizesFunc};

  ${({ $isError }) => $isError && fieldErrorStyles};

  &:disabled {
    pointer-events: none;
    cursor: default;
    color: var(--input-txt--disabled);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
  }
  &::-webkit-date-and-time-value {
    text-align: left;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const labelStyles = css`
  display: block;
  margin: 0 0 0.4rem;
  width: 100%;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--field-label-txt);
  text-align: left;
`;

export const LabelStyled = styled('label')`
  ${labelStyles};
`;

export const fieldInfoStyles = css`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--field-label-txt);
  text-align: left;
`;

export const FieldInfoStyled = styled('div')`
  ${fieldInfoStyles};
`;

export const FormItemStyled = styled('div')`
  margin: 0 0 0.8rem;
`;

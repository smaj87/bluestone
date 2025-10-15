import {
  FormFieldStyledProps,
  formFieldStyles,
} from 'commons/FormElements/styles';
import styled from 'commons/Goober';

export type TextAreaStyledProps = FormFieldStyledProps;

export const TextareaStyled = styled('textarea')<TextAreaStyledProps>`
  ${formFieldStyles};
  height: auto;
  resize: none;
`;

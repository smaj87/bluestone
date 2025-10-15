import {
  FormFieldStyledProps,
  formFieldStyles,
} from 'commons/FormElements/styles';
import styled from 'commons/Goober';

export type InputStyledProps = FormFieldStyledProps;

export const InputStyled = styled('input')<InputStyledProps>`
  ${formFieldStyles};
`;

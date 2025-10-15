import {
  FormFieldStyledProps,
  formFieldStyles,
} from 'commons/FormElements/styles';
import styled from 'commons/Goober';
import Icon from 'commons/Icon';

export const SelectBoxStyled = styled('div')`
  position: relative;
`;

export const SelectStyled = styled('select')<FormFieldStyledProps>`
  ${formFieldStyles};
  padding-right: 2rem;
  appearance: none;

  &::-ms-expand {
    display: none;
  }
`;

export const SelectIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 0.4rem;
  transform: translateY(-50%);
  font-size: 1.6rem;
  color: currentColor;
  pointer-events: none;
`;

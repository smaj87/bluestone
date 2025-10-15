import { ctaColorsFunc } from 'commons/CallToAction/colors';
import { ctaShapesFunc } from 'commons/CallToAction/shapes';
import { ctaSizesFunc } from 'commons/CallToAction/sizes';
import { CtaStyledProps, ctaStyles } from 'commons/CallToAction/styles';
import { CHECK_BUTTON_LABEL_CLASS } from 'commons/CheckButton/constants';
import styled from 'commons/Goober';
import { focusVisibleStyles } from 'commons/utils/commonStyles';

export const CheckButtonStyled = styled('label')`
  position: relative;
  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    &:focus-visible {
      + .${CHECK_BUTTON_LABEL_CLASS} {
        ${focusVisibleStyles};
      }
    }
  }
`;

export const CheckButtonLabelStyled = styled('span')<CtaStyledProps>`
  ${ctaStyles};
  ${ctaColorsFunc};
  ${ctaSizesFunc};
  ${ctaShapesFunc};
  cursor: pointer;
`;

import {
  ctaModifyStyles,
  CtaStyledProps,
  ctaStyles,
} from 'commons/CallToAction/styles';
import styled from 'commons/Goober';

export const LinkStyled = styled('a')<CtaStyledProps>`
  ${ctaStyles};
  ${ctaModifyStyles};
  cursor: pointer;
`;

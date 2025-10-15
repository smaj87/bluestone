import {
  ctaStaticStyles,
  CtaStyledProps,
  ctaStyles,
} from 'commons/CallToAction/styles';
import styled from 'commons/Goober';

export interface BadgeStyledProps extends CtaStyledProps {
  $isDisabled?: boolean;
}

export const BadgeStyled = styled('span')<BadgeStyledProps>`
  ${ctaStyles};
  ${ctaStaticStyles};
`;

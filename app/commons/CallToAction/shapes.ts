import { CTA_DIMENSION_CSS } from 'commons/CallToAction/constants';
import { css } from 'commons/Goober';

import { CtaStyledProps } from './styles';
import { CtaShape, CtaSize } from './types';

export const equalSizeStyles = css<{ $size?: CtaSize }>`
  justify-content: center;
  min-width: auto;
  ${({ $size }) => $size === 'xs' && sizeEqualXs};
  ${({ $size }) => $size === 'sm' && sizeEqualSm};
  ${({ $size }) => $size === 'md' && sizeEqualMd};
  ${({ $size }) => $size === 'lg' && sizeEqualLg};
`;

export const sizeEqualXs = css`
  padding: 0.1rem;
  width: ${CTA_DIMENSION_CSS.XS}rem;
`;

export const sizeEqualSm = css`
  padding: 0.2rem;
  width: ${CTA_DIMENSION_CSS.SM}rem;
`;

export const sizeEqualMd = css`
  padding: 0.4rem;
  width: ${CTA_DIMENSION_CSS.MD}rem;
`;

export const sizeEqualLg = css`
  padding: 0.8rem;
  width: ${CTA_DIMENSION_CSS.LG}rem;
`;

export const ctaShapes: Record<CtaShape, any> = {
  full: css`
    justify-content: center;
    width: 100%;
  `,
  square: css`
    ${equalSizeStyles};
  `,
  circle: css`
    ${equalSizeStyles};
    border-radius: 50%;
  `,
};

export const ctaShapesFunc = ({
  $shape,
}: {
  $shape?: CtaStyledProps['$shape'];
}) => ($shape ? ctaShapes[$shape] : '');

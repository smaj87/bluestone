import { css } from 'commons/Goober';

import { CTA_DIMENSION_CSS } from './constants';
import { CtaStyledProps } from './styles';
import { CtaSize } from './types';

export const sizeXs = css`
  padding: 0 0.4rem;
  height: ${CTA_DIMENSION_CSS.XS}rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
`;

export const sizeSm = css`
  padding: 0.2rem 0.4rem;
  height: ${CTA_DIMENSION_CSS.SM}rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
`;

export const sizeMd = css`
  padding: 0.4rem 0.8rem;
  height: ${CTA_DIMENSION_CSS.MD}rem;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
`;

export const sizeLg = css`
  padding: 1.2rem 1.6rem;
  height: ${CTA_DIMENSION_CSS.LG}rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const ctaSizes: Record<CtaSize, any> = {
  xs: sizeXs,
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const ctaSizesFunc = ({ $size }: { $size?: CtaStyledProps['$size'] }) =>
  $size ? ctaSizes[$size] : '';

export const iconXs = css`
  font-size: 1.4rem;
`;

export const iconSm = css`
  font-size: 1.6rem;
`;

export const iconMd = css`
  font-size: 2rem;
`;

export const iconLg = css`
  font-size: 2rem;
`;

export const iconSizes = {
  xs: iconXs,
  sm: iconSm,
  md: iconMd,
  lg: iconLg,
};

export const iconSizesFunc = ({
  $size,
}: {
  $size?: CtaStyledProps['$size'];
}) => ($size ? iconSizes[$size] : '');

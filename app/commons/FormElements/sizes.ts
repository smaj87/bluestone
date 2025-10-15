import { css } from 'commons/Goober';

import { FormFieldStyledProps } from './styles';
import { FormFieldSize } from './types';

export const sizeSm = css`
  padding: 0.2rem 0.4rem;
  height: 2rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
`;

export const sizeMd = css`
  padding: 0.4rem 0.8rem;
  height: 3rem;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
`;

export const sizeLg = css`
  padding: 1.2rem 1.6rem;
  height: 4.4rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const formFieldSizes: Record<FormFieldSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const formFieldSizesFunc = ({
  $sizeField,
}: {
  $sizeField?: FormFieldStyledProps['$sizeField'];
}) => ($sizeField ? formFieldSizes[$sizeField] : 'md');

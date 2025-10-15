import { css } from 'commons/Goober';

import { ModalDialogProps } from './styles';
import { ModalSize } from './types';

export const sizeSm = css`
  max-width: 32rem;
`;

export const sizeMd = css`
  max-width: 56rem;
`;

export const sizeLg = css`
  max-width: 80rem;
`;

export const modalSizes: Record<ModalSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const modalSizesFunc = ({
  $size,
}: {
  $size?: ModalDialogProps['$size'];
}) => ($size ? modalSizes[$size] : modalSizes.md);

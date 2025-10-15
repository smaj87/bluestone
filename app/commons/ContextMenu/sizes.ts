import { css } from 'commons/Goober';

import { ContextMenuStyledProps } from './styles';
import { ContextMenuSize } from './types';

export const sizeSm = css`
  width: 9.6rem;
`;

export const sizeMd = css`
  width: 24rem;
`;

export const sizeLg = css`
  width: 32rem;
`;

export const sizeXl = css`
  width: 48rem;
`;

export const sizeFit = css`
  width: fit-content;
`;

export const contextMenuSizes: Record<ContextMenuSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
  xl: sizeXl,
  fit: sizeFit,
};

export const contextMenuSizesFunc = ({
  $menuSize,
}: {
  $menuSize?: ContextMenuStyledProps['$menuSize'];
}) => ($menuSize ? contextMenuSizes[$menuSize] : contextMenuSizes.md);

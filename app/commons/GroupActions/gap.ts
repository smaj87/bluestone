import { css } from 'commons/Goober';

import { GroupListStyledProps } from './styles';
import { ItemsGap } from './types';

export const noneGapStyles = css`
  grid-row-gap: 0;
`;

export const smGapStyles = css`
  grid-row-gap: 0.4rem;
`;

export const mdGapStyles = css`
  grid-row-gap: 0.8rem;
`;

export const lgGapStyles = css`
  grid-row-gap: 1.2rem;
`;

export const itemsGap: Record<ItemsGap, any> = {
  none: noneGapStyles,
  sm: smGapStyles,
  md: mdGapStyles,
  lg: lgGapStyles,
};

export const itemsGapFunc = ({
  $gap,
}: {
  $gap?: GroupListStyledProps['$gap'];
}) => ($gap ? itemsGap[$gap] : '');

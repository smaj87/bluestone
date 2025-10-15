import { css } from 'commons/Goober';

import { ShoppingPagesTileStyledProps } from './styles';
import { ShoppingTileLayout } from './types';

const defaultLayoutStyles = css`
  grid-template-columns: auto 1fr;
`;

const newsletterLayoutStyles = css`
  grid-template-columns: auto 1fr auto;
`;

export const shoppingTileLayouts: Record<ShoppingTileLayout, any> = {
  default: defaultLayoutStyles,
  newsletter: newsletterLayoutStyles,
};

export const shoppingTileLayoutFunc = ({
  $layout,
}: {
  $layout?: ShoppingPagesTileStyledProps['$layout'];
}) => ($layout ? shoppingTileLayouts[$layout] : shoppingTileLayouts.default);

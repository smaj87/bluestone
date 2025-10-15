import { css } from 'commons/Goober';

import { LIST_ITEM_HEIGHT, LIST_ITEM_SIZES } from './constants';
import { ListItemContentStyledProps } from './styles';
import { ListItemSizes } from './types';

export const listItemContentSizes: Record<ListItemSizes, any> = {
  [LIST_ITEM_SIZES.XS]: css`
    height: ${LIST_ITEM_HEIGHT.XS}rem;
  `,
  [LIST_ITEM_SIZES.SM]: css`
    height: ${LIST_ITEM_HEIGHT.SM}rem;
  `,
  [LIST_ITEM_SIZES.MD]: css`
    height: ${LIST_ITEM_HEIGHT.MD}rem;
  `,
  [LIST_ITEM_SIZES.LG]: css`
    height: ${LIST_ITEM_HEIGHT.LG}rem;
  `,
  [LIST_ITEM_SIZES.XL]: css`
    height: ${LIST_ITEM_HEIGHT.XL}rem;
  `,
  [LIST_ITEM_SIZES.XXL]: css`
    height: ${LIST_ITEM_HEIGHT.XXL}rem;
  `,
  [LIST_ITEM_SIZES.XXXL]: css`
    height: ${LIST_ITEM_HEIGHT.XXXL}rem;
  `,
};

export const listItemSizeFunc = ({
  $size,
}: {
  $size?: ListItemContentStyledProps['$size'];
}) => ($size ? listItemContentSizes[$size] : listItemContentSizes.md);

import { LIST_ITEM_SIZES } from './constants';

export type ListItemSizes =
  (typeof LIST_ITEM_SIZES)[keyof typeof LIST_ITEM_SIZES];

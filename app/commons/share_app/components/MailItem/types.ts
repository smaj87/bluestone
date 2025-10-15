import { MAIL_ITEM_VIEWS } from './constants';

export type MailItemViews =
  | typeof MAIL_ITEM_VIEWS.LIST
  | typeof MAIL_ITEM_VIEWS.DETAIL
  | typeof MAIL_ITEM_VIEWS.TILE;

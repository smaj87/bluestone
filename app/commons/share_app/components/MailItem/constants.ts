import { createContext, RefObject } from 'commons/utils/react';

export const MAIL_ITEM_VIEWS = {
  LIST: 'list' as const,
  DETAIL: 'detail' as const,
  TILE: 'tile' as const,
};

export const MAIL_ITEM_AREAS = {
  ATTACHMENT: 'attachment' as const,
  DATA: 'data' as const,
  DATE: 'date' as const,
  FAVOURITE: 'favourite' as const,
  FOLDER: 'folder' as const,
  SNIPPET: 'snippet' as const,
  SUBJECT: 'subject' as const,
};

export const MAIL_ITEM_ID_PREFIX = 'MailItem';

export const ItemRefContext = createContext<RefObject<HTMLLIElement> | null>(
  null,
);

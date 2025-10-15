import { createContext } from 'commons/utils/react';

export const KEY = 'notifications';

export const TYPE_ERROR = 'error';
export const TYPE_WARNING = 'warning';
export const TYPE_INFO = 'info';
export const TYPE_SUCCESS = 'success';

export const SHOW_ERROR = `${KEY}/ERROR` as const;
export const SHOW_WARNING = `${KEY}/WARNING` as const;
export const SHOW_INFO = `${KEY}/INFO` as const;
export const SHOW_SUCCESS = `${KEY}/SUCCESS` as const;
export const CLEAN = `${KEY}/CLEAN` as const;
export const IS_TO_REMOVE = `${KEY}/IS_TO_REMOVE` as const;

export const NotificationContext = createContext<{
  cleanNotification: () => void;
}>({ cleanNotification: () => {} });

import { ReactNode } from 'commons/utils/react';

import {
  CLEAN,
  IS_TO_REMOVE,
  KEY,
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING,
  TYPE_ERROR,
  TYPE_INFO,
  TYPE_SUCCESS,
  TYPE_WARNING,
} from './constants';

export type NotificationType =
  | typeof TYPE_ERROR
  | typeof TYPE_WARNING
  | typeof TYPE_INFO
  | typeof TYPE_SUCCESS;
export type NotificationActionType =
  | typeof SHOW_ERROR
  | typeof SHOW_WARNING
  | typeof SHOW_INFO
  | typeof SHOW_SUCCESS;

export interface Notification {
  delay: number;
  id: string;
  isToRemove: boolean;
  isPreventTimerPause: boolean; // na hover zatrzymuje sie odliczanie
  text: string | ReactNode;
  type: NotificationType;
  values: object;
}

export interface NotificationState {
  notifications: Notification[];
}

export interface NotificationRootState {
  [KEY]: NotificationState;
}

export type NotificationAction =
  | {
      type: typeof SHOW_ERROR;
      text: string;
      delay?: number;
      values?: object;
      isPreventTimerPause?: boolean;
    }
  | {
      type: typeof SHOW_WARNING;
      text: string;
      delay?: number;
      values?: object;
      isPreventTimerPause?: boolean;
    }
  | {
      type: typeof SHOW_INFO;
      text: string;
      delay?: number;
      values?: object;
      isPreventTimerPause?: boolean;
    }
  | {
      type: typeof SHOW_SUCCESS;
      text: string | ReactNode;
      delay?: number;
      values?: object;
      isPreventTimerPause?: boolean;
    }
  | { type: typeof CLEAN; id: string }
  | { type: typeof IS_TO_REMOVE; id: string };

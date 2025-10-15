import { ReactNode } from 'commons/utils/react';

import {
  CLEAN,
  IS_TO_REMOVE,
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING,
} from './constants';

export const showError = (
  text: string | ReactNode,
  delay?: number,
  values?: object,
  isPreventTimerPause?: boolean,
) => ({
  type: SHOW_ERROR,
  text,
  delay,
  values,
  isPreventTimerPause,
});

export const showWarning = (
  text: string,
  delay?: number,
  values?: object,
  isPreventTimerPause?: boolean,
) => ({
  type: SHOW_WARNING,
  text,
  delay,
  values,
  isPreventTimerPause,
});

export const showInfo = (
  text: string,
  delay?: number,
  values?: object,
  isPreventTimerPause?: boolean,
) => ({
  type: SHOW_INFO,
  text,
  delay,
  values,
  isPreventTimerPause,
});

export const showSuccess = (
  text: string | ReactNode,
  delay?: number,
  values?: object,
  isPreventTimerPause?: boolean,
) => ({
  type: SHOW_SUCCESS,
  text,
  delay,
  values,
  isPreventTimerPause,
});

export const clean = (id: string) => ({
  type: CLEAN,
  id,
});

export const setIsToRemove = (id: string) => ({
  type: IS_TO_REMOVE,
  id,
});

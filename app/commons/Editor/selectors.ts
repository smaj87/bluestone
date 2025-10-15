import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import Squire from './Squire';
import { EditorsRootState, FontInfo, KeyOfEditors } from './types';

const getState = createSelector(
  (state: EditorsRootState) => state?.[KEY] || initialState,
  (state) => state,
);

export const getEditors = createSelector([getState], ({ editors }) => editors);

export const getEditorById = createSelector(
  [getEditors, (_, id: KeyOfEditors) => id],
  (editors, id): Squire | undefined => editors[id]?.editor,
);

export const isDirtyEditor = createSelector(
  [getEditors, (_, id: KeyOfEditors) => id],
  (editors, id): boolean => !!editors[id]?.isDirty,
);

export const getFontInfoById = createSelector(
  [getEditors, (_, id: KeyOfEditors) => id],
  (editors, id): FontInfo => editors[id]?.fontInfo || {},
);

export const isBold = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.B,
);

export const isItalic = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.I,
);

export const isUnderline = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.U,
);

export const isStrikethrough = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.S,
);

export const isOrderedList = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.OL,
);

export const isUnorderedList = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.UL,
);

export const getTextColor = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.color,
);

export const getBackgroundColor = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.backgroundColor,
);

export const getFontFamily = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.fontFamily,
);

export const getFontSize = createSelector(
  [getFontInfoById],
  (fontInfo) => fontInfo?.fontSize,
);

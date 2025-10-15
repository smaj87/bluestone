import {
  ADD_EDITOR,
  FONT_SIZES,
  FONTS,
  KEY,
  REMOVE_EDITOR,
  SET_FONT_INFO,
  SET_IS_DIRTY_EDITOR,
  TEXT_COLORS,
} from './constants';
import Squire from './Squire';

export type FontName = keyof typeof FONTS;
export type FontValue = (typeof FONTS)[FontName];

export type TextColorKey = keyof typeof TEXT_COLORS;

export type FontSizeLabel = keyof typeof FONT_SIZES;
export type FontSizeValue = (typeof FONT_SIZES)[FontSizeLabel];

export interface EditorsRootState {
  [KEY]: EditorsState;
}

export interface EditorsState {
  editors: Editors;
}

export interface Editors {
  [key: string]: Editor;
}

export interface Editor {
  editor: Squire | undefined;
  fontInfo: FontInfo;
  isDirty: boolean;
}

export type KeyOfEditors = keyof Editors;

export type FontInfo = {
  color?: TextColorKey;
  backgroundColor?: TextColorKey;
  fontFamily?: FontName;
  fontSize?: FontSizeLabel;
  B?: boolean;
  I?: boolean;
  U?: boolean;
  S?: boolean;
  OL?: boolean;
  UL?: boolean;
};

export type EditorAction =
  | { type: typeof ADD_EDITOR; id: string; editor: Squire }
  | { type: typeof REMOVE_EDITOR; id: KeyOfEditors }
  | { type: typeof SET_FONT_INFO; id: KeyOfEditors; fontInfo: FontInfo }
  | { type: typeof SET_IS_DIRTY_EDITOR; id: KeyOfEditors; isDirty: boolean };

import { AppThunk } from 'commons/utils/react-redux';

import {
  ADD_EDITOR,
  REMOVE_EDITOR,
  SET_FONT_INFO,
  SET_IS_DIRTY_EDITOR,
} from './constants';
import { getEditorById } from './selectors';
import { Editors, FontInfo } from './types';

export const addEditor = (id: keyof Editors, editor: any) => ({
  type: ADD_EDITOR,
  id,
  editor,
});

export const removeEditor = (id: keyof Editors) => ({
  type: REMOVE_EDITOR,
  id,
});

export const setFontInfo = (id: keyof Editors, fontInfo: FontInfo) => ({
  type: SET_FONT_INFO,
  id,
  fontInfo,
});

export const setEditorContent =
  (editorId: string, html = '', sign = '', isDirty?: boolean): AppThunk =>
  async (_, getState) => {
    const editor = getEditorById(getState(), editorId);

    if (editor) {
      editor.setHTML(html, true);
      editor.changeSign(sign);

      if (isDirty) {
        editor.isDirty = isDirty;
      }
    }
  };

export const setIsDirtyEditor =
  (id: keyof Editors, isDirty: boolean): AppThunk =>
  async (dispatch, getState) => {
    const editor = getEditorById(getState(), id);

    if (editor) {
      editor.isDirty = isDirty;
    }

    dispatch({
      type: SET_IS_DIRTY_EDITOR,
      id,
      isDirty,
    });
  };

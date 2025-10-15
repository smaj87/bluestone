import {
  ADD_EDITOR,
  REMOVE_EDITOR,
  SET_FONT_INFO,
  SET_IS_DIRTY_EDITOR,
} from './constants';
import { EditorAction, EditorsState } from './types';

export const initialState: EditorsState = {
  editors: {},
};

const reducer = (state = initialState, action: EditorAction): EditorsState => {
  switch (action.type) {
    case ADD_EDITOR: {
      return {
        ...state,
        editors: {
          ...state.editors,
          [action.id]: {
            editor: action.editor,
            fontInfo: {
              color: undefined,
              backgroundColor: undefined,
              fontFamily: undefined,
              fontSize: undefined,
            },
            isDirty: false,
          },
        },
      };
    }
    case REMOVE_EDITOR: {
      const { [action.id]: _, ...rest } = state.editors;

      return {
        ...state,
        editors: rest,
      };
    }
    case SET_FONT_INFO: {
      return {
        editors: {
          ...state.editors,
          [action.id]: {
            ...state.editors[action.id],
            fontInfo: action.fontInfo,
          },
        },
      };
    }
    case SET_IS_DIRTY_EDITOR: {
      return {
        editors: {
          ...state.editors,
          [action.id]: {
            ...state.editors[action.id],
            isDirty: action.isDirty,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;

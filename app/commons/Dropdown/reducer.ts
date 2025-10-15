import { CLOSE, OPEN } from './constants';
import { DropdownAction, DropdownState } from './types';

export const initialState: DropdownState = {
  dropdowns: {},
};

export default (state = initialState, action: DropdownAction) => {
  switch (action.type) {
    case OPEN: {
      const dropdowns = { ...state.dropdowns };

      dropdowns[action.id] = {
        isOpen: !dropdowns[action.id]?.isOpen,
        targetId: action.dropdown.targetId,
        dropdownId: action.id,
        parentId: action.dropdown.parentId,
        params: {
          menuSize: 'md',
          ...action.dropdown.params,
        },
      };

      if (action.dropdown.parentId && dropdowns[action.dropdown.parentId]) {
        dropdowns[action.dropdown.parentId] = {
          ...dropdowns[action.dropdown.parentId],
          childrenId: action.id,
        };
      }

      return {
        ...state,
        dropdowns,
      };
    }
    case CLOSE: {
      const dropdowns = { ...state.dropdowns };

      action.ids.forEach((id) => {
        dropdowns[id] = {
          ...dropdowns[id],
          isOpen: false,
        };
      });

      return {
        ...state,
        dropdowns,
      };
    }

    default:
  }

  return state;
};

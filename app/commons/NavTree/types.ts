import {
  ADD_ID_TO_PARENT_STACK,
  ADD_NAV_ELEMENT,
  BATCH_NAV_ELEMENTS,
  KEY,
  REMOVE_LAST_ID_FROM_PARENT_STACK,
  REMOVE_NAV_ELEMENT,
  RESET_STATE,
  SET_CURRENT_ELEMENT_ID,
  SET_IS_ENABLED,
} from './constants';

export interface NavTreeElement {
  id: string;
  group: string;
}

export interface NavTreeState {
  byId: { [key: NavTreeElement['id']]: NavTreeElement }; // id: {onEnter, onEscape, group}
  groups: { [key: NavTreeElement['id']]: string[] }; // {groupName: [id]}
  currentElementId: string;
  currentGroup: string;
  parentStack: { parentId: string; currentElementId: string }[]; // stack parentow, w których aktualnie jesteśmy np. ['navTreeItemGrandParent', 'navTreeItemParent'], chodzi o to, aby miec onEscape tej grupy
  isEnabled: boolean; // czy nawigacja jest włączona
}

export interface NavTreeRootState {
  [KEY]: NavTreeState;
}

export type NavTreeAction =
  | {
      type: typeof BATCH_NAV_ELEMENTS;
      toAdd: NavTreeElement[];
      toRemove: NavTreeElement[];
    }
  | { type: typeof ADD_NAV_ELEMENT; element: NavTreeElement }
  | { type: typeof REMOVE_NAV_ELEMENT; element: NavTreeElement }
  | { type: typeof SET_CURRENT_ELEMENT_ID; currentElementId: string }
  | { type: typeof ADD_ID_TO_PARENT_STACK; parentId: string }
  | { type: typeof REMOVE_LAST_ID_FROM_PARENT_STACK }
  | { type: typeof SET_IS_ENABLED; isEnabled: boolean }
  | { type: typeof RESET_STATE };

export type NavTreeDimension = 'fit' | 'full';

export type NavTreeOffset = 'inside' | 'outside';

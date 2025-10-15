import { ContextMenuSize } from 'commons/ContextMenu/types';

import { CLOSE, KEY, OPEN } from './constants';

export interface DropdownParams {
  menuSize: ContextMenuSize;
  [key: string]: unknown;
}

export interface Dropdown {
  isOpen: boolean;
  targetId: string;
  dropdownId: string;
  parentId?: string;
  childrenId?: string;
  params: DropdownParams;
}

export interface DropdownState {
  dropdowns: {
    [id: string]: Dropdown;
  };
}

export interface DropdownRootState {
  [KEY]: DropdownState;
}

export type DropdownAction =
  | {
      type: typeof OPEN;
      id: string;
      dropdown: Partial<Dropdown> & Pick<Dropdown, 'targetId'>;
    }
  | { type: typeof CLOSE; ids: string[] };

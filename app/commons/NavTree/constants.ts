import { createContext } from 'commons/utils/react';

export const KEY = 'NavTree';

export const KEYBOARD_NAVIGATION_DEFAULT_GROUP = '_all';

export const KEYBOARD_NAVIGATION_ELEMENT_CLASS = 'key-nav';
export const KEYBOARD_NAVIGATION_ELEMENT_FOCUS_CLASS = 'key-nav--focus';
export const KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS = 'key-nav--disabled';

export const BATCH_NAV_ELEMENTS = `${KEY}/BATCH_NAV_ELEMENTS`;
export const ADD_NAV_ELEMENT = `${KEY}/ADD_NAV_ELEMENT`;
export const REMOVE_NAV_ELEMENT = `${KEY}/REMOVE_NAV_ELEMENT`;
export const SET_CURRENT_ELEMENT_ID = `${KEY}/SET_CURRENT_ELEMENT_ID`;
export const ADD_ID_TO_PARENT_STACK = `${KEY}/ADD_ID_TO_PARENT_STACK`;
export const REMOVE_LAST_ID_FROM_PARENT_STACK = `${KEY}/REMOVE_LAST_ID_FROM_PARENT_STACK`;
export const SET_IS_ENABLED = `${KEY}/SET_IS_ENABLED`;

export const RESET_STATE = `${KEY}/RESET_STATE`;

export const NavTreeGroupContext = createContext<string | null>(null);

export const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
];

import {
  ADD_ID_TO_PARENT_STACK,
  BATCH_NAV_ELEMENTS,
  REMOVE_LAST_ID_FROM_PARENT_STACK,
  RESET_STATE,
  SET_CURRENT_ELEMENT_ID,
  SET_IS_ENABLED,
} from './constants';
import { NavTreeElement } from './types';

export const batchNavElements = (
  toAdd: NavTreeElement[],
  toRemove: NavTreeElement[],
) => ({
  type: BATCH_NAV_ELEMENTS,
  toAdd,
  toRemove,
});

export const setCurrentElementId = (currentElementId: string) => ({
  type: SET_CURRENT_ELEMENT_ID,
  currentElementId,
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const addIdToParentStack = (parentId: string) => ({
  type: ADD_ID_TO_PARENT_STACK,
  parentId,
});

export const removeLastIdFromParentStack = () => ({
  type: REMOVE_LAST_ID_FROM_PARENT_STACK,
});

export const setNavTreeIsEnabled = (isEnabled: boolean) => ({
  type: SET_IS_ENABLED,
  isEnabled,
});

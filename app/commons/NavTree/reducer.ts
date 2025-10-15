import {
  ADD_ID_TO_PARENT_STACK,
  BATCH_NAV_ELEMENTS,
  KEYBOARD_NAVIGATION_DEFAULT_GROUP,
  REMOVE_LAST_ID_FROM_PARENT_STACK,
  RESET_STATE,
  SET_CURRENT_ELEMENT_ID,
  SET_IS_ENABLED,
} from './constants';
import { NavTreeAction, NavTreeState } from './types';

export const initialState: NavTreeState = {
  byId: {}, // id: {id, onEnter, onEscape, group}
  groups: { [KEYBOARD_NAVIGATION_DEFAULT_GROUP]: [] }, // grupa defaultowa (czyli głowna) zawsze istnieje
  currentGroup: KEYBOARD_NAVIGATION_DEFAULT_GROUP,
  currentElementId: '', // id aktualnie wybranego elementu, domyslnie pusty
  parentStack: [], // stack parentow, w których aktualnie jesteśmy np. ['navTreeItemGrandParent', 'navTreeItemParent'], chodzi o to, aby miec onEscape tej grupy
  // aby móc wrócić do poprzedniej grupy, czyli idki rodziców po, których robilismy ENTER
  isEnabled: true, // czy nawigacja jest włączona
};

export default (state = initialState, action: NavTreeAction) => {
  switch (action.type) {
    case BATCH_NAV_ELEMENTS: {
      const { toAdd, toRemove } = action;

      const groupsDeleted: string[] = [];

      let nextById = { ...state.byId };
      const nextGroups = { ...state.groups };
      let nextCurrentGroup = state.currentGroup;
      let nextCurrentElementId = state.currentElementId;

      toAdd.forEach((element) => {
        const { group = KEYBOARD_NAVIGATION_DEFAULT_GROUP, id } = element;

        nextById[id] = element;
        nextGroups[group] = [...(nextGroups[group] ?? []), id];
      });

      toRemove.forEach((element) => {
        const { group, id } = element;

        if (!groupsDeleted.includes(group)) {
          groupsDeleted.push(group);
        }

        // usuwa element z byId
        const { [id]: _removed, ...byId } = nextById;
        nextById = byId;

        // usuwa element z grupy
        const groupList = nextGroups[group] ?? [];
        const nextGroup = groupList.filter((x) => x !== id);
        nextGroups[group] = nextGroup;
      });

      // przy batchu patrzymy czy moze zniknely elementy z aktualnej grupy to wtedy z parentStack trzeba usunac te grupy
      // usuniecie z parentStack moze byc ze srodka
      const parentStack = state.parentStack.filter((parentGroup) => {
        // tutaj sprawdzamy czy jakies elementy z grupy zostaly usuniete (moze byc ze nie wszystkie)
        const isGroupInDeletedGroups = groupsDeleted.includes(
          parentGroup.parentId,
        );
        const isGroupContainingElements =
          nextGroups[parentGroup.parentId]?.length > 0;

        return !isGroupInDeletedGroups || isGroupContainingElements;
      });

      // jezeli element, ktory byl zaznaczony (wczesniej jest zmieniany poprzez REMOVE_ID_FROM_PARENT_STACK na ostatni z currentGroup) zostal usuniety to ustawiamy default
      if (nextCurrentElementId && !nextById[nextCurrentElementId]) {
        nextCurrentElementId = '';
      }

      if (parentStack.length > 0) {
        const lastParent = parentStack[parentStack.length - 1];

        nextCurrentGroup =
          lastParent.parentId || KEYBOARD_NAVIGATION_DEFAULT_GROUP;
      }

      if (parentStack.length === 0) {
        nextCurrentGroup = KEYBOARD_NAVIGATION_DEFAULT_GROUP;
      }

      return {
        ...state,
        byId: nextById,
        groups: nextGroups,
        currentGroup: nextCurrentGroup,
        currentElementId: nextCurrentElementId,
        parentStack,
      };
    }
    case SET_CURRENT_ELEMENT_ID:
      return {
        ...state,
        currentElementId: action.currentElementId,
      };
    case ADD_ID_TO_PARENT_STACK:
      // w tym przypadku groupId === parentId, bo to jest ustawiane przez wrapper
      return {
        ...state,
        parentStack: [
          ...state.parentStack,
          {
            parentId: action.parentId,
            currentElementId: state.currentElementId,
          },
        ],
        currentGroup: action.parentId || KEYBOARD_NAVIGATION_DEFAULT_GROUP,
        currentElementId: '',
      };
    case REMOVE_LAST_ID_FROM_PARENT_STACK: {
      // na poczatku bierzemy ostatni element z parentStack , zeby ustawic currentGroup na to w jakiej jest teraz ten rodzic
      const lastParent = state.parentStack[state.parentStack.length - 1];
      const lastParentId = lastParent?.parentId;
      const lastParentCurrentElementId = lastParent?.currentElementId;
      const lastParentGroup =
        state.byId[lastParentId]?.group || KEYBOARD_NAVIGATION_DEFAULT_GROUP;

      // nastepnie usuwamy go ze stacka
      return {
        ...state,
        currentGroup: lastParentGroup,
        currentElementId: lastParentCurrentElementId || '',
        parentStack: state.parentStack.slice(0, -1),
      };
    }
    case SET_IS_ENABLED: {
      return {
        ...state,
        isEnabled: action.isEnabled,
      };
    }
    case RESET_STATE:
      return initialState;
    default:
  }

  return state;
};

import { EMPTY_OBJECT } from 'commons/utils/constants';

import {
  FETCH_INTERFACE_EFFECTS,
  FETCH_INTERFACE_EFFECTS_FAILURE,
  FETCH_INTERFACE_EFFECTS_SUCCESS,
  REMOVE_INTERFACE_EFFECT,
  SET_INTERFACE_EFFECTS,
} from './constants';
import { InterfaceEffectsAction, InterfaceEffectsState } from './types';
import { normalizedInterfaceEffects } from './utils';

const isInterfaceEffectsFromWindow = Array.isArray(window.interfaceEffects);

export const initialState: InterfaceEffectsState = {
  isFetching: false,
  isFetched: isInterfaceEffectsFromWindow,
  interfaceEffects: isInterfaceEffectsFromWindow
    ? normalizedInterfaceEffects(window.interfaceEffects)
    : EMPTY_OBJECT,
};

export default (
  state = initialState,
  action: InterfaceEffectsAction,
): InterfaceEffectsState => {
  switch (action.type) {
    case FETCH_INTERFACE_EFFECTS:
      return { ...state, isFetching: true };
    case FETCH_INTERFACE_EFFECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        interfaceEffects: action.interfaceEffects,
      };
    case FETCH_INTERFACE_EFFECTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        interfaceEffects: EMPTY_OBJECT,
      };

    case REMOVE_INTERFACE_EFFECT: {
      if (
        state.interfaceEffects?.[action.interfaceEffectType]?.id === action.id
      ) {
        const newI = { ...state.interfaceEffects };
        delete newI[action.interfaceEffectType];

        return {
          ...state,
          interfaceEffects: newI,
        };
      }

      break;
    }

    case SET_INTERFACE_EFFECTS:
      return {
        ...state,
        interfaceEffects: {
          ...state.interfaceEffects,
          ...action.interfaceEffects,
        },
      };

    default:
  }

  return state;
};

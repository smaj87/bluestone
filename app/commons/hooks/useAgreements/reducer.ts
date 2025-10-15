import { FETCH_USER_CONFIG_SUCCESS } from 'commons/hooks/useUserConfig/constants';
import { isEmpty } from 'commons/utils/tinyLodash';

import {
  FETCH_AGREEMENTS,
  FETCH_AGREEMENTS_FAILURE,
  FETCH_AGREEMENTS_SUCCESS,
  SAVE_AGREEMENTS,
  SAVE_AGREEMENTS_FAILURE,
  SAVE_AGREEMENTS_SUCCESS,
  SET_IS_FETCHING,
} from './constants';
import { AgreementsAction, AgreementsState } from './types';
import { normalisedAgreements } from './utils';

const agreements = normalisedAgreements(
  window?.userConfig?.consents,
  window?.userConfig?.agreements,
);

export const initialState: AgreementsState = {
  isSaving: false,
  isFetching: false,
  isFetched: !isEmpty(agreements),
  isFetchedError: false,
  agreements,
};

export default (
  state = initialState,
  action: AgreementsAction,
): AgreementsState => {
  switch (action.type) {
    // fetch only on development node_env
    case FETCH_AGREEMENTS:
      return { ...state, isFetching: true, isFetchedError: false };
    case FETCH_AGREEMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        agreements: action.agreements,
      };
    case FETCH_AGREEMENTS_FAILURE:
      return { ...state, isFetching: false, isFetchedError: true };

    case FETCH_USER_CONFIG_SUCCESS:
      if (!state.isFetched && !state.isFetching) {
        return {
          ...state,
          isFetching: false,
          isFetched: true,
          agreements: normalisedAgreements(action.config.profile.consents),
        };
      }

      break;
    case SAVE_AGREEMENTS:
      return {
        ...state,
      };
    case SAVE_AGREEMENTS_SUCCESS:
      return {
        ...state,
        agreements: { ...state.agreements, ...action.agreements },
      };
    case SAVE_AGREEMENTS_FAILURE:
      return {
        ...state,
      };

    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    default:
  }

  return state;
};

import { FETCH_USER_CONFIG_SUCCESS } from 'commons/hooks/useUserConfig/constants';
import { FetchUserConfig } from 'commons/hooks/useUserConfig/types';

import {
  FETCH_AGREEMENTS,
  FETCH_AGREEMENTS_FAILURE,
  FETCH_AGREEMENTS_SUCCESS,
  KEY,
  SAVE_AGREEMENTS,
  SAVE_AGREEMENTS_FAILURE,
  SAVE_AGREEMENTS_SUCCESS,
  SET_IS_FETCHING,
} from './constants';

export interface AgreementsState {
  agreements: AgreementsInterface;
  isFetching: boolean;
  isFetchedError: boolean;
  isFetched: boolean;
  isSaving: boolean;
}

export interface AgreementsRootState {
  [KEY]: AgreementsState;
}

export interface AgreementsInterface {
  [key: number]: boolean;
}

export interface AgreementsApiInterface {
  [key: number | string]: {
    value: boolean;
  };
}

export type AgreementsAction =
  | { type: typeof FETCH_AGREEMENTS }
  | {
      type: typeof FETCH_AGREEMENTS_SUCCESS;
      agreements: AgreementsInterface;
    }
  | {
      type: typeof FETCH_USER_CONFIG_SUCCESS;
      config: FetchUserConfig;
    }
  | { type: typeof FETCH_AGREEMENTS_FAILURE }
  | { type: typeof SET_IS_FETCHING; isFetching: boolean }
  | { type: typeof SAVE_AGREEMENTS }
  | { type: typeof SAVE_AGREEMENTS_SUCCESS; agreements: AgreementsInterface }
  | { type: typeof SAVE_AGREEMENTS_FAILURE };

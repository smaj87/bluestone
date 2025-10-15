import {
  KEY,
  SET_IS_EDIT,
  SWITCH_OFF_AGREEMENT,
  SWITCH_ON_AGREEMENT,
} from './constants';

export interface UserConfigAgreementsModalState {
  smartFunctionsStatus: 0 | 1 | -1;
  marketingStatus: 0 | 1 | -1;
  isEdit: boolean;
}

export interface UserConfigAgreementsModalRootState {
  [KEY]: UserConfigAgreementsModalState;
}

export type UserConfigAgreementsModalAction =
  | {
      type: typeof SET_IS_EDIT;
      isEdit: boolean;
    }
  | {
      type: typeof SWITCH_OFF_AGREEMENT;
      agreementName: string;
    }
  | {
      type: typeof SWITCH_ON_AGREEMENT;
      agreementName: string;
    };

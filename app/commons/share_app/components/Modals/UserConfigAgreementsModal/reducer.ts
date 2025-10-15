import {
  SET_IS_EDIT,
  SWITCH_OFF_AGREEMENT,
  SWITCH_ON_AGREEMENT,
} from './constants';
import {
  UserConfigAgreementsModalAction,
  UserConfigAgreementsModalState,
} from './types';

export const initialState: UserConfigAgreementsModalState = {
  smartFunctionsStatus: 0, // 1 = wlaczone, 0 = not set, -1 = wylaczone
  marketingStatus: 0, // 1 = wlaczone, 0 = not set, -1 = wylaczone
  isEdit: false,
};

export default (
  state = initialState,
  action: UserConfigAgreementsModalAction,
): UserConfigAgreementsModalState => {
  switch (action.type) {
    case SWITCH_ON_AGREEMENT:
      return {
        ...state,
        [`${action.agreementName}Status`]: 1,
      };
    case SWITCH_OFF_AGREEMENT:
      return {
        ...state,
        [`${action.agreementName}Status`]: -1,
      };
    case SET_IS_EDIT:
      return {
        ...state,
        isEdit: action.isEdit,
      };
    default:
  }

  return state;
};

import {
  SET_IS_EDIT,
  SWITCH_OFF_AGREEMENT,
  SWITCH_ON_AGREEMENT,
} from './constants';

export const switchOnAgreement = (name: string) => ({
  agreementName: name,
  type: SWITCH_ON_AGREEMENT,
});

export const switchOffAgreement = (name: string) => ({
  agreementName: name,
  type: SWITCH_OFF_AGREEMENT,
});

export const setIsEdit = (isEdit: boolean) => ({
  isEdit,
  type: SET_IS_EDIT,
});

import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreementExist,
  isFetched as isAgreementsFetched,
} from 'commons/hooks/useAgreements/selectors';
import { getInterfaceEffectBySubtype } from 'commons/hooks/useInterfaceEffects/selectors';
import { APP_ONET } from 'commons/utils/constants';
import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import {
  UserConfigAgreementsModalRootState,
  UserConfigAgreementsModalState,
} from './types';

export const getState = createSelector(
  (state: UserConfigAgreementsModalRootState) => state?.[KEY] || initialState,
  (state): UserConfigAgreementsModalState => state,
);

export const getSmartFunctionsStatus = createSelector(
  getState,
  (state) => state.smartFunctionsStatus,
);

export const getMarketingStatus = createSelector(
  getState,
  (state) => state.marketingStatus,
);

export const isEdit = createSelector(getState, (state) => state.isEdit);

export const isOpen = createSelector(
  [
    getInterfaceEffectBySubtype,
    (state) => isAgreementExist(state, { agreementId: SMART_FUNCTIONS_ID }),
    isAgreementsFetched,
  ],
  (interfaceEffect, isA, isFetched) =>
    process.env.APP === APP_ONET &&
    (!!interfaceEffect?.type || (isFetched && !isA)),
);

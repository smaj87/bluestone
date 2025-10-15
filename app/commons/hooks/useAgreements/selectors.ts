import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { AgreementsRootState } from './types';

export const getState = createSelector(
  [(state: AgreementsRootState) => state?.[KEY] || initialState],
  (state) => state,
);

export const getAgreements = createSelector(
  getState,
  (state) => state.agreements,
);

export const getAgreementById = createSelector(
  [getAgreements, (_, { agreementId }) => agreementId],
  (agreements, agreementId: string | number) => agreements[Number(agreementId)],
);

export const isAgreement = createSelector(
  [getAgreementById],
  (agreement) => !!agreement,
);

export const isAgreementExist = createSelector(
  [getAgreementById],
  (agreements) => agreements !== undefined,
);

export const isFetching = createSelector(getState, (state) => state.isFetching);

export const isFetched = createSelector(getState, (state) => state.isFetched);

export const isFetchedError = createSelector(
  getState,
  (state) => state.isFetchedError,
);

import { isEmpty } from 'commons/utils/tinyLodash';

import { AgreementsApiInterface, AgreementsInterface } from './types';

export const normalisedAgreements = (
  consents: number[] = [],
  agreements: AgreementsApiInterface = {},
): AgreementsInterface => {
  const result: AgreementsInterface = {};

  if (!isEmpty(agreements)) {
    Object.entries(agreements).forEach(([id, a]) => {
      result[Number(id)] = a.value;
    });
  } else if (!isEmpty(consents)) {
    consents.forEach((c) => {
      result[c] = true;
    });
  }

  return result;
};

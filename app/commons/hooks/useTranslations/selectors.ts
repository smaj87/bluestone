import { KEY } from 'commons/hooks/useTranslations/constants';
import { LanguageRootState } from 'commons/hooks/useTranslations/types';
import { createSelector } from 'commons/utils/reselect';

import { initialState } from './reducer';

export const getState = createSelector(
  (state: LanguageRootState) => state,
  (state) => state?.[KEY] || initialState,
);

export const getLang = createSelector(getState, (state) => state.lang);

import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { EditImageFormData, EditImageFormState } from './types';

export interface GetFieldFormDataArgs {
  field: keyof EditImageFormData;
}

const getState = createSelector(
  (state: RootState & { [KEY]: EditImageFormState }) =>
    state?.[KEY] || initialState,
  (state): EditImageFormState => state,
);

export const getFormData = createSelector(getState, ({ formData }) => formData);

export const getFieldFormData = createSelector(
  [getState, (_, { field }: GetFieldFormDataArgs) => field],
  ({ formData }, field) => formData[field],
);

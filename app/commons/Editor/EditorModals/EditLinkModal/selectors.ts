import { RootState } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import {
  EditLinkFormData,
  EditLinkFormErrors,
  EditLinkFormState,
} from './types';

export interface GetFieldFormDataArgs {
  field: keyof EditLinkFormData;
}

export interface GetFieldErrorArgs {
  field: keyof EditLinkFormErrors;
}

const getState = createSelector(
  (state: RootState & { [KEY]: EditLinkFormState }) =>
    state?.[KEY] || initialState,
  (state): EditLinkFormState => state,
);

export const getFormData = createSelector(getState, ({ formData }) => formData);

export const getFieldFormData = createSelector(
  [getState, (_, { field }: GetFieldFormDataArgs) => field],
  ({ formData }, field) => formData[field],
);

export const getFieldError = createSelector(
  [getState, (_, { field }: GetFieldErrorArgs) => field],
  ({ errors }, field) => !!errors[field],
);

export const getIsValidationActive = createSelector(
  getState,
  ({ isValidationActive }) => isValidationActive,
);

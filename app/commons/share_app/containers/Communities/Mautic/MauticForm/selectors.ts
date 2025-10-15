import { RootStateWithInjectors } from 'initRedux';

import { createSelector } from 'commons/utils/reselect';

import { KEY } from './constants';
import { initialState } from './reducer';
import { FormErrors, FormValues, MauticFormState } from './types';

export interface GetFieldSendDataArgs {
  field: keyof FormValues;
}

export interface GetFieldErrorArgs {
  field: keyof FormErrors;
}

export const getState = createSelector(
  (state: RootStateWithInjectors) => state?.[KEY] || initialState,
  (state): MauticFormState => state,
);

export const getForm = createSelector(getState, ({ form }) => form);

export const getFormFields = createSelector(getForm, (form) => form?.fields);

export const getIsFetching = createSelector(
  getState,
  ({ isFetching }) => isFetching,
);

export const getIsFetchingError = createSelector(
  getState,
  ({ isFetchingError }) => isFetchingError,
);

export const getFormValues = createSelector(
  getState,
  ({ formValues }) => formValues,
);

export const getResponseMessage = createSelector(
  getState,
  ({ responseMessage }) => responseMessage,
);

export const getIsSubmitting = createSelector(
  getState,
  ({ isSubmitting }) => isSubmitting,
);

export const getFieldErrors = createSelector(
  getState,
  ({ fieldErrors }) => fieldErrors,
);

export const getFieldFormValue = createSelector(
  [getFormValues, (_, { field }: GetFieldSendDataArgs) => field],
  (formValues, field) => formValues[field],
);

export const getFieldError = createSelector(
  [getFieldErrors, (_, { field }: GetFieldErrorArgs) => field],
  (fieldErrors, field) => fieldErrors[field],
);

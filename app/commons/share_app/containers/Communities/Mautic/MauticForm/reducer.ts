import {
  FETCH_FORM,
  SET_FORM_VALUES,
  SET_IS_SUBMITTING,
  SET_RESPONSE_MESSAGE,
  SET_VALIDATION_ERRORS,
} from './constants';
import { FormAction, FormValues, MauticFormState } from './types';

export const initialState: MauticFormState = {
  form: undefined,
  fieldErrors: {},
  formValues: {},
  isFetching: false,
  isFetchingError: false,
  isSubmitting: false,
  responseMessage: undefined,
};

export default (state = initialState, action: FormAction): MauticFormState => {
  switch (action.type) {
    case FETCH_FORM: {
      return {
        ...state,
        form: action.form ?? state.form,
        isFetching: action.isFetching ?? state.isFetching,
        isFetchingError: action.isFetchingError ?? state.isFetchingError,
        formValues: action.formValues ?? state.formValues,
        responseMessage: undefined,
        isSubmitting: false,
        fieldErrors: {},
      };
    }
    case SET_FORM_VALUES: {
      const formValues = { ...state.formValues };

      (Object.keys(action.formValues) as Array<keyof FormValues>).forEach(
        (field) => {
          formValues[field] =
            action.formValues[field] ?? initialState.formValues[field];
        },
      );

      return {
        ...state,
        formValues: {
          ...state.formValues,
          ...action.formValues,
        },
      };
    }
    case SET_VALIDATION_ERRORS: {
      return {
        ...state,
        fieldErrors: action.errors,
      };
    }
    case SET_IS_SUBMITTING: {
      return {
        ...state,
        isSubmitting: action.isSubmitting,
      };
    }
    case SET_RESPONSE_MESSAGE: {
      return {
        ...state,
        responseMessage: action.responseMessage,
      };
    }
    default:
      return state;
  }
};

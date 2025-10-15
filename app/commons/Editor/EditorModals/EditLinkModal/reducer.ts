import { CLEAR_FORM, SET_FORM_DATA, SET_FORM_ERRORS } from './constants';
import {
  EditLinkFormAction,
  EditLinkFormData,
  EditLinkFormState,
} from './types';
import { getFormFieldsErrors } from './utils';

export const initialState: EditLinkFormState = {
  errors: {},
  formData: {
    displayText: '',
    title: '',
    url: '',
    type: 'url',
    target: '_self',
  },
  isValidationActive: false,
};

export default (
  state = initialState,
  action: EditLinkFormAction,
): EditLinkFormState => {
  switch (action.type) {
    case SET_FORM_DATA: {
      const formData = { ...state.formData };

      (Object.keys(action.formData) as Array<keyof EditLinkFormData>).forEach(
        (field) => {
          // @ts-ignore
          formData[field] =
            action.formData[field] ?? initialState.formData[field];
        },
      );

      return {
        ...state,
        formData,
        errors: state.isValidationActive ? getFormFieldsErrors(formData) : {},
      };
    }
    case SET_FORM_ERRORS: {
      return {
        ...state,
        isValidationActive: true,
        errors: {
          ...state.errors,
          ...action.errors,
        },
      };
    }
    case CLEAR_FORM: {
      return initialState;
    }
    default:
      return state;
  }
};

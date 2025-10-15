import { CLEAR_FORM, SET_FORM_DATA, SET_FORM_ERRORS } from './constants';
import { EditLinkFormData, EditLinkFormErrors } from './types';

export const setFormData = (formData: Partial<EditLinkFormData>) => ({
  type: SET_FORM_DATA,
  formData,
});

export const setValidationErrors = (errors: EditLinkFormErrors) => ({
  type: SET_FORM_ERRORS,
  errors,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

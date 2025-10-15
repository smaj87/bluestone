import { CLEAR_FORM, SET_FORM_DATA } from './constants';
import { EditImageFormData } from './types';

export const setFormData = (formData: Partial<EditImageFormData>) => ({
  type: SET_FORM_DATA,
  formData,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

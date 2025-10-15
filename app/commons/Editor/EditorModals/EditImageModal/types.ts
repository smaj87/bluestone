import { CLEAR_FORM, SET_FORM_DATA } from './constants';

export interface EditImageFormState {
  formData: EditImageFormData;
}

export interface EditImageFormData {
  width: number;
  height: number;
  alt: string;
  persistScale: boolean;
}

export type EditImageFormAction =
  | {
      type: typeof SET_FORM_DATA;
      formData: Partial<EditImageFormData>;
    }
  | { type: typeof CLEAR_FORM };

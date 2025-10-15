import { CLEAR_FORM, SET_FORM_DATA, SET_FORM_ERRORS } from './constants';

export interface EditLinkFormState {
  errors: EditLinkFormErrors;
  formData: EditLinkFormData;
  isValidationActive: boolean;
}

export type LinkType = 'email' | 'url';

export type LinkTarget = '_self' | '_blank';

export interface EditLinkFormData {
  displayText: string;
  title?: string;
  url: string;
  type?: LinkType;
  target?: LinkTarget;
}

export type EditLinkFormErrors = Partial<
  Record<keyof EditLinkFormData, boolean>
>;

export type EditLinkFormAction =
  | {
      type: typeof SET_FORM_DATA;
      formData: Partial<EditLinkFormData>;
      errors: EditLinkFormErrors;
    }
  | {
      type: typeof SET_FORM_ERRORS;
      errors: EditLinkFormErrors;
    }
  | { type: typeof CLEAR_FORM };

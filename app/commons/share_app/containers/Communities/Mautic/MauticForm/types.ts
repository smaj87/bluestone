import { ReactText } from 'commons/utils/react';

import {
  FETCH_FORM,
  SET_FORM_VALUES,
  SET_IS_SUBMITTING,
  SET_RESPONSE_MESSAGE,
  SET_VALIDATION_ERRORS,
} from './constants';

export interface MauticForm {
  isPublished: boolean;
  dateAdded: string;
  dateModified: string;
  createdBy: number;
  createdByUser: string;
  modifiedBy: number;
  modifiedByUser: string;
  id: number;
  name: string;
  alias: string;
  category: null;
  description: null;
  cachedHtml: string;
  publishUp: null;
  publishDown: null;
  fields: MauticFormField[];
  actions: MauticFormAction[];
  template: null;
  inKioskMode: boolean;
  renderStyle: boolean;
  formType: 'campaign' | 'standalone';
  postAction: 'message' | 'return' | 'redirect';
  postActionProperty: string;
  noIndex: boolean;
  formAttributes: null;
}

export interface MauticFormField {
  id: number;
  label: string;
  showLabel: boolean;
  alias: string;
  type:
    | 'text'
    | 'email'
    | 'button'
    | 'checkboxgrp'
    | 'file'
    | 'radiogrp'
    | 'textarea'
    | 'freehtml'
    | 'select'
    | 'freetext'
    | 'hidden';
  defaultValue: null;
  isRequired: boolean;
  validationMessage: string;
  helpMessage: null;
  order: number;
  properties: {
    placeholder?: string;
    labelAttributes?: null;
    syncList?: number;
    optionlist?: {
      list: {
        label: string;
        value: ReactText;
      }[];
    };
    list?: {
      list: {
        label: string;
        value: ReactText;
      }[];
    };
    text?: string;
  };
  validation: [];
  parent: null | string;
  conditions?: {
    expr: 'in' | 'notIn';
    any: 0 | 1; // czy zawiera jakakolwiek wartość
    values: ReactText[];
  };
  labelAttributes: null;
  inputAttributes: null | string;
  containerAttributes: null;
  leadField: null;
  saveResult: boolean;
  isAutoFill: boolean;
  mappedObject: string;
  mappedField: null;
}

interface MauticFormAction {
  id: number;
  name: string;
  description: string;
  type: 'email.send.user';
  order: number;
  properties: {
    useremail?: {
      email: string;
    };
    user_id?: number[];
  };
}

export interface MauticFormState {
  form?: MauticForm;
  isFetching: boolean;
  isFetchingError: boolean;
  isSubmitting: boolean;
  formValues: FormValues;
  fieldErrors: FormErrors;
  responseMessage?: string;
}

export type FormErrors = Record<string, string | undefined>;
export type FormValues = Record<string, any>;

export type FormAction =
  | {
      type: typeof FETCH_FORM;
      form?: MauticForm;
      isFetching?: boolean;
      isFetchingError?: boolean;
      formValues?: FormValues;
    }
  | {
      type: typeof SET_FORM_VALUES;
      formValues: Partial<FormValues>;
    }
  | {
      type: typeof SET_VALIDATION_ERRORS;
      errors: Partial<FormErrors>;
    }
  | {
      type: typeof SET_IS_SUBMITTING;
      isSubmitting: MauticFormState['isSubmitting'];
    }
  | {
      type: typeof SET_RESPONSE_MESSAGE;
      responseMessage: MauticFormState['responseMessage'];
    };

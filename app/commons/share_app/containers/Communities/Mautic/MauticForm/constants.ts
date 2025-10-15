export const KEY = 'mauticForm';

export const FETCH_FORM = `${KEY}/FETCH_FORM` as const;
export const SET_FORM_VALUES = `${KEY}/SET_FORM_VALUES` as const;
export const SET_VALIDATION_ERRORS = `${KEY}/SET_VALIDATION_ERRORS` as const;
export const SET_IS_SUBMITTING = `${KEY}/SET_IS_SUBMITTING` as const;
export const SET_RESPONSE_MESSAGE = `${KEY}/SET_RESPONSE_MESSAGE` as const;

export const MULTIPLE_VALUES_TYPES = ['checkboxgrp'];

// Mautic forms
export const MAUTIC_HEADERS_FEEDBACK_SURVEY = 38;
export const MAUTIC_RECRUITMENT_SUBSCRIBE_ID = 39;
export const MAUTIC_RECRUITMENT_UNSUBSCRIBE_ID = 40;
export const MAUTIC_ORDERS_SHOP_INFO_FORM_ID = 21;
export const MAUTIC_ORDERS_SINGLE_FEEDBACK_GOOD_FORM_ID = 48;
export const MAUTIC_ORDERS_SINGLE_FEEDBACK_BAD_FORM_ID = 49;
export const MAUTIC_ORDERS_SHOP_REPORT_FORM_ID = 23;
export const MAUTIC_ORDERS_CANCELLATION_FORM_ID = 40;

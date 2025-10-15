export const EDIT_LINK_MODAL_ID = 'edit-link-modal';

export const KEY = 'editor/EditLinkForm';

export const SET_FORM_ERRORS = `${KEY}/SET_FORM_ERRORS` as const;
export const SET_FORM_DATA = `${KEY}/SET_FORM_DATA` as const;
export const CLEAR_FORM = `${KEY}/CLEAR_FORM` as const;

export const URL_TEST_REGEX =
  /^(?!.*\.{2})[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
export const EMAIL_TEST_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const TYPO_HTTP_REGEX =
  /^(htp:|hp:|ht:|ftp:|ttp:|htps:|http:\/\/\/|https:\/\/\/|http:\/[^/]|https:\/[^/])/i;

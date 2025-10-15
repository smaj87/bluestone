import { EMAIL_TEST_REGEX, TYPO_HTTP_REGEX, URL_TEST_REGEX } from './constants';
import { EDITOR_LINK_TYPE_MAIL } from './FormElements/constants';
import { EditLinkFormData, EditLinkFormErrors } from './types';

export const getCorrectUrl = (url: string, type?: string) => {
  if (type === EDITOR_LINK_TYPE_MAIL && !url.startsWith('mailto:')) {
    return `mailto:${url}`;
  }

  if (
    !url.toLocaleLowerCase().startsWith('https://') &&
    !url.toLocaleLowerCase().startsWith('http://') &&
    !url.toLocaleLowerCase().startsWith('mailto:') &&
    // sprawdzamy czy nie ma literówki w protokole
    !TYPO_HTTP_REGEX.test(url)
  ) {
    return `http://${url}`;
  }

  return url;
};

export const getFormFieldsErrors = (
  formData: EditLinkFormData,
): EditLinkFormErrors => {
  if (formData.type === EDITOR_LINK_TYPE_MAIL) {
    return { url: !formData.url || !EMAIL_TEST_REGEX.test(formData.url) };
  }

  return {
    url:
      !formData.url ||
      !URL_TEST_REGEX.test(formData.url) ||
      // sprawdzamy czy nie ma literówki w protokole
      TYPO_HTTP_REGEX.test(formData.url),
  };
};

export const isFormValid = (errors: EditLinkFormErrors) =>
  !Object.values(errors).some((err) => !!err);

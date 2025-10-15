import t from 'commons/translations/t';
import { WEBMAIL_API_URL } from 'commons/utils/constants';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { isEmpty } from 'commons/utils/tinyLodash';

import { MULTIPLE_VALUES_TYPES } from './constants';
import { getFieldFormValue } from './selectors';
import { FormValues, MauticFormField } from './types';

export const validateForm = (
  formFields: MauticFormField[],
  formValues: FormValues,
) => {
  let errors: Record<string, string> = {};

  formFields.forEach((field) => {
    const isFieldVisible = checkIfFieldConditionsMet(formFields, field);
    const fieldValue = formValues[field.alias];

    if (!isFieldVisible) {
      return;
    }

    if (
      (MULTIPLE_VALUES_TYPES.includes(field.type) &&
        field.isRequired &&
        isEmpty(fieldValue)) ||
      (field.isRequired && isEmpty(fieldValue))
    ) {
      errors = {
        ...errors,
        [field.alias]:
          field.validationMessage || t('mauticFormValidationError'),
      };
    }
  });

  return errors;
};

export const checkIfFieldConditionsMet = (
  formFields: MauticFormField[],
  field: MauticFormField,
) => {
  if (field.parent && !isEmpty(field.conditions)) {
    const parentField = formFields.find(
      ({ id }) => id === Number(field.parent),
    );
    if (parentField) {
      const parentFieldValue = getStateValueBySelector(getFieldFormValue, {
        field: parentField.alias,
      });

      if (field.conditions?.any === 1 && !parentFieldValue) {
        return false;
      }

      if (field.conditions?.any !== 1 && field.conditions?.expr === 'in') {
        if (Array.isArray(parentFieldValue)) {
          if (
            !field.conditions?.values.some((item) =>
              parentFieldValue.includes(item),
            )
          ) {
            return false;
          }
        } else if (!field.conditions?.values.includes(parentFieldValue)) {
          return false;
        }
      }

      if (field.conditions?.expr === 'notIn') {
        if (Array.isArray(parentFieldValue)) {
          if (
            field.conditions?.values.some((item) =>
              parentFieldValue.includes(item),
            )
          ) {
            return false;
          }
        } else if (field.conditions?.values.includes(parentFieldValue)) {
          return false;
        }
      }
    }
  }

  return true;
};

export const submitMauticForm = (formData: FormData) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('post', `${WEBMAIL_API_URL}/interface_forms/submit`, true);
    xhr.withCredentials = true;

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.responseText);
      } else {
        reject(xhr);
      }
    };

    xhr.send(formData);
  });

export const parseInputAttributes = (inputAttributes: string | null) => {
  if (!inputAttributes) {
    return {};
  }

  let attributes: Record<string, string> = {};
  const regex = /(\w+)=['"]([^'"]*)['"]/g;
  let match = regex.exec(inputAttributes);

  while (match !== null) {
    attributes = {
      ...attributes,
      [match[1]]: match[2],
    };
    match = regex.exec(inputAttributes);
  }

  return attributes;
};

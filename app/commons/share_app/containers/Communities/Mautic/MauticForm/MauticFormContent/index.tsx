import Button from 'commons/Button';
import Checkbox from 'commons/Checkbox';
import Input from 'commons/Input';
import RadioButton from 'commons/RadioButton';
import Select from 'commons/Select';
import Textarea from 'commons/Textarea';
import { FC, Fragment, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import useFormManager from '../hooks/useFormManager';
import useScrollToError from '../hooks/useScrollToError';
import MauticFormElement from '../MauticFormElement';
import MauticFormMessage from '../MauticFormMessage';
import {
  getFieldErrors,
  getFormValues,
  getIsSubmitting,
  getResponseMessage,
} from '../selectors';
import { MauticRadioWrapperStyled, MauticTextAndLinkStyled } from '../styles';
import { FormValues, MauticForm, MauticFormField } from '../types';
import { checkIfFieldConditionsMet, parseInputAttributes } from '../utils';

interface Props {
  form: MauticForm;
  hiddenValues?: FormValues;
  onSubmit?: VoidFunction;
}

const MauticFormContent: FC<Props> = ({ form, hiddenValues, onSubmit }) => {
  const formValues = useSelector(getFormValues);
  const fieldErrors = useSelector(getFieldErrors);
  const responseMessage = useSelector(getResponseMessage);
  const isSubmitting = useSelector(getIsSubmitting);

  const { changeFormValues, handleFormSubmit } = useFormManager(onSubmit);
  useScrollToError(fieldErrors);

  const getFormElement = useCallback(
    (field: MauticFormField) => {
      const fieldHtmlId = `mauticform_field_${field.alias}`;
      const fieldErrorMessage = fieldErrors[field.alias];
      const isError = !!fieldErrorMessage;

      const shouldRenderField = checkIfFieldConditionsMet(form.fields, field);

      if (!shouldRenderField) {
        return null;
      }

      const inputAttributes = parseInputAttributes(field.inputAttributes);

      switch (field.type) {
        case 'hidden':
          return (
            <input
              id={fieldHtmlId}
              name={field.alias}
              type="hidden"
              value={hiddenValues?.[field.alias] || field.defaultValue || ''}
            />
          );
        case 'button':
          return (
            <Button
              color="primary"
              isDisabled={isSubmitting}
              isFetching={isSubmitting}
              label={field.label}
              onClick={handleFormSubmit}
              size="lg"
            />
          );
        case 'text':
        case 'email':
          return (
            <MauticFormElement
              fieldId={fieldHtmlId}
              isError={isError}
              label={field.showLabel ? field.label : undefined}
              validationMessage={fieldErrorMessage}
            >
              <Input
                defaultValue={field.defaultValue}
                id={fieldHtmlId}
                name={field.alias}
                placeholder={field.properties?.placeholder}
                required={!!field.isRequired}
                type={field.type}
              />
            </MauticFormElement>
          );
        case 'select':
          return (
            <MauticFormElement
              fieldId={fieldHtmlId}
              isError={isError}
              label={field.showLabel ? field.label : undefined}
              validationMessage={fieldErrorMessage}
            >
              <Select
                defaultValue={field.defaultValue || ''}
                id={fieldHtmlId}
                name={field.alias}
                placeholder={field.properties?.placeholder}
                required={!!field.isRequired}
              >
                <option disabled hidden value="">
                  {' '}
                </option>
                {field.properties?.list?.list.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </MauticFormElement>
          );
        case 'file':
          return (
            <MauticFormElement
              fieldId={fieldHtmlId}
              isError={isError}
              label={field.showLabel ? field.label : undefined}
              validationMessage={fieldErrorMessage}
            >
              <Input
                defaultValue={field.defaultValue}
                id={fieldHtmlId}
                multiple={field.inputAttributes?.includes('multiple')}
                name={field.alias}
                placeholder={field.properties?.placeholder}
                required={!!field.isRequired}
                type={field.type}
              />
            </MauticFormElement>
          );
        case 'textarea':
          return (
            <MauticFormElement
              fieldId={fieldHtmlId}
              isError={isError}
              label={field.showLabel ? field.label : undefined}
              validationMessage={fieldErrorMessage}
            >
              <Textarea
                defaultValue={field.defaultValue}
                id={fieldHtmlId}
                name={field.alias}
                placeholder={
                  field.properties?.placeholder || inputAttributes?.placeholder
                }
                required={!!field.isRequired}
              />
            </MauticFormElement>
          );
        case 'checkboxgrp':
          return (
            <MauticFormElement
              fieldId={fieldHtmlId}
              isError={isError}
              label={field.showLabel ? field.label : undefined}
              validationMessage={fieldErrorMessage}
            >
              <MauticRadioWrapperStyled>
                {field.properties?.optionlist?.list?.map((checkbox) => (
                  <Checkbox
                    key={`${fieldHtmlId}-${checkbox.label}`}
                    id={`${fieldHtmlId}-${checkbox.label}`}
                    label={checkbox.label}
                    name={field.alias}
                    required={!!field.isRequired}
                    value={checkbox.value}
                  />
                ))}
              </MauticRadioWrapperStyled>
            </MauticFormElement>
          );
        case 'radiogrp':
          return (
            <MauticFormElement
              fieldId={fieldHtmlId}
              isError={isError}
              label={field.showLabel ? field.label : undefined}
              validationMessage={fieldErrorMessage}
            >
              <MauticRadioWrapperStyled>
                {field.properties?.optionlist?.list?.map((radio) => (
                  <RadioButton
                    key={`${fieldHtmlId}-${radio.label}`}
                    id={fieldHtmlId}
                    label={radio.label}
                    name={field.alias}
                    value={radio.value}
                  />
                ))}
              </MauticRadioWrapperStyled>
            </MauticFormElement>
          );
        case 'freehtml':
          return (
            <>
              <MauticTextAndLinkStyled
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: field.properties.text || '',
                }}
              />
            </>
          );
        case 'freetext':
          return (
            <MauticTextAndLinkStyled
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: field.properties.text || '',
              }}
            />
          );
        default:
          return null;
      }
    },
    [isSubmitting, fieldErrors, formValues],
  );

  return (
    <>
      {responseMessage ? (
        <MauticFormMessage responseMessage={responseMessage} />
      ) : (
        <form
          // @ts-ignore różnica react-preact w ChangeEvent
          onChange={changeFormValues}
        >
          {form?.fields.map((field) => (
            <Fragment key={field.id}>{getFormElement(field)}</Fragment>
          ))}
        </form>
      )}
    </>
  );
};

export default memo(MauticFormContent);

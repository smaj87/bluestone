import { FormItemStyled, LabelStyled } from 'commons/FormElements/styles';
import FormElementWithErrorHandling from 'commons/FormElementWithErrorHandling';
import useTranslations from 'commons/hooks/useTranslations';
import Input from 'commons/Input';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormData } from '../actions';
import {
  getFieldError,
  getFieldFormData,
  GetFieldFormDataArgs,
} from '../selectors';
import {
  EDITOR_LINK_TYPE_MAIL,
  EDITOR_LINK_TYPE_URL,
  EDITOR_LINK_URL_FIELD_ID,
} from './constants';

const fieldProp: GetFieldFormDataArgs = { field: 'url' };
const typeProp: GetFieldFormDataArgs = { field: 'type' };

const LinkUrlField = () => {
  const t = useTranslations();

  const url = useSelector(getFieldFormData, fieldProp) as string;
  const type = useSelector(getFieldFormData, typeProp) as string;
  const isError = useSelector(getFieldError, fieldProp);

  const onChange = useCallback((e) => {
    dispatch(setFormData({ url: e.target.value }));
  }, []);

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_LINK_URL_FIELD_ID}>
        {type === EDITOR_LINK_TYPE_URL ? t('linkEditUrl') : t('linkEditEmail')}
      </LabelStyled>
      <FormElementWithErrorHandling
        component={Input}
        error={isError ? t('urlValidationError') : undefined}
        id={EDITOR_LINK_URL_FIELD_ID}
        name={EDITOR_LINK_TYPE_URL}
        onChange={onChange}
        sizeField="md"
        type={
          type === EDITOR_LINK_TYPE_URL
            ? EDITOR_LINK_TYPE_URL
            : EDITOR_LINK_TYPE_MAIL
        }
        value={url || ''}
      />
    </FormItemStyled>
  );
};

export default memo(LinkUrlField);

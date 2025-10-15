import { FormItemStyled, LabelStyled } from 'commons/FormElements/styles';
import useTranslations from 'commons/hooks/useTranslations';
import Input from 'commons/Input';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormData } from '../actions';
import { getFieldFormData, GetFieldFormDataArgs } from '../selectors';
import { EDITOR_IMAGE_FIELD_DESCRIPTION_ID } from './constants';

const fieldProp: GetFieldFormDataArgs = { field: 'alt' };

const ImageDescriptionField = () => {
  const t = useTranslations();

  const alt = useSelector(getFieldFormData, fieldProp) as string;

  const onChange = useCallback((e) => {
    dispatch(setFormData({ alt: e.target.value }));
  }, []);

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_IMAGE_FIELD_DESCRIPTION_ID}>
        {t('imageEditDescription')}
      </LabelStyled>
      <Input
        id={EDITOR_IMAGE_FIELD_DESCRIPTION_ID}
        name="alt"
        onChange={onChange}
        sizeField="md"
        value={alt}
      />
    </FormItemStyled>
  );
};

export default memo(ImageDescriptionField);

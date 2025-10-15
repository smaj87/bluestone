import { FormItemStyled, LabelStyled } from 'commons/FormElements/styles';
import useTranslations from 'commons/hooks/useTranslations';
import Input from 'commons/Input';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormData } from '../actions';
import { getFieldFormData, GetFieldFormDataArgs } from '../selectors';
import { EDITOR_LINK_TITLE_FIELD_ID } from './constants';

const fieldProp: GetFieldFormDataArgs = { field: 'title' };

const LinkTitleField = () => {
  const t = useTranslations();

  const title = useSelector(getFieldFormData, fieldProp) as string;

  const onChange = useCallback((e) => {
    dispatch(setFormData({ title: e.target.value }));
  }, []);

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_LINK_TITLE_FIELD_ID}>
        {t('linkEditTitle')}
      </LabelStyled>
      <Input
        id={EDITOR_LINK_TITLE_FIELD_ID}
        name="title"
        onChange={onChange}
        sizeField="md"
        value={title}
      />
    </FormItemStyled>
  );
};

export default memo(LinkTitleField);

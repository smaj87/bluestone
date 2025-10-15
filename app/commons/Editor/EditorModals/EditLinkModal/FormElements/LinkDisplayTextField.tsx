import { FormItemStyled, LabelStyled } from 'commons/FormElements/styles';
import useTranslations from 'commons/hooks/useTranslations';
import Input from 'commons/Input';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormData } from '../actions';
import { getFieldFormData, GetFieldFormDataArgs } from '../selectors';
import { EDITOR_LINK_TEXT_FIELD_ID } from './constants';

const fieldProp: GetFieldFormDataArgs = { field: 'displayText' };

const LinkDisplayTextField = () => {
  const t = useTranslations();

  const displayText = useSelector(getFieldFormData, fieldProp) as string;

  const onChange = useCallback((e) => {
    dispatch(setFormData({ displayText: e.target.value }));
  }, []);

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_LINK_TEXT_FIELD_ID}>
        {t('linkEditDisplayText')}
      </LabelStyled>
      <Input
        id={EDITOR_LINK_TEXT_FIELD_ID}
        name="displayText"
        onChange={onChange}
        sizeField="md"
        value={displayText}
      />
    </FormItemStyled>
  );
};

export default memo(LinkDisplayTextField);

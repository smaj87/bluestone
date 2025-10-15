import { FormItemStyled, LabelStyled } from 'commons/FormElements/styles';
import {
  ButtonAdvancedFilter,
  GroupValueItemStyled,
  GroupValuesStyled,
} from 'commons/GroupFilters/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormData } from '../actions';
import { getFieldFormData, GetFieldFormDataArgs } from '../selectors';
import { LinkType } from '../types';
import {
  EDITOR_LINK_TYPE_FIELD_ID,
  EDITOR_LINK_TYPE_MAIL,
  EDITOR_LINK_TYPE_URL,
} from './constants';

const fieldProp: GetFieldFormDataArgs = { field: 'type' };

const LinkTypeField = () => {
  const t = useTranslations();

  const type = useSelector(getFieldFormData, fieldProp) as LinkType;

  const changeLinkType = useCallback((_, paramType) => {
    dispatch(setFormData({ type: paramType }));
  }, []);

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_LINK_TYPE_FIELD_ID}>
        {t('linkEditType')}
      </LabelStyled>
      <GroupValuesStyled id={EDITOR_LINK_TYPE_FIELD_ID} role="list">
        <GroupValueItemStyled role="listitem">
          <ButtonAdvancedFilter
            $isActive={type === EDITOR_LINK_TYPE_URL}
            label={t('linkEditTypeUrl')}
            onClick={changeLinkType}
            params={EDITOR_LINK_TYPE_URL}
            size="md"
          />
        </GroupValueItemStyled>
        <GroupValueItemStyled role="listitem">
          <ButtonAdvancedFilter
            $isActive={type === EDITOR_LINK_TYPE_MAIL}
            label={t('linkEditTypeMail')}
            onClick={changeLinkType}
            params={EDITOR_LINK_TYPE_MAIL}
            size="md"
          />
        </GroupValueItemStyled>
      </GroupValuesStyled>
    </FormItemStyled>
  );
};

export default memo(LinkTypeField);

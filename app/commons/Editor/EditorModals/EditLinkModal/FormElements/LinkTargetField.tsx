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
import { LinkTarget } from '../types';
import { EDITOR_LINK_TARGET_FIELD_ID } from './constants';

const fieldProp: GetFieldFormDataArgs = { field: 'target' };

const LinkTargetField = () => {
  const t = useTranslations();

  const target = useSelector(getFieldFormData, fieldProp) as LinkTarget;

  const changeLinkTarget = useCallback((_, paramTarget) => {
    dispatch(setFormData({ target: paramTarget }));
  }, []);

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_LINK_TARGET_FIELD_ID}>
        {t('linkEditTarget')}
      </LabelStyled>
      <GroupValuesStyled id={EDITOR_LINK_TARGET_FIELD_ID} role="list">
        <GroupValueItemStyled role="listitem">
          <ButtonAdvancedFilter
            $isActive={target === '_self'}
            label={t('linkEditTargetSelf')}
            onClick={changeLinkTarget}
            params="_self"
            size="md"
          />
        </GroupValueItemStyled>
        <GroupValueItemStyled role="listitem">
          <ButtonAdvancedFilter
            $isActive={target === '_blank'}
            label={t('linkEditTargetBlank')}
            onClick={changeLinkTarget}
            params="_blank"
            size="md"
          />
        </GroupValueItemStyled>
      </GroupValuesStyled>
    </FormItemStyled>
  );
};

export default memo(LinkTargetField);

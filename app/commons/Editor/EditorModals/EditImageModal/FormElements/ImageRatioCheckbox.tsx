import Checkbox from 'commons/Checkbox';
import { FormItemStyled } from 'commons/FormElements/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormData } from '../actions';
import { getFieldFormData, GetFieldFormDataArgs } from '../selectors';

const fieldProp: GetFieldFormDataArgs = { field: 'persistScale' };

interface Props {
  originalImageHeigth: number;
  originalImageWidth: number;
}

const ImageRatioCheckbox: FC<Props> = ({
  originalImageHeigth,
  originalImageWidth,
}) => {
  const t = useTranslations();

  const isChecked = useSelector(getFieldFormData, fieldProp) as boolean;

  const onChange = useCallback(
    (e) => {
      // jezeli zaznaczamy checkboxa to ustawiamy wysokosc i szerokosc na oryginalne
      if (e.target.checked) {
        dispatch(
          setFormData({
            persistScale: e.target.checked,
            height: originalImageHeigth,
            width: originalImageWidth,
          }),
        );
      } else {
        dispatch(
          setFormData({
            persistScale: e.target.checked,
          }),
        );
      }
    },
    [originalImageWidth, originalImageHeigth],
  );

  return (
    <FormItemStyled>
      <br />
      <Checkbox
        id="scale"
        isChecked={isChecked}
        label={t('imageKeepRatio')}
        onChange={onChange}
      />
    </FormItemStyled>
  );
};

export default memo(ImageRatioCheckbox);

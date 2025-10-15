import {
  FieldInfoStyled,
  FormItemStyled,
  LabelStyled,
} from 'commons/FormElements/styles';
import useTranslations from 'commons/hooks/useTranslations';
import Input from 'commons/Input';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormData } from '../actions';
import { getFieldFormData, GetFieldFormDataArgs } from '../selectors';
import { EDITOR_IMAGE_FIELD_WIDTH_ID, MAX_IMAGE_WIDTH_FORM } from './constants';

const fieldProp: GetFieldFormDataArgs = { field: 'width' };

interface Props {
  imageHeight: number;
  imageWidth: number;
}

const ImageWidthField: FC<Props> = ({ imageHeight, imageWidth }) => {
  const t = useTranslations();

  const width = useSelector(getFieldFormData, fieldProp) as number;

  const onChange = useCallback(
    (e) => {
      let newWidth = parseInt(e.target.value, 10);

      if (isNaN(newWidth) || newWidth < 1) {
        newWidth = 0;
      }

      if (newWidth > MAX_IMAGE_WIDTH_FORM) {
        newWidth = MAX_IMAGE_WIDTH_FORM;
      }

      const isPersistScale = getStateValueBySelector(getFieldFormData, {
        field: 'persistScale',
      }) as boolean;

      // zachowujemy skalę
      if (isPersistScale) {
        dispatch(
          setFormData({
            width: newWidth,
            height: Math.round((imageHeight * newWidth) / imageWidth),
          }),
        );
      } else {
        dispatch(setFormData({ width: newWidth }));
      }
    },
    [width],
  );

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_IMAGE_FIELD_WIDTH_ID}>
        {t('imageEditWidth')}
      </LabelStyled>
      <Input
        id={EDITOR_IMAGE_FIELD_WIDTH_ID}
        name="width"
        onChange={onChange}
        sizeField="md"
        value={width}
      />
      <FieldInfoStyled>
        {t('imageEditWidthInfo', { value: MAX_IMAGE_WIDTH_FORM })}
      </FieldInfoStyled>
    </FormItemStyled>
  );
};

export default memo(ImageWidthField);

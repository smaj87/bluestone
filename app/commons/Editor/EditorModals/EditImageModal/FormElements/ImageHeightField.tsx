import {
  EDITOR_IMAGE_FIELD_HEIGHT_ID,
  MAX_IMAGE_HEIGTH_FORM,
} from 'commons/Editor/EditorModals/EditImageModal/FormElements/constants';
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

const fieldProp: GetFieldFormDataArgs = { field: 'height' };

interface Props {
  imageWidth: number;
  imageHeight: number;
}

const ImageHeightField: FC<Props> = ({ imageHeight, imageWidth }) => {
  const t = useTranslations();

  const height = useSelector(getFieldFormData, fieldProp) as string;

  const onChange = useCallback(
    (e) => {
      let newHeight = parseInt(e.target.value, 10);

      if (isNaN(newHeight) || newHeight < 1) {
        newHeight = 0;
      }

      if (newHeight > MAX_IMAGE_HEIGTH_FORM) {
        newHeight = MAX_IMAGE_HEIGTH_FORM;
      }

      const isPersistScale = getStateValueBySelector(getFieldFormData, {
        field: 'persistScale',
      }) as boolean;

      // zachowujemy skalę
      if (isPersistScale) {
        dispatch(
          setFormData({
            height: newHeight,
            width: Math.round((imageWidth * newHeight) / imageHeight),
          }),
        );
      } else {
        dispatch(setFormData({ height: newHeight }));
      }
    },
    [height],
  );

  return (
    <FormItemStyled>
      <LabelStyled htmlFor={EDITOR_IMAGE_FIELD_HEIGHT_ID}>
        {t('imageEditHeight')}
      </LabelStyled>
      <Input
        id={EDITOR_IMAGE_FIELD_HEIGHT_ID}
        name="height"
        onChange={onChange}
        sizeField="md"
        value={height}
      />
      <FieldInfoStyled>
        {t('imageEditHeightInfo', { value: MAX_IMAGE_HEIGTH_FORM })}
      </FieldInfoStyled>
    </FormItemStyled>
  );
};

export default memo(ImageHeightField);

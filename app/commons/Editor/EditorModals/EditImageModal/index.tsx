import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import {
  ButtonAction,
  ButtonRemove,
  ModalActionsStyled,
} from 'commons/Modal/styles';
import { FC, memo, useEffect, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { injectReducer } from 'commons/utils/store';

import { EDIT_IMAGE_MODAL_ID, KEY } from './constants';
import ImageAlt from './FormElements/ImageDescriptionField';
import ImageHeight from './FormElements/ImageHeightField';
import ScaleCheckbox from './FormElements/ImageRatioCheckbox';
import ImageWidth from './FormElements/ImageWidthField';
import reducer from './reducer';
import useModalManager from './useModalManager';

interface ModalParams {
  image: HTMLImageElement;
}

const EditImageModal: FC = () => {
  const t = useTranslations();

  const isOpen = useSelector(isOpenByModalId, EDIT_IMAGE_MODAL_ID);
  const { image }: ModalParams = useSelector(getParams);

  const originalImageHeigth = useMemo(() => {
    if (!image) {
      return 0;
    }

    const height = image.naturalHeight;

    return height || image.height;
  }, [image]);

  const originalImageWidth = useMemo(() => {
    if (!image) {
      return 0;
    }

    const width = image.naturalWidth;

    return width || image.width;
  }, [image]);

  useEffect(() => {
    injectReducer(KEY, reducer);
  }, []);

  const { clearForm, closeModal, isSaveEnabled, removeImage, saveForm } =
    useModalManager();

  return isOpen ? (
    <Modal onClose={clearForm} preventClosing title={t('editImage')}>
      <ImageAlt />
      <ImageWidth imageHeight={image.height} imageWidth={image.width} />
      <ImageHeight imageHeight={image.height} imageWidth={image.width} />
      <ScaleCheckbox
        originalImageHeigth={originalImageHeigth}
        originalImageWidth={originalImageWidth}
      />
      <ModalActionsStyled>
        <ButtonRemove
          color="error"
          label={t('ctaDelete')}
          onClick={removeImage}
          size="lg"
        />
        <ButtonAction
          color="default"
          label={t('ctaCancel')}
          onClick={closeModal}
          size="lg"
        />
        <ButtonAction
          color="primary"
          isDisabled={!isSaveEnabled}
          label={t('ctaSave')}
          onClick={saveForm}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default memo(EditImageModal);

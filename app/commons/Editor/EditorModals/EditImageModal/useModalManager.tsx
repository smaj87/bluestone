import { getEditorById } from 'commons/Editor/selectors';
import { close } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { useCallback, useEffect, useMemo } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { clearForm as clearEditImageForm, setFormData } from './actions';
import { EDIT_IMAGE_MODAL_ID } from './constants';
import {
  MAX_IMAGE_HEIGTH_FORM,
  MAX_IMAGE_WIDTH_FORM,
} from './FormElements/constants';
import { getFormData } from './selectors';

interface ModalParams {
  image: HTMLImageElement;
  editorId: string;
}

const useModalManager = () => {
  const isOpen = useSelector(isOpenByModalId, EDIT_IMAGE_MODAL_ID);
  const { editorId, image }: ModalParams = useSelector(getParams);
  const { alt, height, width } = useSelector(getFormData);

  useEffect(() => {
    if (isOpen && image) {
      dispatch(
        setFormData({
          alt: image.alt || '',
          height: image.offsetHeight || 0,
          width: image.offsetWidth || 0,
        }),
      );
    }
  }, [isOpen, image]);

  const saveForm = useCallback(() => {
    image.alt = alt;
    image.style.height = `${height}px`;
    image.style.width = `${width}px`;

    closeModal();

    // Po zapisaniu focusujemy edytor
    const editor = getStateValueBySelector(getEditorById, editorId);

    editor?.focus();
  }, [image, alt, height, width]);

  const clearForm = useCallback(() => {
    dispatch(clearEditImageForm());
  }, []);

  const closeModal = useCallback(() => {
    clearForm();
    dispatch(close());
  }, []);

  const removeImage = useCallback(() => {
    image.remove();
    clearForm();
    dispatch(close());
  }, [image]);

  const isSaveEnabled = useMemo(
    () =>
      height > 0 &&
      height <= MAX_IMAGE_HEIGTH_FORM &&
      width > 0 &&
      width <= MAX_IMAGE_WIDTH_FORM,
    [height, width],
  );

  return {
    clearForm,
    saveForm,
    closeModal,
    isSaveEnabled,
    removeImage,
  };
};

export default useModalManager;

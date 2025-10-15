import {
  EDITOR_LINK_TYPE_MAIL,
  EDITOR_LINK_TYPE_URL,
} from 'commons/Editor/EditorModals/EditLinkModal/FormElements/constants';
import { getEditorById } from 'commons/Editor/selectors';
import { deleteContentsOfRange } from 'commons/Editor/Squire/range/InsertDelete';
import { close } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { useCallback, useEffect, useState } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  clearForm as clearEditLinkForm,
  setFormData,
  setValidationErrors,
} from './actions';
import { EDIT_LINK_MODAL_ID } from './constants';
import { getFormData } from './selectors';
import { LinkTarget } from './types';
import { getCorrectUrl, getFormFieldsErrors, isFormValid } from './utils';

interface ModalParams {
  link?: HTMLAnchorElement;
}

const useModalManager = (editorId: string) => {
  const isOpen = useSelector(isOpenByModalId, EDIT_LINK_MODAL_ID);
  const { link }: ModalParams = useSelector(getParams);
  const editor = useSelector(getEditorById, editorId);

  // selectionRange to jest nam potrzebny aby wstawic potem w te miejsce link i podmienic zaznaczony text na link w edytorze
  const [selectionRange, setSelectionRange] = useState<Range | undefined>(
    undefined,
  );

  useEffect(() => {
    const handleClickEnter = (e: KeyboardEvent) => {
      if (isOpen && e.key.toLowerCase() === 'enter') {
        saveForm();
      }
    };

    document.addEventListener('keydown', handleClickEnter);

    return () => document.removeEventListener('keydown', handleClickEnter);
  }, [isOpen]);

  useEffect(() => {
    const selectedText = editor?.getSelectedText();

    if (isOpen) {
      if (link) {
        dispatch(
          setFormData({
            displayText: link.textContent || '',
            target: (link.target as LinkTarget) || '_self',
            title: link.title,
            type: link.href.startsWith('mailto:')
              ? EDITOR_LINK_TYPE_MAIL
              : EDITOR_LINK_TYPE_URL,
            url: link.href.includes('mailto:')
              ? link.href.replace('mailto:', '')
              : link.href || '',
          }),
        );
      } else if (selectedText) {
        setSelectionRange(editor?.getSelection());

        dispatch(
          setFormData({
            displayText: selectedText,
            title: selectedText,
          }),
        );
      }
    }
  }, [isOpen, link]);

  const saveForm = useCallback(() => {
    const formData = getStateValueBySelector(getFormData);
    const { displayText, target, title, type, url } = formData;

    const formErrors = getFormFieldsErrors(formData);

    if (!isFormValid(formErrors)) {
      dispatch(setValidationErrors(formErrors));

      return;
    }

    const editedLink = link || document.createElement('a');
    const linkHref = getCorrectUrl(url, type);

    editedLink.href = linkHref;
    editedLink.textContent = displayText || url;
    // editedLink.contentEditable = 'false';

    if (title) {
      editedLink.title = title;
    }

    if (target) {
      editedLink.target = target;
    }

    if (!link) {
      // w przypadku gdy ktos mial zaznaczony text to usuwamy to co mial zaznaczone i wrzucamy link zamiast tego tekstu.
      if (selectionRange && editor?._root) {
        deleteContentsOfRange(editor, selectionRange, editor?._root);
      }
      editor?.insertElement(editedLink);
    }

    closeModal();
  }, [editor, link, selectionRange]);

  const clearForm = useCallback(() => {
    dispatch(clearEditLinkForm());
  }, []);

  const closeModal = useCallback(() => {
    clearForm();
    dispatch(close());
  }, []);

  return {
    clearForm,
    saveForm,
    closeModal,
  };
};

export default useModalManager;

import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { FC, memo, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { injectReducer } from 'commons/utils/store';

import { EDIT_LINK_MODAL_ID, KEY } from './constants';
import LinkDisplayTextField from './FormElements/LinkDisplayTextField';
import LinkTargetField from './FormElements/LinkTargetField';
import LinkTitleField from './FormElements/LinkTitleField';
import LinkTypeField from './FormElements/LinkTypeField';
import LinkUrlField from './FormElements/LinkUrlField';
import reducer from './reducer';
import useModalManager from './useModalManager';

interface ModalParams {
  link?: HTMLAnchorElement;
  addLink: (link: HTMLAnchorElement) => void;
}

interface Props {
  editorId: string;
}

const EditLinkModal: FC<Props> = ({ editorId }) => {
  const t = useTranslations();

  const isOpen = useSelector(isOpenByModalId, EDIT_LINK_MODAL_ID);
  const { link }: ModalParams = useSelector(getParams);

  const modalTitle = link ? t('editLink') : t('addLink');

  useEffect(() => {
    injectReducer(KEY, reducer);
  }, []);

  const { clearForm, closeModal, saveForm } = useModalManager(editorId);

  return isOpen ? (
    <Modal onClose={clearForm} title={modalTitle}>
      <LinkTypeField />
      <LinkTargetField />
      <LinkUrlField />
      <LinkDisplayTextField />
      <LinkTitleField />
      <ModalActionsStyled>
        <ButtonAction
          color="default"
          label={t('ctaCancel')}
          onClick={closeModal}
          size="lg"
        />
        <ButtonAction
          color="primary"
          label={t('ctaSave')}
          onClick={saveForm}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default memo(EditLinkModal);

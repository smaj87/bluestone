import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { CLIPBOARD_ACCESS_MODAL_ID } from './constants';

const ClipboardAccessModal: FC = () => {
  const t = useTranslations();

  const isOpen = useSelector(isOpenByModalId, CLIPBOARD_ACCESS_MODAL_ID);

  const closeModal = useCallback(() => {
    dispatch(close());
  }, []);

  return isOpen ? (
    <Modal title={t('clipboardAccessTitle')}>
      <p>{t('clipboardAccessText')}</p>
      <table>
        <caption>{t('clipboardAccessShortcuts')}</caption>
        <thead>
          <tr>
            <th>{t('clipboardAccessAction')}</th>
            <th>{t('clipboardAccessShortcut')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('clipboardAccessPasteLabel')}</td>
            <td>{t('clipboardAccessPasteAction')}</td>
          </tr>
          <tr>
            <td>{t('clipboardAccessPasteWithoutFormattingLabel')}</td>
            <td>{t('clipboardAccessPasteWithoutFormattingAction')}</td>
          </tr>
          <tr>
            <td>{t('ctaCopy')}</td>
            <td>{t('clipboardAccessCopyAction')}</td>
          </tr>
          <tr>
            <td>{t('clipboardAccessCutLabel')}</td>
            <td>{t('clipboardAccessCutAction')}</td>
          </tr>
        </tbody>
      </table>
      <ModalActionsStyled>
        <ButtonAction
          color="primary"
          label={t('ctaClose')}
          onClick={closeModal}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default memo(ClipboardAccessModal);

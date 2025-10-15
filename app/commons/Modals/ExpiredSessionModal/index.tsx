import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { isOpenByModalId } from 'commons/Modal/selectors';
import { ModalActionsStyled } from 'commons/Modal/styles';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import NavTreeModal from 'commons/NavTree/NavTreeModal';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { redirectOnce } from 'commons/utils/url';

import { EXPIRED_SESSION_MODAL_ID } from './constants';

interface ExpiredSessionModalProps {
  authRedirectUrl: string;
}

const ExpiredSessionModal: FC<ExpiredSessionModalProps> = ({
  authRedirectUrl,
}) => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenByModalId, EXPIRED_SESSION_MODAL_ID);

  const handleClick = useCallback(() => {
    redirectOnce(authRedirectUrl);
  }, []);

  return isOpen ? (
    <NavTreeModal isOpen={isOpen} modalId={EXPIRED_SESSION_MODAL_ID}>
      <Modal
        hideCloseButton
        id={EXPIRED_SESSION_MODAL_ID}
        preventClosing
        title={t('expiredSessionTitle')}
      >
        <p>{t('expiredSessionDescription')}</p>
        <ModalActionsStyled>
          <NavTreeItem onEnter={handleClick}>
            <Button
              color="primary"
              label={t('ctaRefresh')}
              onClick={handleClick}
              size="lg"
            />
          </NavTreeItem>
        </ModalActionsStyled>
      </Modal>
    </NavTreeModal>
  ) : null;
};

ExpiredSessionModal.displayName = 'ExpiredSessionModal';

export default ExpiredSessionModal;

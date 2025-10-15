import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { FC, memo, ReactNode, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

interface Props {
  cancelLabel?: string;
  confirmLabel?: string;
  id?: string;
  isOpen: boolean;
  onCancel?: VoidFunction;
  onConfirm: VoidFunction;
  title: string;
  children: ReactNode;
}

const BasicModal: FC<Props> = ({
  cancelLabel,
  children,
  confirmLabel,
  id,
  isOpen,
  onCancel,
  onConfirm,
  title,
}) => {
  const t = useTranslations();

  const closeModal = useCallback(() => {
    dispatch(close());
    onCancel?.();
  }, []);

  return isOpen ? (
    <Modal id={id} onClose={onCancel} title={title}>
      {children}
      <ModalActionsStyled>
        <ButtonAction
          color="default"
          label={cancelLabel || t('ctaCancel')}
          onClick={onCancel || closeModal}
          size="lg"
        />
        <ButtonAction
          color="primary"
          label={confirmLabel || t('ctaYes')}
          onClick={onConfirm}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default memo(BasicModal);

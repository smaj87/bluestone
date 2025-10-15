import Backdrop from 'commons/Backdrop';
import useTranslations from 'commons/hooks/useTranslations';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import {
  createPortal,
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { close } from './actions';
import { MOUNT_NODE } from './constants';
import {
  ButtonClose,
  ModalCloseStyled,
  ModalDialogStyled,
  ModalHeaderStyled,
  ModalStyled,
} from './styles';
import { ModalSize } from './types';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  hideCloseButton?: boolean;
  id?: string;
  isFullScreen?: boolean;
  isTitleHidden?: boolean;
  onClose?: () => void;
  preventClosing?: boolean;
  size?: ModalSize;
  title?: string;
}

const Modal: FC<ModalProps> = ({
  children,
  className,
  hideCloseButton,
  id,
  isFullScreen,
  isTitleHidden,
  onClose,
  preventClosing,
  size,
  title,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const t = useTranslations();

  const handleClose = useCallback(() => {
    dispatch(close());
    onClose?.();
  }, [onClose]);

  const backdropClose = useCallback(() => {
    if (!preventClosing) {
      handleClose();
    }
    return null;
  }, [handleClose, preventClosing]);

  const stopPropagation = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return createPortal(
    <>
      <ModalStyled data-cypress="MODAL" onClick={backdropClose}>
        <ModalDialogStyled
          ref={modalRef}
          $isFullScreen={isFullScreen}
          $size={size}
          aria-labelledby={title ? `${id}_title` : undefined}
          aria-modal="true"
          className={className}
          onClick={stopPropagation}
          role="dialog"
          tabIndex={0}
        >
          <ModalHeaderStyled>
            {title && (
              <h3
                className={isTitleHidden ? VISUALLY_HIDDEN_CLASS : ''}
                id={`${id}_title`}
              >
                {title || ''}
              </h3>
            )}
            {!hideCloseButton && (
              <ModalCloseStyled>
                <NavTreeItem onEnter={handleClose}>
                  <ButtonClose
                    color="secondary"
                    cypressId="BUTTON-CLOSE-MODAL"
                    icon="close"
                    onClick={handleClose}
                    size="md"
                    title={t('ctaClose')}
                  />
                </NavTreeItem>
              </ModalCloseStyled>
            )}
          </ModalHeaderStyled>
          {children || null}
        </ModalDialogStyled>
      </ModalStyled>
      <Backdrop />
    </>,
    MOUNT_NODE,
  );
};

export default Modal;

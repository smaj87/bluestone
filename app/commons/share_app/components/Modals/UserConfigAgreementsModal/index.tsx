import { removeInterfaceEffect } from 'commons/hooks/useInterfaceEffects/actions';
import {
  getInterfaceEffectId,
  getInterfaceEffectParams,
} from 'commons/hooks/useInterfaceEffects/selectors';
import Modal from 'commons/Modal';
import { MODAL_DIALOG_CONSTANT_THEME_CLASS } from 'commons/Modal/constants';
import { IS_MODAL_OPEN_CLASS } from 'commons/utils/classNames';
import { FC, useCallback, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { SUBTYPE, TYPE } from './constants';
import Content from './Content';
import { isOpen as isOpenSelector } from './selectors';

const selectorParams = { type: TYPE, subtype: SUBTYPE };

const UserConfigAgreementsModal: FC = () => {
  const id = useSelector(getInterfaceEffectId, selectorParams);
  const params = useSelector(getInterfaceEffectParams, selectorParams);
  const isOpen = useSelector(isOpenSelector, selectorParams);

  useEffect(() => {
    if (isOpen) {
      document.getElementById('app-body')?.classList.add(IS_MODAL_OPEN_CLASS);
    } else {
      document
        .getElementById('app-body')
        ?.classList.remove(IS_MODAL_OPEN_CLASS);
    }
  }, [isOpen]);

  const onClose = useCallback(() => {
    dispatch(removeInterfaceEffect(TYPE, id));
  }, []);

  return isOpen ? (
    <Modal
      className={MODAL_DIALOG_CONSTANT_THEME_CLASS}
      hideCloseButton={!params?.closeButton}
      onClose={onClose}
      preventClosing={!!id}
      size="lg"
    >
      <Content />
    </Modal>
  ) : null;
};

export default UserConfigAgreementsModal;

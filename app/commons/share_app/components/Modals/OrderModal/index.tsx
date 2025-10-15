import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import Offers from 'commons/share_app/components/OrderAndDelivery/Offers';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ORDER_MODAL_ID } from '../constants';

const OrderModal: FC = () => {
  const t = useTranslations();

  const isOpen = useSelector(isOpenByModalId, ORDER_MODAL_ID);
  const params = useSelector(getParams);

  const onClick = useCallback(() => {
    dispatch(close());
  }, []);

  const { offers } = params;

  return isOpen ? (
    <Modal size="md" title={t('orderModalTitle')}>
      <Offers offers={offers} />
      <ModalActionsStyled>
        <ButtonAction
          color="primary"
          label={t('ctaClose')}
          onClick={onClick}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

OrderModal.displayName = 'OrderModal';

export default OrderModal;

import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { openModal } from 'commons/Modal/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { ORDER_CHANGE_STATUS_MODAL_ID } from 'components/Modals/OrderChangeStatusConfirmModal/constants';

import { Order } from '../types';

interface Props {
  id: Order['id'];
}

const StatusSwitchButton: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const orderId = id;

  const openConfirmModal = useCallback(() => {
    dispatch(openModal(ORDER_CHANGE_STATUS_MODAL_ID, { orderId }));
  }, [orderId]);

  return (
    <Button
      color="default"
      icon="check"
      label={t('orderChangeStatusToClosed')}
      onClick={openConfirmModal}
      size="md"
    />
  );
};

export default memo(StatusSwitchButton);

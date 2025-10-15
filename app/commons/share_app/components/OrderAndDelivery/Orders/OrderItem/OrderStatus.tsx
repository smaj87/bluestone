import useTranslations from 'commons/hooks/useTranslations';
import Status from 'commons/share_app/components/OrderAndDelivery/components/Status';
import { FC, memo } from 'commons/utils/react';

import { Order } from '../../types';

interface Props {
  orderStatus: Order['orderStatus'];
}

const OrderStatus: FC<Props> = ({ orderStatus }) => {
  const t = useTranslations();
  const status = t('getOrderStatus', { orderStatus });

  return status ? (
    <Status
      icon="infoOutline"
      isActiveStep1
      isActiveStep2={false}
      isActiveStep3={false}
      label={status}
    />
  ) : null;
};

export default memo(OrderStatus);

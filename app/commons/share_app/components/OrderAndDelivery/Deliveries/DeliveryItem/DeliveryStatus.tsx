import useTranslations from 'commons/hooks/useTranslations';
import TileInfo from 'commons/share_app/components/OrderAndDelivery/components/TileInfo';
import { FC, memo } from 'commons/utils/react';

import { Delivery } from '../types';

interface Props {
  deliveryStatus: Delivery['partOfOrder']['orderStatus'];
}

const DeliveryStatus: FC<Props> = ({ deliveryStatus }) => {
  const t = useTranslations();
  // Takie same są statusy jak w przypadku delivery
  const status = t('getOrderStatus', { orderStatus: deliveryStatus });

  return status ? <TileInfo icon="infoOutline" value={status} /> : null;
};

export default memo(DeliveryStatus);

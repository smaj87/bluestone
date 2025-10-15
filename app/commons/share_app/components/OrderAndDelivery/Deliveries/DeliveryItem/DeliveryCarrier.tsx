import useTranslations from 'commons/hooks/useTranslations';
import TileAdditional from 'commons/share_app/components/OrderAndDelivery/components/TileAddtitional';
import { FC, memo } from 'commons/utils/react';

import { Delivery } from '../types';

interface Props {
  carrierName: Delivery['carrier']['name'];
  deliveryNumber: Delivery['trackingNumber'];
}

const DeliveryStatus: FC<Props> = ({ carrierName, deliveryNumber }) => {
  const t = useTranslations();

  return carrierName ? (
    <TileAdditional
      isSingleLine
      label={
        deliveryNumber
          ? `${carrierName}, ${t('deliveryNumber')}:`
          : `${carrierName}`
      }
      value={deliveryNumber}
    />
  ) : null;
};

export default memo(DeliveryStatus);

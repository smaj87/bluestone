import useTranslations from 'commons/hooks/useTranslations';
import TileInfo from 'commons/share_app/components/OrderAndDelivery/components/TileInfo';
import { FC, memo } from 'commons/utils/react';

import { Delivery } from '../types';

interface Props {
  deliveryAddress: Delivery['deliveryAddress'];
}

const DeliveryAddress: FC<Props> = ({ deliveryAddress }) => {
  const t = useTranslations();

  const isShow =
    deliveryAddress.streetAddress &&
    deliveryAddress.postalCode &&
    deliveryAddress.addressCountry;

  return isShow ? (
    <TileInfo
      icon="pin"
      label={t('deliveryAddress')}
      value={`${deliveryAddress.streetAddress}, ${deliveryAddress.postalCode}, ${deliveryAddress.addressCountry}`}
    />
  ) : null;
};

export default memo(DeliveryAddress);

import useTranslations from 'commons/hooks/useTranslations';
import TileMain from 'commons/share_app/components/OrderAndDelivery/components/TileMain';
import { FC, memo } from 'commons/utils/react';

import { Delivery } from '../types';

interface Props {
  merchantName: Delivery['partOfOrder']['merchant']['name'];
}

const DeliveryFrom: FC<Props> = ({ merchantName }) => {
  const t = useTranslations();

  return merchantName ? (
    <TileMain icon="package" label={t('deliveryFrom')} value={merchantName} />
  ) : null;
};

export default memo(DeliveryFrom);

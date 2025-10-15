import useTranslations from 'commons/hooks/useTranslations';
import TileInfo from 'commons/share_app/components/OrderAndDelivery/components/TileInfo';
import { FC, memo } from 'commons/utils/react';

import { Order } from '../../types';

interface Props {
  price: Order['price'];
  priceCurrency: Order['priceCurrency'];
}

const OrderPrice: FC<Props> = ({ price, priceCurrency }) => {
  const t = useTranslations();

  return price && priceCurrency ? (
    <TileInfo
      icon="creditCard"
      label={t('orderPrice')}
      value={`${price} ${priceCurrency}`}
    />
  ) : null;
};

export default memo(OrderPrice);

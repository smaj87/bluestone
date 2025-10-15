import useTranslations from 'commons/hooks/useTranslations';
import TileMain from 'commons/share_app/components/OrderAndDelivery/components/TileMain';
import { FC, memo } from 'commons/utils/react';

import { Order } from '../../types';

interface Props {
  from: Order['merchant']['name'];
}

const OrderFrom: FC<Props> = ({ from }) => {
  const t = useTranslations();

  return from ? (
    <TileMain icon="shopping" label={t('orderFrom')} value={from} />
  ) : null;
};

export default memo(OrderFrom);

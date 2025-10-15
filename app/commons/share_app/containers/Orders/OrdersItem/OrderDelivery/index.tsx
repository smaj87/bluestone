import useTranslations from 'commons/hooks/useTranslations';
import { Address, Order } from 'commons/share_app/containers/Orders/types';
import { FC, memo } from 'commons/utils/react';

import { OrderLabelStyled } from '../styles';
import { CollectInfoStyled } from './styles';

interface Props {
  schema: Order['schema'];
}

const OrderDelivery: FC<Props> = ({ schema }) => {
  const t = useTranslations();
  const deliveryAddress: Address | undefined = schema?.deliveryAddress;

  if (!deliveryAddress) {
    return null;
  }

  return (
    <CollectInfoStyled>
      <div>
        <OrderLabelStyled>{t('orderAddress')}</OrderLabelStyled>
        <br />
        {deliveryAddress?.name && <span>{deliveryAddress?.name}</span>}
        {deliveryAddress?.streetAddress && (
          <span>{deliveryAddress?.streetAddress}</span>
        )}
        {deliveryAddress?.postalCode && (
          <span>{deliveryAddress?.postalCode}</span>
        )}
        {deliveryAddress?.addressLocality && (
          <span>{deliveryAddress?.addressLocality}</span>
        )}
        {deliveryAddress?.addressCountry && (
          <span>{deliveryAddress?.addressCountry}</span>
        )}
      </div>
    </CollectInfoStyled>
  );
};

export default memo(OrderDelivery);

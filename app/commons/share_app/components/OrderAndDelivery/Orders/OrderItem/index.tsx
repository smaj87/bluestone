import { FC, memo } from 'commons/utils/react';

import { Order } from '../../types';
// import GoToOrdersButton from './GoToOrdersButton';
import OrderFrom from './OrderFrom';
import OrderPrice from './OrderPrice';
import OrderShowProductsButton from './OrderShowProductsButton';
import { OrderItemDataStyled } from './styles';

interface Props {
  order?: Order;
}

const OrderItem: FC<Props> = ({ order }) => {
  if (!order) {
    return null;
  }

  return (
    <>
      <OrderFrom from={order.merchant?.name} />
      <OrderItemDataStyled>
        <OrderPrice price={order.price} priceCurrency={order.priceCurrency} />
        {order.acceptedOffer?.length > 0 && (
          <OrderShowProductsButton offers={order.acceptedOffer} />
        )}
      </OrderItemDataStyled>
      {/* Zakomentowane z powodu niepoprawnych id (przenoszenie kont) */}
      {/* <GoToOrdersButton /> */}
    </>
  );
};

export default memo(OrderItem);

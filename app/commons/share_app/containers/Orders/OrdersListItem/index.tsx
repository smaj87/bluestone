import { FC, memo, useMemo } from 'commons/utils/react';

import CarrierInfo from '../OrdersItem/CarrierInfo';
import OffersList from '../OrdersItem/OffersList';
import OrderDate from '../OrdersItem/OrderDate';
import StatusInfo from '../OrdersItem/StatusInfo';
import {
  OrdersHeaderStyled,
  OrdersItemStyled,
  OrdersStatusStyled,
} from '../OrdersItem/styles';
import { Order } from '../types';
import ActionButtons from './ActionButtons';

interface Props {
  id: Order['id'];
  schema: Order['schema'];
  status: Order['status'];
  isDetail?: boolean;
  orderDate?: string;
}

const OrdersListItem: FC<Props> = ({
  id,
  isDetail,
  orderDate,
  schema,
  status,
}) => {
  const offers = schema.partOfOrder?.acceptedOffer || [];
  const offersInImg = schema.partOfOrder?.imagesOffer || [];
  const isMarkedAsDeliveredBtnVisible = status !== 'OrderDelivered';
  const isParcelDelivery = !schema.partOfOrder?.orderNumber;

  const ordersSellers = useMemo(() => {
    const result: string[] = [];
    offers.forEach((offer) => {
      if (offer.seller?.name && !result.includes(offer.seller?.name)) {
        result.push(offer.seller?.name);
      }
    });
    return result;
  }, [offers]);

  return (
    <OrdersItemStyled>
      <OrdersHeaderStyled>
        <OrdersStatusStyled>
          <StatusInfo status={status} />
        </OrdersStatusStyled>
      </OrdersHeaderStyled>
      <OrderDate
        date={orderDate}
        isParcelDelivery={isParcelDelivery}
        merchant={schema.partOfOrder?.merchant?.name}
        ordersSellers={ordersSellers}
        parcelDeliverySeller={schema?.originAddress?.name}
      />
      <CarrierInfo carrier={schema?.carrier?.name} />
      <OffersList
        imagesOffer={offersInImg}
        isDetail={isDetail}
        noSummary
        offers={offers}
        orderId={id}
        price={schema.partOfOrder?.price}
        priceCurrency={schema.partOfOrder?.priceCurrency}
      />
      <ActionButtons
        id={id}
        isMarkedAsDeliveredBtnVisible={isMarkedAsDeliveredBtnVisible}
        isParcelDelivery={isParcelDelivery}
      />
    </OrdersItemStyled>
  );
};

export default memo(OrdersListItem);

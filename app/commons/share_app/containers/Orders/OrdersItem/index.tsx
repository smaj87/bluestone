import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { SingleOrderRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { ShoppingPageHeaderStyled } from 'commons/share_app/components/ShoppingPages/styles';
import StatusSwitchButton from 'commons/share_app/containers/Orders/OrdersListItem/StatusSwitchButton';
import {
  FC,
  memo,
  useCallback,
  useContext,
  useMemo,
} from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';

import { ORDERS_URL_NAME } from '../constants';
import { OrdersListStyled } from '../OrdersList/styles';
import { Order } from '../types';
import AdditionalFields from './AdditionalFields';
import AskUser from './AskUser';
import CarrierInfo from './CarrierInfo';
import CarrierTracking from './CarrierTracking';
import OffersList from './OffersList';
import OrderDate from './OrderDate';
import OrderDelivery from './OrderDelivery';
import StatusInfo from './StatusInfo';
import {
  OrdersContentActionBoxStyled,
  OrdersHeaderStyled,
  OrdersItemStyled,
  OrdersStatusStyled,
  ShoppingPageBackButtonStyled,
} from './styles';
import { getTrackingUrl } from './utils';

interface Props {
  id: Order['id'];
  schema: Order['schema'];
  status: Order['status'];
  orderDate?: string;
}

const OrdersItem: FC<Props> = ({ id, orderDate, schema, status }) => {
  const t = useTranslations();
  const isShow = useContext(SingleOrderRouterIsShowContext);
  const offers = schema.partOfOrder?.acceptedOffer || [];
  const offersInImg = schema.partOfOrder?.imagesOffer || [];
  const isMarkAsDeliveredBtnVisible = status !== 'OrderDelivered';
  const trackingUrl =
    schema?.trackingUrl ||
    schema?.partOfOrder?.potentialAction?.url ||
    getTrackingUrl(schema);
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

  const backToOrderList = useCallback(() => {
    historyPush(`/${ORDERS_URL_NAME}`);
  }, []);

  if (!isShow) {
    return null;
  }

  return (
    <OrdersListStyled>
      <ShoppingPageHeaderStyled>
        <MobileLoader
          desktop={
            <ShoppingPageBackButtonStyled
              color="secondary"
              icon="arrowLeft"
              label={t('orderBackToList')}
              onClick={backToOrderList}
              size="md"
            />
          }
        />
      </ShoppingPageHeaderStyled>
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
        <OrderDelivery schema={schema} />
        <AdditionalFields schema={schema} />
        <OffersList
          imagesOffer={offersInImg}
          isDetail
          offers={offers}
          orderId={id}
          price={schema.partOfOrder?.price}
          priceCurrency={schema.partOfOrder?.priceCurrency}
        />
        <CarrierTracking
          trackingNumber={schema?.trackingNumber}
          trackingUrl={trackingUrl}
        />
        {isMarkAsDeliveredBtnVisible && (
          <OrdersContentActionBoxStyled $isBorderBottom>
            <StatusSwitchButton id={id} />
          </OrdersContentActionBoxStyled>
        )}
        <OrdersContentActionBoxStyled>
          <AskUser
            carrier={schema?.carrier?.name}
            merchant={schema.partOfOrder?.merchant?.name}
            orderId={id}
            orderNumber={schema.partOfOrder?.orderNumber}
            trackingNumber={schema?.trackingNumber}
          />
        </OrdersContentActionBoxStyled>
      </OrdersItemStyled>
    </OrdersListStyled>
  );
};

export default memo(OrdersItem);

import useTranslations from 'commons/hooks/useTranslations';
import { DATE_PRETTY_TIME_FORMAT, DATE_TYPES } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import { FC, memo } from 'commons/utils/react';

import MerchantInfo from './MerchantInfo';
import SellersInfo from './SellersInfo';
import {
  OrderLabelStyled,
  OrdersDateStyled,
  OrdersHeaderDateStyled,
  SellerInfoItemStyled,
  SellerInfoStyled,
} from './styles';

interface Props {
  date?: string;
  merchant?: string;
  ordersSellers: string[];
  isParcelDelivery?: boolean;
  parcelDeliverySeller?: string;
}

const OrderDate: FC<Props> = ({
  date,
  isParcelDelivery,
  merchant,
  ordersSellers,
  parcelDeliverySeller,
}) => {
  const t = useTranslations();
  const dateObj = date && stringToDate(date);

  const sellers =
    isParcelDelivery && parcelDeliverySeller
      ? [parcelDeliverySeller]
      : ordersSellers;
  const isShowSellers = sellers.length || (merchant && !isParcelDelivery);

  return (
    <OrdersHeaderDateStyled>
      {dateObj && (
        <OrdersDateStyled>
          <OrderLabelStyled>
            {isParcelDelivery ? t('orderCreated') : t('orderOrdered')}
          </OrderLabelStyled>
          <b>
            {dateObj.getFormatedDate?.(
              DATE_PRETTY_TIME_FORMAT,
              DATE_TYPES.LOCATION,
            )}
          </b>
        </OrdersDateStyled>
      )}
      {isShowSellers && (
        <SellerInfoStyled>
          <SellerInfoItemStyled>
            <SellersInfo sellers={sellers} />
            {!isParcelDelivery && <MerchantInfo merchant={merchant} />}
          </SellerInfoItemStyled>
        </SellerInfoStyled>
      )}
    </OrdersHeaderDateStyled>
  );
};

export default memo(OrderDate);

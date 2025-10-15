import useTranslations from 'commons/hooks/useTranslations';
import { getFormattedPrice } from 'commons/utils/price';
import { FC, memo } from 'commons/utils/react';

import { Offer, Order } from '../types';
import ListOfProductItem from './ListOfProductItem';
import ListOfProductsInImage from './ListOfProductItem/ListOfProductsInImage';
import {
  ListOfProductsHeaderStyled,
  ListOfProductsStyled,
  ListOfProductSummaryStyled,
  OrderLabelStyled,
  OrdersContentStyled,
} from './styles';

interface Props {
  orderId: Order['id'];
  offers: Offer[];
  price: NonNullable<Order['schema']['partOfOrder']>['price'];
  priceCurrency: NonNullable<Order['schema']['partOfOrder']>['priceCurrency'];
  noSummary?: boolean;
  isDetail?: boolean;
  imagesOffer: string[];
}

const OffersList: FC<Props> = ({
  imagesOffer,
  isDetail,
  noSummary,
  offers,
  price,
  priceCurrency,
}) => {
  const t = useTranslations();
  const offersInImg = imagesOffer.length > 0;
  const offersInImgInfo = isDetail && offersInImg && imagesOffer[1];
  const isShow = offers.length > 0 || offersInImg;
  const isShowLength = offers?.length > 2 && !isDetail;

  return isShow ? (
    <OrdersContentStyled>
      <ListOfProductsHeaderStyled>
        <OrderLabelStyled>{t('products')}</OrderLabelStyled>
        {isShowLength && (
          <>
            (<b>{offers?.length}</b>)
          </>
        )}
      </ListOfProductsHeaderStyled>
      {offersInImg && (
        <ListOfProductsInImage isDetail={isDetail} offers={imagesOffer[0]} />
      )}
      {offersInImgInfo && <ListOfProductsInImage offers={imagesOffer[1]} />}
      <ListOfProductsStyled>
        {offers.map((offer, index) => (
          <ListOfProductItem
            key={`${offer.itemOffered?.sku}-${offer.itemOffered?.name}`}
            index={index}
            isDetail={isDetail}
            offer={offer}
            url={offer.itemOffered?.url}
          />
        ))}
      </ListOfProductsStyled>
      {!noSummary && price ? (
        <ListOfProductSummaryStyled>
          <div>{t('orderTotalPrice')}</div>
          <div>{getFormattedPrice(price, priceCurrency)}</div>
        </ListOfProductSummaryStyled>
      ) : null}
    </OrdersContentStyled>
  ) : null;
};

export default memo(OffersList);

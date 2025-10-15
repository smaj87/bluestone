import { Offer } from 'commons/share_app/containers/Orders/types';
import { getFormattedPrice } from 'commons/utils/price';
import { FC, memo } from 'commons/utils/react';

import ProductItem from './ProductItem';
import ProductItemImg from './ProductItemImg';
import {
  ProductItemInfoStyled,
  ProductItemInfoTitleStyled,
  ProductItemPriceStyled,
} from './styles';

interface Props {
  offer: Offer;
  index: number;
  isDetail?: boolean;
  url?: string;
}

const ListOfProductItem: FC<Props> = ({ index, isDetail, offer, url }) => (
  <ProductItem index={index} isDetail={isDetail} url={url}>
    <ProductItemImg img={offer.itemOffered?.image} />
    <ProductItemInfoStyled>
      <ProductItemInfoTitleStyled $isDetail={isDetail} url={url}>
        {offer.itemOffered?.name}
      </ProductItemInfoTitleStyled>
      {isDetail ? (
        <ProductItemPriceStyled>
          {offer.price &&
          offer.eligibleQuantity?.value &&
          offer.eligibleQuantity?.value > 1
            ? `${offer.eligibleQuantity?.value} x `
            : ''}
          {getFormattedPrice(offer.price)}
        </ProductItemPriceStyled>
      ) : null}
    </ProductItemInfoStyled>
  </ProductItem>
);

export default memo(ListOfProductItem);

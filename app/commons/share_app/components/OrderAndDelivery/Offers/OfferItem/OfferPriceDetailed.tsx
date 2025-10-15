import { FC, memo } from 'commons/utils/react';

import { Offer } from '../../types';
import { OfferPriceStyled } from './styles';

interface Props {
  quantity: Offer['eligibleQuantity']['value'];
  price: Offer['price'];
  priceCurrency: Offer['priceCurrency'];
}

const OfferPriceDetailed: FC<Props> = ({ price, priceCurrency, quantity }) =>
  price && priceCurrency && quantity ? (
    <OfferPriceStyled>
      {parseInt(quantity, 10)} x {price} {priceCurrency}
    </OfferPriceStyled>
  ) : null;

export default memo(OfferPriceDetailed);

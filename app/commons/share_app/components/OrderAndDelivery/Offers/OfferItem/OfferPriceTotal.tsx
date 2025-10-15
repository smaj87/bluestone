import { FC, memo } from 'commons/utils/react';

import { Offer } from '../../types';
import { OfferPriceStyled } from './styles';

interface Props {
  quantity: Offer['eligibleQuantity']['value'];
  price: Offer['price'];
  priceCurrency: Offer['priceCurrency'];
}

const OfferPriceTotal: FC<Props> = ({ price, priceCurrency, quantity }) =>
  price && priceCurrency && quantity ? (
    <OfferPriceStyled $isTotal>
      {(parseInt(quantity, 10) * parseFloat(price)).toFixed(2)} {priceCurrency}
    </OfferPriceStyled>
  ) : null;

export default memo(OfferPriceTotal);

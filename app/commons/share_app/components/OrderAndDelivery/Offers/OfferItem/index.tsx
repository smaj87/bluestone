import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';

import { Offer } from '../../types';
import OfferImage from './OfferImage';
import OfferName from './OfferName';
import OfferPriceDetailed from './OfferPriceDetailed';
import OfferPriceTotal from './OfferPriceTotal';
import {
  OfferButtonStyled,
  OfferDataStyled,
  OfferItemStyled,
  OfferPriceBoxStyled,
} from './styles';

interface Props {
  offer: Offer;
}

const OfferItem: FC<Props> = ({ offer }) => {
  const t = useTranslations();
  const onClick = useCallback(
    () => window.open(offer.itemOffered?.url, '_blank', 'noopener,noreferrer'),
    [offer.itemOffered?.url],
  );

  return (
    <OfferItemStyled>
      <OfferButtonStyled
        aria-label={
          offer.itemOffered?.url && offer.itemOffered?.name
            ? t('ariaShowProductDetails', {
                productName: offer.itemOffered?.name,
              })
            : ''
        }
        disabled={!offer.itemOffered?.url}
        onClick={onClick}
      >
        <OfferImage image={offer.itemOffered?.image} />
        <OfferDataStyled>
          <OfferName itemName={offer.itemOffered?.name} />
          <OfferPriceBoxStyled>
            <OfferPriceDetailed
              price={offer.price}
              priceCurrency={offer.priceCurrency}
              quantity={offer.eligibleQuantity?.value}
            />
            <OfferPriceTotal
              price={offer.price}
              priceCurrency={offer.priceCurrency}
              quantity={offer.eligibleQuantity?.value}
            />
          </OfferPriceBoxStyled>
        </OfferDataStyled>
      </OfferButtonStyled>
    </OfferItemStyled>
  );
};

export default memo(OfferItem);

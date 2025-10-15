import useTranslations from 'commons/hooks/useTranslations';
import { PromoCard } from 'commons/share_app/containers/Coupons/types';
import { FC, memo } from 'commons/utils/react';

import {
  PromoCardOldPriceStyled,
  PromoCardOmnibusPriceStyled,
  PromoCardPriceLineStyled,
  PromoCardPriceRowStyled,
  PromoCardPriceStyled,
} from './styles';

interface Props {
  price: PromoCard['price'];
  priceCurrency: PromoCard['priceCurrency'];
  discountValue: PromoCard['discountValue'];
  omnibusPrice?: PromoCard['omnibusPrice'];
}

const PromoCardPrice: FC<Props> = ({
  discountValue,
  omnibusPrice,
  price,
  priceCurrency,
}) => {
  const t = useTranslations();

  const isOmnibusPrice = !!omnibusPrice && !!parseFloat(omnibusPrice);
  const isDiscountValue =
    !!price && !!discountValue && !!priceCurrency && isOmnibusPrice;
  const isShowPrice = !!price && !!priceCurrency;

  const newPrice =
    isDiscountValue &&
    (parseFloat(price) - parseFloat(discountValue)).toFixed(2).toString();

  if (isShowPrice) {
    return (
      <PromoCardPriceRowStyled>
        <PromoCardPriceLineStyled>
          <PromoCardPriceStyled>{`${newPrice || price} ${
            priceCurrency || ''
          }`}</PromoCardPriceStyled>
          {isDiscountValue && (
            <PromoCardOldPriceStyled>
              {/* @ts-ignore */}
              <del>{`${price} ${priceCurrency}`}</del>
            </PromoCardOldPriceStyled>
          )}
        </PromoCardPriceLineStyled>
        {isDiscountValue && (
          <PromoCardOmnibusPriceStyled>
            <span>{t('promoCardOmnibusPrice')}</span>
            <span>{`${omnibusPrice} ${priceCurrency}`}</span>
          </PromoCardOmnibusPriceStyled>
        )}
      </PromoCardPriceRowStyled>
    );
  }

  return null;
};

PromoCardPrice.displayName = 'PromoCardPrice';

export default memo(PromoCardPrice);

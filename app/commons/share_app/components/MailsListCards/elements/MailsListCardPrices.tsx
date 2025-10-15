import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import {
  MailsListCardOmnibusStyled,
  MailsListCardPriceChangeStyled,
  MailsListCardPriceNewStyled,
  MailsListCardPriceOldStyled,
  MailsListCardPricesStyled,
} from '../styles';

interface MailsListCardPricesProps {
  discountValue?: string;
  price?: string;
  priceCurrency?: string;
  omnibusPrice?: string;
}

export const MailsListCardPrices: FC<MailsListCardPricesProps> = ({
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

  return (
    <MailsListCardPricesStyled>
      {isShowPrice && (
        <MailsListCardPriceChangeStyled>
          <MailsListCardPriceNewStyled>
            {`${newPrice || price} ${priceCurrency || ''}`}
          </MailsListCardPriceNewStyled>
          {isOmnibusPrice ? (
            <MailsListCardPriceOldStyled>
              {price} {priceCurrency}
            </MailsListCardPriceOldStyled>
          ) : null}
        </MailsListCardPriceChangeStyled>
      )}
      {isDiscountValue && (
        <MailsListCardOmnibusStyled>
          {t('promoCardOmnibusPrice')}
          {`${omnibusPrice} ${priceCurrency}`}
        </MailsListCardOmnibusStyled>
      )}
    </MailsListCardPricesStyled>
  );
};

MailsListCardPrices.displayName = 'MailsListCardPrices';

export default memo(MailsListCardPrices);

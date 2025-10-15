import { FC, memo } from 'commons/utils/react';

import { MailsListCardAdLabel } from '../elements/MailsListCardAdLabel';
import { MailsListCardDate } from '../elements/MailsListCardDate';
import { MailsListCardImage } from '../elements/MailsListCardImage';
import { MailsListCardLabel } from '../elements/MailsListCardLabel';
import { MailsListCardPrices } from '../elements/MailsListCardPrices';
import { MailsListCardTitle } from '../elements/MailsListCardTitle';
import {
  MailsListCardAdditionalDataStyled,
  MailsListCardBottomStyled,
  MailsListCardContentStyled,
  MailsListCardStyled,
} from '../styles';
import { Brand } from '../types';

interface MailsListPromoCardProps {
  brand: Brand;
  date?: string;
  image?: string;
  label?: string;
  title?: string;
  discountValue?: string;
  price?: string;
  priceCurrency?: string;
  omnibusPrice?: string;
  isAdServerCoupon?: boolean;
}

export const MailsListPromoCard: FC<MailsListPromoCardProps> = ({
  brand,
  date,
  discountValue,
  image,
  isAdServerCoupon,
  label,
  omnibusPrice,
  price,
  priceCurrency,
  title,
}) => (
  <MailsListCardStyled>
    <MailsListCardLabel brand={brand} label={label} />
    <MailsListCardImage brand={brand} image={image} />
    <MailsListCardContentStyled>
      <MailsListCardTitle title={title} />
      <MailsListCardPrices
        discountValue={discountValue}
        omnibusPrice={omnibusPrice}
        price={price}
        priceCurrency={priceCurrency}
      />
      <MailsListCardBottomStyled>
        <MailsListCardAdditionalDataStyled>
          {date ? <MailsListCardDate date={date} /> : null}
        </MailsListCardAdditionalDataStyled>
        {isAdServerCoupon && <MailsListCardAdLabel />}
      </MailsListCardBottomStyled>
    </MailsListCardContentStyled>
  </MailsListCardStyled>
);

MailsListPromoCard.displayName = 'MailsListPromoCard';

export default memo(MailsListPromoCard);

import { MailsListCardDiscount } from 'commons/share_app/components/MailsListCards/elements/MailsListCardDiscount';
import { FC, memo } from 'commons/utils/react';

import { MailsListCardAdLabel } from '../elements/MailsListCardAdLabel';
import MailsListCardDate from '../elements/MailsListCardDate';
import { MailsListCardImage } from '../elements/MailsListCardImage';
import { MailsListCardLabel } from '../elements/MailsListCardLabel';
import { MailsListCardTitle } from '../elements/MailsListCardTitle';
import {
  MailsListCardAdditionalDataStyled,
  MailsListCardBottomStyled,
  MailsListCardContentStyled,
  MailsListCardStyled,
} from '../styles';
import { Brand } from '../types';

interface MailsListCashbackProps {
  brand: Brand;
  discount?: string;
  image?: string;
  label?: string;
  title?: string;
  isAdServerCoupon: boolean;
  date?: string;
}

export const MailsListCashback: FC<MailsListCashbackProps> = ({
  brand,
  date,
  discount,
  image,
  isAdServerCoupon,
  label,
  title,
}) => {
  const cardDate = date ? <MailsListCardDate date={date} /> : null;

  return (
    <MailsListCardStyled>
      <MailsListCardLabel brand={brand} label={label} />
      <MailsListCardImage brand={brand} image={image} />
      <MailsListCardContentStyled>
        <MailsListCardTitle isMultiply title={title} />
        <MailsListCardBottomStyled>
          <MailsListCardAdditionalDataStyled>
            {discount ? (
              <MailsListCardDiscount brand={brand} discount={discount} />
            ) : (
              cardDate
            )}
          </MailsListCardAdditionalDataStyled>
          {isAdServerCoupon && <MailsListCardAdLabel />}
        </MailsListCardBottomStyled>
      </MailsListCardContentStyled>
    </MailsListCardStyled>
  );
};

MailsListCashback.displayName = 'MailsListCashback';

export default memo(MailsListCashback);

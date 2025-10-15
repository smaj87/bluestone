import { FC, memo } from 'commons/utils/react';

import { MailsListCardAdLabel } from '../elements/MailsListCardAdLabel';
import { MailsListCardDate } from '../elements/MailsListCardDate';
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

interface MailsListCouponProps {
  brand: Brand;
  date?: string;
  image?: string;
  label?: string;
  title?: string;
  isAdServerCoupon: boolean;
}

export const MailsListCoupon: FC<MailsListCouponProps> = ({
  brand,
  date,
  image,
  isAdServerCoupon,
  label,
  title,
}) => (
  <MailsListCardStyled>
    <MailsListCardLabel brand={brand} label={label} />
    <MailsListCardImage brand={brand} image={image} />
    <MailsListCardContentStyled>
      <MailsListCardTitle isMultiply title={title} />
      <MailsListCardBottomStyled>
        <MailsListCardAdditionalDataStyled>
          {date ? <MailsListCardDate date={date} /> : null}
        </MailsListCardAdditionalDataStyled>
        {isAdServerCoupon && <MailsListCardAdLabel />}
      </MailsListCardBottomStyled>
    </MailsListCardContentStyled>
  </MailsListCardStyled>
);

MailsListCoupon.displayName = 'MailsListCoupon';

export default memo(MailsListCoupon);

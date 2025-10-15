import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { MailsListCardDiscountStyled } from '../styles';
import { Brand } from '../types';

interface MailsListCardDiscountProps {
  discount: string;
  brand: Brand;
}

export const MailsListCardDiscount: FC<MailsListCardDiscountProps> = ({
  brand,
  discount,
}) => {
  const t = useTranslations();

  const cashbackDiscount = t('cashbackDiscount', { value: discount });
  const cashbackDiscount2 = t('cashbackDiscount2', {
    value: discount,
  });

  const label = /[^,.\d]/.test(discount) ? cashbackDiscount2 : cashbackDiscount;

  return (
    <MailsListCardDiscountStyled $brand={brand}>
      {label}
    </MailsListCardDiscountStyled>
  );
};

MailsListCardDiscount.displayName = 'MailsListCardDiscount';

export default memo(MailsListCardDiscount);

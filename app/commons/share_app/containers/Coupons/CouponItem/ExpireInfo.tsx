import useTranslations from 'commons/hooks/useTranslations';
import { FORMAT_DATE } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import formatDate from 'commons/utils/formatDate';
import { FC, memo } from 'commons/utils/react';

import { Coupon } from '../types';
import { ExpiredIconStyled, TextStyled } from './styles';

interface Props {
  availabilityEnds?: Coupon['availabilityEnds'];
  defaultExpirationDate: Coupon['defaultExpirationDate'];
}
const ExpireInfo: FC<Props> = ({ availabilityEnds, defaultExpirationDate }) => {
  const t = useTranslations();
  const date = stringToDate(availabilityEnds || defaultExpirationDate);
  const text = date ? formatDate(date, FORMAT_DATE) : '';

  return (
    <>
      {text ? (
        <TextStyled>
          <ExpiredIconStyled $image="timer" />
          {t('Schema/validUntil')} {text}
        </TextStyled>
      ) : null}
    </>
  );
};

export default memo(ExpireInfo);

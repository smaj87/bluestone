import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { LONG_DATE_TIME, SHORT_DATE } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import formatDate from 'commons/utils/formatDate';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { DateStyled } from './styles';

const Index: FC = () => {
  useTranslations();

  const date = useSelector(getMailField, 'received_date') as string;

  const d = stringToDate(date);
  const dateDesktop = d ? formatDate(d, LONG_DATE_TIME) : '';
  const dateMobile = d ? formatDate(d, SHORT_DATE) : '';

  return (
    <DateStyled data-cypress="DATE">
      <MobileLoader desktop={<>{dateDesktop}</>} mobile={<>{dateMobile}</>} />
    </DateStyled>
  );
};

export default memo(Index);

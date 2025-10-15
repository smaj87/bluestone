import useTranslations from 'commons/hooks/useTranslations';
import TileAdditional from 'commons/share_app/components/OrderAndDelivery/components/TileAddtitional';
import { DATE_TYPES } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';

import { Delivery } from '../types';

interface Props {
  expectedArrivalFrom: Delivery['expectedArrivalFrom'];
  expectedArrivalUntil: Delivery['expectedArrivalUntil'];
}

const DeliveryDate: FC<Props> = ({
  expectedArrivalFrom,
  expectedArrivalUntil,
}) => {
  const t = useTranslations();

  const formatArrivalDate = useCallback((date: string, format: string) => {
    const arrivalDate = stringToDate(date);

    if (arrivalDate?.getFormatedDate) {
      return arrivalDate.getFormatedDate(
        format,
        DATE_TYPES.DEVICE as keyof typeof DATE_TYPES,
      );
    }

    return '';
  }, []);

  const startDate = useMemo(
    () => formatArrivalDate(expectedArrivalFrom, 'DD.MM.YYYY - '),
    [expectedArrivalFrom],
  );

  const endDate = useMemo(
    () => formatArrivalDate(expectedArrivalUntil, 'DD.MM.YYYY'),
    [expectedArrivalUntil],
  );

  return endDate ? (
    <TileAdditional
      isSingleLine
      label={t('deliveryDate')}
      value={`${startDate}${endDate}`}
    />
  ) : null;
};

export default memo(DeliveryDate);

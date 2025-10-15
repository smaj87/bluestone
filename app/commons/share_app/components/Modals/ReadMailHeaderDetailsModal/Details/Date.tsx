import { LONG_DATE_TIME_FULL } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import formatDate from 'commons/utils/formatDate';
import { FC, memo } from 'commons/utils/react';

import DetailsItem from './DetailsItem';

interface Props {
  dateString: string;
  label: string;
  id: string;
  cypressId: string;
}

const Date: FC<Props> = ({ cypressId, dateString, id, label }) => (
  <DetailsItem
    cypressId={cypressId}
    id={id}
    label={label}
    value={formatDate(stringToDate(dateString)!, LONG_DATE_TIME_FULL)}
  />
);

Date.displayName = 'Date';

export default memo(Date);

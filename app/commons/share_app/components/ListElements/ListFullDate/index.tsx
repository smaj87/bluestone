import { GroupTextStyled } from 'commons/GroupActions/styles';
import { LONG_DATE_DAY_NAME_TIME } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import formatDate from 'commons/utils/formatDate';
import { FC, memo } from 'commons/utils/react';

interface Props {
  date?: string;
}

const ListFullDate: FC<Props> = ({ date }) =>
  date ? (
    <GroupTextStyled>
      {formatDate(stringToDate(date)!, LONG_DATE_DAY_NAME_TIME)}
    </GroupTextStyled>
  ) : null;

export default memo(ListFullDate);

/* eslint-disable react/no-array-index-key */
import type { FC } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMonthDays } from '../selectors';
import MonthDay from './MonthDay';
import { MonthDaysRowStyled, MonthDaysStyled } from './styles';

const MonthDays: FC = () => {
  const monthDays = useSelector(getMonthDays);

  return (
    <MonthDaysStyled>
      {monthDays.map((row, index) => (
        <MonthDaysRowStyled key={index} role="row">
          {row.map((monthDay, nestedIndex) => (
            <MonthDay
              key={`${monthDay.day}-${nestedIndex}`}
              monthDay={monthDay}
            />
          ))}
        </MonthDaysRowStyled>
      ))}
    </MonthDaysStyled>
  );
};

export default MonthDays;

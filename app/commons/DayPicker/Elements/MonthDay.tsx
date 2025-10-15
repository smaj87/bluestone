import type { FC } from 'commons/utils/react';
import { memo, useCallback, useContext, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { DayPickerContext } from '../constants';
import { MonthDayType } from '../types';
import { isSameDay } from '../utils';
import { MonthDayCellStyled, MonthDayStyled } from './styles';

interface Props {
  monthDay: MonthDayType;
}

const MonthDay: FC<Props> = ({ monthDay }) => {
  const { currentDateSelector, isDisablePastDays, onChange } =
    useContext(DayPickerContext);

  const onChangeDay = useCallback(() => {
    onChange(monthDay.date);
  }, [monthDay]);

  const selectedDate = useSelector(currentDateSelector);

  const isDisabled = useMemo(() => {
    if (!isDisablePastDays) {
      return false;
    }

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return monthDay.date < today;
  }, [monthDay, isDisablePastDays]);

  const isSelected = useMemo(
    () => selectedDate && isSameDay(selectedDate, monthDay.date),
    [selectedDate, monthDay],
  );

  return (
    <MonthDayCellStyled role="cell">
      <MonthDayStyled
        color="secondary"
        isActive={isSelected}
        isDisabled={isDisabled}
        isOtherMonth={!monthDay.isCurrentMonth}
        isToday={monthDay.isToday}
        label={`${monthDay.day}`}
        onClick={onChangeDay}
        size="md"
      />
    </MonthDayCellStyled>
  );
};

export default memo(MonthDay);

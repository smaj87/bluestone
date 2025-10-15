import type { FC } from 'commons/utils/react';
import { memo, useEffect, useMemo } from 'commons/utils/react';
import { injectReducer } from 'commons/utils/store';

import { DayPickerContext, KEY } from './constants';
import Header from './Elements/Header';
import MonthDays from './Elements/MonthDays';
import WeekDays from './Elements/WeekDays';
import reducer from './reducer';
import { DayPickerStyled, MonthViewStyled } from './styles';

interface Props {
  currentDateSelector: any;
  onChange: (date: Date) => void;
  isDisablePastDays?: boolean;
}

const DayPicker: FC<Props> = ({
  currentDateSelector,
  isDisablePastDays = false,
  onChange,
}) => {
  useEffect(() => {
    injectReducer(KEY, reducer);
  }, []);

  const contextValue = useMemo(
    () => ({ currentDateSelector, onChange, isDisablePastDays }),
    [currentDateSelector, onChange, isDisablePastDays],
  );

  return (
    <DayPickerStyled>
      <DayPickerContext.Provider value={contextValue}>
        <Header />
        <MonthViewStyled role="table">
          <WeekDays />
          <MonthDays />
        </MonthViewStyled>
      </DayPickerContext.Provider>
    </DayPickerStyled>
  );
};

export default memo(DayPicker);

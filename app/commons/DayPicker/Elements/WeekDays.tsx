import useTranslations from 'commons/hooks/useTranslations';
import type { FC } from 'commons/utils/react';

import { WeekDaysStyled, WeekDayStyled } from './styles';

const WeekDays: FC = () => {
  const t = useTranslations();

  return (
    <WeekDaysStyled>
      <WeekDayStyled>
        {t('weekDayName', { day: 1, isShort: true })}
      </WeekDayStyled>
      <WeekDayStyled>
        {t('weekDayName', { day: 2, isShort: true })}
      </WeekDayStyled>
      <WeekDayStyled>
        {t('weekDayName', { day: 3, isShort: true })}
      </WeekDayStyled>
      <WeekDayStyled>
        {t('weekDayName', { day: 4, isShort: true })}
      </WeekDayStyled>
      <WeekDayStyled>
        {t('weekDayName', { day: 5, isShort: true })}
      </WeekDayStyled>
      <WeekDayStyled>
        {t('weekDayName', { day: 6, isShort: true })}
      </WeekDayStyled>
      <WeekDayStyled>
        {t('weekDayName', { day: 0, isShort: true })}
      </WeekDayStyled>
    </WeekDaysStyled>
  );
};

export default WeekDays;

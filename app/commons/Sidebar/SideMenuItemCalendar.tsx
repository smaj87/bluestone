import { getCount } from 'commons/hooks/useTodayCalendarEvents/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import SideMenuItem from 'commons/Sidebar/SideMenuItem';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const SideMenuItemCalendar: FC = () => {
  const t = useTranslations();
  const count = useSelector(getCount);

  return (
    <SideMenuItem
      counter={count}
      href={process.env.CALENDAR_URL!}
      icon="calendar"
      isActive={process.env.CALENDAR_URL === process.env.HOST}
      label={t('calendar')}
    />
  );
};

export default memo(SideMenuItemCalendar);

import useTranslations from 'commons/hooks/useTranslations';
import { FC } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getCurrentMonth, getCurrentYear } from '../selectors';

const HeaderInfo: FC = () => {
  const t = useTranslations();

  const currentMonth = useSelector(getCurrentMonth);
  const currentYear = useSelector(getCurrentYear);

  return (
    <h3>
      {t('monthName', { month: currentMonth })} {currentYear}
    </h3>
  );
};

export default HeaderInfo;

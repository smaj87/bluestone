import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setNextMonth, setPrevMonth } from '../actions';
import { HeaderActionsStyled } from './styles';

const HeaderActions: FC = () => {
  const t = useTranslations();

  const onChangeMonth = useCallback((_, type: string) => {
    if (type === 'next') {
      dispatch(setNextMonth());
    } else {
      dispatch(setPrevMonth());
    }
  }, []);

  return (
    <HeaderActionsStyled>
      <Button
        color="secondary"
        icon="chevronLeft"
        onClick={onChangeMonth}
        params="prev"
        size="md"
        title={t('prevMonthDayPicker')}
      />
      <Button
        color="secondary"
        icon="chevronRight"
        onClick={onChangeMonth}
        params="next"
        size="md"
        title={t('nextMonthDayPicker')}
      />
    </HeaderActionsStyled>
  );
};

export default HeaderActions;

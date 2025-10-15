import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { ValidUntilStyled } from './styles';

interface Props {
  date: string;
}

const ValidUntil: FC<Props> = ({ date }) => {
  const t = useTranslations();

  return <ValidUntilStyled>{t('validUntil', { date })}</ValidUntilStyled>;
};

export default memo(ValidUntil);

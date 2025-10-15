import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { LabelNewStyled } from './styles';

const LabelNew: FC = () => {
  const t = useTranslations();

  return <LabelNewStyled>{t('labelNew2')}</LabelNewStyled>;
};

export default memo(LabelNew);

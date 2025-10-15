import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { AdPlugStyled } from './styles';

const AdPlug: FC = () => {
  const t = useTranslations();

  return <AdPlugStyled>{t('ad')}</AdPlugStyled>;
};

export default memo(AdPlug);

import { CloudStyled } from 'commons/CopyButton/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

const Cloud: FC = () => {
  const t = useTranslations();

  return <CloudStyled>{t('copyInfo')}</CloudStyled>;
};

Cloud.displayName = 'Cloud';

export default memo(Cloud);

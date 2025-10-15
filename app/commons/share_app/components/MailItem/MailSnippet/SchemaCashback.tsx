import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { SchemaBadge } from './styles';

const SchemaCashback: FC = () => {
  const t = useTranslations();

  return (
    <SchemaBadge
      color="primary"
      icon="couponsLabel"
      label={t('components/Rows/MailListRow/cashback')}
      size="sm"
    />
  );
};

export default memo(SchemaCashback);

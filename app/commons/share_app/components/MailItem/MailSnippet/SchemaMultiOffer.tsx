import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { SchemaBadge } from './styles';

const SchemaMultiOffer: FC = () => {
  const t = useTranslations();

  return (
    <SchemaBadge
      color="primary"
      icon="label"
      label={t('components/Rows/MailListRow/coupon')}
      size="sm"
    />
  );
};

export default memo(SchemaMultiOffer);

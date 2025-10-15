import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { SchemaBadge } from './styles';

const SchemaPromoCard: FC = () => {
  const t = useTranslations();

  return (
    <SchemaBadge
      color="primary"
      icon="label"
      label={t('components/Rows/MailListRow/promoCard')}
      size="sm"
    />
  );
};

export default memo(SchemaPromoCard);

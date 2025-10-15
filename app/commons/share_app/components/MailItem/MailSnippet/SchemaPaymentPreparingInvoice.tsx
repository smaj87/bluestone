import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { SchemaBadge } from 'commons/share_app/components/MailItem/MailSnippet/styles';
import { FC, memo } from 'commons/utils/react';

import TooltipPaymentsInfo from 'components/Tooltips/TooltipPaymentsInfo';

const SchemaPaymentPreparingInvoice: FC = () => {
  const t = useTranslations();

  return (
    <SchemaBadge
      color="primary"
      icon="epayments"
      label={t('Schema/Payments/turnOnInProgressText')}
      size="sm"
    >
      <MobileLoader desktop={<TooltipPaymentsInfo />} />
    </SchemaBadge>
  );
};

export default memo(SchemaPaymentPreparingInvoice);

import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { openModal } from 'commons/Modal/actions';
import {
  SchemaBadge,
  SchemaSnippetCtaStyled,
} from 'commons/share_app/components/MailItem/MailSnippet/styles';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { ENABLE_EPAYMENTS_MODAL_ID } from 'components/Modals/EnableEPaymentsModal/constants';
import TooltipPaymentsInfo from 'components/Tooltips/TooltipPaymentsInfo';

const SchemaPaymentTurnOn: FC = () => {
  const t = useTranslations();

  const enableEPaymentsService = useCallback((e) => {
    e.stopPropagation();

    dispatch(
      eventsApiSendAction({
        event_category: 'payment',
        event_action: 'mail_list_enable_epayments',
      }),
    );

    dispatch(openModal(ENABLE_EPAYMENTS_MODAL_ID));
  }, []);

  return (
    <SchemaBadge
      color="primary"
      icon="epayments"
      label={t('Schema/Payments/turnOnText')}
      size="sm"
    >
      <SchemaSnippetCtaStyled
        onClick={enableEPaymentsService}
        role="button"
        title={t('Schema/Payments/turnOnBtnLabel')}
      >
        {t('Schema/Payments/turnOnBtnLabel')}
      </SchemaSnippetCtaStyled>
      <MobileLoader desktop={<TooltipPaymentsInfo />} />
    </SchemaBadge>
  );
};

export default memo(SchemaPaymentTurnOn);

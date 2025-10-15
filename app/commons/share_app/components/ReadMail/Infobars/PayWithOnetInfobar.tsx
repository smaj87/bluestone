import useTranslations from 'commons/hooks/useTranslations';
import Infobar from 'commons/Infobar';
import { openModal } from 'commons/Modal/actions';
import {
  isInvoicePreparing as isInvoicePreparingSelector,
  isVisiblePayWithOnetInfobar,
} from 'commons/share_app/containers/ReadMail/selectors';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ENABLE_EPAYMENTS_MODAL_ID } from 'components/Modals/EnableEPaymentsModal/constants';
import { PAYMENT_OFF_FEEDBACK_SURVEY } from 'components/Schema/Payments/constants';
import PaymentInfo from 'components/Schema/Payments/PaymentInfo';

const PayWithOnetInfobar: FC = () => {
  const t = useTranslations();
  const isVisible = useSelector(isVisiblePayWithOnetInfobar);
  const isInvoicePreparing = useSelector(isInvoicePreparingSelector);

  const enableEPaymentsService = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'payment',
        event_action: 'mail_detail_enable_epayments',
      }),
    );
    dispatch(openModal(ENABLE_EPAYMENTS_MODAL_ID));
  }, []);

  if (isInvoicePreparing) {
    return (
      <Infobar isOpen type="info">
        <Infobar.Icon $image="epayments" />
        <Infobar.Content>
          <Infobar.Label>
            {t('Schema/Payments/turnOnInProgressText')}
          </Infobar.Label>
        </Infobar.Content>
      </Infobar>
    );
  }

  return isVisible ? (
    <>
      <Infobar isOpen type="info">
        <Infobar.Icon $image="epayments" />
        <Infobar.Content>
          <Infobar.Label>{t('Schema/Payments/turnOnText')}</Infobar.Label>
          <Infobar.Actions>
            <Infobar.ActionItem>
              <Infobar.Button
                label={t('Schema/Payments/turnOnBtnLabel')}
                onClick={enableEPaymentsService}
              />
            </Infobar.ActionItem>
          </Infobar.Actions>
        </Infobar.Content>
      </Infobar>
      <PaymentInfo surveyId={PAYMENT_OFF_FEEDBACK_SURVEY} />
    </>
  ) : null;
};

export default memo(PayWithOnetInfobar);

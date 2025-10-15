import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import { getMailRootMid } from 'commons/share_app/containers/Mails/selectors';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import TooltipPaymentsInfo from 'components/Tooltips/TooltipPaymentsInfo';

import {
  SchemaBadge,
  SchemaPaymentDataStyled,
  SchemaSnippetCtaStyled,
} from './styles';
import { schemaPayment } from './types';

interface Props {
  id: number;
  schema: schemaPayment;
}

const SchemaPayment: FC<Props> = ({ id, schema }) => {
  const t = useTranslations();

  const isMobile = useSelector(isMobileSelector);
  const rootMid = useSelector(getMailRootMid, id);

  const isSuccessPayment = schema.status === 'SUCCESS';
  const amount = `${schema?.price} ${schema?.priceCurrency === 'zł' ? 'PLN' : schema?.priceCurrency}`;

  const onPay = useCallback(
    (e) => {
      e.stopPropagation();

      dispatch(
        eventsApiSendAction({
          event_category: 'payment',
          event_action: 'mail_list_go_to_payment',
        }),
      );
      window.open(`${process.env.INVOICE_PAYMENT_URL}/${rootMid}`, '_blank');
    },
    [rootMid],
  );

  return (
    <SchemaBadge
      color="primary"
      icon="epayments"
      label={isSuccessPayment ? t('Schema/Payments/statusSuccess') : ''}
      size="sm"
    >
      {!isSuccessPayment ? (
        <>
          <SchemaPaymentDataStyled>
            {t('Schema/Payments/labelAmount', { value: amount })}{' '}
            {!!schema.date_pay &&
              !isMobile &&
              t('Schema/Payments/labelDeadline', {
                value: schema.date_pay,
              })}
          </SchemaPaymentDataStyled>
          <MobileLoader
            desktop={
              <SchemaSnippetCtaStyled
                onClickCapture={onPay}
                role="link"
                title={t('Schema/Payments/ctaPayInvoice')}
              >
                {t('Schema/Payments/ctaPay')}
              </SchemaSnippetCtaStyled>
            }
          />
          <MobileLoader desktop={<TooltipPaymentsInfo />} />
        </>
      ) : null}
    </SchemaBadge>
  );
};

export default memo(SchemaPayment);

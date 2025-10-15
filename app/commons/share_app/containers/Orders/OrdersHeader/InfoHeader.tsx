import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { MAUTIC_ORDERS_SHOP_REPORT_FORM_ID } from 'commons/share_app/containers/Communities/Mautic/MauticForm/constants';
import { getSurveyUrl } from 'commons/share_app/containers/Communities/Mautic/utils';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import {
  MAUTIC_CANCELLATION_SURVEY_SLUG,
  MAUTIC_URL_NAME,
} from '../../Communities/Mautic/constants';
import {
  OrderItemDividingLineStyled,
  OrdersItemFormStyled,
} from '../OrdersItem/styles';

type RedirectArgs = {
  eventName: string;
  eventAction: string;
  eventLabel: string;
  formId: number;
};

const InfoHeader: FC = () => {
  const t = useTranslations();

  const redirect = useCallback(
    ({ eventAction, eventLabel, eventName, formId }: RedirectArgs) => {
      dispatch(
        eventsApiSendAction({
          event_category: 'quick_events',
          event_action: 'quick_events',
          event_details: { event_name: eventName },
        }),
      );

      dataLayerPush({ ecommerce: null });
      dataLayerPush({
        event: 'opClick',
        eventCategory: 'orders_header',
        eventAction,
        eventLabel,
      });

      historyPush(getSurveyUrl(formId));
    },
    [],
  );

  const redirectToUnsubscribeForm = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: { event_name: 'orders_header_feedback_link' },
      }),
    );
    historyPush(
      `/${MAUTIC_URL_NAME}/_subpage/${MAUTIC_CANCELLATION_SURVEY_SLUG}`,
    );
  }, []);

  const redirectToReportAnErrorForm = useCallback(() => {
    redirect({
      eventName: 'orders_header_report_link',
      eventAction: 'orders_header_feedback_link_click',
      eventLabel: 'orders_header_report_link',
      formId: MAUTIC_ORDERS_SHOP_REPORT_FORM_ID,
    });
  }, [redirect]);

  return (
    <OrdersItemFormStyled>
      <>
        <h3>{t('ordersHeaderInfo')}</h3>
        <Button
          label={t('ordersHeaderReportShops')}
          onClick={redirectToReportAnErrorForm}
          size="md"
        />

        <OrderItemDividingLineStyled />
        <Button
          className="link"
          label={t('ordersHeaderLinkInfo')}
          onClick={redirectToUnsubscribeForm}
          size="md"
        />
      </>
    </OrdersItemFormStyled>
  );
};

export default memo(InfoHeader);

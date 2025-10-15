import {
  SMART_ADS_ID,
  SMART_FUNCTIONS_ID,
} from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import Infobar from 'commons/Infobar';
import {
  CardContentStyled,
  CardStyled,
} from 'commons/share_app/components/Card/styles';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import Placeholder from './Placeholder';

const OrdersNotEnabled: FC = () => {
  const t = useTranslations();

  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'view_visited',
        event_details: {
          view: 'disabled',
          from: runtimeData?.ordersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          mkt_consent: !!agreements?.[SMART_ADS_ID],
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_orders_view_visited_disabled',
      mp_params: [
        {
          view: 'disabled',
          from: runtimeData?.ordersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
          mkt_consent: !!agreements?.[SMART_ADS_ID],
        },
      ],
    });
    delete runtimeData?.ordersViewVisitedFrom;
  }, []);

  return (
    <CardStyled>
      <Infobar isOpen>
        <Infobar.Icon $image="galaxy" />
        <Infobar.Content>{t('smartFunctionsText')}</Infobar.Content>
      </Infobar>
      <CardContentStyled>
        <Placeholder />
      </CardContentStyled>
    </CardStyled>
  );
};

export default memo(OrdersNotEnabled);

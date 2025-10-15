import EmptyPage from 'commons/EmptyPage';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import HowWrapper from '../CashbacksContent/HowWrapper';

const CashbacksEmptyPage: FC = () => {
  const t = useTranslations();

  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'view_visited',
        event_details: {
          view: 'empty',
          from: runtimeData?.cashbacksViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_view_visited_cashbacks_empty_page',
      mp_params: [
        {
          view: 'empty',
          from: runtimeData?.cashbacksViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      ],
    });

    delete runtimeData?.cashbacksViewVisitedFrom;
  }, []);

  return (
    <>
      <HowWrapper />
      <EmptyPage
        description={t('cashbacksEmptyDescription')}
        icon="coupon"
        title={t('cashbacksEmptyTitle')}
      />
    </>
  );
};

export default memo(CashbacksEmptyPage);

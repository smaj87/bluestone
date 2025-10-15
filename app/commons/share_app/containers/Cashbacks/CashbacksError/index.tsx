import ErrorPage from 'commons/ErrorPage';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { isFetchingError as isUserConfigFetchingErrorSelector } from 'commons/hooks/useUserConfig/selectors';
import { isFetchingError as isFetchingErrorSelector } from 'commons/share_app/containers/Coupons/selectors';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { fetchCoupons } from '../../Coupons/actions';

const CashbacksError: FC = () => {
  const t = useTranslations();

  const isFetchingError = useSelector(isFetchingErrorSelector);
  const isUserConfigFetchingError = useSelector(
    isUserConfigFetchingErrorSelector,
  );
  const onClick = useCallback(() => dispatch(fetchCoupons()), []);

  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'view_visited',
        event_details: {
          view: 'error',
          from: runtimeData?.cashbacksViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_cashbacks_view_visited_error',
      mp_params: [
        {
          view: 'error',
          from: runtimeData?.cashbacksViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      ],
    });

    delete runtimeData?.cashbacksViewVisitedFrom;
  }, []);

  return isFetchingError || isUserConfigFetchingError ? (
    <ErrorPage
      color="error"
      label={t('ctaTryAgain')}
      onClick={onClick}
      title={t('cashbacksError')}
    />
  ) : null;
};
CashbacksError.displayName = 'CashbacksError';

export default memo(CashbacksError);

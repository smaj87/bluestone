import ErrorPage from 'commons/ErrorPage';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { isFetchingError as isUserConfigFetchingErrorSelector } from 'commons/hooks/useUserConfig/selectors';
import { eventsApiSendAction, runtimeData } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { fetchNewsletters } from '../actions';
import { isFetchingError as isFetchingErrorSelector } from '../selectors';

const NewslettersError: FC = () => {
  const t = useTranslations();

  const isFetchingError = useSelector(isFetchingErrorSelector);
  const isUserConfigFetchingError = useSelector(
    isUserConfigFetchingErrorSelector,
  );
  const onClick = useCallback(() => dispatch(fetchNewsletters()), []);

  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'view_visited',
        event_details: {
          view: 'error',
          from: runtimeData?.newslettersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      }),
    );

    delete runtimeData?.newslettersViewVisitedFrom;
  }, []);

  return isFetchingError || isUserConfigFetchingError ? (
    <ErrorPage
      color="error"
      label={t('ctaTryAgain')}
      onClick={onClick}
      title={t('newslettersError')}
    />
  ) : null;
};
NewslettersError.displayName = 'NewslettersError';

export default memo(NewslettersError);

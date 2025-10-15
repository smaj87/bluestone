import EmptyPage from 'commons/EmptyPage';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { eventsApiSendAction, runtimeData } from 'commons/utils/ads';
import { FC, memo, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const NewslettersEmptyPage: FC = () => {
  const t = useTranslations();

  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'view_visited',
        event_details: {
          view: 'empty',
          from: runtimeData?.newslettersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      }),
    );
    delete runtimeData?.newslettersViewVisitedFrom;
  }, []);

  return (
    <EmptyPage
      description={t('newslettersEmptyText')}
      icon="newsletter"
      title={t('newslettersEmptyTitle')}
    />
  );
};

NewslettersEmptyPage.displayName = 'NewslettersEmptyPage';

export default memo(NewslettersEmptyPage);

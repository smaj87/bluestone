import useTranslations from 'commons/hooks/useTranslations';
import { unsubscribeNewsletter } from 'commons/share_app/containers/Newsletters/actions';
import { isUnsubscribingByMid } from 'commons/share_app/containers/Newsletters/selectors';
import { eventsApiSendAction, runtimeData } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { NewsletterButtonStyled } from './styles';

interface Props {
  mid: number;
  email: string;
}

const NewsletterUnsubscribeButton: FC<Props> = ({ email, mid }) => {
  const t = useTranslations();
  const isUnsubscribing = useSelector(isUnsubscribingByMid, mid);

  const unsubscribe = useCallback(
    (e) => {
      e.stopPropagation();

      dispatch(
        eventsApiSendAction({
          event_category: 'newsletters',
          event_action: 'unsubscribe_clicked',
          mid,
        }),
      );

      runtimeData.newslettersViewVisitedFrom = 'unsubscribe_button';
      dispatch(unsubscribeNewsletter(mid, email));
    },
    [mid, email],
  );

  return (
    <NewsletterButtonStyled
      color="primary"
      isDisabled={isUnsubscribing}
      isFetching={isUnsubscribing}
      label={t('ctaUnsubscribe')}
      onClick={unsubscribe}
      size="md"
    />
  );
};

NewsletterUnsubscribeButton.displayName = 'NewsletterUnsubscribeButton';

export default memo(NewsletterUnsubscribeButton);

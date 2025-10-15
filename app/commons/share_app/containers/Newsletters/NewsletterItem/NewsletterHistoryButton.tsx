import useTranslations from 'commons/hooks/useTranslations';
import { setLastShownId } from 'commons/share_app/containers/Newsletters/actions';
import { isUnsubscribingByMid } from 'commons/share_app/containers/Newsletters/selectors';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { goToHistory } from 'utils/route';

import { NewsletterButtonStyled } from './styles';

interface Props {
  mid: number;
  email: string;
  name: string;
  isBimi: boolean;
}

const NewsletterHistoryButton: FC<Props> = ({ email, isBimi, mid, name }) => {
  const t = useTranslations();
  const isUnsubscribing = useSelector(isUnsubscribingByMid, mid);

  const onHistory = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'history_visited',
      }),
    );

    dispatch(setLastShownId(mid));
    goToHistory([
      { email, name, mid, isBimi, avatar: '', isUnsubscribe: true },
    ]);
  }, [name, email, mid, isBimi]);

  return (
    <NewsletterButtonStyled
      color="default"
      isDisabled={isUnsubscribing}
      isFetching={isUnsubscribing}
      label={t('ctaShowMessages')}
      onClick={onHistory}
      size="md"
    />
  );
};

NewsletterHistoryButton.displayName = 'NewsletterHistoryButton';

export default memo(NewsletterHistoryButton);

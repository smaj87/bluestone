import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import { eventsApiSendAction, runtimeData } from 'commons/utils/ads';
import { FC, memo, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import NewsletterItem from '../NewsletterItem';
import { Newsletter } from '../types';
import { NewsletterListStyled } from './styles';

interface Props {
  newsletters: Newsletter[];
}

const List: FC<Props> = ({ newsletters }) => {
  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'view_visited',
        event_details: {
          view: 'list',
          from: runtimeData?.newslettersViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      }),
    );
    delete runtimeData?.newslettersViewVisitedFrom;
  }, []);

  return (
    <NewsletterListStyled>
      {newsletters.map((n) => (
        <NewsletterItem key={n.idMessage} newsletter={n} />
      ))}
    </NewsletterListStyled>
  );
};

List.displayName = 'List';

export default memo(List);

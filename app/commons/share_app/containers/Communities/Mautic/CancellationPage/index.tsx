import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { scrollPage } from 'commons/utils/scroll';
import { dispatch } from 'commons/utils/store';

import MauticForm from '../MauticForm';
import { MAUTIC_ORDERS_CANCELLATION_FORM_ID } from '../MauticForm/constants';
import { MauticAreaStyled, MauticSurveyStyled } from '../styles';

interface Props {
  isCustomFormSent?: boolean;
}

const CancellationPage: FC<Props> = () => {
  useEffect(() => {
    scrollPage();
  }, []);

  const handleFormSubmit = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'orders_user_cancellation',
      }),
    );
  }, []);

  return (
    <MauticAreaStyled>
      <MauticSurveyStyled>
        <MauticForm
          formId={MAUTIC_ORDERS_CANCELLATION_FORM_ID}
          onSubmit={handleFormSubmit}
        />
      </MauticSurveyStyled>
    </MauticAreaStyled>
  );
};

export default memo(CancellationPage);

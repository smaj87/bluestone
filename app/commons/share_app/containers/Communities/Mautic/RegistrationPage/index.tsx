import useTranslations from 'commons/hooks/useTranslations';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { scrollPage } from 'commons/utils/scroll';
import { dispatch } from 'commons/utils/store';

import firstImg from '../images/orders.png';
import MauticForm from '../MauticForm';
import { MAUTIC_RECRUITMENT_SUBSCRIBE_ID } from '../MauticForm/constants';
import {
  MauticAreaStyled,
  MauticImgStyled,
  MauticSurveyStyled,
} from '../styles';

interface Props {
  isCustomFormSent?: boolean;
}

const RegistrationPage: FC<Props> = () => {
  const t = useTranslations();

  useEffect(() => {
    scrollPage();
  }, []);

  const handleFormSubmit = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'orders_user_registration',
      }),
    );
  }, []);

  return (
    <MauticAreaStyled>
      <h2>{t('ordersRegistrationPageTitle')}</h2>
      <ul>
        <li>{t('ordersRegistrationPageContent1')}</li>
        <li>{t('ordersRegistrationPageContent2')}</li>
        <li>{t('ordersRegistrationPageContent3')}</li>
        <li>{t('ordersRegistrationPageContent4')}</li>
        <li>{t('ordersRegistrationPageContent5')}</li>
      </ul>
      <MauticImgStyled alt={t('ordersRegistrationPageTitle')} src={firstImg} />
      <MauticSurveyStyled>
        <MauticForm
          formId={MAUTIC_RECRUITMENT_SUBSCRIBE_ID}
          onSubmit={handleFormSubmit}
        />
      </MauticSurveyStyled>
    </MauticAreaStyled>
  );
};

export default memo(RegistrationPage);

import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { ORDERS_URL_NAME } from 'commons/share_app/containers/Orders/constants';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';
import { scrollPage } from 'commons/utils/scroll';

import { FOLDER_INBOX_KEY } from 'containers/Folders/constants';
import { MAILS_URLS } from 'utils/constants';

import thankYou from '../images/thankYou.png';
import {
  MauticAreaStyled,
  MauticImgStyled,
  MauticThxPageActionsStyled,
} from '../styles';

interface Props {
  isDemo?: boolean;
  isCancellation?: boolean;
}

const ThankYouPage: FC<Props> = ({ isCancellation, isDemo }) => {
  const t = useTranslations();

  let headerText: string;
  let contentText: string;

  if (isCancellation) {
    headerText = t('ordersCancellationPageThxHeader');
    contentText = t('ordersCancellationPageThxContent');
  } else if (isDemo) {
    headerText = t('ordersRegistrationPageThxHeader');
    contentText = t('ordersRegistrationPageThxContent');
  } else {
    headerText = t('mauticThxPageHeader');
    contentText = t('mauticThxPageContent2');
  }

  useEffect(() => {
    scrollPage();
  }, []);

  const onClick = useCallback(() => {
    const redirectUrl =
      !isCancellation && isDemo
        ? `/${ORDERS_URL_NAME}`
        : `/${MAILS_URLS[FOLDER_INBOX_KEY]}`;

    historyPush(redirectUrl);
  }, [isCancellation, isDemo]);

  return (
    <MauticAreaStyled>
      <MauticImgStyled alt="" src={thankYou} />
      <h2>{headerText}</h2>

      <p>{contentText}</p>
      <p>
        <b>{t('mauticThxPageContent3')}</b>
      </p>
      <MauticThxPageActionsStyled>
        {!isCancellation && (
          <Button
            color="primary"
            label={t('ctaOk')}
            onClick={onClick}
            shape="full"
            size="lg"
          />
        )}
      </MauticThxPageActionsStyled>
    </MauticAreaStyled>
  );
};

export default memo(ThankYouPage);

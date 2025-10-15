import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { ORDERS_URL_NAME } from 'commons/share_app/containers/Orders/constants';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';
import { scrollPage } from 'commons/utils/scroll';

import thankYou from '../images/thankYou.png';
import {
  MauticAreaStyled,
  MauticImgStyled,
  MauticThxPageActionsStyled,
} from '../styles';

const GoToOrdersPage: FC = () => {
  const t = useTranslations();

  useEffect(() => {
    scrollPage();
  }, []);

  const onClick = useCallback(() => {
    const redirectUrl = `/${ORDERS_URL_NAME}`;
    historyPush(redirectUrl);
  }, []);

  return (
    <MauticAreaStyled>
      <MauticImgStyled alt="" src={thankYou} />
      <h2>{t('mauticOrdersThxPageHeader')}</h2>
      <p>{t('mauticThxPageContent2')}</p>
      <p>
        <b>{t('mauticThxPageContent3')}</b>
      </p>
      <MauticThxPageActionsStyled>
        <Button
          color="primary"
          label={t('mauticOrdersThxPageCta')}
          onClick={onClick}
          shape="full"
          size="lg"
        />
      </MauticThxPageActionsStyled>
    </MauticAreaStyled>
  );
};

export default memo(GoToOrdersPage);

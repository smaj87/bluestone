import useTranslations from 'commons/hooks/useTranslations';
import { MAUTIC_URL_NAME } from 'commons/share_app/containers/Communities/Mautic/constants';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { SchemaBadge, SchemaSnippetCtaStyled } from './styles';

const SchemaEnableOrders: FC = () => {
  const t = useTranslations();

  const enableOrders = useCallback((e) => {
    e.stopPropagation();

    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'mail_list_go_to_offers_demo_page',
      }),
    );

    historyPush(`/${MAUTIC_URL_NAME}`);
  }, []);

  return (
    <SchemaBadge
      color="primary"
      icon="shopping"
      label={t('Schema/Orders/newView')}
      size="sm"
    >
      <SchemaSnippetCtaStyled
        onClick={enableOrders}
        role="button"
        title={t('ctaCheck')}
      >
        {t('ctaCheck')}
      </SchemaSnippetCtaStyled>
    </SchemaBadge>
  );
};

export default memo(SchemaEnableOrders);

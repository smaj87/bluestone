import { setInterfaceEffects } from 'commons/hooks/useInterfaceEffects/actions';
import { normalizedInterfaceEffects } from 'commons/hooks/useInterfaceEffects/utils';
import useTranslations from 'commons/hooks/useTranslations';
import {
  SUBTYPE,
  TYPE,
} from 'commons/share_app/components/Modals/UserConfigAgreementsModal/constants';
import PlaceholderTile from 'commons/share_app/components/PlaceholderTile';
import {
  PlaceholderButton,
  PlaceholderStyled,
} from 'commons/share_app/components/PlaceholderTile/styles';
import { PAGE_NAME as CASHBACKS_PAGE_NAME } from 'commons/share_app/containers/Orders/constants';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

const OrdersPlaceholder: FC = () => {
  const t = useTranslations();
  const pageName = CASHBACKS_PAGE_NAME.toLocaleLowerCase();

  const enableOrders = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'smart_functions',
        event_action: 'modal_seen',
      }),
    );

    dataLayerPush({
      event: 'showSmartFunctionsModal',
      view: pageName,
    });

    dispatch(
      setInterfaceEffects(
        normalizedInterfaceEffects([
          {
            type: TYPE,
            params: {
              subtype: SUBTYPE,
              closeButton: true,
              currentPage: pageName,
            },
          },
        ]),
      ),
    );
  }, []);

  return (
    <PlaceholderStyled>
      <PlaceholderTile size="lg" />
      <PlaceholderButton
        color="primary"
        label={t('ordersEnable')}
        onClick={enableOrders}
        size="lg"
      />
    </PlaceholderStyled>
  );
};

export default memo(OrdersPlaceholder);

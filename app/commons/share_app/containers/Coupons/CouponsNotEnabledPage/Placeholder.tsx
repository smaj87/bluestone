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
import { PAGE_NAME as COUPONS_PAGE_NAME } from 'commons/share_app/containers/Coupons/constants';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

const Placeholder: FC = () => {
  const t = useTranslations();

  const enableCoupons = useCallback(() => {
    const pageName = COUPONS_PAGE_NAME.toLocaleLowerCase();

    dispatch(
      eventsApiSendAction({
        event_category: 'smart_functions',
        event_action: 'modal_seen',
      }),
    );

    dataLayerPush({
      event: 'GA4_smart_functions_modal_seen',
      mp_params: [
        {
          view: 'modal_seen',
        },
      ],
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
        label={t('couponsEnable')}
        onClick={enableCoupons}
        size="lg"
      />
    </PlaceholderStyled>
  );
};

Placeholder.displayName = 'Placeholder';

export default memo(Placeholder);

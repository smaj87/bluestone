import useTranslations from 'commons/hooks/useTranslations';
import { SingleOrderRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import MauticForm from 'commons/share_app/containers/Communities/Mautic/MauticForm';
import {
  MAUTIC_ORDERS_SINGLE_FEEDBACK_BAD_FORM_ID,
  MAUTIC_ORDERS_SINGLE_FEEDBACK_GOOD_FORM_ID,
} from 'commons/share_app/containers/Communities/Mautic/MauticForm/constants';
import { MauticSurveyStyled } from 'commons/share_app/containers/Communities/Mautic/styles';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import {
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { AskUserButton, AskUserButtonsStyled, AskUserStyled } from './styles';

interface Props {
  carrier?: string;
  merchant?: string;
  orderId?: number;
  trackingNumber?: string;
  orderNumber?: string;
}

const AskUser: FC<Props> = ({
  carrier,
  merchant,
  orderId,
  orderNumber,
  trackingNumber,
}) => {
  const t = useTranslations();
  const isShow = useContext(SingleOrderRouterIsShowContext);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>();
  const [mauticFormId, setMauticFormId] = useState<number | undefined>(
    undefined,
  );
  const [isButtonsSectionVisible, setIsButtonsSectionVisible] =
    useState<boolean>(true);

  useEffect(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'orders_details_data_viewed',
          carrier_name: carrier,
          merchant_name: merchant,
          order_number: orderNumber,
        },
      }),
    );
  }, []);

  const setOrderCorrect = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'orders_details_data_correct_confirm',
          carrier_name: carrier,
          merchant_name: merchant,
          order_number: orderNumber,
        },
      }),
    );

    dataLayerPush({
      event: 'orders_details_data_correct_confirm',
    });
    setIsCorrect(true);
    setMauticFormId(MAUTIC_ORDERS_SINGLE_FEEDBACK_GOOD_FORM_ID);
  }, []);

  const setOrderDeny = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'orders_details_data_correct_deny',
          carrier_name: carrier,
          merchant_name: merchant,
          order_number: orderNumber,
        },
      }),
    );

    dataLayerPush({
      event: 'orders_details_data_correct_deny',
    });

    setIsCorrect(false);
    setMauticFormId(MAUTIC_ORDERS_SINGLE_FEEDBACK_BAD_FORM_ID);
  }, []);

  const handleFormSubmit = useCallback(() => {
    setIsButtonsSectionVisible(false);
  }, []);

  if (!isShow) {
    return null;
  }

  return (
    <AskUserStyled>
      {isButtonsSectionVisible ? (
        <AskUserButtonsStyled>
          <p>
            <b>{t('isDataCorrect')}</b>
          </p>
          <AskUserButton
            $isActive={isCorrect === true}
            color="secondary"
            icon={isCorrect === true ? 'thumbUpFill' : 'thumbUp'}
            label={t('ctaYes')}
            onClick={setOrderCorrect}
            size="md"
          />

          <AskUserButton
            $isActive={isCorrect === false}
            color="secondary"
            icon={isCorrect === false ? 'thumbDownFill' : 'thumbDown'}
            label={t('ctaNo')}
            onClick={setOrderDeny}
            size="md"
          />
        </AskUserButtonsStyled>
      ) : null}
      {mauticFormId ? (
        <MauticSurveyStyled>
          <MauticForm
            formId={mauticFormId}
            hiddenValues={{
              carrier,
              merchant,
              orderid: orderId,
              trackingnumber: trackingNumber,
              ordernumber: orderNumber,
            }}
            onSubmit={handleFormSubmit}
          />
        </MauticSurveyStyled>
      ) : null}
    </AskUserStyled>
  );
};

export default memo(AskUser);

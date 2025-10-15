import Button from 'commons/Button';
import {
  saveAgreements,
  setIsFetching,
} from 'commons/hooks/useAgreements/actions';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { isFetching as isFetchingSelector } from 'commons/hooks/useAgreements/selectors';
import { removeInterfaceEffect } from 'commons/hooks/useInterfaceEffects/actions';
import { getInterfaceEffectId } from 'commons/hooks/useInterfaceEffects/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getCurrentPage } from 'containers/App/selectors';

import { switchOnAgreement } from '../actions';
import { SUBTYPE, TYPE } from '../constants';

const selectorParams = { type: TYPE, subtype: SUBTYPE };

const ConfirmAllButton: FC = () => {
  const t = useTranslations();
  const id = useSelector(getInterfaceEffectId, selectorParams);
  const isFetching = useSelector(isFetchingSelector);
  const currentPage = useSelector(getCurrentPage);

  const handleConfirmAll = useCallback(() => {
    dispatch(switchOnAgreement('smartFunctions'));
    dispatch(switchOnAgreement('marketing'));

    dispatch(
      eventsApiSendAction({
        event_category: 'smart_functions',
        event_action: 'consent_action',
        event_details: {
          action: 'confirm_all',
          consent_in: id ? undefined : currentPage,
        },
      }),
    );

    dataLayerPush({
      event: 'action_smart_functions_consent',
      mp_params: [
        {
          id,
          lang: 'pl',
          action: 'confirm_all',
          smartFunctionsConsent: true,
          marketingConsent: true,
          consentIn: id ? undefined : currentPage,
        },
      ],
    });

    Promise.all([
      dispatch(setIsFetching(true)),
      dispatch(
        saveAgreements({
          [SMART_FUNCTIONS_ID]: true,
        }),
      ),
      dispatch(removeInterfaceEffect(TYPE, id)),
    ])
      .then(() => {
        dispatch(setIsFetching(false));
        // window.location.reload();
      })
      .catch(() => {
        dispatch(setIsFetching(false));
      });
  }, [currentPage, id]);

  return (
    <Button
      color="primary"
      isDisabled={isFetching}
      isFetching={isFetching}
      label={t('userConfigAgreementsModalCtaActivateAllAndExit')}
      onClick={handleConfirmAll}
      size="lg"
    />
  );
};

export default memo(ConfirmAllButton);

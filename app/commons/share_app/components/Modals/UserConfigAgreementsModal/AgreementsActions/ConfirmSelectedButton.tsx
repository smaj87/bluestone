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

import { SUBTYPE, TYPE } from '../constants';
import { getSmartFunctionsStatus } from '../selectors';

const selectorParams = { type: TYPE, subtype: SUBTYPE };

const ConfirmSelectedButton: FC = () => {
  const t = useTranslations();
  const id = useSelector(getInterfaceEffectId, selectorParams);
  const smartFunctionsStatus = useSelector(getSmartFunctionsStatus);
  const isFetchingAgreement = useSelector(isFetchingSelector);
  const currentPage = useSelector(getCurrentPage);

  const isBtnDisabled = smartFunctionsStatus === 0;

  const handleConfirmSelected = useCallback(() => {
    const isSmartFunctionsActive = smartFunctionsStatus > 0;

    dispatch(
      eventsApiSendAction({
        event_category: 'smart_functions',
        event_action: 'consent_action',
        event_details: {
          action: 'set_edit',
          sf_consent: isSmartFunctionsActive,
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
          action: 'set_edit',
          smartFunctionsConsent: isSmartFunctionsActive,
          consentIn: id ? undefined : currentPage,
        },
      ],
    });

    Promise.all([
      dispatch(setIsFetching(true)),
      dispatch(
        saveAgreements({
          [SMART_FUNCTIONS_ID]: isSmartFunctionsActive,
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
  }, [smartFunctionsStatus, id, currentPage]);

  return (
    <Button
      color="primary"
      isDisabled={isBtnDisabled || isFetchingAgreement}
      isFetching={isFetchingAgreement}
      label={t('ctaConfirmSelected')}
      onClick={handleConfirmSelected}
      size="lg"
    />
  );
};

export default memo(ConfirmSelectedButton);

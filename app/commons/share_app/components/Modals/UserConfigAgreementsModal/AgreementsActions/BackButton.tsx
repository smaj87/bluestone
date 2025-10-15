import { getInterfaceEffectId } from 'commons/hooks/useInterfaceEffects/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { ButtonBack } from 'commons/Modal/styles';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getCurrentPage } from 'containers/App/selectors';

import { setIsEdit } from '../actions';
import { SUBTYPE, TYPE } from '../constants';

const selectorParams = { type: TYPE, subtype: SUBTYPE };

const BackButton: FC = () => {
  const t = useTranslations();
  const id = useSelector(getInterfaceEffectId, selectorParams);
  const currentPage = useSelector(getCurrentPage);

  const handleBack = useCallback(() => {
    dispatch(setIsEdit(false));

    dispatch(
      eventsApiSendAction({
        event_category: 'smart_functions',
        event_action: 'consent_action',
        event_details: {
          action: 'back',
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
          action: 'back',
          consentIn: id ? undefined : currentPage,
        },
      ],
    });
  }, [id, currentPage]);

  return (
    <ButtonBack
      color="defaultNeutral"
      icon="chevronLeft"
      label={t('ctaBackModal')}
      onClick={handleBack}
      size="lg"
    />
  );
};

export default memo(BackButton);

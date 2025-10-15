import Button from 'commons/Button';
import { getInterfaceEffectId } from 'commons/hooks/useInterfaceEffects/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { scrollToElementById } from 'commons/share_app/utils/scroll';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getCurrentPage } from 'containers/App/selectors';

import { setIsEdit } from '../actions';
import { MOVE_CONTENT, SUBTYPE, TYPE } from '../constants';

const selectorParams = { type: TYPE, subtype: SUBTYPE };

const AdjustButton: FC = () => {
  const t = useTranslations();
  const id = useSelector(getInterfaceEffectId, selectorParams);
  const currentPage = useSelector(getCurrentPage);

  const scrollToTop = useCallback(() => {
    const timer = setTimeout(() => {
      scrollToElementById(MOVE_CONTENT);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAdjust = useCallback(() => {
    dispatch(setIsEdit(true));

    dispatch(
      eventsApiSendAction({
        event_category: 'smart_functions',
        event_action: 'consent_action',
        event_details: {
          action: 'edit',
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
          action: 'edit',
          consentIn: id ? undefined : currentPage,
        },
      ],
    });

    scrollToTop();
  }, [id, currentPage]);

  return (
    <Button
      color="defaultNeutral"
      label={t('ctaAdjust')}
      onClick={handleAdjust}
      size="lg"
    />
  );
};

export default memo(AdjustButton);

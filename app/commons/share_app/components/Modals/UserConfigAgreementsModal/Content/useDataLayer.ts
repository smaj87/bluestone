import { getInterfaceEffectId } from 'commons/hooks/useInterfaceEffects/selectors';
import { getKid } from 'commons/hooks/useUserConfig/selectors';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getCurrentPage } from 'containers/App/selectors';

import { SUBTYPE, TYPE } from '../constants';

const selectorParams = { type: TYPE, subtype: SUBTYPE };

const useDataLayer = () => {
  const id = useSelector(getInterfaceEffectId, selectorParams);
  const kid = useSelector(getKid);
  const currentPage = useSelector(getCurrentPage);

  useEffect(() => {
    dataLayerPush({
      event: 'views_smart_functions_consent',
      mp_params: [
        {
          id,
          kid,
          lang: 'pl',
          consentIn: id ? undefined : currentPage,
        },
      ],
    });

    dispatch(
      eventsApiSendAction({
        event_category: 'smart_functions',
        event_action: 'views_smart_functions_consent',
        event_details: {
          id,
          kid,
          lang: 'pl',
          consentIn: id ? undefined : currentPage,
        },
      }),
    );
  }, [currentPage]);
};

export default useDataLayer;

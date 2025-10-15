import { MauticRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import { getMauticUrlProps } from 'containers/App/selectors';

import BusinessSurvey from './BusinessSurvey';
import CancellationPage from './CancellationPage';
import {
  MAUTIC_BUSINESS_SURVEY_SLUG,
  MAUTIC_CANCELLATION_SURVEY_SLUG,
  MAUTIC_CANCELLATION_THANK_YOU_SLUG,
  MAUTIC_CUSTOM_SURVEY_SLUG,
  MAUTIC_CUSTOM_THANK_YOU_SLUG,
  MAUTIC_DEMO_THANK_YOU_SLUG,
  MAUTIC_ORDERS_THANK_YOU_SLUG,
} from './constants';
import CustomSurvey from './CustomSurvey';
import RegistrationPage from './RegistrationPage';
import ThankYouPage from './ThankYouPage';
import GoToOrdersPage from './ThankYouPage/GoToOrders';
import { deprecated_getNewUrlIfNecessary } from './utils';

const MauticContent: FC = () => {
  const isShow = useContext(MauticRouterIsShowContext);
  const params = useSelector(getMauticUrlProps);
  const newUrl = deprecated_getNewUrlIfNecessary();

  useEffect(() => {
    if (newUrl) {
      historyPush(newUrl);
    }
  }, [newUrl]);

  if (isShow && !newUrl) {
    if (params.subpage === MAUTIC_DEMO_THANK_YOU_SLUG) {
      return <ThankYouPage isDemo />;
    }

    if (params.subpage === MAUTIC_CANCELLATION_THANK_YOU_SLUG) {
      return <ThankYouPage isCancellation />;
    }

    if (params.subpage === MAUTIC_CUSTOM_THANK_YOU_SLUG) {
      return <ThankYouPage />;
    }

    if (params.subpage === MAUTIC_CUSTOM_SURVEY_SLUG) {
      return <CustomSurvey id={params.id} />;
    }

    if (params.subpage === MAUTIC_BUSINESS_SURVEY_SLUG) {
      return <BusinessSurvey id={params.id} />;
    }

    if (params.subpage === MAUTIC_CANCELLATION_SURVEY_SLUG) {
      return <CancellationPage />;
    }

    if (params.subpage === MAUTIC_ORDERS_THANK_YOU_SLUG) {
      return <GoToOrdersPage />;
    }

    return <RegistrationPage />;
  }

  return null;
};

export default memo(MauticContent);

import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementSelector,
  isFetched as isFetchedAgreementSelector,
} from 'commons/hooks/useAgreements/selectors';
import { isFetchingError as isFetchingAgreementErrorSelector } from 'commons/hooks/useUserConfig/selectors';
import { OrdersRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import OrdersContent from '../OrdersContent';
import OrdersError from '../OrdersError';
import OrdersLoader from '../OrdersLoader';
import OrdersNotEnabled from '../OrdersNotEnabled';

const agreementProps = { agreementId: SMART_FUNCTIONS_ID };

const OrdersPage: FC = () => {
  const isShow = useContext(OrdersRouterIsShowContext);

  const isAgreement = useSelector(isAgreementSelector, agreementProps);
  const isFetchedAgreement = useSelector(isFetchedAgreementSelector);
  const isFetchingAgreementError = useSelector(
    isFetchingAgreementErrorSelector,
  );

  if (!isShow) {
    return null;
  }

  if (!isFetchedAgreement && !isFetchingAgreementError) {
    return <OrdersLoader />;
  }

  if (isFetchingAgreementError) {
    return <OrdersError />;
  }

  if (!isAgreement) {
    return <OrdersNotEnabled />;
  }

  return <OrdersContent />;
};

export default memo(OrdersPage);

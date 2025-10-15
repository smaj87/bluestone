import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementsSelector,
  isFetched as isFetchedAgreementsSelector,
} from 'commons/hooks/useAgreements/selectors';
import { fetchSingleOrder } from 'commons/share_app/containers/Orders/actions';
import { getSingleOrder } from 'commons/share_app/containers/Orders/selectors';
import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getSingleOrderUrlProps } from 'containers/App/selectors';

const agreementProps = { agreementId: SMART_FUNCTIONS_ID };

const useFetchSingleOrder = (isShow: boolean) => {
  const singleOrder = useSelector(getSingleOrder);
  const isAgreements = useSelector(isAgreementsSelector, agreementProps);
  const isFetchedAgreements = useSelector(isFetchedAgreementsSelector);
  const orderId = useSelector(getSingleOrderUrlProps, 'id');

  useEffect(() => {
    if (
      orderId &&
      !singleOrder &&
      isShow &&
      isAgreements &&
      isFetchedAgreements
    ) {
      dispatch(fetchSingleOrder(orderId));
    }
  }, [orderId, singleOrder, isShow, isAgreements, isFetchedAgreements]);

  return null;
};

export default useFetchSingleOrder;

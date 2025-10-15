import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementSelector,
  isFetched as isFetchedAgreementsSelector,
} from 'commons/hooks/useAgreements/selectors';
import { fetchCoupons } from 'commons/share_app/containers/Coupons/actions';
import {
  isFetched,
  isFetching,
} from 'commons/share_app/containers/Coupons/selectors';
import { useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const agreementProps = { agreementId: SMART_FUNCTIONS_ID };

const useCouponsAndCashbacks = () => {
  const isFetchingCoupons = useSelector(isFetching);
  const isFetchedCoupons = useSelector(isFetched);
  const isAgreement = useSelector(isAgreementSelector, agreementProps);
  const isFetchedAgreements = useSelector(isFetchedAgreementsSelector);

  useEffect(() => {
    if (
      !isFetchedCoupons &&
      !isFetchingCoupons &&
      isAgreement &&
      isFetchedAgreements
    ) {
      dispatch(fetchCoupons());
    }
  }, [isFetchedCoupons, isAgreement, isFetchedAgreements]);

  return null;
};

export default useCouponsAndCashbacks;

import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementSelector,
  isFetched as isFetchedAgreementSelector,
} from 'commons/hooks/useAgreements/selectors';
import { isFetchingError as isFetchingAgreementErrorSelector } from 'commons/hooks/useUserConfig/selectors';
import { CashbacksRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import CashbacksContent from '../CashbacksContent';
import CashbacksError from '../CashbacksError';
import CashbacksLoader from '../CashbacksLoader';
import CashbacksNotEnabled from '../CashbacksNotEnabled';

const agreementProps = { agreementId: SMART_FUNCTIONS_ID };

const CashbacksPage: FC = () => {
  const isShow = useContext(CashbacksRouterIsShowContext);
  const isAgreement = useSelector(isAgreementSelector, agreementProps);
  const isFetchedAgreement = useSelector(isFetchedAgreementSelector);
  const isFetchingAgreementError = useSelector(
    isFetchingAgreementErrorSelector,
  );

  if (!isShow) {
    return null;
  }

  if (!isFetchedAgreement && !isFetchingAgreementError) {
    return <CashbacksLoader />;
  }

  if (isFetchingAgreementError) {
    return <CashbacksError />;
  }

  if (!isAgreement) {
    return <CashbacksNotEnabled />;
  }

  return <CashbacksContent />;
};

export default memo(CashbacksPage);

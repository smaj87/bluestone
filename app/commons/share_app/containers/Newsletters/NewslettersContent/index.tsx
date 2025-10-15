import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementSelector,
  isFetched as isFetchedSelector,
} from 'commons/hooks/useAgreements/selectors';
import { isFetchingError as isFetchingErrorSelector } from 'commons/hooks/useUserConfig/selectors';
import { NewslettersRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import NewslettersError from '../NewslettersError';
import NewslettersList from '../NewslettersList';
import NewslettersLoader from '../NewslettersLoader';
import NewslettersNotEnabled from '../NewslettersNotEnabled';

const agreementProps = { agreementId: SMART_FUNCTIONS_ID };

const NewslettersContent: FC = () => {
  const isShow = useContext(NewslettersRouterIsShowContext);
  const isAgreement = useSelector(isAgreementSelector, agreementProps);
  const isFetched = useSelector(isFetchedSelector);
  const isFetchingError = useSelector(isFetchingErrorSelector);

  if (!isShow) {
    return null;
  }

  if (!isFetched && !isFetchingError) {
    return <NewslettersLoader />;
  }

  if (isFetchingError) {
    return <NewslettersError />;
  }

  return isAgreement ? <NewslettersList /> : <NewslettersNotEnabled />;
};

export default memo(NewslettersContent);

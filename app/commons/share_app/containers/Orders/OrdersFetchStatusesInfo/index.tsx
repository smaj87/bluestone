import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  isFetchingLatestStatuses,
  isFetchingLatestStatusesError,
} from '../selectors';
import { StatusesInfoIconStyled, StatusesInfoStyled } from './styles';

const OrdersFetchStatusesInfo: FC = () => {
  const t = useTranslations();
  const isFetching = useSelector(isFetchingLatestStatuses);
  const isFetchingError = useSelector(isFetchingLatestStatusesError);

  if (isFetching) {
    return (
      <StatusesInfoStyled>
        <LoaderBouncingDots color="secondary" position="relative" size="sm" />
        {t('ordersFetchingStatuses')}
      </StatusesInfoStyled>
    );
  }

  if (isFetchingError) {
    return (
      <StatusesInfoStyled isError>
        <StatusesInfoIconStyled $image="error" />
        {t('ordersFetchingStatusesError')}
      </StatusesInfoStyled>
    );
  }

  return null;
};

export default memo(OrdersFetchStatusesInfo);

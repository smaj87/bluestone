import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { STATUSES } from '../constants';
import { Order } from '../types';
import {
  OrdersStatusTitleStyled,
  StatusInfoIconStyled,
  StatusInfoStyled,
  StatusInfoTextStyled,
  StatusInfoWrapperStyled,
} from './styles';

interface Props {
  status?: Order['status'];
}

const StatusInfo: FC<Props> = ({ status }) => {
  const t = useTranslations();
  const statusLabel = status
    ? t('getOrderTabStatus', { orderStatus: status })
    : '';

  return status ? (
    <StatusInfoStyled>
      <StatusInfoWrapperStyled $bgColor={STATUSES[status]?.color}>
        <StatusInfoIconStyled $image={STATUSES[status]?.icon} />
        <StatusInfoTextStyled>
          <OrdersStatusTitleStyled>{statusLabel}</OrdersStatusTitleStyled>
        </StatusInfoTextStyled>
      </StatusInfoWrapperStyled>
    </StatusInfoStyled>
  ) : null;
};

export default memo(StatusInfo);

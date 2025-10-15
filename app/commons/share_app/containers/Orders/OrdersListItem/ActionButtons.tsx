import StatusSwitchButton from 'commons/share_app/containers/Orders/OrdersListItem/StatusSwitchButton';
import { FC, memo } from 'commons/utils/react';

import { OrdersContentActionBoxStyled } from '../OrdersItem/styles';
import { Order } from '../types';
import GoToDetailButton from './GoToDetailButton';

interface Props {
  id: Order['id'];
  isMarkedAsDeliveredBtnVisible?: boolean;
  isParcelDelivery: boolean;
}

const ActionButtons: FC<Props> = ({
  id,
  isMarkedAsDeliveredBtnVisible,
  isParcelDelivery,
}) => (
  <OrdersContentActionBoxStyled>
    <GoToDetailButton id={id} isParcelDelivery={isParcelDelivery} />
    {isMarkedAsDeliveredBtnVisible && <StatusSwitchButton id={id} />}
  </OrdersContentActionBoxStyled>
);

export default memo(ActionButtons);

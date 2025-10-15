import { Coupon } from 'commons/share_app/containers/Coupons/types';
import { FC, memo } from 'commons/utils/react';

interface Props {
  name: Coupon['from']['name'];
  email: Coupon['from']['email'];
}

const Sender: FC<Props> = ({ email, name }) => <h3>{name || email}</h3>;

Sender.displayName = 'Sender';

export default memo(Sender);

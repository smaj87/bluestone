import { FC, memo } from 'commons/utils/react';

import { Coupon } from '../types';
import { CouponSenderStyled } from './styles';

interface Props {
  name: Coupon['from']['name'];
  email: Coupon['from']['email'];
}

const Sender: FC<Props> = ({ email, name }) => (
  <CouponSenderStyled>{name || email}</CouponSenderStyled>
);

Sender.displayName = 'Sender';

export default memo(Sender);

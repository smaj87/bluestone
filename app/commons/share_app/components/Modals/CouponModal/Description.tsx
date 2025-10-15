import { Coupon } from 'commons/share_app/containers/Coupons/types';
import { FC, memo } from 'commons/utils/react';

import { DescriptionStyled } from './styles';

interface Props {
  description: Coupon['description'];
}

const Description: FC<Props> = ({ description }) => (
  <DescriptionStyled>{description}</DescriptionStyled>
);

Description.displayName = 'Description';

export default memo(Description);

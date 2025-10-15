import BannerMobile from 'commons/share_app/components/Banner/BannerMobile';
import { FC, memo } from 'commons/utils/react';

import Content from './Content';

interface Props {
  isDefaultCoupons?: boolean;
}

export const Mobile: FC<Props> = ({ isDefaultCoupons }) => (
  <BannerMobile>
    <Content isDefaultCoupons={isDefaultCoupons} />
  </BannerMobile>
);

export default memo(Mobile);

import { FC, memo } from 'commons/utils/react';

import Content from './Content';

interface Props {
  isDefaultCoupons?: boolean;
  isGoodieAgreement?: boolean;
}

export const Desktop: FC<Props> = ({ isDefaultCoupons, isGoodieAgreement }) => (
  <Content
    isDefaultCoupons={isDefaultCoupons}
    isGoodieAgreement={isGoodieAgreement}
  />
);

export default memo(Desktop);

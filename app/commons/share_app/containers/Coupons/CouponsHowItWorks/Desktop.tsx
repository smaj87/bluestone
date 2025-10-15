import { FC, memo } from 'commons/utils/react';

import Content from './Content';

interface Props {
  isDefaultCoupons?: boolean;
}

export const Desktop: FC<Props> = ({ isDefaultCoupons }) => (
  <Content isDefaultCoupons={isDefaultCoupons} />
);

export default memo(Desktop);

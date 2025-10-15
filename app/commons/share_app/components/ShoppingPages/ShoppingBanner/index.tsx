import { FC, memo, ReactNode } from 'commons/utils/react';

import { ShoppingBannerStyled } from './styles';

export interface ShoppingBannerProps {
  children?: ReactNode;
}

const ShoppingBanner: FC<ShoppingBannerProps> = ({ children }) => (
  <ShoppingBannerStyled>{children}</ShoppingBannerStyled>
);

export default memo(ShoppingBanner);

import { FC, memo, ReactNode } from 'commons/utils/react';

import { BANNER_CLASS } from './constants';
import { BannerStyled } from './styles';

export interface BannerDesktopProps {
  children?: ReactNode;
}

const BannerDesktop: FC<BannerDesktopProps> = ({ children }) => (
  <BannerStyled className={BANNER_CLASS}>{children}</BannerStyled>
);

export default memo(BannerDesktop);

import { Backdrop } from 'commons/Backdrop';
import {
  BANNER_CLASS,
  MOUNT_NODE,
} from 'commons/share_app/components/Banner/constants';
import { createPortal, FC, memo, ReactNode } from 'commons/utils/react';

import { BannerMobileStyled } from './styles';

export interface BannerMobileProps {
  children?: ReactNode;
}

const BannerMobile: FC<BannerMobileProps> = ({ children }) =>
  createPortal(
    <>
      <BannerMobileStyled className={BANNER_CLASS}>
        {children}
      </BannerMobileStyled>
      <Backdrop />
    </>,
    MOUNT_NODE,
  );

export default memo(BannerMobile);

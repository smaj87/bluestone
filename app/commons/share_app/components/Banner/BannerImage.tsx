import { FC, memo } from 'commons/utils/react';

import { BannerImageStyled } from './styles';

export interface BannerImageProps {
  image?: string;
}

const BannerImage: FC<BannerImageProps> = ({ image }) => (
  <BannerImageStyled>
    <img alt="" src={image} />
  </BannerImageStyled>
);

export default memo(BannerImage);

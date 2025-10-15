import { FC, memo } from 'commons/utils/react';

import { BannerStyled } from './styles';
import { Banner as BannerType } from './types';

const Banner: FC<BannerType> = ({ image, url }) =>
  url && image ? (
    <BannerStyled data-cypress="INBOX-DETAIL-BANNER">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a href={url} target="_blank">
        <img alt="" src={image} />
      </a>
    </BannerStyled>
  ) : null;

export default memo(Banner);

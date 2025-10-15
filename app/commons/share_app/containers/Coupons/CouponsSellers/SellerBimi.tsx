import Bimi from 'commons/Bimi';
import { BIMI_PLACEMENTS } from 'commons/Bimi/constants';
import { Seller } from 'commons/share_app/containers/Coupons/types';
import { getAvatarUrl } from 'commons/share_app/utils/avatar';
import { getInitials } from 'commons/share_app/utils/initials';
import { FC, memo } from 'commons/utils/react';

interface Props {
  seller: Seller;
}

const SellerBimi: FC<Props> = ({ seller }) => {
  const bimiImage = getAvatarUrl(
    seller.email || seller.name,
    '',
    seller.isBimi,
  );
  const bimiInitials = getInitials(seller.name || seller.email);

  return (
    <Bimi
      alt=""
      image={bimiImage}
      initials={bimiInitials}
      placement={BIMI_PLACEMENTS.SELLER_USER}
    />
  );
};

export default memo(SellerBimi);

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

  // jedynie w defaultowych kuponach Seller ma pole image, bo image to jest logo firmy tego kuponu, a jak nie ma to uzywamy wtedy bimi z backendu
  return (
    <Bimi
      alt=""
      image={seller.image || bimiImage}
      initials={bimiInitials}
      placement={BIMI_PLACEMENTS.SELLER_DEFAULT}
    />
  );
};

export default memo(SellerBimi);

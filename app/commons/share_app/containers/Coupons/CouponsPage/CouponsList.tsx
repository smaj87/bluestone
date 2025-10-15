import { getCouponId } from 'commons/share_app/containers/Coupons/utils';
import { FC, memo } from 'commons/utils/react';

import CouponItem from '../CouponItem';
import { Coupon } from '../types';
import { CouponListStyled } from './styles';

interface Props {
  coupons: Coupon[];
}

const CouponsList: FC<Props> = ({ coupons }) =>
  coupons.length > 0 ? (
    <CouponListStyled>
      {coupons.map((c) => (
        <CouponItem
          key={c.id}
          availabilityEnds={c.availabilityEnds}
          copyTracker={c.copyTracker}
          couponId={getCouponId(c)}
          defaultExpirationDate={c.defaultExpirationDate}
          description={c.description || c.headline || c.subjectLine}
          discountCode={c.discountCode}
          discountValue={c.discountValue}
          email={c.from.email}
          image={c.image}
          isAdServerCoupon={c.isAdServerCoupon}
          isDefault={c.isDefault}
          isHidden={c.isHidden}
          isNew={c.isNew}
          isPromoCard={c.isPromoCard}
          mid={c.idMessage}
          name={c.from.name}
          omnibusPrice={c.omnibusPrice}
          openTracker={c.openTracker}
          price={c.price}
          priceCurrency={c.priceCurrency}
          schemaType={c.schemaType}
          source={c.source}
          url={c.url}
        />
      ))}
    </CouponListStyled>
  ) : null;

export default memo(CouponsList);

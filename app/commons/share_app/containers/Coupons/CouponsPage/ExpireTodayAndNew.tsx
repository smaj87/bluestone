import useTranslations from 'commons/hooks/useTranslations';
import { getCouponId } from 'commons/share_app/containers/Coupons/utils';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import CouponItem from '../CouponItem';
import { getExpireTodayAndNewCouponsWithShowMore } from '../selectors';
import ShowLessButton from './ShowLessButton';
import ShowMoreButton from './ShowMoreButton';
import {
  CouponListScrollStyled,
  ExpireTodayStyled,
  MobileScrollStyled,
  TitleBarStyled,
} from './styles';

const ExpireTodayAndNew: FC = () => {
  const t = useTranslations();
  const coupons = useSelector(getExpireTodayAndNewCouponsWithShowMore);

  const itemVolume = coupons.length;

  return coupons.length > 0 ? (
    <ExpireTodayStyled>
      <TitleBarStyled>
        <h3>{t('couponsExpiredTodayAndNew')} 🔥</h3>
        <ShowMoreButton />
        <ShowLessButton />
      </TitleBarStyled>
      <MobileScrollStyled>
        <CouponListScrollStyled $itemVolume={itemVolume}>
          {coupons.map((c) => (
            <CouponItem
              key={c.id}
              availabilityEnds={c.availabilityEnds}
              copyTracker={c.copyTracker}
              couponId={getCouponId(c)}
              defaultExpirationDate={c.defaultExpirationDate}
              description={c.description || c.headline}
              discountCode={c.discountCode}
              email={c.from.email}
              image={c.image}
              isAdServerCoupon={c.isAdServerCoupon}
              isDefault={c.isDefault}
              isNew={c.isNew}
              isPromoCard={c.isPromoCard}
              isScrollable
              mid={c.idMessage}
              name={c.from.name}
              openTracker={c.openTracker}
              source={c.source}
              url={c.url}
            />
          ))}
        </CouponListScrollStyled>
      </MobileScrollStyled>
    </ExpireTodayStyled>
  ) : null;
};

export default memo(ExpireTodayAndNew);

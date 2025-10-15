import useTranslations from 'commons/hooks/useTranslations';
import ExpireInfo from 'commons/share_app/containers/Coupons/CouponItem/ExpireInfo';
import {
  CouponContentStyled,
  CouponRowContentStyled,
  CouponRowStyled,
} from 'commons/share_app/containers/Coupons/CouponItem/styles';
import { PromoCard } from 'commons/share_app/containers/Coupons/types';
import { getCouponId } from 'commons/share_app/containers/Coupons/utils';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { COUPON_ITEM_CLASS } from '../CouponsInDetail/constants';
import CouponImageWithLabel from '../CouponsInDetail/CouponImageWithLabel';
import {
  CouponBadgeStyled,
  CouponWrapperStyled,
} from '../CouponsInDetail/styles';
import { ShoppingPagesButtonTileStyled } from '../ShoppingPages/ShoppingTile/styles';
import PromoCardHeadline from './PromoCardHeadline';
import PromoCardPrice from './PromoCardPrice';

interface Props {
  promoCard: PromoCard;
  $isShow?: boolean;
}

const PromoCardItem: FC<Props> = ({ $isShow, promoCard }) => {
  const t = useTranslations();
  const mid = useSelector(getMailField, 'mid') as number;

  useEffect(() => {
    const couponId = getCouponId(promoCard);

    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'coupon_viewed',
        event_details: {
          coupon_id: couponId,
          has_link: !!promoCard.url,
          has_code: !!promoCard.code,
          coupon_type: promoCard.source,
          schema_type: 'promo_card',
          isDefault: !!promoCard.isDefault,
        },
        mid,
      }),
    );
  }, [mid, promoCard]);

  const handleClickLink = useCallback(() => {
    const couponId = getCouponId(promoCard);

    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'clicked_coupon',
        event_details: {
          coupon_id: couponId,
          has_link: !!promoCard.url,
          has_code: false,
          coupon_type: promoCard.source,
          schema_type: 'promo_card',
          isDefault: !!promoCard.isDefault,
        },
        mid,
      }),
    );

    window.open(promoCard.url, '_blank', 'noopener,noreferrer');
  }, [promoCard.url]);

  return (
    <CouponWrapperStyled $isShow={$isShow} className={COUPON_ITEM_CLASS}>
      <ShoppingPagesButtonTileStyled onClick={handleClickLink}>
        <CouponImageWithLabel
          image={promoCard.image}
          itemName={t('recommend')}
        />
        <CouponContentStyled>
          <PromoCardHeadline
            headline={promoCard.headline}
            isAdServerCoupon={promoCard.isAdServerCoupon}
            omnibusPrice={promoCard.omnibusPrice}
            sender={promoCard?.from}
          />
          {promoCard.discountValue ? (
            <PromoCardPrice
              discountValue={promoCard.discountValue}
              omnibusPrice={promoCard.omnibusPrice}
              price={promoCard.price}
              priceCurrency={promoCard.priceCurrency}
            />
          ) : null}

          <CouponRowStyled>
            <CouponRowContentStyled>
              <div>
                <ExpireInfo
                  availabilityEnds={promoCard.availabilityEnds}
                  defaultExpirationDate={promoCard.defaultExpirationDate}
                />
                {!promoCard.discountValue ? (
                  <PromoCardPrice
                    discountValue={promoCard.discountValue}
                    omnibusPrice={promoCard.omnibusPrice}
                    price={promoCard.price}
                    priceCurrency={promoCard.priceCurrency}
                  />
                ) : null}
              </div>
              {promoCard.url ? (
                <CouponBadgeStyled
                  color="primary"
                  label={t('ctaGoTo')}
                  size="md"
                />
              ) : null}
            </CouponRowContentStyled>
          </CouponRowStyled>
        </CouponContentStyled>
      </ShoppingPagesButtonTileStyled>
    </CouponWrapperStyled>
  );
};

export default memo(PromoCardItem);

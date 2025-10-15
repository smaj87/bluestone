import useTranslations from 'commons/hooks/useTranslations';
import { openModal } from 'commons/Modal/actions';
import CouponImageWithLabel from 'commons/share_app/components/CouponsInDetail/CouponImageWithLabel';
import { CouponBadgeStyled } from 'commons/share_app/components/CouponsInDetail/styles';
import { COUPON_MODAL_ID } from 'commons/share_app/components/Modals/constants';
import PromoCardPrice from 'commons/share_app/components/PromoCards/PromoCardPrice';
import { ShoppingPagesButtonTileStyled } from 'commons/share_app/components/ShoppingPages/ShoppingTile/styles';
import { ShoppingPagesItemStyled } from 'commons/share_app/components/ShoppingPages/styles';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { zeroGifSend } from 'commons/utils/ads.onet';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { COUPONS_TAB_PARAMS } from '../constants';
import { Coupon } from '../types';
import CouponSender from './CouponSender';
import Description from './Description';
import ExpireInfo from './ExpireInfo';
import {
  AdLabelStyled,
  CouponContentStyled,
  CouponItemHeaderStyled,
  CouponRowContentStyled,
  CouponRowStyled,
  RowInfoStyled,
} from './styles';

interface Props {
  description: Coupon['description'];
  discountCode: Coupon['discountCode'];
  defaultExpirationDate: Coupon['defaultExpirationDate'];
  availabilityEnds: Coupon['availabilityEnds'];
  url: Coupon['url'];
  name: Coupon['from']['name'];
  email: Coupon['from']['email'];
  image: Coupon['image'];
  isAdServerCoupon?: Coupon['isAdServerCoupon'];
  isPromoCard?: boolean;
  isScrollable?: boolean;
  source: Coupon['source'];
  mid: number;
  couponId: number;
  copyTracker?: string;
  openTracker?: string;
  price?: string;
  discountValue?: string;
  priceCurrency?: string;
  omnibusPrice?: string;
  isHidden?: boolean;
  isNew?: boolean;
  isDefault?: boolean;
  schemaType?: Coupon['schemaType'];
}

const CouponItem: FC<Props> = ({
  availabilityEnds,
  copyTracker,
  couponId,
  defaultExpirationDate,
  description,
  discountCode,
  discountValue,
  email,
  image,
  isAdServerCoupon,
  isDefault,
  isHidden,
  isNew,
  isPromoCard,
  isScrollable,
  mid,
  name,
  omnibusPrice,
  openTracker,
  price,
  priceCurrency,
  schemaType,
  source,
  url,
}) => {
  const t = useTranslations();

  useEffect(() => {
    if (!isHidden) {
      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'coupon_viewed',
          event_details: {
            coupon_id: couponId,
            has_link: !!url,
            has_code: !!discountCode,
            coupon_type: source,
            schema_type: schemaType,
            isDefault: !!isDefault,
          },
          mid,
        }),
      );

      dataLayerPush({
        event: 'ga4_coupon_views',
        mp_params: [
          {
            mid,
            coupon_id: couponId,
            has_link: !!url,
            has_code: !!discountCode,
            coupon_type: source,
            schema_type: schemaType,
            name,
            sender: email?.split('@')?.[1] || '',
            isDefault: !!isDefault,
          },
        ],
      });
    }
  }, [isHidden]);

  const onClick = useCallback(() => {
    // W momencie gdy jest to promocard lub kupon nie ma discountCode tylko Url do promocji to przenosimy po kliknieciu, w innym wypadku otwieramy MODAL
    if ((isPromoCard || !discountCode) && !!url) {
      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'clicked_coupon',
          event_details: {
            coupon_id: couponId,
            has_link: !!url,
            has_code: !!discountCode,
            coupon_type: source,
            schema_type: schemaType,
            isDefault: !!isDefault,
          },
          mid,
        }),
      );

      dataLayerPush({
        event: 'ga4_coupon_clicked',
        mp_params: [
          {
            mid,
            coupon_id: couponId,
            has_link: !!url,
            has_code: !!discountCode,
            coupon_type: source,
            name,
            sender: email?.split('@')?.[1] || '',
            schema_type: schemaType,
            isDefault: !!isDefault,
          },
        ],
      });

      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'clicked_show_code',
          event_details: {
            coupon_id: couponId,
            has_link: !!url,
            has_code: !!discountCode,
            coupon_type: source,
            schema_type: schemaType,
            isDefault: !!isDefault,
          },
          mid,
        }),
      );

      dataLayerPush({
        event: 'ga4_clicked_show_code',
        mp_params: [
          {
            mid,
            coupon_id: couponId,
            has_link: !!url,
            has_code: !!discountCode,
            coupon_type: source,
            name,
            sender: email?.split('@')?.[1] || '',
            schema_type: schemaType,
            isDefault: !!isDefault,
          },
        ],
      });

      if (openTracker) {
        zeroGifSend(`${openTracker}${COUPONS_TAB_PARAMS}`);
      }

      dispatch(
        openModal(COUPON_MODAL_ID, {
          defaultExpirationDate,
          availabilityEnds,
          description,
          discountCode,
          url,
          image,
          mid,
          couponId,
          isAdServerCoupon,
          copyTracker,
          openTracker,
          source,
          name,
          email,
          isDefault,
        }),
      );
    }
  }, [
    defaultExpirationDate,
    availabilityEnds,
    description,
    discountCode,
    url,
    image,
    isPromoCard,
    mid,
    couponId,
    isAdServerCoupon,
    copyTracker,
    openTracker,
    source,
    name,
    email,
    price,
    discountValue,
    priceCurrency,
    omnibusPrice,
    isDefault,
  ]);

  return (
    <ShoppingPagesItemStyled $isHidden={isHidden} $isScrollable={isScrollable}>
      <ShoppingPagesButtonTileStyled onClick={onClick}>
        <CouponImageWithLabel
          image={image}
          itemName={isPromoCard ? t('recommend') : t('coupon')}
        />

        <CouponContentStyled>
          <CouponItemHeaderStyled>
            <CouponSender email={email} isNew={!!isNew} name={name} />
            {isAdServerCoupon && <AdLabelStyled>{t('ad')}</AdLabelStyled>}
          </CouponItemHeaderStyled>
          <Description description={description || t('couponsPlaceholder')} />
          <PromoCardPrice
            discountValue={discountValue}
            omnibusPrice={omnibusPrice}
            price={price}
            priceCurrency={priceCurrency}
          />
          <CouponRowStyled>
            <CouponRowContentStyled>
              <RowInfoStyled>
                <ExpireInfo
                  availabilityEnds={availabilityEnds}
                  defaultExpirationDate={defaultExpirationDate}
                />
              </RowInfoStyled>
              <CouponBadgeStyled
                color="primary"
                label={discountCode ? t('ctaShowCode') : t('ctaGoTo')}
                size="md"
              />
            </CouponRowContentStyled>
          </CouponRowStyled>
        </CouponContentStyled>
      </ShoppingPagesButtonTileStyled>
    </ShoppingPagesItemStyled>
  );
};

export default memo(CouponItem);

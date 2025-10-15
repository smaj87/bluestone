import CopyButton from 'commons/CopyButton';
import useTranslations from 'commons/hooks/useTranslations';
import { close } from 'commons/Modal/actions';
import { COUPONS_TAB_PARAMS } from 'commons/share_app/containers/Coupons/constants';
import { Coupon } from 'commons/share_app/containers/Coupons/types';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { zeroGifSend } from 'commons/utils/ads.onet';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { CopyTextStyled, DiscountCodeStyled } from './styles';

interface Props {
  discountCode: Coupon['discountCode'];
  hasUrl: boolean;
  mid: number;
  couponId: number;
  isAdServerCoupon: Coupon['isAdServerCoupon'];
  copyTracker: string;
  source: Coupon['source'];
  name: string;
  email: string;
  url: string;
  hasCode: boolean;
  isDefault?: boolean;
}

const DiscountCode: FC<Props> = ({
  copyTracker,
  couponId,
  discountCode,
  email,
  hasCode,
  hasUrl,
  isAdServerCoupon,
  isDefault,
  mid,
  name,
  source,
  url,
}) => {
  const t = useTranslations();

  const onClick = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'clicked_copy_code',
        event_details: {
          coupon_id: couponId,
          has_link: hasUrl,
          has_code: !!discountCode,
          coupon_type: source,
          schema_type: 'discount_offer',
          isDefault: !!isDefault,
        },
        mid,
      }),
    );

    dataLayerPush({
      event: 'ga4_coupon_copy_code',
      mp_params: [
        {
          mid,
          coupon_id: couponId,
          has_link: hasUrl,
          has_code: !!discountCode,
          coupon_type: source,
          schema_type: 'discount_offer',
          name,
          sender: email?.split('@')?.[1] || '',
          isDefault: !!isDefault,
        },
      ],
    });

    if (copyTracker) {
      zeroGifSend(`${copyTracker}${COUPONS_TAB_PARAMS}`);
    }
  }, [discountCode, name, mid, email, hasUrl, couponId, copyTracker, source]);

  const onClose = useCallback(() => {
    dispatch(close());
  }, []);

  const onCopyAndGo = useCallback(() => {
    if (url) {
      dispatch(
        eventsApiSendAction({
          event_category: 'coupons',
          event_action: 'clicked_redirect',
          event_details: {
            coupon_id: couponId,
            has_link: !!url,
            has_code: hasCode,
            coupon_type: source,
            schema_type: hasCode ? 'discount_offer' : 'coupon',
            isDefault: !!isDefault,
          },
          mid,
        }),
      );

      dataLayerPush({
        event: 'ga4_coupon_clicked_redirect',
        mp_params: [
          {
            mid,
            coupon_id: couponId,
            has_link: !!url,
            has_code: hasCode,
            coupon_type: source,
            schema_type: hasCode ? 'discount_offer' : 'coupon',
            name,
            sender: email?.split('@')?.[1] || '',
            isDefault: !!isDefault,
          },
        ],
      });

      if (discountCode) {
        if (copyTracker) {
          zeroGifSend(`${copyTracker}${COUPONS_TAB_PARAMS}`);
        }

        navigator.clipboard.writeText(discountCode);
      }

      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
        onClose();
      }, 500);
    }
  }, [
    url,
    mid,
    hasCode,
    couponId,
    isAdServerCoupon,
    source,
    name,
    email,
    discountCode,
    copyTracker,
  ]);

  return discountCode ? (
    <DiscountCodeStyled>
      <CopyTextStyled
        onClick={url ? onCopyAndGo : undefined}
        readOnly
        value={discountCode}
      />
      <CopyButton
        label={url ? t('ctaCopyAndGoToCouponUrl') : t('ctaCopyCode')}
        onCopy={url ? onCopyAndGo : onClick}
        size="md"
        value={discountCode}
      />
    </DiscountCodeStyled>
  ) : null;
};

export default memo(DiscountCode);

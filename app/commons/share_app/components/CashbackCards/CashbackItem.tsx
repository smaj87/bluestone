import { Email } from 'types';

import useTranslations from 'commons/hooks/useTranslations';
import CashbackHeader from 'commons/share_app/components/CashbackCards/CashbackHeader';
import { CASHBACK_SCHEMA_TYPE } from 'commons/share_app/containers/Cashbacks/constants';
import { getCashbackId } from 'commons/share_app/containers/Cashbacks/utils';
import ExpireInfo from 'commons/share_app/containers/Coupons/CouponItem/ExpireInfo';
import {
  CouponContentStyled,
  CouponRowContentStyled,
  CouponRowStyled,
} from 'commons/share_app/containers/Coupons/CouponItem/styles';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { COUPON_ITEM_CLASS } from '../CouponsInDetail/constants';
import CouponImageWithLabel from '../CouponsInDetail/CouponImageWithLabel';
import {
  CashbackBadgeStyled,
  CouponWrapperStyled,
} from '../CouponsInDetail/styles';
import { ShoppingPagesButtonTileStyled } from '../ShoppingPages/ShoppingTile/styles';
import SuperOffer from '../SuperOffer';
import { SuperOfferWrapperStyled } from '../SuperOffer/styles';
import { CashbackDetail } from './types';

interface Props {
  cashback: CashbackDetail;
  $isShow: boolean;
  mid?: number;
  sender: Email;
}

const CashbackItem: FC<Props> = ({ $isShow, cashback, mid }) => {
  const t = useTranslations();
  const cashbackId = getCashbackId(cashback);

  useEffect(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'coupon_viewed',
        event_details: {
          coupon_id: cashbackId,
          has_link: !!cashback.url,
          has_code: false,
          schema_type: CASHBACK_SCHEMA_TYPE,
          coupon_type: cashback.source,
          isDefault: !!cashback.isDefault,
        },
        mid,
      }),
    );

    dataLayerPush({
      event: 'ga4_cashback_views',
      mp_params: [
        {
          mid,
          coupon_id: cashbackId,
          has_link: !!cashback.url,
          has_code: false,
          schema_type: CASHBACK_SCHEMA_TYPE,
          coupon_type: cashback.source,
          isDefault: !!cashback.isDefault,
        },
      ],
    });
  }, [mid]);

  const handleClickLink = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'clicked_coupon',
        event_details: {
          coupon_id: cashbackId,
          has_link: !!cashback.url,
          has_code: false,
          schema_type: CASHBACK_SCHEMA_TYPE,
          coupon_type: cashback.source,
          isDefault: !!cashback.isDefault,
        },
        mid,
      }),
    );

    dataLayerPush({
      event: 'ga4_cashback_clicked',
      mp_params: [
        {
          mid,
          coupon_id: cashbackId,
          has_link: !!cashback.url,
          has_code: false,
          schema_type: CASHBACK_SCHEMA_TYPE,
          coupon_type: cashback.source,
          isDefault: !!cashback.isDefault,
        },
      ],
    });

    window.open(cashback.url, '_blank', 'noopener,noreferrer');
  }, [cashback.url]);

  return (
    <CouponWrapperStyled $isShow={$isShow} className={COUPON_ITEM_CLASS}>
      <ShoppingPagesButtonTileStyled onClick={handleClickLink}>
        <CouponImageWithLabel
          $isBrand
          image={cashback.image}
          itemName={t('cashback')}
        />
        <CouponContentStyled>
          <CashbackHeader
            headline={cashback.headline}
            isAdServerCoupon={cashback.isAdServerCoupon}
            isNew={!!cashback.isNew}
          />
          <CouponRowStyled>
            <CouponRowContentStyled>
              <SuperOfferWrapperStyled>
                {cashback.price ? (
                  <SuperOffer price={cashback.price} />
                ) : (
                  <ExpireInfo
                    availabilityEnds={cashback.availabilityEnds}
                    defaultExpirationDate={cashback.defaultExpirationDate}
                  />
                )}
              </SuperOfferWrapperStyled>
              <CashbackBadgeStyled
                color="primary"
                label={t('ctaGoTo')}
                size="md"
              />
            </CouponRowContentStyled>
          </CouponRowStyled>
        </CouponContentStyled>
      </ShoppingPagesButtonTileStyled>
    </CouponWrapperStyled>
  );
};

export default memo(CashbackItem);

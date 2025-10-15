import useTranslations from 'commons/hooks/useTranslations';
import { PromoCard } from 'commons/share_app/containers/Coupons/types';
import { FC, memo } from 'commons/utils/react';

import {
  CouponTitleBoxStyled,
  CouponTitleContentStyled,
  CouponTitleSenderStyled,
  CouponTitleStyled,
} from '../CouponsInDetail/styles';
import CouponAdLabel from './CouponAdLabel';

interface Props {
  headline: PromoCard['headline'];
  sender: { name?: string; email: string };
  isAdServerCoupon: PromoCard['isAdServerCoupon'];
  omnibusPrice?: PromoCard['omnibusPrice'];
}

const PromoCardHeadline: FC<Props> = ({
  headline,
  isAdServerCoupon,
  omnibusPrice,
  sender,
}) => {
  const t = useTranslations();

  return (
    <CouponTitleBoxStyled>
      <CouponTitleContentStyled>
        <CouponTitleSenderStyled>
          {sender?.name || sender?.email}
        </CouponTitleSenderStyled>
        <CouponTitleStyled $isOneLineMobile={omnibusPrice}>
          {headline || t('couponsPlaceholder')}
        </CouponTitleStyled>
      </CouponTitleContentStyled>
      {isAdServerCoupon ? <CouponAdLabel /> : null}
    </CouponTitleBoxStyled>
  );
};

PromoCardHeadline.displayName = 'PromoCardHeadline';

export default memo(PromoCardHeadline);

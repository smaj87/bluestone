import useTranslations from 'commons/hooks/useTranslations';
import { ShoppingPageHeaderStyled } from 'commons/share_app/components/ShoppingPages/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isCouponsBannerOpen } from '../selectors';

const CouponHeader: FC = () => {
  const t = useTranslations();
  const isBannerVisible = useSelector(isCouponsBannerOpen);

  return (
    <ShoppingPageHeaderStyled>
      <h1>{t('coupons')}</h1>
      {!isBannerVisible ? <p>{t('couponsDescription')}</p> : ''}
    </ShoppingPageHeaderStyled>
  );
};

export default memo(CouponHeader);

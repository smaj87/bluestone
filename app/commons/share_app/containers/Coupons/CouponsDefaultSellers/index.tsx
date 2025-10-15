import useTranslations from 'commons/hooks/useTranslations';
import { DEFAULT_COUPONS_ID } from 'commons/share_app/components/ShoppingPages/ShoppingBanner/constants';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { TitleBarStyled } from '../CouponsPage/styles';
import {
  SellerItemStyled,
  SellersListContainerStyled,
  SellersListStyled,
} from '../CouponsSellers/styles';
import { getDefaultSellers } from '../selectors';
import SellerButton from './SellerButton';

const CouponsDefaultSellers: FC = () => {
  const t = useTranslations();
  const sellerNames = useSelector(getDefaultSellers);

  return sellerNames.length > 0 ? (
    <>
      <TitleBarStyled id={DEFAULT_COUPONS_ID}>
        <h3>{t('couponsDefaultTitle')}</h3>
      </TitleBarStyled>
      <SellersListContainerStyled>
        <SellersListStyled role="list">
          {sellerNames.map((s) => (
            <SellerItemStyled key={s.name} role="listitem">
              <SellerButton isBimiShow label={s.name} seller={s} />
            </SellerItemStyled>
          ))}
        </SellersListStyled>
      </SellersListContainerStyled>
    </>
  ) : null;
};

export default memo(CouponsDefaultSellers);

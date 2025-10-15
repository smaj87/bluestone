import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { TitleBarStyled } from '../CouponsPage/styles';
import { getSellers } from '../selectors';
import SellerButton from './SellerButton';
import {
  SellerItemStyled,
  SellersListContainerStyled,
  SellersListStyled,
} from './styles';

const CouponsSellers: FC = () => {
  const t = useTranslations();
  const sellerNames = useSelector(getSellers);

  return sellerNames.length > 0 ? (
    <>
      <TitleBarStyled>
        <h3>{t('couponsDiscountsCurrentTitle')}</h3>
      </TitleBarStyled>

      <SellersListContainerStyled>
        <SellersListStyled role="list">
          <SellerItemStyled role="listitem">
            <SellerButton
              label={t('ctaAll')}
              seller={{ name: '', email: '', isBimi: false }}
            />
          </SellerItemStyled>
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

export default memo(CouponsSellers);

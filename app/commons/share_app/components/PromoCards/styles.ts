import styled from 'commons/Goober';
import { CARD_IMAGE } from 'commons/share_app/components/PromoCards/constants';
import { AdLabelStyled } from 'commons/share_app/containers/Coupons/CouponItem/styles';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

interface promoCardImageProps {
  $isLoaded?: boolean;
}
export const PromoCardImageStyled = styled('figure')<promoCardImageProps>`
  grid-area: ${CARD_IMAGE};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;
  max-width: 14.3rem;
  max-height: 9.3rem;
  min-width: 7.5rem;
  min-height: 7.5rem;
  border-radius: ${corner};
  background: ${({ $isLoaded }) =>
    $isLoaded ? 'transparent' : `var(--shopping-avatar-bg)`};
  overflow: hidden;
  font-size: 2.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CouponAdLabelStyled = styled(AdLabelStyled)`
  margin-left: 0;
  font-size: 1.2rem;
`;

export const PromoCardPriceRowStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 0.4rem;
  width: 100%;
  min-width: 0;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  color: var(--schema-txt--option);

  @media screen and (min-width: ${screenMdAbove}) {
    margin-top: 0;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const PromoCardPriceStyled = styled('div')`
  margin-right: 0.8rem;
`;

export const PromoCardOldPriceStyled = styled('div')`
  font-weight: 400;
`;

export const PromoCardOmnibusPriceStyled = styled('div')`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.1rem;
    margin-bottom: -0.4rem;
  }
`;

export const PromoCardPriceLineStyled = styled('div')`
  display: flex;
`;

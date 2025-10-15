import Badge from 'commons/Badge';
import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import { shoppingTileButtonStyles } from 'commons/share_app/components/ShoppingPages/ShoppingTile/styles';
import { COUPON_IMAGE_SIZE } from 'commons/share_app/containers/Coupons/CouponItem/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

interface couponImageProps {
  $isLoaded?: boolean;
}

export const CouponImageStyled = styled('figure')<couponImageProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${COUPON_IMAGE_SIZE};
  width: ${COUPON_IMAGE_SIZE};
  border-radius: ${corner};
  background: ${({ $isLoaded }) =>
    $isLoaded ? 'transparent' : `var(--shopping-avatar-bg)`};
  font-size: 2.8rem;
  line-height: 1;
  margin: 0.4rem 0.4rem 0;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CouponContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.2rem;
  width: 100%;
  min-width: 0;

  @media screen and (min-width: ${screenMdAbove}) {
    gap: 0.4rem;
  }
`;

export const TitleStyled = styled('div')`
  display: block;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TextStyled = styled('div')`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 400;
  color: var(--shopping-txt--secondary);
  text-align: left;

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.2rem;
  }
`;

export const CouponBadgeStyled = styled(Badge)`
  ${shoppingTileButtonStyles};
`;

export const CouponItemHeaderStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CouponRowStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex: 1;
  margin-top: auto;
`;

export const CouponRowContentStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const CouponSenderStyled = styled('div')`
  width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const AdLabelStyled = styled('span')`
  margin-left: 0.8rem;
  font-size: 1rem;
  line-height: 1;
  color: var(--shopping-txt--secondary);
  text-transform: uppercase;
`;

interface couponImageWrapperProps {
  $isLoaded?: boolean;
}

export const CouponImageWrapperStyled = styled('div')<couponImageWrapperProps>`
  background: ${({ $isLoaded }) =>
    $isLoaded
      ? 'var(--shopping-avatar-bg--logo)'
      : `var(--shopping-avatar-bg)`};
  border: 0.1rem solid var(--shopping-avatar-bg);
  border-radius: 0.3rem;
  padding: 0.1rem;
  margin-top: 0.1rem;
  height: 100%;
  max-height: 9.5rem;
  max-width: 7.5rem;
`;

interface couponImageLabelProps {
  $isBrand?: boolean;
}

export const CouponImageLabelStyled = styled('div')<couponImageLabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.6rem;
  border-radius: 0.3rem;
  width: calc(100% - 0.4rem);
  margin: 0.1rem 0.2rem 0;
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.016rem;
  background: ${({ $isBrand }) =>
    $isBrand ? 'var(--cashback-goodie-brand--2)' : `var(--schema-label-bg)`};
  color: var(--schema-label-txt);
  color: ${({ $isBrand }) =>
    $isBrand ? 'var(--schema-label-txt--brand)' : `var(--schema-label-txt)`};
`;

export const RowInfoStyled = styled('div')``;

export const ExpiredIconStyled = styled(Icon)`
  margin-right: 0.4rem;
`;

import Badge from 'commons/Badge';
import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import { PromoCard } from 'commons/share_app/containers/Coupons/types';
import {
  screenLgAbove,
  screenMdAbove,
  screenMdUnder,
  screenSmAbove,
  screenSmUnder,
  screenXlAbove,
  screenXlUnder,
} from 'commons/utils/breakpoints';

import {
  SCREEN_MD_CLASS,
  SCREEN_SM_CLASS,
  SCREEN_XL_CLASS,
} from '../CashbackCards/constants';
import { COUPON_ITEM_CLASS, shoppingTileHeight } from './constants';

export const CouponsBoxStyled = styled('div')`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.6rem;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.8rem;
  width: 100%;

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 1.6rem;
  }
`;

export const CouponsToggleButtonStyled = styled(Button)`
  position: relative;
  border-width: 0;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  color: var(--shopping-link);

  &:empty {
    display: none;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    justify-self: flex-end;
    margin-left: auto;
    padding-block: 0;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: transparent;
      background: transparent;
      color: var(--shopping-link--hover);
    }
  }
`;

export const VolumeStyled = styled('span')`
  display: none;

  &.${SCREEN_SM_CLASS} {
    @media screen and (max-width: ${screenSmUnder}) {
      display: inline-flex;
    }

    @media screen and (min-width: ${screenMdUnder}) and (max-width: ${screenLgAbove}) {
      display: inline-flex;
    }
  }

  &.${SCREEN_MD_CLASS} {
    @media screen and (min-width: ${screenSmAbove}) and (max-width: ${screenMdUnder}) {
      display: inline-flex;
    }

    @media screen and (min-width: ${screenLgAbove}) and (max-width: ${screenXlUnder}) {
      display: inline-flex;
    }
  }

  &.${SCREEN_XL_CLASS} {
    @media screen and (min-width: ${screenXlAbove}) {
      display: inline-flex;
    }
  }
`;

export const CouponsToggleMobileStyled = styled('div')`
  text-align: center;

  &:empty {
    display: none;
  }
`;

export const CouponsHeaderStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 1.6rem;

  &:empty {
    display: none;
  }

  h3 {
    flex: 1;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.43;
    text-align: left;
  }
`;

export const CouponsWrapperStyled = styled('section')`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
  width: 100%;

  .${COUPON_ITEM_CLASS} {
    max-width: 44.8rem;

    &:nth-child(1) {
      display: flex;
    }
  }

  @media screen and (min-width: ${screenSmAbove}) and (max-width: ${screenMdUnder}) {
    grid-template-columns: repeat(2, minmax(20rem, 44.8rem));

    .${COUPON_ITEM_CLASS} {
      max-width: 44.8rem;

      &:nth-child(-n + 2) {
        display: flex;
      }
    }
  }

  @media screen and (min-width: ${screenLgAbove}) and (max-width: ${screenXlUnder}) {
    grid-template-columns: repeat(2, minmax(20rem, 44.8rem));

    .${COUPON_ITEM_CLASS} {
      max-width: 44.8rem;

      &:nth-child(-n + 2) {
        display: flex;
      }
    }
  }

  @media screen and (min-width: ${screenXlAbove}) {
    grid-template-columns: repeat(3, minmax(20rem, 44.8rem));

    .${COUPON_ITEM_CLASS} {
      max-width: 44.8rem;

      &:nth-child(-n + 3) {
        display: flex;
      }
    }
  }
`;

interface CouponWrapperStyledProps {
  $isShow?: boolean;
}

export const CouponWrapperStyled = styled('div')<CouponWrapperStyledProps>`
  display: ${({ $isShow }) => ($isShow ? 'flex' : 'none')};
  width: 100%;
  height: ${shoppingTileHeight};
`;

export const CouponTitleBoxStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

export const CouponTitleContentStyled = styled('div')``;

const couponTitleSenderStyles = css`
  margin-bottom: 0.2rem;
  max-width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--shopping-txt--secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 0.4rem;
  }
`;

interface CouponTitleSenderStyledProps {
  $isAdServerCoupon?: boolean;
}

export const CouponTitleSenderStyled = styled(
  'div',
)<CouponTitleSenderStyledProps>`
  ${couponTitleSenderStyles}
`;

export const CouponTitleSenderNewStyled = styled('div')`
  ${couponTitleSenderStyles};
  margin-bottom: 0;
`;

export const CouponBadgeStyled = styled(Badge)`
  font-weight: 500;
  max-width: fit-content;
  min-width: 9rem;
`;

export const CashbackBadgeStyled = styled(CouponBadgeStyled)`
  background: var(
    --gradient-goodie,
    linear-gradient(
      90deg,
      var(--cashback-goodie-brand--1) 3.7%,
      var(--cashback-goodie-brand--2) 100%
    )
  );
  border: none;
  color: var(--cashback-goodie-txt);
`;

interface CouponTitleProp {
  $isOneLineMobile?: PromoCard['omnibusPrice'];
}

export const CouponTitleStyled = styled('div')<CouponTitleProp>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ $isOneLineMobile }) => ($isOneLineMobile ? 1 : 2)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: left;

  @media screen and (min-width: ${screenMdAbove}) {
    -webkit-line-clamp: ${({ $isOneLineMobile }) => ($isOneLineMobile ? 1 : 2)};
  }
`;

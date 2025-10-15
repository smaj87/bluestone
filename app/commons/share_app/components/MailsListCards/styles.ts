import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenXxsAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

import { brandDiscountColorsFunc, brandLabelColorsFunc } from './brands';
import { Brand } from './types';

export const MailsListCardStyled = styled('div')`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  padding: 0.8rem 0.8rem 0.8rem 2.4rem;
  width: 100%;
  min-width: 0;
  max-width: 40rem;
  height: 6.4rem;
  border-radius: ${corner};
  border: 0.1rem solid var(--coupon-mails-list-border);
  background: var(--coupon-mails-list-bg);
`;

interface MailsListCardImageStyledProps {
  $isLoaded?: boolean;
}

export const MailsListCardImageStyled = styled(
  'figure',
)<MailsListCardImageStyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 4.8rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: ${corner};
  border: 0.1rem solid var(--coupon-mails-list-avatar-border);
  background: ${({ $isLoaded }) =>
    $isLoaded
      ? 'var(--coupon-mails-list-avatar-bg)'
      : 'var(--coupon-mails-list-avatar-bg--loading)'};
  color: var(--coupon-mails-list-avatar-txt);

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const MailsListCardIcon = styled(Icon)`
  font-size: 1.6rem;
`;

export interface BrandStyledProps {
  $brand?: Brand;
}

export const MailsListCardLabelStyled = styled('div')<BrandStyledProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 1.6rem;
  border-radius: ${corner} 0 0 ${corner};
  ${brandLabelColorsFunc};
`;

export const MailsListCardLabelTextStyled = styled('span')`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(90deg) translate3d(100%, 0, 0) scale(-1, -1);
  transform-origin: 0 0;
  display: block;
  padding: 0 0.2rem;
  width: 6.2rem;
  height: 1.6rem;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 2;
  letter-spacing: 0.02rem;
  text-align: center;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const MailsListCardContentStyled = styled('div')`
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  flex: 1;
  padding-left: 0.8rem;
`;

interface MailsListCardTitleStyledProps {
  $isMultiply?: boolean;
}

const isMultiplyLinesTitleStyles = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const isSingleLineTitleStyles = css`
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MailsListCardTitleStyled = styled(
  'div',
)<MailsListCardTitleStyledProps>`
  ${({ $isMultiply }) =>
    $isMultiply ? isMultiplyLinesTitleStyles : isSingleLineTitleStyles};
  overflow: hidden;
  width: 100%;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.2;
  color: var(--coupon-mails-list-txt--primary);
`;

export const MailsListCardBottomStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  min-width: 0;
`;

export const MailsListCardAdditionalDataStyled = styled('div')`
  flex: 1;
  margin-right: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const mailsListCardSecondaryTypoStyles = css`
  font-size: 0.9rem;
  line-height: 1;

  @media screen and (min-width: ${screenXxsAbove}) {
    font-size: 1rem;
  }
`;

export const MailsListCardDateStyled = styled('span')`
  ${mailsListCardSecondaryTypoStyles};
  display: inline-flex;
  justify-content: flex-start;
  gap: 0.4rem;
  color: var(--coupon-mails-list-txt--secondary);
`;

export interface MailsListCardDiscountBrandStyledProps {
  $brand?: Brand;
}

export const MailsListCardDiscountStyled = styled(
  'span',
)<MailsListCardDiscountBrandStyledProps>`
  ${mailsListCardSecondaryTypoStyles};
  ${brandDiscountColorsFunc};
  color: var(--coupon-mails-list-txt--secondary);
`;

export const MailsListCardPricesStyled = styled('div')`
  ${mailsListCardSecondaryTypoStyles};
  min-width: 0;
  color: var(--coupon-mails-list-txt--secondary);
  ins {
    font-weight: 700;
    color: var(--coupon-mails-list-txt--primary);
    text-decoration: none;
  }
`;

export const MailsListCardPriceChangeStyled = styled('span')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
`;

export const MailsListCardPriceNewStyled = styled('ins')``;

export const MailsListCardPriceOldStyled = styled('del')``;

export const MailsListCardOmnibusStyled = styled('div')`
  white-space: nowrap;
`;

export const MailsListCardAdLabelStyled = styled('span')`
  ${mailsListCardSecondaryTypoStyles};
  color: var(--coupon-mails-list-txt--secondary);
  text-transform: uppercase;
`;

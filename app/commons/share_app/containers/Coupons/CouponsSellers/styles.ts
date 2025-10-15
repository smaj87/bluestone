import styled, { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

const sellerListElementsStyles = css`
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  width: 1.6rem;
  height: 100%;
  pointer-events: none;
`;

export const SellersListContainerStyled = styled('div')`
  position: relative;
  margin: 0 -0.8rem 2.4rem;
  padding-inline: 0.4rem;

  &:before,
  &:after {
    ${sellerListElementsStyles};
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), var(--shopping-bg));
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), var(--shopping-bg));
  }

  @media screen and (min-width: ${screenMdAbove}) {
    &:before,
    &:after {
      content: none;
    }
  }
`;

export const SellersListStyled = styled('div')`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding-bottom: 0.8rem;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x proximity;

  @media screen and (min-width: ${screenMdAbove}) {
    flex-wrap: wrap;
    padding-bottom: 0;
    max-width: 137rem;
  }
`;

export const SellerItemStyled = styled('div')`
  padding: 0.4rem;
`;

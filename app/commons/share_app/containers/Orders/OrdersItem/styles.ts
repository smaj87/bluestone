import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

const ordersItemStyles = css`
  min-height: 4rem;
  max-width: 90rem;
  padding: 1.6rem;
  border-radius: ${corner};
  background-color: var(--shopping-tab-bg);
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const OrdersItemStyled = styled('li')`
  ${ordersItemStyles}

  div {
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const orderLinkStyles = css`
  background-color: transparent;
  border-color: transparent;
  margin: 0;
  padding: 0;
  color: inherit;
  text-decoration: underline;
  font-size: inherit;
`;

export const OrdersItemFormStyled = styled('div')`
  ${ordersItemStyles};
  margin-top: 1.6rem;
  background-color: var(--order-form-bg);
  color: var(--order-form-txt);

  div {
    padding-top: 0;
    color: inherit;

    p {
      font-size: 1.4rem;
      color: inherit;
      margin-bottom: 0;
    }
  }

  h3 {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: inherit;
  }

  p {
    font-size: 1.4rem;
    color: inherit;

    &:last-child {
      margin-bottom: 0;
    }
  }

  button {
    background: var(--order-form-button-bg);
    border-color: var(--order-form-button-border);
    color: var(--order-form-button-txt);
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0.8rem 4.8rem;
    height: 3.6rem;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background: var(--order-form-button-bg--hover);
        border-color: var(--order-form-button-border--hover);
        color: var(--order-form-button-txt);
      }
    }

    /* Linki z mautica */
    &.link {
      ${orderLinkStyles}
      display: block;

      span {
        white-space: normal;
      }

      @media (hover: hover) {
        &:hover:not(:disabled) {
          ${orderLinkStyles};
          text-decoration-thickness: 0.2rem;
        }
      }
    }
  }
`;

export const OrderItemDividingLineStyled = styled('hr')`
  border: none;
  border-top: 0.1rem solid var(--order-form-border);
  width: 100%;
  margin: 1.6rem 0 0.8rem;
`;

export const OrdersHeaderStyled = styled('div')`
  display: flex;
  gap: 0.8rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
  border-bottom: 0.1rem solid var(--shopping-tab-border);
`;

export const OrdersHeaderDateStyled = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;
  border-bottom: 0.1rem solid var(--shopping-tab-border);

  @media screen and (min-width: ${screenMdAbove}) {
    flex-direction: row;
  }
`;

export const OrdersDateStyled = styled('div')`
  @media screen and (min-width: ${screenMdAbove}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-right: 0.4rem;
    align-items: center;
  }
`;

export const OrderLabelStyled = styled('div')`
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 400;
  margin-right: 0.4rem;
  text-transform: uppercase;
`;

export const OrdersStatusStyled = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: flex-start;

  @media screen and (min-width: ${screenMdAbove}) {
    flex-direction: row;
    gap: 0.6rem;
    justify-content: space-between;
  }
`;

export const OrdersStatusTitleStyled = styled('div')`
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatusInfoStyled = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-bottom: 0.8rem;
  border-bottom: 0.1rem solid var(--shopping-tab-border);

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 0.2rem;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

interface StatusInfoWrapperProps {
  $bgColor?: string;
}

export const StatusInfoWrapperStyled = styled('div')<StatusInfoWrapperProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: ${corner};
  color: ${({ $bgColor }) =>
    $bgColor === 'var(--order-status-bg--processing)'
      ? 'var(--order-status-txt--processing)'
      : 'var(--order-status-txt--default)'};
  background-color: ${({ $bgColor }) =>
    $bgColor || 'var(--order-status-bg--default)'};

  @media screen and (min-width: ${screenMdAbove}) {
    justify-content: flex-start;
  }
`;

export const StatusInfoTextStyled = styled('div')`
  display: flex;
  gap: 0.2rem;
  padding: 0;
  border-radius: ${corner};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
`;

export const StatusInfoIconStyled = styled(Icon)`
  font-size: 1.4rem;
`;

export const SellerInfoStyled = styled('div')`
  font-size: 1.4rem;
  border-bottom: 0.1rem solid var(--shopping-tab-border);
`;

export const SellerInfoItemStyled = styled('span')`
  margin-right: 0.8rem;
  font-weight: 100;

  @media screen and (min-width: ${screenMdAbove}) {
    display: flex;
    margin-right: 0;
  }

  b {
    font-weight: 500;
  }

  i {
    font-style: normal;
    margin-right: 0.2rem;

    @media screen and (min-width: ${screenMdAbove}) {
      margin-right: 0;
      margin-left: 0.2rem;
    }
  }

  span {
    margin-right: 0.4rem;
  }
`;

export const OrdersContentStyled = styled('div')`
  padding: 0.8rem 0;
  border-bottom: 0.1rem solid var(--shopping-tab-border);
`;

export const OrdersContentActionBoxStyled = styled('div')<{
  $isBorderBottom?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 0.8rem;
  padding-top: 1.2rem;
  padding-bottom: ${({ $isBorderBottom }) =>
    $isBorderBottom ? '1.2rem' : '0'};
  border-bottom: ${({ $isBorderBottom }) =>
    $isBorderBottom ? '0.1rem solid var(--shopping-tab-border)' : 'none'};

  &:empty {
    display: none;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    flex-direction: row;
  }
`;

export const ListOfProductsStyled = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListOfProductsHeaderStyled = styled('div')`
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const ListOfProductSummaryStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 1.6rem 0 0 0;
`;

export const ShoppingPageBackButtonStyled = styled(Button)`
  padding-left: 0;
`;

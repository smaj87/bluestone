import styled, { css } from 'commons/Goober';
import {
  screenMdAbove,
  screenMdUnder,
  screenSmAbove,
  screenXlAbove,
} from 'commons/utils/breakpoints';
import { APP_CLASS } from 'commons/utils/classNames';
import { corner, navbarHeight } from 'commons/utils/variables';

export const ShoppingPageStyled = styled('section')`
  position: relative;
  display: none;
  width: 100%;
  min-width: 0;
  min-height: calc(100vh - ${navbarHeight});
  min-height: calc(100dvh - ${navbarHeight});

  @media screen and (min-width: ${screenMdAbove}) {
    min-height: auto;
  }

  .${APP_CLASS} & {
    @media screen and (min-width: ${screenMdAbove}) {
      padding-top: 0.8rem;
      padding-right: 0.8rem;
    }
  }
`;

export const ShoppingPageContentStyled = styled('div')`
  padding: 0.8rem 0.8rem 11.2rem 0.8rem;
  width: 100%;
  min-height: 100%;
  border-radius: ${corner};
  background-color: var(--shopping-bg);
  color: var(--shopping-txt);

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 4rem;
  }
`;

export const ShoppingPageHeaderStyled = styled('div')`
  margin: 1.2rem 0 1.6rem;

  h1 {
    margin-bottom: 0.8rem;
    font-weight: 700;
    font-size: 2.2rem;
    color: var(--shopping-txt);
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 2.4rem;
    line-height: 1.8rem;
    color: var(--shopping-txt--secondary);
  }
`;

export const ShoppingPageBetaStyled = styled('span')`
  display: inline-block;
  vertical-align: middle;
  margin-top: -0.2rem;
  padding: 0.2rem 0.4rem;
  margin-left: 0.8rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--order-status-bg--error);
  color: var(--order-status-txt--default);
  text-transform: uppercase;
`;

interface ShoppingPagesItemProps {
  $isHidden?: boolean;
  $isScrollable?: boolean;
}

const itemScrollableStyles = css`
  @media screen and (max-width: ${screenMdUnder}) {
    padding: 0.4rem;

    &:first-child {
      padding-left: 0.8rem;
    }

    &:last-child {
      padding-right: 0.8rem;
    }
  }
`;

export const ShoppingPagesItemStyled = styled('li')<ShoppingPagesItemProps>`
  list-style: none;
  ${({ $isScrollable }) => ($isScrollable ? itemScrollableStyles : '')};
  ${({ $isHidden }) => ($isHidden ? 'display: none' : 'display: block')};
`;

export const couponListStyles = css`
  position: relative;
  display: grid;
  grid-gap: 0.8rem;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(1, minmax(20rem, 44.8rem));

  @media screen and (min-width: ${screenSmAbove}) {
    grid-template-columns: repeat(2, minmax(20rem, 44.8rem));
  }

  @media screen and (min-width: ${screenXlAbove}) {
    grid-template-columns: repeat(3, minmax(20rem, 44.8rem));
  }
`;

export const ShoppingToolbarStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 45rem;

  @media screen and (min-width: ${screenSmAbove}) {
    max-width: 90rem;
  }

  @media screen and (min-width: ${screenXlAbove}) {
    max-width: 136rem;
  }
`;

export const HeaderWithLabelNewStyled = styled('div')`
  display: flex;
  align-items: center;
  max-width: calc(100% - 5.5rem);
`;

export const ShoppingInfoBoxStyled = styled('div')`
  min-height: 4rem;
  padding: 1.6rem;
  border-radius: ${corner};
  font-size: 1.4rem;
  line-height: 1.8rem;
  background-color: var(--order-form-bg);
  color: var(--order-form-txt);
  margin: 0 0.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-inline: 0;
  }

  div {
    padding-top: 0;
    color: inherit;

    p {
      font-size: 1.4rem;
      color: inherit;
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
  }

  button {
    background: var(--order-form-button-bg);
    border-color: var(--order-form-button-border);
    color: var(--order-form-button-txt);
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0.8rem 4.8rem;
    height: 3.6rem;
    margin-top: 2.4rem;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background: var(--order-form-button-bg--hover);
        border-color: var(--order-form-button-border--hover);
        color: var(--order-form-button-txt);
      }
    }
  }
`;

export const ShoppingInfoBoxWrapperStyled = styled('div')`
  margin: 0 -0.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-inline: 0;
  }
`;

export const ShoppingYellowBoxStyled = styled('div')`
  min-height: 4rem;
  padding: 1.6rem;
  border-radius: ${corner};
  font-size: 1.4rem;
  line-height: 1.8rem;
  background-color: var(--order-form-bg);
  color: var(--order-form-txt);
  margin: 0 0.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin: 0;
  }

  div {
    padding-top: 0;
    color: inherit;

    p {
      font-size: 1.4rem;
      color: inherit;
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
  }

  button {
    background: var(--order-form-button-bg);
    border-color: var(--order-form-button-border);
    color: var(--order-form-button-txt);
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0.8rem 4.8rem;
    height: 3.6rem;
    margin-top: 2.4rem;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background: var(--order-form-button-bg--hover);
        border-color: var(--order-form-button-border--hover);
        color: var(--order-form-button-txt);
      }
    }
  }
`;

export const ShoppingYellowBoxWrapperStyled = styled('div')`
  margin: 0 -0.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin: 0;
  }
`;

import Button from 'commons/Button';
import styled from 'commons/Goober';
import { DEFAULT_HEADERS_CLASS } from 'commons/share_app/components/ShoppingPages/ShoppingBanner/constants';
import { couponListStyles } from 'commons/share_app/components/ShoppingPages/styles';
import { screenMdAbove, screenMdUnder } from 'commons/utils/breakpoints';

export const CouponListStyled = styled('ul')`
  ${couponListStyles};
`;

interface CouponItemStyledProps {
  $itemVolume: number;
}

export const CouponListScrollStyled = styled('ul')<CouponItemStyledProps>`
  ${couponListStyles};

  @media screen and (max-width: ${screenMdUnder}) {
    grid-template-columns: repeat(
      ${({ $itemVolume }) => $itemVolume || ''},
      calc(100% - 3.2rem)
    );
    grid-column: 1 / -1;
    grid-gap: 0;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
    margin: -0.8rem 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MobileScrollStyled = styled('div')`
  margin-right: -0.8rem;
  margin-left: -0.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const TitleBarStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
  min-height: 3rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-top: 4.8rem;
    scroll-margin-top: 20rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  &.${DEFAULT_HEADERS_CLASS} {
    animation: defaultHeaderScrollAnimation 900ms ease-out forwards;
  }

  @keyframes defaultHeaderScrollAnimation {
    0% {
      background: transparent;
    }
    50% {
      background: var(--app-primary-bg);
    }
    100% {
      background: transparent;
    }
  }
`;

// TODO - do dyskusji omówienie Styled przy nadpisywaniu komponentów
export const ShowMoreButtonStyled = styled(Button)`
  display: none;

  @media screen and (min-width: ${screenMdAbove}) {
    display: inline-flex;
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--shopping-link);

    @media (hover: hover) {
      &:hover:not(:disabled) {
        border-color: transparent;
        background: transparent;
        color: var(--shopping-link--hover);
      }
    }
  }
`;

export const ExpireTodayStyled = styled('div')`
  margin-bottom: 2.4rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 4.8rem;
  }
`;

export const CouponsDefaultWrapperStyled = styled('div')`
  min-height: 40rem;
`;

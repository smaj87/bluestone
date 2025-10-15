import styled from 'commons/Goober';
import { DEFAULT_HEADERS_CLASS } from 'commons/share_app/components/ShoppingPages/ShoppingBanner/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const TitleBarStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;
  min-height: 3rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-top: 4.8rem;
    scroll-margin-top: 40rem;
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

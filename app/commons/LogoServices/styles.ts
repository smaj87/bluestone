import styled, { css } from 'commons/Goober';
import { screenMdAbove, screenXsAbove } from 'commons/utils/breakpoints';
import { focusVisibleStyles } from 'commons/utils/commonStyles';

const imageStyles = css`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const LogoServicesStyled = styled('div')`
  display: none;

  @media screen and (min-width: ${screenXsAbove}) {
    display: flex;
    justify-content: flex-start;
    justify-self: flex-start;
    align-items: center;
    flex: 0 0 auto;
    gap: 0.8rem;
    height: 2.4rem;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    width: 22.4rem;
  }
`;

export const LogoSingleStyled = styled('a')`
  display: flex;
  justify-content: flex-start;
  justify-self: flex-start;
  align-items: center;
  height: 2.4rem;
  color: var(--navbar-txt);
  text-decoration: none;

  &:focus-visible {
    ${focusVisibleStyles};
  }

  img {
    ${imageStyles};
  }
`;

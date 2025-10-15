import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const ShoppingBannerStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;
  padding: 0;
  width: 100%;
  color: var(--banner-button-txt--primary);
  overflow: hidden;

  &:empty {
    display: none;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 2.4rem;
    max-width: 136rem;
    overflow-x: auto;
    background: var(--banner-bg);
    border: 0.1rem solid var(--banner-border);
    border-radius: ${corner};
    box-shadow: 0 0 1.6rem var(--banner-shadow);
  }
`;

export const ShoppingBannerContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: top;
  box-sizing: border-box;
  width: 100%;

  @media screen and (min-width: ${screenMdAbove}) {
    flex-direction: row;
  }
`;

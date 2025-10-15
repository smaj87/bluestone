import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

interface TabsListStyledProps {
  $isSticky?: boolean;
}

const isStickyStyles = css`
  position: sticky;
  top: 0;
`;

export const TabsListStyled = styled('div')<TabsListStyledProps>`
  ${({ $isSticky }) => ($isSticky ? isStickyStyles : '')};
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  gap: 0.8rem;
  margin-block: 1.6rem;
  border-bottom: 0.2rem solid var(--tabs-border);
  width: 100%;
`;

const isTabActiveStyles = css`
  background: var(--tab-bg--active);
  font-weight: 700;
  color: var(--tab-txt--active);
  cursor: default;
  pointer-events: none;
`;

export const TabStyled = styled(Button)`
  padding: 0.4rem 0.8rem;
  height: 3rem;
  border-radius: ${corner} ${corner} 0 0;
  background: var(--tab-bg);
  font-size: 1rem;
  line-height: 1.2;
  ${({ $isActive }) => ($isActive ? isTabActiveStyles : '')};

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;

export const TabPanelStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

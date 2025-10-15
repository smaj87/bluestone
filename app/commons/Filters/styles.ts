import Button from 'commons/Button';
import { primaryHoverStyles, primaryStyles } from 'commons/CallToAction/colors';
import styled, { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const FiltersStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 0.4rem;
  padding: 0.8rem;
  background: var(--filters-bg);

  @media screen and (min-width: ${screenMdAbove}) {
    grid-template-columns: 1fr;
    margin: 0 0 0.8rem;
    padding: 0.4rem 0.8rem;
    background: transparent;
  }
`;

export const FiltersContentStyled = styled('div')`
  position: relative;
  min-width: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 1;
    width: 0.8rem;
    height: 100%;

    @media screen and (min-width: ${screenMdAbove}) {
      content: none;
    }
  }

  &:before {
    left: -0.8rem;
    background: linear-gradient(
      90deg,
      var(--filters-bg) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:after {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      var(--filters-bg) 100%
    );
  }
`;

interface FiltersListStyledProps {
  $isWrap?: boolean;
}

const isFiltersListScrollHorizontallyStyles = css`
  margin: -0.8rem 0 -0.8rem -0.8rem;
  padding: 0.8rem 0 0.8rem 0.8rem;
  overflow-x: auto;
`;

const isFiltersListWrapStyles = css`
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

export const FiltersListStyled = styled('ul')<FiltersListStyledProps>`
  ${({ $isWrap }) =>
    $isWrap ? isFiltersListWrapStyles : isFiltersListScrollHorizontallyStyles};
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.4rem;
  list-style: none;
`;

export const FiltersItemStyled = styled('li')``;

const buttonFilterStyles = css`
  font-size: 1.1rem;
`;

const buttonFilterActiveStyles = css`
  ${primaryStyles};
  font-weight: 700;
  pointer-events: none;
  cursor: default;
`;

export const ButtonFilter = styled(Button)`
  ${buttonFilterStyles};
  ${({ $isActive }) => !!$isActive && buttonFilterActiveStyles};
`;

const buttonFilterDropActiveStyles = css`
  ${primaryStyles};
  font-weight: 700;

  @media (hover: hover) {
    &:hover {
      &:not(:disabled) {
        ${primaryHoverStyles};
      }
    }
  }
`;

export const ButtonFilterDrop = styled(Button)`
  ${buttonFilterStyles};
  ${({ $isActive }) => !!$isActive && buttonFilterDropActiveStyles};
`;

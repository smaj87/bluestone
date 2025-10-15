import Button from 'commons/Button';
import { secondaryStyles } from 'commons/CallToAction/colors';
import styled, { css } from 'commons/Goober';

export const GroupFiltersStyled = styled('div')`
  margin-bottom: 1.6rem;
  padding-inline: 2.4rem;
  width: 100%;
`;

export const GroupLabelTitleStyled = styled('label')`
  display: block;
  margin-bottom: 0.4rem;
  width: 100%;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.5;
  text-align: left;
`;

export const GroupValuesStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const GroupValueItemStyled = styled('div')``;

export const FilterActionsStyled = styled('div')`
  position: sticky;
  bottom: -0.1rem;
  z-index: 1;
  margin-top: -0.8rem;
  padding: 0.8rem 2.4rem 0;
  width: 100%;
  background: var(--context-menu-bg);
`;

const buttonAdvancedFilterStyles = css`
  border-color: var(--cta-filter-advanced-border);
  background: var(--cta-filter-advanced-bg);
  color: var(--cta-filter-advanced-txt);
`;

const buttonAdvancedFilterHoverStyles = css`
  &:hover:not(:disabled) {
    border-color: var(--cta-filter-advanced-border--hover);
    background: var(--cta-filter-advanced-bg--hover);
    color: var(--cta-filter-advanced-txt--hover);
  }
`;

const buttonAdvancedFilterActiveStyles = css`
  border-color: var(--cta-filter-advanced-border--active);
  background: var(--cta-filter-advanced-bg--active);
  color: var(--cta-filter-advanced-txt--active);
  cursor: default;
  pointer-events: none;
`;

const buttonAdvancedFilterDisabledStyles = css`
  border-color: var(--cta-filter-advanced-border--disabled);
  background: var(--cta-filter-advanced-bg--disabled);
  color: var(--cta-filter-advanced-txt--disabled);
`;

export const ButtonAdvancedFilter = styled(Button)`
  ${buttonAdvancedFilterStyles};
  ${({ isDisabled }) => isDisabled && buttonAdvancedFilterDisabledStyles};
  ${({ $isActive }) => $isActive && buttonAdvancedFilterActiveStyles};

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && buttonAdvancedFilterHoverStyles};
  }

  &:disabled {
    ${buttonAdvancedFilterDisabledStyles};
  }
`;

export const ResetSortStyled = styled('div')`
  padding-inline: 2.4rem;
  text-align: right;
`;

export const ButtonResetStyled = styled(Button)`
  ${secondaryStyles};
  justify-content: flex-end;
  margin-left: auto;
  padding: 0;
  border-color: transparent;
  background: transparent;
  text-decoration: underline;
  text-transform: lowercase;
`;

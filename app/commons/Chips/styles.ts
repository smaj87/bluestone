import styled from 'commons/Goober';
import { focusVisibleStyles } from 'commons/utils/commonStyles';
import { animationStyle } from 'commons/utils/variables';

import { IS_ACTIVE_CLASS } from './constants';

export const ChipsButtonStyled = styled('button')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  padding: 0.2rem 0.4rem;
  min-width: 0;
  max-width: 20rem;
  height: 3.2rem;
  border-radius: 2rem;
  border: 0.2rem solid var(--shopping-seller-border);
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  background: var(--shopping-seller-bg);
  color: var(--shopping-seller-txt);
  overflow: hidden;
  cursor: pointer;
  filter: drop-shadow(0 0 0 var(--shopping-seller-shadow));
  transition: filter ${animationStyle};
  will-change: filter;

  &:focus-visible {
    ${focusVisibleStyles};
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      filter: drop-shadow(0 0 0.2rem var(--shopping-seller-shadow));
    }
  }

  &.${IS_ACTIVE_CLASS} {
    color: var(--shopping-seller-txt--active);
    border-color: var(--shopping-seller-border--active);
    cursor: default;
    pointer-events: none;
  }
`;

export const ChipsNameStyled = styled('span')`
  flex: 1;
  width: 100%;
  max-width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { corner } from 'commons/utils/variables';

export const StatusStyled = styled('div')`
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  grid-template-columns: 1fr;
`;

export const StatusIcon = styled(Icon)`
  font-size: 1.6rem;
`;

export const StatusNameStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
`;

export const StatusLabelStyled = styled('div')`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const StatusBarStyled = styled('div')`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  width: 100%;
`;

interface StatusBarItemStyled {
  $isActive?: boolean;
}

const statusBarItemStyles = css`
  background: var(--schema-border);
`;

const statusBarItemActiveStyles = css`
  background: var(--app-primary-bg);
`;

export const StatusBarItemStyled = styled('div')<StatusBarItemStyled>`
  height: 0.8rem;
  border-radius: ${corner};
  ${({ $isActive }) =>
    $isActive ? statusBarItemActiveStyles : statusBarItemStyles};
`;

import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';

import { IconState } from './types';

export const GroupMessageStyled = styled('div')`
  padding-inline: 0.8rem;

  h5 {
    margin: 0;
    width: 100%;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--context-menu-txt);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  hr {
    background: var(--context-menu-hr);
  }
  p {
    color: var(--context-menu-txt);
    text-align: left;
    white-space: pre-line;
    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  a {
    color: var(--context-menu-txt);
  }
  ul {
    margin: 0 -0.8rem;
    padding: 0;
    list-style: none;
  }
`;

export const GroupMessageTopStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const GroupMessageImageStyled = styled('figure')`
  display: inline-flex;

  img,
  svg {
    display: block;
    margin: 0;
    width: 1.4rem;
    height: 1.6rem;
  }
`;

export const GroupMessageDetailStyled = styled('div')``;

const iconStates: Record<IconState, any> = {
  info: css`
    color: var(--context-menu-txt);
  `,
  success: css`
    color: var(--state-success);
  `,
  error: css`
    color: var(--state-error);
  `,
};

export const GroupMessageIcon = styled(Icon)<{
  $state?: IconState;
}>`
  font-size: 2rem;
  ${({ $state }) => ($state ? iconStates[$state] : iconStates.info)};
`;

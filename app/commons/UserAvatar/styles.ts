import styled, { css } from 'commons/Goober';

const userAvatarStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 3rem;
  border-radius: 50%;
  border: 0.1rem solid var(--user-avatar-border);
  background: var(--user-avatar-bg);
  width: 3rem;
  height: 3rem;
  font-size: 1.6rem;
  color: var(--user-avatar-txt);
  text-decoration: none;
  box-shadow: inset 0 0 0 0.2rem var(--user-avatar-shadow);
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const UserAvatarStyled = styled('figure')`
  ${userAvatarStyles};
`;

export const UserAvatarButtonStyled = styled('button')`
  ${userAvatarStyles};
  cursor: pointer;
`;

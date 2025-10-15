import styled from 'commons/Goober';
import { fontApp } from 'commons/utils/variables';

export const AppErrorStyled = styled('section')`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0.8rem;
  width: 100%;
  height: 100vh;
  background: var(--app-error-bg);
  font-family: ${fontApp};
  color: var(--app-error-txt);
  box-sizing: border-box;

  h1 {
    margin: 0 0 3.2rem;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.2;
    text-align: center;
  }
`;

export const LogoStyled = styled('figure')`
  margin: 0 0 3.2rem;

  img {
    display: block;
  }
`;

export const ImageStyled = styled('figure')`
  margin: 0 0 3.2rem;

  img {
    display: block;
    max-width: 20rem;
  }
`;

export const LinkHomeStyled = styled('a')`
  font-size: 1.6rem;
  line-height: 1.2;
  color: inherit;
`;

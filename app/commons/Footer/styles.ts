import styled, { css } from 'commons/Goober';

const typographyStyles = css`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: var(--footer-txt);
`;

export const FooterStyled = styled('footer')`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  row-gap: 1.6rem;
  margin: 0;
  padding: 0.8rem;
  width: 100%;
  min-width: 0;
  text-align: center;
  ${typographyStyles};
`;

export const FooterLinkStyled = styled('a')`
  ${typographyStyles};

  @media (hover: hover) {
    &:hover {
      color: var(--footer-txt--hover);
    }
  }
`;

export const FooterTextStyled = styled('div')``;

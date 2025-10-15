import { formFieldSizes } from 'commons/FormElements/sizes';
import styled, { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { LAYER_NAVBAR_SEARCH } from 'commons/utils/layers';
import { corner, navbarHeight } from 'commons/utils/variables';

const searchOpenedStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${LAYER_NAVBAR_SEARCH};
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.8rem;
  height: ${navbarHeight};
  background: var(--navbar-bg);
`;

export const SearchStyled = styled('div')`
  @media screen and (min-width: ${screenMdAbove}) {
    align-items: center;
    width: 100%;
    min-width: 12.8rem;
    max-width: 28rem;
  }
`;

interface SearchContentProps {
  $isOpen?: boolean;
}

export const SearchContentStyled = styled('div')<SearchContentProps>`
  display: none;
  ${({ $isOpen }) => ($isOpen ? searchOpenedStyles : '')};

  @media screen and (min-width: ${screenMdAbove}) {
    position: static;
    display: flex;
  }
`;

export const SearchFormStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  justify-self: flex-start;
  gap: 0.4rem;
  width: 100%;
  border-radius: ${corner};
  background: var(--search-bg);
`;

export const SearchFormContentStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  justify-self: flex-start;
  flex: 1;
`;

export const SearchLabelStyled = styled('label')``;

export const SearchFieldStyled = styled('input')`
  ${formFieldSizes.md};
  width: 100%;
  border-radius: ${corner};
  border: none;
  background: var(--search-bg);

  &::placeholder {
    color: var(--search-txt--placeholder);
    opacity: 1;
  }
`;

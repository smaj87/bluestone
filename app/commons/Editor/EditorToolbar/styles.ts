import Button from 'commons/Button';
import { secondaryActiveStyles } from 'commons/CallToAction/colors';
import styled from 'commons/Goober';
import { TOOLBAR_HEIGHT_MOVING } from 'commons/Toolbar/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { navbarHeight } from 'commons/utils/variables';

export const EditorToolbarStyled = styled('div')`
  position: sticky;
  top: ${navbarHeight};
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 0.1rem solid var(--editor-toolbar-border);
  background: var(--editor-toolbar-bg);

  @media screen and (min-width: ${screenMdAbove}) {
    top: calc(${navbarHeight} + ${TOOLBAR_HEIGHT_MOVING});
  }
`;

export const EditorToolbarGroupStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  column-gap: 0.4rem;
  padding: 0.4rem;
  max-width: fit-content;
  overflow: hidden;

  &:not(:last-child) {
    border-right: 0.1rem solid var(--editor-toolbar-border);
  }
`;

export const ButtonEditor = styled(Button)`
  ${({ $isActive }) => $isActive && secondaryActiveStyles};
`;

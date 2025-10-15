import { ContextMenuSize } from 'commons/ContextMenu/types';
import { css } from 'commons/Goober';
import { corner } from 'commons/utils/variables';

import { contextMenuEmbededContentStyles } from './stylesEmbeded';

export interface ContextMenuStyledProps {
  $menuSize?: ContextMenuSize;
}

export const contextMenuStyles = css`
  position: fixed;
  padding: 2.4rem 0;
  border-radius: ${corner};
  z-index: 10;

  h3 {
    margin: 0 0 0.8rem;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--context-menu-txt);
  }

  p {
    margin: 0.8rem 0;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--context-menu-txt);
  }

  hr {
    clear: both;
    margin: 1.6rem 0;
    width: 100%;
    height: 0.1rem;
    border: 0;
    background: var(--context-menu-hr);
  }
`;

export const contextMenuColorsStyles = css`
  border: 0.1rem solid var(--context-menu-border);
  background: var(--context-menu-bg);
  color: var(--context-menu-txt);
  filter: drop-shadow(0 0 0.5rem var(--context-menu-shadow));
`;

export const contextMenuContentStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-inline: 0.8rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-transform: none;
  cursor: default;
  overflow-y: auto;

  ${contextMenuEmbededContentStyles}
`;

export const arrowSize = '0.6rem';

const arrowStyles = `${arrowSize} solid var(--context-menu-bg)`;

export const arrowVerticalStyles = css`
  border-right: ${arrowSize} solid transparent;
  border-left: ${arrowSize} solid transparent;
`;

export const arrowHorizontalStyles = css`
  border-top: ${arrowSize} solid transparent;
  border-bottom: ${arrowSize} solid transparent;
`;

export const contextMenuArrowStyles = css`
  position: absolute;
  width: 0;
  height: 0;

  [data-popper-placement^='top'] & {
    ${arrowVerticalStyles};
    bottom: -${arrowSize};
    border-top: ${arrowStyles};
  }

  [data-popper-placement^='bottom'] & {
    ${arrowVerticalStyles};
    top: -${arrowSize};
    border-bottom: ${arrowStyles};
  }

  [data-popper-placement^='left'] & {
    ${arrowHorizontalStyles};
    right: -${arrowSize};
    border-left: ${arrowStyles};
  }

  [data-popper-placement^='right'] & {
    ${arrowHorizontalStyles};
    left: -${arrowSize};
    border-right: ${arrowStyles};
  }
`;

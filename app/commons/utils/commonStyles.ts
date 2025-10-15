import { css } from 'commons/Goober';
import {
  FOCUS_VISIBLE_OUTLINE_CSS,
  FOCUS_VISIBLE_OUTLINE_OFFSET_CSS,
} from 'commons/utils/screenReaders';

export const focusVisibleStyles = css`
  outline: ${FOCUS_VISIBLE_OUTLINE_CSS};
  outline-offset: ${FOCUS_VISIBLE_OUTLINE_OFFSET_CSS};
  box-shadow: 0 0 0 0.1rem var(--focus-border--secondary);
`;

export const focusVisibleInsideStyles = css`
  outline: ${FOCUS_VISIBLE_OUTLINE_CSS};
  outline-offset: -${FOCUS_VISIBLE_OUTLINE_OFFSET_CSS};
  box-shadow: inset 0 0 0 0.3rem var(--focus-border--secondary);
`;

export const focusVisibleInsideSmStyles = css`
  outline: ${FOCUS_VISIBLE_OUTLINE_CSS};
  outline-offset: -${FOCUS_VISIBLE_OUTLINE_OFFSET_CSS};
  box-shadow: inset 0 0 0 0.2rem var(--focus-border--secondary);
`;

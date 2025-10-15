import {
  IS_LAST_SEEN_HIGHLIGHT_ANIMATION_NAME_CSS,
  IS_LAST_SEEN_HIGHLIGHT_ANIMATION_TIME,
  IS_LAST_SEEN_HIGHLIGHT_CLASS,
} from './constants';

export const lastSeenFunc = (basic: string, highlight: string) => `
&.${IS_LAST_SEEN_HIGHLIGHT_CLASS} {
    animation: ${IS_LAST_SEEN_HIGHLIGHT_ANIMATION_NAME_CSS}
      ${IS_LAST_SEEN_HIGHLIGHT_ANIMATION_TIME}ms linear forwards;
  }

  @keyframes ${IS_LAST_SEEN_HIGHLIGHT_ANIMATION_NAME_CSS} {
    0% {
      background: ${basic};
    }
    25% {
      background: ${highlight};
    }
    75% {
      background: ${highlight};
    }
    100% {
      background: ${basic};
    }
  }`;

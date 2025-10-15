import { css } from 'commons/Goober';
import { bouncingDotColors } from 'commons/LoaderBouncing/colors';
import { loaderPositions } from 'commons/LoaderBouncing/position';
import { bouncingDotSizes } from 'commons/LoaderBouncing/sizes';
import { loaderDotStyles } from 'commons/LoaderBouncing/styles';

import {
  BUTTON_EMBEDED_CLASS,
  BUTTON_EMBEDED_FETCHING_CLASS,
  BUTTON_EMBEDED_LABEL_CLASS,
  BUTTON_EMBEDED_LOADER_CLASS,
  BUTTON_EMBEDED_LOADER_DOT_CLASS,
  EMBEDED_ACTIONS_CLASS,
  EMBEDED_CONTENT_CLASS,
} from './constants';

export const contextMenuEmbededContentStyles = css`
  .${EMBEDED_CONTENT_CLASS} {
    padding-inline: 2.4rem;
  }

  .${BUTTON_EMBEDED_CLASS} {
    position: relative;
    padding: 0;
    font-size: 1.3rem;
    line-height: 2rem;
    color: var(--context-menu-txt);
    text-decoration: underline;
    text-decoration-thickness: 0.1rem;
    cursor: pointer;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        text-decoration-thickness: 0.2rem;
      }
    }

    &:disabled {
      color: var(--infobar-txt--disabled);
    }

    .${BUTTON_EMBEDED_LOADER_CLASS} {
      display: none;
    }

    &.${BUTTON_EMBEDED_FETCHING_CLASS} {
      pointer-events: none;
      .${BUTTON_EMBEDED_LABEL_CLASS} {
        opacity: 0;
      }
      .${BUTTON_EMBEDED_LOADER_CLASS} {
        ${() => loaderPositions.absolute};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .${BUTTON_EMBEDED_LOADER_DOT_CLASS} {
        ${() => bouncingDotColors.infobar};
        ${() => bouncingDotSizes.sm};
        ${loaderDotStyles};
      }
    }
  }

  .${EMBEDED_ACTIONS_CLASS} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

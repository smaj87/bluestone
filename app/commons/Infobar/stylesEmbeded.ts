import { css } from 'commons/Goober';
import { loaderPositions } from 'commons/LoaderBouncing/position';
import { bouncingDotSizes } from 'commons/LoaderBouncing/sizes';
import { loaderDotStyles } from 'commons/LoaderBouncing/styles';

import {
  BUTTON_EMBEDED_CLASS,
  BUTTON_EMBEDED_FETCHING_CLASS,
  BUTTON_EMBEDED_LABEL_CLASS,
  BUTTON_EMBEDED_LOADER_CLASS,
  BUTTON_EMBEDED_LOADER_DOT_CLASS,
  EMBEDDED_ACTIONS_CLASS,
  EMBEDDED_CONTENT_CLASS,
  EMBEDDED_DETAIL_CLASS,
} from './constants';

export const infobarEmbeddedContentStyles = css`
  .${EMBEDDED_CONTENT_CLASS}, .${EMBEDDED_DETAIL_CLASS} {
    display: flex;
    justify-content: flex-start;
    gap: 0.8rem;
    min-width: 0;
  }

  .${EMBEDDED_CONTENT_CLASS} {
    flex-wrap: wrap;
    align-items: center;
    flex: 1;

    [data-plugin='icon'] {
      display: none;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
    }
  }

  .${BUTTON_EMBEDED_CLASS} {
    position: relative;
    padding: 0;
    font-size: 1.3rem;
    line-height: 2rem;
    color: inherit;
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
        ${() => bouncingDotSizes.sm};
        ${loaderDotStyles};
        background: currentColor;
      }
    }
  }

  .${EMBEDDED_ACTIONS_CLASS} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 0.8rem;
    row-gap: 0.4rem;
    margin: 0;
    padding: 0;
    max-width: 100%;
    list-style: none;
  }
`;

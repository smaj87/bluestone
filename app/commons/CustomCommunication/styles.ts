import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { fontApp } from 'commons/utils/variables';

import {
  CC_ACTIONS_CLASS,
  CC_ADDITIONAL_CLASS,
  CC_CONTENT_CLASS,
  CC_DESCRIPTION_CLASS,
  CC_DETAILS_CLASS,
  CC_IMAGE_CLASS,
  CC_SIZE_LG_CLASS,
  CC_SIZE_MD_CLASS,
  CC_SIZE_SM_CLASS,
  CC_WYSIWYG_CLASS,
} from './constants';

export const customCommunicationStyles = css`
  .sr-visually-hidden,
  .sr-visually-hidden:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .${CC_CONTENT_CLASS} {
    width: 100%;

    @media screen and (min-width: ${screenMdAbove}) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: stretch;
      column-gap: 2.4rem;
    }
  }

  .${CC_IMAGE_CLASS} {
    display: none;

    @media screen and (min-width: ${screenMdAbove}) {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      overflow: hidden;

      &.--${CC_IMAGE_CLASS}-${CC_SIZE_SM_CLASS} {
        width: 9.6rem;
        height: 9.6rem;
      }

      &.--${CC_IMAGE_CLASS}-${CC_SIZE_MD_CLASS} {
        width: 14.4rem;
        height: 14.4rem;
      }

      &.--${CC_IMAGE_CLASS}-${CC_SIZE_LG_CLASS} {
        width: 20rem;
        height: 20rem;
      }

      img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      svg {
        width: 100%;
      }
    }
  }

  .${CC_DETAILS_CLASS} {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    flex: 1;
    margin: 0 auto;
    padding: 2.4rem 1.6rem;
    width: 100%;
    max-width: 36rem;

    @media screen and (min-width: ${screenMdAbove}) {
      padding: 0;
      max-width: 100%;
    }
  }

  .${CC_DESCRIPTION_CLASS} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    row-gap: 1.6rem;
    flex: 1;
    padding-right: 2.4rem;
    width: 100%;
    min-width: 0;
    max-width: 102.4rem;
  }

  .${CC_WYSIWYG_CLASS} {
    flex: 1;

    &.--${CC_WYSIWYG_CLASS}-${CC_SIZE_SM_CLASS} {
      font-size: 1.2rem;

      h3 {
        font-size: 1.4rem;

        @media screen and (min-width: ${screenMdAbove}) {
          font-size: 1.6rem;
        }
      }

      p,
      li {
        font-size: 1.2rem;
      }
    }

    &.--${CC_WYSIWYG_CLASS}-${CC_SIZE_MD_CLASS} {
      font-size: 1.4rem;

      h3 {
        font-size: 1.6rem;
        @media screen and (min-width: ${screenMdAbove}) {
          font-size: 2rem;
        }
      }

      p,
      li {
        font-size: 1.4rem;
      }
    }

    &.--${CC_WYSIWYG_CLASS}-${CC_SIZE_LG_CLASS} {
      font-size: 1.6rem;

      h3 {
        font-size: 1.8rem;

        @media screen and (min-width: ${screenMdAbove}) {
          font-size: 2.4rem;
        }
      }

      p,
      li {
        font-size: 1.6rem;
      }
    }

    h3 {
      margin: 0 0 1.6rem;
      font-family: ${fontApp};
      font-weight: 700;
      line-height: 1.2;
      color: var(--cc-txt--primary);
      text-align: left;

      &:empty {
        display: none;
      }
    }

    p,
    li {
      width: 100%;
      font-family: ${fontApp};
      font-weight: 400;
      line-height: 1.5;
      color: var(--cc-txt--primary);
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }

      a {
        color: inherit;
        text-decoration: underline;
        text-decoration-thickness: 0.1rem;
      }

      b {
        font-weight: 500;
      }

      mark {
        padding: 0.2rem 0.4rem;
        background: var(--cc-mark-bg);
        font-weight: 700;
        color: var(--cc-mark-txt);
        text-transform: uppercase;
      }
    }

    p {
      margin: 0;

      + ul,
      + ol {
        margin-top: 1.6rem;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        position: relative;
        padding-left: 3.2rem;

        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-80%) rotate(-45deg);
          width: 1.5rem;
          height: 0.7rem;
          border-width: 0 0 0.2rem 0.2rem;
          border-style: solid;
          border-color: var(--cc-component-color-special);
        }
      }
    }

    ol {
      margin: 0;
      padding-left: 2.4rem;
    }
  }

  .${CC_ADDITIONAL_CLASS} {
    font-family: ${fontApp};
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.2;
    color: var(--cc-txt--secondary);

    p {
      margin: 0;
      font-size: inherit;
      line-height: inherit;
    }

    a {
      color: inherit;

      @media (hover: hover) {
        &:hover {
          text-decoration-thickness: 0.2rem;
        }
      }
    }
  }

  .${CC_ACTIONS_CLASS} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 0.8rem;
    row-gap: 0.8rem;
    width: 100%;
    background: var(--cc-component-bg);

    @media screen and (min-width: ${screenMdAbove}) {
      margin-inline: 0;
      width: 100%;
    }
  }
`;

import { defaultHoverColors, defaultStyles } from 'commons/CallToAction/colors';
import { sizeMd } from 'commons/CallToAction/sizes';
import { ctaStyles } from 'commons/CallToAction/styles';
import {
  contextMenuColorsStyles,
  contextMenuContentStyles,
  contextMenuStyles,
} from 'commons/ContextMenu/styles';
import styled from 'commons/Goober';
import { ctaStyles as ctaGroupStyles } from 'commons/GroupActions/styles';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

import { FONT_SIZES } from './constants';
import {
  EDITOR_CONTEXT_MENU_BUTTON_CLASS,
  EDITOR_CONTEXT_MENU_CLASS,
  EDITOR_CONTEXT_MENU_TO_LEFT_CLASS,
  EDITOR_IMAGE_CONTAINER_CLASS,
  EDITOR_IMAGE_EDIT_BUTTON_CLASS,
  EDITOR_IMAGE_RESIZE_CORNER_BOTTOM_LEFT_CLASS,
  EDITOR_IMAGE_RESIZE_CORNER_BOTTOM_RIGHT_CLASS,
  EDITOR_IMAGE_RESIZE_CORNER_CLASS,
  EDITOR_IMAGE_RESIZE_CORNER_TOP_LEFT_CLASS,
  EDITOR_IMAGE_RESIZE_CORNER_TOP_RIGHT_CLASS,
  IMAGE_IS_UPLOADING_CLASS,
  IMAGE_IS_UPLOADING_ERROR_CLASS,
  SQUIRE_BLOCKQUOTE_HIDDEN_CLASS,
  SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS,
} from './Squire/Constants';

// to są style doklejane przy wysyłce do HTMLA wiadomosci
export const defaultNewmailStyles = ``;

export const EditorWrapperStyled = styled('div')`
  width: 100%;
  min-width: 0;
`;

export const EditorStyled = styled('div')`
  position: relative;
  display: block;
  margin-top: -0.1rem;
  padding: 0.8rem;
  border-radius: 0;
  border: 0.1rem solid var(--editor-border);
  min-width: 100%;
  min-height: 32rem;
  background: var(--editor-bg);
  font-size: ${FONT_SIZES.md};
  line-height: normal;
  overflow: auto;

  @media screen and (min-width: ${screenMdAbove}) {
    border-radius: 0 0 ${corner} ${corner};
  }

  ${defaultNewmailStyles}

  img {
    display: inline-block;
  }

  .${EDITOR_CONTEXT_MENU_CLASS} {
    ${contextMenuStyles};
    ${contextMenuContentStyles};
    ${contextMenuColorsStyles};
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-block: 0.8rem;
    width: fit-content;
  }

  .${EDITOR_CONTEXT_MENU_TO_LEFT_CLASS} {
    left: 0;
  }

  .${EDITOR_CONTEXT_MENU_BUTTON_CLASS} {
    ${ctaStyles};
    ${sizeMd};
    ${ctaGroupStyles};
    white-space: nowrap;
    cursor: pointer;
  }

  .${EDITOR_IMAGE_CONTAINER_CLASS} {
    position: relative;
    display: inline-flex;
    width: fit-content;
    height: fit-content;
    outline: 0.2rem solid var(--editor-img-border);

    * {
      &::selection {
        background: transparent;
      }
    }
  }

  .${EDITOR_IMAGE_EDIT_BUTTON_CLASS} {
    ${sizeMd};
    position: absolute;
    top: 0;
    left: min(50%, 50vw);
    transform: translate3d(-50%, -50%, 0);
    border-radius: ${corner};
    background: var(--editor-img-btn-bg);
    color: var(--editor-img-btn-txt);
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background: var(--editor-img-btn-bg--hover);
      }
    }
  }

  .${EDITOR_IMAGE_RESIZE_CORNER_CLASS} {
    position: absolute;
    z-index: 10;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: ${corner};
    background: var(--editor-img-btn-bg);
    box-shadow: 0 0.2rem 0.2rem 0 var(--editor-img-btn-shadow);

    @media (hover: hover) {
      &:hover {
        background: var(--editor-img-btn-bg--hover);
      }
    }
  }

  .${EDITOR_IMAGE_RESIZE_CORNER_TOP_LEFT_CLASS} {
    top: 0;
    left: 0;
    transform: translate3d(-50%, -50%, 0);
    cursor: nwse-resize;
  }

  .${EDITOR_IMAGE_RESIZE_CORNER_TOP_RIGHT_CLASS} {
    top: 0;
    right: 0;
    transform: translate3d(50%, -50%, 0);
    cursor: nesw-resize;
  }

  .${EDITOR_IMAGE_RESIZE_CORNER_BOTTOM_RIGHT_CLASS} {
    bottom: 0;
    right: 0;
    transform: translate3d(50%, 50%, 0);
    cursor: nwse-resize;
  }

  .${EDITOR_IMAGE_RESIZE_CORNER_BOTTOM_LEFT_CLASS} {
    bottom: 0;
    left: 0;
    transform: translate3d(-50%, 50%, 0);
    cursor: nesw-resize;
  }

  .${SQUIRE_BLOCKQUOTE_HIDDEN_CLASS} {
    display: none;
  }

  .${SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS} {
    ${ctaStyles};
    ${defaultStyles};
    ${sizeMd};
    margin-block: 0.8rem;
    font-size: 2rem;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        ${defaultHoverColors};
      }
    }
  }

  .${IMAGE_IS_UPLOADING_CLASS} {
    // TODO - do dopracowania
    opacity: 0.6;
    filter: blur(0.1rem);
  }

  .${IMAGE_IS_UPLOADING_ERROR_CLASS} {
    // TODO - do dopracowania - propozycja - nie dodawanie zdjęcia gdy wystąpił błąd, jedynie komunikat/infobar nad EditorToolbar
  }
`;

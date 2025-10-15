export const DOCUMENT_POSITION_PRECEDING = 2; // Node.DOCUMENT_POSITION_PRECEDING
export const ELEMENT_NODE = 1; // Node.ELEMENT_NODE;
export const TEXT_NODE = 3; // Node.TEXT_NODE;
export const DOCUMENT_NODE = 9; // Node.DOCUMENT_NODE;
export const DOCUMENT_FRAGMENT_NODE = 11; // Node.DOCUMENT_FRAGMENT_NODE;

export const ZWS = '\u200B';

export const ua = navigator.userAgent;

export const isMac = /Mac OS X/.test(ua);
export const isWin = /Windows NT/.test(ua);
export const isIOS =
  /iP(?:ad|hone|od)/.test(ua) || (isMac && !!navigator.maxTouchPoints);
export const isAndroid = /Android/.test(ua);

export const isGecko = /Gecko\//.test(ua);
export const isLegacyEdge = /Edge\//.test(ua);
export const isWebKit = !isLegacyEdge && /WebKit\//.test(ua);

export const ctrlKey = isMac || isIOS ? 'Meta-' : 'Ctrl-';

export const cantFocusEmptyTextNodes = isWebKit;

export const isTouchDevice = () =>
  'ontouchstart' in window || navigator.maxTouchPoints > 0;

export const supportsInputEvents =
  'onbeforeinput' in document && 'inputType' in new InputEvent('input');

// Use [^ \t\r\n] instead of \S so that nbsp does not count as white-space
export const notWS = /[^ \t\r\n]/;

export const IMAGE_IS_UPLOADING_CLASS = 'is-uploading';
export const IMAGE_IS_UPLOADING_ERROR_CLASS = 'is-uploading-error';

export const EDITOR_IMAGE_RESIZE_CORNER_CLASS = 'editor-resize-corner';
export const EDITOR_IMAGE_RESIZE_CORNER_TOP_LEFT_CLASS =
  'editor-resize-corner--top-left';
export const EDITOR_IMAGE_RESIZE_CORNER_TOP_RIGHT_CLASS =
  'editor-resize-corner--top-right';
export const EDITOR_IMAGE_RESIZE_CORNER_BOTTOM_RIGHT_CLASS =
  'editor-resize-corner--bottom-right';
export const EDITOR_IMAGE_RESIZE_CORNER_BOTTOM_LEFT_CLASS =
  'editor-resize-corner--bottom-left';
export const EDITOR_IMAGE_EDIT_BUTTON_CLASS = 'editor-btn-image-edit';
export const EDITOR_IMAGE_CONTAINER_CLASS = 'editor-image-container';

export const EDITOR_CONTEXT_MENU_CLASS = 'editor-context-menu';
export const EDITOR_CONTEXT_MENU_TO_LEFT_CLASS = 'editor-context-menu--to-left';
export const EDITOR_CONTEXT_MENU_BUTTON_CLASS = 'editor-context-menu-button';

export const IMG_MIN_WIDTH = 31;
export const IMG_MIN_HEIGHT = 31;

// 3 MB maksymalnie mogą wazyc aby nie wyswietlil sie modal z konwersja obrazka
export const IMG_MIN_SIZE_TO_OPEN_CONVERSION_MODAL = 2097152;

export const SIGN_CLASS = 'js_WEBMAIL_SIGN_CONTAINER';
export const SIGN_SEPARATOR_ID = 'sign-separator';

export const VARIANTS = {
  LeftTop: '1',
  RightTop: '2',
  LeftDown: '3',
  RightDown: '4',
};

export const SQUIRE_IMG_ID_KEY = 'data-squire-id';
export const SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS =
  'data-squire-blockquote-toggle-button';
export const SQUIRE_BLOCKQUOTE_HIDDEN_CLASS = 'data-squire-blockquote-hidden';
export const SQUIRE_ELEMENT_TYPE_KEY = 'data-squire-type';
export const SQUIRE_EXTERNAL_ATTACHMENTS_TITLE_ID =
  'SQUIRE_EXTERNAL_ATTACHMENTS_TITLE_ID';
export const SQUIRE_EXTERNAL_ATTACHMENTS_CONTAINER_ID =
  'SQUIRE_EXTERNAL_ATTACHMENTS_CONTAINER_ID';
export const SQUIRE_DISC_CLOSE_KEY = 'data-squire-disc-close';
export const SQUIRE_EXTERNAL_ATTACHMENTS_IMAGE_KEY =
  'data-squire-external-attachments-image';

export const EDITOR_ELEMENT_ID = 'newmail-editor';

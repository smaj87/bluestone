import getUniqueId from 'commons/utils/uniqueId';

import { FONT_SIZES, FONTS, REGEX_FONT_FAMILY } from './constants';
import {
  SQUIRE_BLOCKQUOTE_HIDDEN_CLASS,
  SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS,
  SQUIRE_DISC_CLOSE_KEY,
  SQUIRE_ELEMENT_TYPE_KEY,
  SQUIRE_EXTERNAL_ATTACHMENTS_CONTAINER_ID,
  SQUIRE_EXTERNAL_ATTACHMENTS_TITLE_ID,
  SQUIRE_IMG_ID_KEY,
} from './Squire/Constants';
import { FontInfo } from './types';

export const getEditorId = () => getUniqueId('editor');

export const srcToBase64Url = (
  src: string,
  scale = 1,
  // maxWidth = 600,
  // maxHeight = 600,
  quality = 0.9,
) =>
  new Promise((resolve, reject = () => {}) => {
    const img = document.createElement('img');

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      // const scale =
      //   img.width > maxWidth || img.height > maxHeight
      //     ? Math.min(maxWidth / img.width, maxHeight / img.height)
      //     : 1;

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx?.scale(scale, scale);

      // firefox nie obsluguje imageSmoothingQuality
      if (ctx?.imageSmoothingQuality) {
        ctx.imageSmoothingQuality = 'high';
      }

      ctx?.drawImage(img, 0, 0);

      resolve(canvas.toDataURL('image/jpeg', quality));
    };

    img.onerror = reject;
    img.onabort = reject;

    img.src = src;
  });

export function clearHtmlContent(content: string, isSaving = false) {
  const contentHtml = new DOMParser().parseFromString(
    content || '',
    'text/html',
  );

  if (!isSaving) {
    const squireImgs = contentHtml.querySelectorAll(`[${SQUIRE_IMG_ID_KEY}]`);
    squireImgs.forEach((img) => img.removeAttribute(SQUIRE_IMG_ID_KEY));

    const squireElementTypes = contentHtml.querySelectorAll(
      `[${SQUIRE_ELEMENT_TYPE_KEY}]`,
    );

    squireElementTypes.forEach((element) =>
      element.removeAttribute(SQUIRE_ELEMENT_TYPE_KEY),
    );

    const discCloses = contentHtml.querySelectorAll(
      `[${SQUIRE_DISC_CLOSE_KEY}]`,
    );

    discCloses.forEach((element) => element.remove());

    const externals = contentHtml.querySelectorAll(
      `#${SQUIRE_EXTERNAL_ATTACHMENTS_TITLE_ID}, #${SQUIRE_EXTERNAL_ATTACHMENTS_CONTAINER_ID}`,
    );

    externals.forEach((element) => element.removeAttribute('id'));
  }

  // obsluga chowania blockquote
  const squireBlockquotes = contentHtml.querySelectorAll(
    `.${SQUIRE_BLOCKQUOTE_HIDDEN_CLASS}`,
  );

  squireBlockquotes.forEach((blockquote) =>
    blockquote.classList.remove(SQUIRE_BLOCKQUOTE_HIDDEN_CLASS),
  );

  const squireShowBlockquoteButtons = contentHtml.querySelectorAll(
    `[${SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS}]`,
  );

  squireShowBlockquoteButtons.forEach((button) => button.remove());

  return contentHtml.body.innerHTML;
}

// Squire zwraca dziwnie te font dlatego regexem to filtrujemy
export const convertSquireFontFamilyToFontFamily = (
  font?: string,
): FontInfo['fontFamily'] => {
  if (!font) {
    return 'noSerif';
  }

  const result = REGEX_FONT_FAMILY.exec(font);

  if (!result) {
    return undefined;
  }

  let fontFace = result[1];

  if (fontFace.startsWith('"')) {
    fontFace = fontFace.slice(1, -1);
  }

  return (Object.keys(FONTS).find(
    (key) => FONTS[key as keyof typeof FONTS] === fontFace,
  ) || 'noSerif') as FontInfo['fontFamily'];
};

export const convertSquireFontSizeToFontSize = (
  fontSize?: string,
): FontInfo['fontSize'] => {
  if (!fontSize) {
    return undefined;
  }

  return (Object.keys(FONT_SIZES).find(
    (key) => FONT_SIZES[key as keyof typeof FONT_SIZES] === fontSize,
  ) || 'md') as FontInfo['fontSize'];
};

export const rangeFullyContainsNode = (range: Range, node: Node) => {
  const nodeRange = document.createRange();
  nodeRange.selectNode(node);

  return (
    range.compareBoundaryPoints(Range.START_TO_START, nodeRange) <= 0 &&
    range.compareBoundaryPoints(Range.END_TO_END, nodeRange) >= 0
  );
};

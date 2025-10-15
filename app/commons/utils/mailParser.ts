import DOMPurify from 'dompurify';
import LinkifyIt from 'linkify-it';
import { Email } from 'types';

import {
  ReadMailNormalized,
  ReadMailParsed,
} from 'commons/share_app/containers/ReadMail/types';
import { encrypt } from 'commons/utils/simpleCrypt';
import { isObject } from 'commons/utils/tinyLodash';

import {
  NEW_MAIL_TO_URL_NAME,
  NEW_MAIL_URL_NAME,
} from 'containers/NewMail/constants';

interface Doctype {
  publicId: string;
  systemId: string;
  name: string;
}

export const escapeHtml = (string: string) =>
  string.replace(/[<>&]/gim, (i) => {
    const matches: Record<string, string> = {
      '&': 'amp',
      '<': 'lt',
      '>': 'gt',
    };

    return matches[i] ? `&${matches[i]};` : `&#${i.charCodeAt(0)};`;
  });

export const unescapeHtml = (string: string) => {
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.childNodes.length === 0 ? '' : div.childNodes[0].nodeValue || '';
};

export const linkifyIt = new LinkifyIt(
  {},
  {
    fuzzyEmail: false,
    fuzzyIP: false,
    fuzzyLink: true,
  },
);

export const fragToString = (frag: HTMLElement | string) => {
  let result = '';

  if (frag instanceof HTMLElement) {
    frag.childNodes.forEach((node: ChildNode) => {
      result += (node as HTMLElement).outerHTML || node.nodeValue;
    });
  } else {
    result = frag;
  }

  return result;
};

export const createLinks = (string: string, withEscape = false) => {
  const matches = linkifyIt.match(string);

  if (matches) {
    const frag = document.createElement('span');
    let lastIndex = 0;
    let isAnyLinks = false;

    matches.forEach((match) => {
      if (!linkifyBlackList.includes(match.raw)) {
        if (match.index > lastIndex) {
          const html = string.substring(lastIndex, match.index);

          frag.appendChild(
            document.createTextNode(withEscape ? escapeHtml(html) : html),
          );
        }

        const a = document.createElement('a');
        a.appendChild(
          document.createTextNode(
            withEscape ? escapeHtml(match.text) : match.text,
          ),
        );
        a.href = match.url;
        a.target = '_blank';

        frag.appendChild(a);

        ({ lastIndex } = match);
        isAnyLinks = true;
      }
    });

    if (isAnyLinks) {
      const html = string.substring(lastIndex);

      if (html) {
        frag.appendChild(
          document.createTextNode(withEscape ? escapeHtml(html) : html),
        );
      }

      return frag;
    }
  }

  return withEscape ? escapeHtml(string) : string;
};

export const parseMailTo = (mailToString: string) => {
  let result = '';
  const arr = mailToString.split('?');

  if (arr.length) {
    const normalize = (data: string[], isMail = true): (Email | string)[] =>
      data
        .map((d) => {
          let v = d;

          try {
            v = decodeURIComponent(v);
          } catch {}

          const value = v.trim();
          return isMail ? { name: '', email: value } : value;
        })
        .filter((v) => (isObject(v) ? v.email : v));

    const toMails = normalize(arr[0].split(','));
    const querySearchArr = arr[1] ? arr[1].split('&') : [];
    const mailToData: Record<string, string | Email | (Email | string)[]> = {
      to: toMails,
    };

    querySearchArr.forEach((q) => {
      if (/^(cc|bcc|subject|body)=/gi.test(q)) {
        const [key, value] = q.split('=');
        const isMails = ['cc', 'bcc'].includes(key);
        const data = normalize(value.trim().split(','), isMails);

        mailToData[key] = isMails ? data : data[0];
      }
    });

    result = `/${NEW_MAIL_URL_NAME}/_subtype/${NEW_MAIL_TO_URL_NAME}/_encryptedEmails/${encrypt(
      '',
      JSON.stringify(mailToData),
    )}`;
  }

  return result;
};

export const closest = (node: Element, tagNames: string[]) => {
  let currentNode = node;

  while (currentNode) {
    if (tagNames.indexOf(currentNode.tagName) >= 0) {
      return currentNode;
    }

    currentNode = currentNode.parentNode as Element;
  }

  return null;
};

export const getDoctype = (doctype: Doctype | null) => {
  let result = '<!DOCTYPE html>';

  if (doctype) {
    const publicId = doctype.publicId ? ` PUBLIC "${doctype.publicId} "` : '';
    const systemId = !doctype.publicId && doctype.systemId ? 'SYSTEM' : '';
    const systemIdValue = doctype.systemId ? `"${doctype.systemId}"` : '';

    result = `<!DOCTYPE ${doctype.name}${publicId}${systemId}${systemIdValue}>`;
  }

  return result;
};

const linkifyBlackList = ['m.in', 'm.st'];

export default class MailParser {
  /**
   * Bibliografia?:
   * selektory atrybutowe (wildcardy) https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
   * DOMParser: https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
   * implementation.createHTMLDocument: https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument
   */

  private _private_rawMail;

  private _private_isAnyBlockedImages = false;

  private _private_isAnyImages = false;

  private _private_blockImages = true;

  private _private_isRaw = false;

  private _private_whiteListRegExp = new RegExp(
    process.env.BLOCK_IMAGES_WHITE_LIST_REGEXP!,
    'i',
  );

  private _private_mailDOMObject;

  constructor(rawMail: Partial<ReadMailNormalized>) {
    this._private_rawMail = rawMail;

    this._private_mailDOMObject = new DOMParser().parseFromString(
      rawMail.html || '',
      'text/html',
    );

    DOMPurify.removeAllHooks();

    DOMPurify.addHook('afterSanitizeAttributes', (node) => {
      if (node instanceof HTMLAnchorElement) {
        if (!this._private_isRaw && /^mailto:/i.test(node.href)) {
          const mailto = parseMailTo(
            node.href.replace(/^\s*mailto:|\s*$/i, ''),
          );

          if (mailto) {
            node.href = mailto; // eslint-disable-line
          }
        }

        node.setAttribute('target', '_blank');
      } else if (node instanceof HTMLImageElement) {
        if (this._private_blockImages) {
          this._private_isAnyImages = true;

          if (!this._private_whiteListRegExp.test(node.src)) {
            this._private_isAnyBlockedImages = true;

            node.dataset.url = node.src; // eslint-disable-line
            node.dataset.display = node.style.display; // eslint-disable-line
            node.style.display = 'none'; // eslint-disable-line
            node.removeAttribute('src');
          }
        }

        if (node.dataset.isopen === '1') {
          node.dataset.zerogifurl = node.src; // eslint-disable-line
          node.dataset.display = node.style.display; // eslint-disable-line
          node.style.display = 'none'; // eslint-disable-line
          node.removeAttribute('src');
        }
      } else if (node instanceof HTMLVideoElement) {
        if (node.autoplay) {
          node.setAttribute('muted', 'muted');
        }
      }
    });

    DOMPurify.addHook('afterSanitizeElements', (node) => {
      if (node instanceof HTMLAnchorElement && !node.href) {
        const span = document.createElement('span');
        span.innerHTML = node.innerHTML;

        node.parentNode?.replaceChild?.(span, node);
      } else if (
        node.nodeType === Node.TEXT_NODE &&
        !closest(node as Element, ['STYLE', 'A']) &&
        node.textContent?.replace?.(/\s+/gi, '')
      ) {
        const frag = createLinks(node.textContent);

        if (frag instanceof HTMLSpanElement) {
          node.parentNode?.replaceChild?.(frag, node);
        }
      }
    });

    DOMPurify.addHook('uponSanitizeElement', (node, data) => {
      if (data.tagName === 'style') {
        // @smaj - komentuje, problem z mailingami ktore uzywja display: none do zarzazania mobile
        // eslint-disable-next-line no-param-reassign
        // node.textContent =
        //   node.textContent?.replace(
        //     /(?:display\s*:\s*none|visibility\s*:\s*hidden|position\s*:\s*(?:relative|absolute)|\b(?:top|left)\s*:\s*[^;]+);?/gi,
        //     '',
        //   ) || '';

        // rm background-image
        // eslint-disable-next-line no-param-reassign
        node.textContent =
          node.textContent
            ?.replace(/background-image\s*:\s*url\([^)]+\)\s*;?/gi, '')
            ?.replace(/background\s*:\s*[^;]*url\([^)]+\)[^;]*;?/gi, '') || '';
      }
    });

    DOMPurify.addHook('uponSanitizeAttribute', (_, data) => {
      if (data.attrName === 'style') {
        // eslint-disable-next-line no-param-reassign
        data.attrValue = data.attrValue
          .replace(/background-image\s*:\s*url\([^)]+\)\s*;?/gi, '')
          .replace(/background\s*:\s*[^;]*url\([^)]+\)[^;]*;?/gi, '');
      }
    });
  }

  /**
   * parsedMail
   * - metoda zwraca przeparsowane body maila, doctype, encoding
   */
  getParsedMail(isShowImages = false, isGlobalShowImages = false) {
    try {
      const isMailing =
        (this._private_rawMail.mlid || this._private_rawMail.ml_id || -1) > -1;

      let content: ReadMailParsed['content'];

      if (this._private_rawMail.html) {
        this._private_blockImages = !(isMailing || isGlobalShowImages);

        const body = DOMPurify.sanitize(this._private_rawMail.html!, {
          FORCE_BODY: true,
          FORBID_ATTR: ['background'],
          ADD_TAGS: [], // allowed tags
        }).trim();

        content = {
          doctype: getDoctype(this._private_mailDOMObject?.doctype),
          encoding: this._private_mailDOMObject?.characterSet || 'UTF-8',
          isAnyImages: this._private_isAnyImages,
          isAnyBlockedImages: this._private_isAnyBlockedImages,
          body,
          raw: '',
        };

        this._private_blockImages = false;
        this._private_isRaw = true;

        content.raw = DOMPurify.sanitize(this._private_rawMail.html!, {
          FORCE_BODY: true,
          FORBID_ATTR: ['background'],
          ADD_TAGS: ['link'],
        }).trim();
      } else {
        const text = this._private_rawMail.text || '';

        content = {
          doctype: '',
          encoding: '',
          isAnyImages: false,
          isAnyBlockedImages: false,
          body: `<pre>${fragToString(createLinks(text, true))}</pre>`,
          raw: `<pre>${text}</pre>`,
        };
      }

      return {
        ...this._private_rawMail,
        text: undefined,
        html: undefined,
        isMailing,
        isShowImages: isMailing || isShowImages || isGlobalShowImages,
        content,
      };
    } catch {
      return null;
    }
  }
}

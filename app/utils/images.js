import { SQUIRE_IMG_ID_KEY } from 'commons/Editor/Squire/Constants';
import { pickBy } from 'commons/utils/tinyLodash';

export function getUrl(kid, filename, data, isInline = false) {
  const encodedParams = window.btoa(
    unescape(encodeURIComponent(JSON.stringify(data))),
  );

  const url = `${
    process.env.DOWNLOAD_API_URL
  }/${kid}/${encodedParams}/${encodeURIComponent(filename)}`;

  if (isInline) {
    return `${url}?inline`;
  }

  return url;
}

export function getDownloadUrl(attachments) {
  let pathname = '';

  if (attachments.length === 1) {
    if (attachments[0].mid) {
      pathname = `${attachments[0].mid}/${attachments[0].partPath || attachments[0]['part-path']}`;
    } else if (attachments[0].blobId) {
      const encodedParams = window.btoa(
        encodeURIComponent(
          JSON.stringify({
            path: attachments[0].blobId,
            contentType: attachments[0].type,
            size: attachments[0].size,
            filename: attachments[0].filename,
          }),
        ),
      );

      pathname = `draft/${encodedParams}`;
    }
  } else {
    pathname = `zip/${attachments
      .map((a) => `${a.mid}:${a.partPath || a['part-path']}`)
      .join(',')}`;
  }

  return `${process.env.DOWNLOAD_API_URL}/v2/${pathname}`;
}

export function canAppendChild(el) {
  const illegals = [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ];
  const elName = el && el.nodeName ? el.nodeName.toLowerCase() : 'area'; // area - one of illegal

  return !illegals.includes(elName);
}

export function getInsertImageNode(node) {
  let result = false;

  if (canAppendChild(node)) {
    result = node;
  } else if (node && node.parentNode) {
    result = getInsertImageNode(node.parentNode);
  }

  return result;
}

export function removeNotExistingEmbedded(embeddedAttachments, content) {
  let result;

  if (content) {
    result = pickBy(
      embeddedAttachments,
      (r) =>
        content.indexOf(`${SQUIRE_IMG_ID_KEY}="${r.id}"`) >= 0 ||
        content.indexOf(`src="${r.contentUrl || r['content-url']}"`) >= 0,
    );
  }

  return result;
}

export const getContentWithImageUrls = (content, attachments) => {
  const dom = new DOMParser().parseFromString(content, 'text/html');
  const images = dom.querySelectorAll('img');

  const base64Regex = /^data:image\/[a-z]+;base64,/;

  if (images.length > 0) {
    images.forEach((image) => {
      const isBase64 = base64Regex.test(image.src);

      if (isBase64) {
        const attachment = attachments.find(
          (a) => a.id === image?.getAttribute(SQUIRE_IMG_ID_KEY),
        );

        if (attachment) {
          // eslint-disable-next-line no-param-reassign
          image.src = attachment.contentUrl;
        }
      }
    });
  }

  return dom.body.innerHTML;
};

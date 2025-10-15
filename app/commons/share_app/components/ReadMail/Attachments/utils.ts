import { IconImage } from 'commons/Icon/iconImage';

import { FileType, GroupName } from './types';

export const getAttachmentType = (
  contentType: string | undefined = '',
): IconImage => {
  let result: IconImage = 'note';
  const splitedContentType = contentType.split('/');

  if (splitedContentType.length === 2) {
    const groupName = splitedContentType[0] as GroupName;
    const fileType = splitedContentType[1] as FileType;

    const typeMap: Record<GroupName, Record<string, IconImage>> = {
      application: {
        msword: 'article',
        pdf: 'pdf',
        vcard: 'badge',
        'vnd.ms-excel': 'window',
        'vnd.ms-powerpoint': 'jamboard',
        'vnd.oasis.opendocument.text': 'textFile',
        'vnd.oasis.opendocument.spreadsheet': 'window',
        'vnd.oasis.opendocument.presentation': 'jamboard',
        'vnd.openxmlformats-officedocument.presentationml.presentation':
          'jamboard',
        'vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'window',
        'vnd.openxmlformats-officedocument.wordprocessingml.document':
          'article',
        'x-7z-compressed': 'archive',
        'x-compressed': 'archive',
        'x-gzip': 'archive',
        'x-zip-compressed': 'archive',
        zip: 'archive',
        'epub+zip': 'book',
        json: 'note',
      },
      audio: {
        wav: 'audioFile',
        mpeg: 'audioFile',
        ogg: 'audioFile',
      },
      image: {
        jpeg: 'image',
        bmp: 'image',
        png: 'image',
        webp: 'image',
        gif: 'image',
      },
      text: {
        html: 'textFile',
        vcard: 'badge',
        'x-vcard': 'badge',
      },
      video: {
        avi: 'videoFile',
        mp4: 'videoFile',
        webm: 'videoFile',
        quicktime: 'videoFile',
        'x-ms-wmv': 'videoFile',
        'x-msvideo': 'videoFile',
      },
    };

    const tmp = typeMap[groupName]?.[fileType];

    if (tmp) {
      result = tmp;
    } else if (typeMap[groupName] !== undefined) {
      result = 'note';
    }
  }

  return `${result}`;
};

/* eslint-disable no-useless-escape */
import EmailAddresses from 'email-addresses';
import runes from 'runes';

import { SIGN_CLASS } from 'commons/Editor/Squire/Constants';
import { getNormalizedFlags } from 'commons/share_app/utils/mailFlags';
import { parseFullFrom } from 'commons/share_app/utils/parseFullFrom';
import t from 'commons/translations/t';
import { decrypt, encrypt } from 'commons/utils/simpleCrypt';
import { has, isString, pickBy, size } from 'commons/utils/tinyLodash';

import {
  NEW_MAIL_FORWARD_URL_NAME,
  NEW_MAIL_REPLAY_ALL_URL_NAME,
  NEW_MAIL_REPLAY_URL_NAME,
  NEW_MAIL_URL_NAME,
} from 'containers/NewMail/constants';

export function getMailAddress(mail, isTo = false) {
  return (isTo ? mail.to?.email : mail.from?.email) || '';
}

export function getMailName(
  mail,
  folderName = '',
  isTo = false,
  falseIfNull = false,
) {
  const mailAddress = getMailAddress(mail, isTo);
  let name = (isTo ? mail.to?.name : mail.from?.name) || mailAddress;
  let result = false;
  const tMe = t('containers/MailList/me');

  if (mailAddress === folderName) {
    name = tMe;
  }

  if (!(falseIfNull && (!name || name === tMe))) {
    result = name;

    if (!result) {
      result = isTo ? t('noRecipient') : t('noSender');
    }
  }

  return result ? result.replace(/^"|"$/gi, '') : result;
}

export function escapeName(name) {
  return isString(name) ? name.replace(/[\\",;]/gi, '') : '';
}

export function getEmailText(mail = {}, postfix = '') {
  const name = escapeName(mail?.name || '');
  const email = mail?.email || '';

  return name && name !== email
    ? `${name} <${email}>${postfix}`
    : `${email}${postfix}`;
}

export function getFromLabel(from = {}, defaultSenderName = '') {
  const name = escapeName(
    from.sendAsName !== undefined ? from.sendAsName : defaultSenderName,
  );
  const email = from.email || '';

  return name && name !== email ? `${name} <${email}>` : email;
}

export function getValueWithEmoji(value, position, emoji) {
  const pos = position !== undefined && position >= 0 ? position : value.length;
  const prefix = runes.substr(value, 0, pos);
  const postfix = runes.substr(value, pos);

  return `${prefix}${emoji}${postfix}`;
}

export function isDirtyAddress(defaultAddress, address) {
  const defaultName = defaultAddress.name || '';
  const defaultEmail = defaultAddress.email || '';
  const name = address.name || '';
  const email = address.email || '';

  return defaultName !== name || defaultEmail !== email;
}

export function isDirtyList(defaultList, list) {
  let result = size(defaultList) !== size(list);
  let tmpList = [...list];

  if (!result) {
    Object.values(defaultList).every((l) => {
      const index = tmpList.findIndex((li) => li.email === l.email);

      result = index < 0;

      if (!result) {
        tmpList = tmpList.splice(index, 1);
      }

      return !result;
    });
  }

  return result;
}

export function isDirtyAttachments(defaultList, list) {
  const filteredList = pickBy(list, (l) => !l.isUploading);
  let result = size(defaultList) !== size(filteredList);

  if (!result) {
    Object.keys(defaultList).every((key) => {
      result = !has(filteredList, key);

      return !result;
    });
  }

  return result;
}

export function setValue(draft, field, value, isDefault, isDirtyComparator) {
  let isDirty;
  // eslint-disable-next-line no-param-reassign
  draft[field].value = value;

  if (isDefault) {
    // eslint-disable-next-line no-param-reassign
    draft[field].default = value;
    isDirty = false;
  } else {
    isDirty = isDirtyComparator();
  }

  // eslint-disable-next-line no-param-reassign
  draft[field].isDirty = isDirty;
}

export function setAttachmentsValue(draft, attachments, isDefault = false) {
  setValue(draft, 'attachments', attachments, isDefault, () =>
    isDirtyAttachments(draft.attachments?.default || {}, attachments),
  );

  // eslint-disable-next-line no-param-reassign
  draft.attachments.size =
    draft.attachments?.value?.reduce((s, a) => s + a.size, 0) || [];
}

export function getAid(email, popsyncs) {
  const popsync = popsyncs.find((p) => p.email === email);

  return popsync && popsync.aid ? popsync.aid : false;
}

export function getAttachmentsList(action) {
  const isReplay =
    action.newMailType === NEW_MAIL_REPLAY_URL_NAME ||
    action.newMailType === NEW_MAIL_REPLAY_ALL_URL_NAME;

  return isReplay ? [] : action.mail.attachments;
}

export function getToList(action) {
  let to = [];
  const isNewMail = action.newMailType === NEW_MAIL_URL_NAME;
  const isReply = action.newMailType === NEW_MAIL_REPLAY_URL_NAME;
  const isReplyAll = action.newMailType === NEW_MAIL_REPLAY_ALL_URL_NAME;
  const isForward = action.newMailType === NEW_MAIL_FORWARD_URL_NAME;

  if (!isForward) {
    if (!isNewMail && !action.isSentFolder && (isReply || isReplyAll)) {
      if (action.mail?.reply_to?.email) {
        to.push(action.mail.reply_to);
      } else if (action.mail.from?.email) {
        to.push(action.mail.from);
      }
    }

    if (action.isSentFolder || isReplyAll || isNewMail) {
      // eslint-disable-next-line no-shadow
      const tmp = Object.values(action.mail.to).filter(
        (toSingle) => toSingle.email,
      );
      to = to.concat(tmp || []);
    }
  }

  return isNewMail || isForward
    ? to
    : removeOwnAddresses(to, action.fromLabels);
}

export function getCcList(action) {
  const isNewMail = action.newMailType === NEW_MAIL_URL_NAME;
  const isReplyAll = action.newMailType === NEW_MAIL_REPLAY_ALL_URL_NAME;
  const cc = isNewMail || isReplyAll ? action.mail.cc || [] : [];

  return isNewMail ? cc : removeOwnAddresses(cc, action.fromLabels);
}

export function getBccList(action) {
  const isNewMail = action.newMailType === NEW_MAIL_URL_NAME;
  const isReplyAll = action.newMailType === NEW_MAIL_REPLAY_ALL_URL_NAME;
  const bcc = isNewMail || isReplyAll ? action.mail.bcc || [] : [];

  return isNewMail ? bcc : removeOwnAddresses(bcc, action.fromLabels);
}

export function removeOwnAddresses(addresses, fromLabels) {
  let result = addresses;

  result = Object.values(result).filter(
    (r) =>
      r.email !== fromLabels.main?.email &&
      !fromLabels.aliases.find((a) => a.email === r.email),
  );

  return result;
}

export function htmlToText(htmlString) {
  const tmp = document.createElement('DIV');

  tmp.innerHTML = htmlString;

  return tmp.textContent || tmp.innerText || '';
}

/**
 * Zwraca najmniejszą licznę
 * @param numbers - List of ints
 * @param greaterThan - if int  - search min but greater than
 */
export function getMinNumber(numbers, greaterThan) {
  let result = false;

  if (!greaterThan && !Number.isInteger(greaterThan)) {
    result = Math.min(...numbers);
  } else {
    numbers.forEach((number) => {
      if (number >= greaterThan) {
        if (result === false || number < result) {
          result = number;
        }
      }
    });
  }

  return result;
}

export function removeBlockquote(content) {
  let result = content;

  const dom = new DOMParser().parseFromString(content || null, 'text/html');

  Array.prototype.slice
    .call(dom.getElementsByTagName('blockquote'))
    .forEach((item) => {
      item.remove();
    });

  result = dom.body.innerHTML;

  return result;
}

export function removeSign(content, changeFormat = false) {
  let result = content;

  try {
    const dom = new DOMParser().parseFromString(content || null, 'text/html');
    dom
      .querySelector(`.${SIGN_CLASS}:not(blockquote .${SIGN_CLASS})`)
      ?.remove();

    result = changeFormat ? dom.body.textContent : dom.body.innerHTML;
  } catch {}

  return result;
}

export function contentComparator(defaultContent, content) {
  return defaultContent.replace(/\r/g, '') === content.replace(/\r/g, '');
}

export function normalizeAttachments(attachments, isEmbedded) {
  const result = [];

  Object.values(attachments).forEach((attachment) => {
    const newAttachment = {
      filename: attachment.filename,
      size: attachment.size,
      type:
        attachment.type || attachment['content-type'] || attachment.contentType,
    };

    if (isEmbedded) {
      newAttachment.embedded = 1;
    }

    if (
      !attachment.isNotUploaded &&
      !(attachment['part-path'] || attachment.partPath)
    ) {
      newAttachment.uploaded = 1;
    }

    // mogą byc attachmenty przekazywane z maili (odpowiedzi, forwardy) z innymi polami
    [
      'storage-type',
      'storageType',
      'part-path',
      'partPath',
      'location',
      'blobId',
      'accountId',
      'expires',
      'contentUrl',
      'content-url',
      'fromAttachmentsList',
      'mid',
    ].forEach((field) => {
      if (has(attachment, field)) {
        if (attachment[field]) {
          newAttachment[field] = attachment[field];
        }
      }
    });

    // TODO backend wymaga content-url bo inaczej nie potrafi podmieniac
    const contentUrl = attachment['content-url'] || attachment.contentUrl;

    if (contentUrl) {
      newAttachment['content-url'] = contentUrl;
    }

    result.push(newAttachment);
  });

  return result;
}

export function setDefaults(draft, defaults) {
  Object.entries(defaults).forEach(([key, value]) => {
    if (['to', 'cc', 'bcc'].includes(key)) {
      // eslint-disable-next-line no-param-reassign
      draft[key].isValid = {};
    }

    // eslint-disable-next-line no-param-reassign
    draft[key].default = value;
    // eslint-disable-next-line no-param-reassign
    draft[key].value = value;
    // eslint-disable-next-line no-param-reassign
    draft[key].isDirty = false;
  });
}

/**
 *
 * @param value string
 * @returns Object {value, addresses}
 */
export function getAddressesFromString(value) {
  const clearValue = value
    .replace(/([a-z]>)([\s,]*)/gi, '$1, ')
    .replace(/^[\s,]*|[\s,]*$/gi, '');
  let addresses = false;

  if (clearValue) {
    const addressesObj = EmailAddresses.parseAddressList({
      input: clearValue,
      rejectTLD: true,
    });

    if (addressesObj) {
      addresses = [];

      addressesObj.forEach((a) =>
        addresses.push({
          email: a.address,
          name: a.name || '',
        }),
      );
    }
  }

  return {
    addresses,
    value: clearValue,
  };
}

export function afterSaveAndSendDirtySet(draft) {
  [
    'bcc',
    'cc',
    'content',
    'priority',
    'subject',
    'to',
    'from',
    'attachments',
  ].forEach((field) => {
    // eslint-disable-next-line no-param-reassign
    draft[field].isDirty = false;
    // eslint-disable-next-line no-param-reassign
    draft[field].default = draft[field]?.value;
  });
}

/**
 *
 * @param contacts [{name, email}, ...]
 * @return string - enrypted
 */
export function encryptContactList(key = '', contacts) {
  let result = '';

  try {
    result = encrypt(key, JSON.stringify(contacts));
  } catch {}

  return result;
}

/**
 *
 * @param key string;
 * @param contacts encrypeted string;
 * @return Object - decrypted [{name, email}, ...];
 */
export function decryptContactList(key = '', contacts) {
  let result = [];

  try {
    result = JSON.parse(decrypt(key, contacts));
  } catch {}

  return result;
}

export const normalizeMailFromMailList = (mail) => {
  // eslint-disable-next-line no-param-reassign
  mail.from = parseFullFrom(mail.from);
  // eslint-disable-next-line no-param-reassign
  mail.to = parseFullFrom(mail.to);
  // eslint-disable-next-line no-param-reassign
  mail.flags = getNormalizedFlags(mail.flags, mail.extra_flags);

  // eslint-disable-next-line no-param-reassign
  delete mail.extra_flags;

  // eslint-disable-next-line no-param-reassign
  mail.isMailing = (mail.mlid || mail.ml_id || -1) > -1;
};

export function insertAtPosition(arr, index, item) {
  return Number.isInteger(index) && index >= 0 && index <= arr.length
    ? [...arr.slice(0, index), item, ...arr.slice(index)]
    : arr;
}

export const getDomainFromEmail = (email) => email.split('@')[1] || '';

export const getRunesPosition = (value, selectionStart) => {
  const beforeCursor = value.substring(0, selectionStart);
  return runes(beforeCursor).length;
};

export const getUTF16Position = (value, runesPosition) => {
  const runesArray = runes(value);
  const beforePosition = runesArray.slice(0, runesPosition).join('');
  return beforePosition.length;
};

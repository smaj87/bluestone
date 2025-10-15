import { SchemaOrg } from 'types';

import {
  MAIL_FLAG_BIMI,
  MAIL_FLAG_DKIM_FAIL,
  MAIL_FLAG_DKIM_NONE,
  MAIL_FLAG_DKIM_PASS,
  MAIL_FLAG_DMARC_FAIL,
  MAIL_FLAG_DMARC_NONE,
  MAIL_FLAG_DMARC_PASS,
  MAIL_FLAG_DMARC_PERMERROR,
  MAIL_FLAG_SPF_FAIL,
  MAIL_FLAG_SPF_NONE,
  MAIL_FLAG_SPF_PASS,
  MAIL_FLAG_SPF_PERMERROR,
} from 'commons/share_app/containers/Mails/constants';
import { getAvatarUrl } from 'commons/share_app/utils/avatar';
import {
  checkFlag,
  getNormalizedFlags,
} from 'commons/share_app/utils/mailFlags';
import { normalizeSchemaOrg } from 'commons/share_app/utils/normalizeSchemaData';
import { parseFullFrom } from 'commons/share_app/utils/parseFullFrom';

import { DEFAULT_READ_MAIL } from './constants';
import {
  Headers,
  ReadMailNormalized,
  ReadMailParsed,
  ReadMailRaw,
  ReadMailState,
} from './types';

export const isEmailWhiteListed = (
  list: string[],
  email: string,
  checkDomain = false,
) => {
  const domain = `@${email.split('@')[1] || ''}`;
  let isWhiteListed = email ? list.includes(email) : false;

  if (!isWhiteListed && checkDomain) {
    isWhiteListed = list.includes(domain);
  }

  return isWhiteListed;
};

export const getNormalizedMail = (
  mail: ReadMailRaw,
  oldMail?: ReadMailParsed,
): ReadMailNormalized => {
  const from = parseFullFrom(mail.from, oldMail?.from);
  const flags = getNormalizedFlags(mail.flags, mail.extra_flags);

  return {
    ...mail,
    avatar: getAvatarUrl(
      from.email,
      mail.mlimg,
      checkFlag(flags, MAIL_FLAG_BIMI),
    ),
    from,
    to: mail.to.map((to) => parseFullFrom(to)),
    cc: mail.cc.map((cc) => parseFullFrom(cc)),
    bcc: mail.bcc.map((bcc) => parseFullFrom(bcc)),
    reply_to: mail.reply_to
      ? parseFullFrom(mail.reply_to)
      : { ...DEFAULT_READ_MAIL.reply_to },
    flags,
    extra_flags: undefined,
    mlimg: undefined,
    messageId: mail['message-id'],
    schema_org: (oldMail?.schema_org?.data
      ? oldMail?.schema_org
      : normalizeSchemaOrg({ ...mail.schema_org, from })) as SchemaOrg,
    attachments: mail.attachments.map((a) => ({ ...a, mid: mail.mid })),
  };
};

export const isSecurityError = (flags: ReadMailParsed['flags']) => {
  const isAnyFail =
    checkFlag(flags, MAIL_FLAG_SPF_FAIL) ||
    checkFlag(flags, MAIL_FLAG_SPF_PERMERROR) ||
    checkFlag(flags, MAIL_FLAG_DKIM_FAIL) ||
    // checkFlag(flags, MAIL_FLAG_DKIM_PERMERROR) || // wylaczamy do czasu analizy i rozwiazania problemow z chwc
    checkFlag(flags, MAIL_FLAG_DMARC_FAIL) ||
    checkFlag(flags, MAIL_FLAG_DMARC_PERMERROR);
  const isAllNone =
    checkFlag(flags, MAIL_FLAG_SPF_NONE) &&
    checkFlag(flags, MAIL_FLAG_DKIM_NONE) &&
    checkFlag(flags, MAIL_FLAG_DMARC_NONE);

  return isAnyFail || isAllNone;
};

export const isSecuritySuccess = (
  flags: ReadMailParsed['flags'],
  isTrusted = false,
) => {
  const passCount =
    Number(checkFlag(flags, MAIL_FLAG_SPF_PASS)) +
    Number(checkFlag(flags, MAIL_FLAG_DKIM_PASS)) +
    Number(checkFlag(flags, MAIL_FLAG_DMARC_PASS));
  const isAnyNone =
    checkFlag(flags, MAIL_FLAG_SPF_NONE) ||
    !isAnySecurityFlag(flags, 'SPF') ||
    checkFlag(flags, MAIL_FLAG_DKIM_NONE) ||
    !isAnySecurityFlag(flags, 'DKIM') ||
    checkFlag(flags, MAIL_FLAG_DMARC_NONE) ||
    !isAnySecurityFlag(flags, 'DMARC');
  const isAllPass = passCount >= 3;
  const isAlmostPass = passCount >= 2 && isAnyNone;

  const isTrustedFlags =
    checkFlag(flags, MAIL_FLAG_DMARC_PASS) ||
    (!isAnySecurityFlag(flags, 'DMARC') &&
      checkFlag(flags, MAIL_FLAG_DKIM_PASS));
  const isTrustedPass = isTrusted && isTrustedFlags;

  return isAllPass || isAlmostPass || isTrustedPass;
};

export const isAnySecurityFlag = (
  flags: ReadMailParsed['flags'],
  prefix: string,
) => !!flags.find((flag) => flag.startsWith(prefix));

export const getNormalizedHeaderValues = (json: string) => {
  const lines = json.split('\n');
  const values: Headers['values'] = [];

  lines.forEach((line) => {
    const splited = line.split(': ');

    if (splited.length > 1) {
      const value = splited.splice(1).join(': ').trim();

      if (value) {
        values.push({
          header: splited[0].trim(),
          value,
        });
      }
    } else {
      const value = splited[0].trim();

      if (value) {
        values.push({
          header: '',
          value,
        });
      }
    }
  });

  return values;
};

export const getUpdateIsShowImagesMails = (
  mails: ReadMailState['mails'],
  whiteList: string[],
  whiteListGlobals: string[],
) => {
  const result: ReadMailState['mails'] = {};
  let isAnyChanged = false;

  Object.values(mails).forEach((mail) => {
    const isShowImages =
      isEmailWhiteListed(whiteList, mail.from.email) ||
      isEmailWhiteListed(whiteListGlobals, mail.from.email, true);

    if (mail.isFetched && mail.isShowImages !== isShowImages) {
      result[mail.mid] = { ...mail, isShowImages };
      isAnyChanged = true;
    } else {
      result[mail.mid] = mail;
    }
  });

  return isAnyChanged ? result : mails;
};

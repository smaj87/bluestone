import { GroupItem } from 'commons/ListIntersectionObserver/types';
import { extendGroups } from 'commons/ListIntersectionObserver/utils';
import {
  LIST_ITEM_HEIGHT,
  LIST_ITEM_SIZES,
} from 'commons/share_app/components/ListElements/List/constants';
import { NormalizedUrlResult } from 'commons/share_app/components/RouterHelpers/utils';
import { getAvatarUrl } from 'commons/share_app/utils/avatar';
import {
  checkFlag,
  getNormalizedFlags,
} from 'commons/share_app/utils/mailFlags';
import { normalizeSchemaOrg } from 'commons/share_app/utils/normalizeSchemaData';
import { parseFullFrom } from 'commons/share_app/utils/parseFullFrom';
import { DAY_IN_MILISECONDS } from 'commons/utils/constants';
import { decrypt } from 'commons/utils/simpleCrypt';

import { MAILS_OTHER_URLS, MAILS_URLS } from 'utils/constants';

import {
  MAIL_FILTER_FIELDS,
  MAIL_FLAG_BIMI,
  MAIL_FLAG_SEEN,
  MAIL_SORT_DIR_FIELDS,
  MAIL_SORT_FIELDS,
  SUB_PAGE_NAME_HISTORY,
  SUB_PAGE_NAME_SEARCH,
} from './constants';
import { ApiMail, Mail, MailState, UrlParamsInterface } from './types';

export const defaultUrlParams: UrlParamsInterface = {
  sort: 'date',
  folderId: -1,
  labelId: -1,
  sortDir: 'desc',
  filter: '',
  page: 1,
  history: null,
  searchQuery: '',
  urlName: '',
} as const;
Object.freeze(defaultUrlParams);

const isShowByUrlNameValues = [
  ...Object.values(MAILS_URLS),
  ...Object.values(MAILS_OTHER_URLS),
];

export const isShowByUrlName = (urlName: string) =>
  !urlName || isShowByUrlNameValues.includes(urlName);

export const isNotRequiredDataByParams = (params: UrlParamsInterface) =>
  (MAILS_OTHER_URLS.CUSTOM_FOLDERS_URL === params.urlName && // custom folder bez fida
    params.folderId < 0) ||
  (MAILS_OTHER_URLS.HISTORY_FOLDER_URL === params.urlName && // history bez email
    !params.history) ||
  (MAILS_OTHER_URLS.SEARCH_FOLDER_URL === params.urlName && // search bez szukanego tesktu
    !params.searchQuery) ||
  (MAILS_OTHER_URLS.POPSYNC_FOLDERS_URL === params.urlName && // popsync bez lida
    params.labelId < 0);

export const validAndParseUrlParam = (
  key: keyof UrlParamsInterface,
  param: string,
) => {
  const result = defaultUrlParams[key] || '';

  switch (key) {
    case 'sort':
      // @ts-ignore
      return MAIL_SORT_FIELDS.includes(param) ? param : result;
    case 'sortDir':
      // @ts-ignore
      return MAIL_SORT_DIR_FIELDS.includes(param) ? param : result;
    case 'filter':
      // @ts-ignore
      return MAIL_FILTER_FIELDS.includes(param) ? param : result;
    case 'page':
    case 'folderId':
    case 'labelId': {
      const nr = parseInt(param, 10);
      return Number.isInteger(nr) ? nr : result;
    }
    case 'history': {
      let history = result || null;

      try {
        history = JSON.parse(decrypt('', param))?.[0];
      } catch {}

      return history;
    }
    case 'searchQuery':
      return param ? decrypt('', param) : '';
    default:
      return param || result;
  }
};

export const normalizedUrlParams = (
  urlParams: NormalizedUrlResult,
): UrlParamsInterface => {
  const result: Partial<UrlParamsInterface> = {};

  [
    'sort',
    'sortDir',
    'page',
    'filter',
    'history',
    'searchQuery',
    'folderId',
    'labelId',
    'urlName',
  ].forEach((field) => {
    // @ts-ignore todo @spiascik
    result[field] = validAndParseUrlParam(
      field as keyof UrlParamsInterface,
      urlParams[field],
    );
  });

  return result as UrlParamsInterface;
};

export const getSubPage = (params: Partial<UrlParamsInterface>) => {
  let result = '';

  if (params.history) {
    result = SUB_PAGE_NAME_HISTORY;
  } else if (params.searchQuery) {
    result = SUB_PAGE_NAME_SEARCH;
  }

  return result;
};

export const normalizedSingleMail = (apiMail: ApiMail): Mail => {
  const from = parseFullFrom(apiMail.from);
  const flags = getNormalizedFlags(apiMail.flags, apiMail.extra_flags);

  return {
    flags,
    from,
    to: parseFullFrom(apiMail.to),
    schema_org: normalizeSchemaOrg({ ...apiMail.schema_org, from }),
    fid: apiMail.fid,
    mid: apiMail.mid,
    root_mid: apiMail.root_mid,
    subject: apiMail.subject,
    snippet: apiMail.snippet.replace(/[\u034F\u200B-\u200D\uFEFF]/g, '').trim(),
    received_date: apiMail.received_date,
    sent_date: apiMail.sent_date,
    groupId: -1,
    isMailing: (apiMail.mlid || -1) > -1,
    isCancelingSend: false,
    avatar: getAvatarUrl(
      from.email,
      apiMail.mlimg,
      checkFlag(flags, MAIL_FLAG_BIMI),
    ),
    // todo rest np, labels?
  };
};

export const normalizedMails = (apiMails: ApiMail[]): Mail[] =>
  apiMails.map(normalizedSingleMail);

export const getMailsWithGroups = (
  mails: Mail[],
  stateMails: MailState['mails'],
  stateGroups: MailState['groups'],
  stateChecks: MailState['checks'],
  getItemHeight: (item: object) => number,
  append = false,
) => {
  const { checks, groups, items } = extendGroups(
    mails,
    append ? [...stateGroups] : [],
    append ? { ...stateChecks } : {},
    {
      getItemHeight,
      getId: (item) => (item as Mail).mid,
    },
  );

  return {
    mails: append ? { ...stateMails, ...items } : items,
    groups,
    checks,
  };
};

export const getIsChecksInfos = (
  mails: MailState['mails'],
  checks: MailState['checks'],
) => {
  const result = {
    isAnyReadChecked: false,
    isAnyReadUnchecked: false,
    isAnyUnreadChecked: false,
    isAnyUnreadUnchecked: false,
    isAnyScheduledSendUnchecked: false,
    isAnyNonScheduledSendUnchecked: false,
  };

  Object.keys(checks).some((id) => {
    const mail = mails[id] || false;

    if (mail) {
      const isRead = checkFlag(mail.flags, MAIL_FLAG_SEEN);
      const isScheduledSend = !!mail.schema_org?.delayedSend?.delayDate;

      result.isAnyReadChecked ||= isRead && checks[id];
      result.isAnyReadUnchecked ||= isRead && !checks[id];
      result.isAnyUnreadChecked ||= !isRead && checks[id];
      result.isAnyUnreadUnchecked ||= !isRead && !checks[id];

      result.isAnyScheduledSendUnchecked ||= isScheduledSend && !checks[id];
      result.isAnyNonScheduledSendUnchecked ||= !isScheduledSend && !checks[id];

      return Object.values(result).every((v) => v); // przerywa gdy wszystkie wartosci sa juz znane
    }

    return false;
  });

  return result;
};

export const clearGroupsFromNoItems = (
  groups: MailState['groups'],
  getItemHeight: (item: object) => number,
) => {
  const hasChanges = groups.some((group) =>
    group.items.some((item) => item.type !== 'item'),
  );

  if (!hasChanges) {
    return groups;
  }

  return groups.map((group) => {
    if (group.items.some((item) => item.type !== 'item')) {
      // eslint-disable-next-line no-param-reassign
      group.height = 0;

      const items = group.items.filter((item) => {
        const isItem = item.type === 'item';

        if (isItem) {
          // eslint-disable-next-line no-param-reassign
          group.height += getItemHeight(item) * 10;
        }

        return isItem;
      });

      return { ...group, items };
    }

    return group;
  });
};

export const injectExtraElementsToGroups = (groups: MailState['groups']) => {
  const topAfterMails = 3; // after how many items to add top ad
  const rightAfterMails = 12; // after how many items to add right ad

  let itemCounter = 0;
  let adId = 1;
  let right2Pos = 1;

  groups.forEach((group) => {
    const newItems: GroupItem[] = [];

    group.items.forEach((item) => {
      if (item.type === 'item') {
        itemCounter++;
      }

      newItems.push(item);

      if (
        itemCounter === topAfterMails ||
        (itemCounter > topAfterMails &&
          (itemCounter - topAfterMails) % rightAfterMails === 0)
      ) {
        let slot: GroupItem['slot'];

        if (adId === 1) {
          slot = 'top';
        } else if (adId === 2) {
          slot = 'right';
        } else {
          slot = 'right2';
        }

        adId += 1;

        newItems.push({
          id:
            slot === 'right2'
              ? `mails_ad_item_${slot}_${right2Pos}`
              : `mails_ad_item_${slot}`,
          type: 'ad',
          size: slot === 'top' ? LIST_ITEM_SIZES.XXL : LIST_ITEM_SIZES.XXXL,
          slot,
          pos: slot === 'right2' ? right2Pos++ : 0,
        });

        // eslint-disable-next-line no-param-reassign
        group.height +=
          (slot === 'top' ? LIST_ITEM_HEIGHT.XXL : LIST_ITEM_HEIGHT.XXXL) * 10;
      }
    });

    // eslint-disable-next-line no-param-reassign
    group.items = newItems;
  });
};

export const getMailList = (
  stateMails: MailState['mails'],
  stateGroups: MailState['groups'],
) => {
  const mails: Mail[] = [];

  stateGroups.flatMap((group) =>
    group.items.forEach((item) => {
      if (item.type === 'item') {
        mails.push(stateMails[item.id]);
      }
    }),
  );

  return mails;
};

export const isMailSentWithin14Days = (mailSentDate: string) => {
  if (!mailSentDate) {
    return false;
  }

  try {
    const diffTime = +new Date() - +new Date(mailSentDate);
    const diffDays = diffTime / DAY_IN_MILISECONDS;

    return diffDays <= 14;
  } catch {
    return false;
  }
};

export const cancelSendMailsUpdater = (
  mails: MailState['mails'],
  actionMails: Mail[],
  updater: (mail: MailState['mails'][number]) => MailState['mails'][number],
): MailState['mails'] => {
  const updates: MailState['mails'] = {};

  actionMails.forEach(({ mid }) => {
    if (mails[mid]) {
      updates[mid] = updater(mails[mid]);
    }
  });

  return { ...mails, ...updates };
};

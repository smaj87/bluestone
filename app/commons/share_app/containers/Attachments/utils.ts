import { COUNT_PER_GROUP } from 'commons/ListIntersectionObserver/constants';
import { extendGroups } from 'commons/ListIntersectionObserver/utils';
import { LIST_ITEM_HEIGHT } from 'commons/share_app/components/ListElements/List/constants';
import { NormalizedUrlResult } from 'commons/share_app/components/RouterHelpers/utils';

import {
  ATTACHMENT_GROUP_NAMES,
  ATTACHMENT_SORT_DIR_FIELDS,
  ATTACHMENT_SORT_FIELDS,
} from './constants';
import {
  Attachment,
  AttachmentState,
  CustomUrlParamsInterface,
  UrlParamsInterface,
} from './types';

export const defaultCustomUrlParams: CustomUrlParamsInterface = {
  groupName: '',
  fromFilter: '',
  dateFromFilter: '',
  dateToFilter: '',
  sizeFromFilter: -1,
  sizeToFilter: -1,
};
Object.freeze(defaultCustomUrlParams);

export const defaultUrlParams: UrlParamsInterface = {
  urlName: '',
  sort: 'date',
  sortDir: 'desc',
  page: 1,
  ...defaultCustomUrlParams,
} as const;
Object.freeze(defaultUrlParams);

export const validAndParseUrlParam = (
  key: keyof UrlParamsInterface,
  param: string,
) => {
  const result = defaultUrlParams[key] || '';

  switch (key) {
    case 'groupName':
      return ATTACHMENT_GROUP_NAMES.includes(param) ? param : result;
    case 'sort':
      return ATTACHMENT_SORT_FIELDS.includes(param) ? param : result;
    case 'sortDir':
      return ATTACHMENT_SORT_DIR_FIELDS.includes(param) ? param : result;
    case 'sizeFromFilter':
    case 'sizeToFilter':
    case 'page': {
      const nr = parseInt(param, 10);
      return Number.isInteger(nr) ? nr : result;
    }
    case 'dateFromFilter':
    case 'dateToFilter':
      return /^\d{4}-\d{2}-\d{2}/.test(param) ? param : result;
    default:
      return param || result;
  }
};

export const normalizedUrlParams = (
  urlParams: NormalizedUrlResult,
  onlyFilters = false,
): CustomUrlParamsInterface | UrlParamsInterface => {
  const filters: Partial<CustomUrlParamsInterface> = {};

  [
    'urlName',
    'groupName',
    'fromFilter',
    'dateFromFilter',
    'dateToFilter',
    'sizeFromFilter',
    'sizeToFilter',
  ].forEach((field) => {
    // @ts-ignore todo @spiascik
    filters[field] = validAndParseUrlParam(
      field as keyof CustomUrlParamsInterface,
      urlParams[field],
    );
  });

  if (onlyFilters) {
    return filters as CustomUrlParamsInterface;
  }

  const others: Partial<UrlParamsInterface> = {};

  ['sort', 'sortDir', 'page'].forEach((field) => {
    // @ts-ignore todo!!! @spiascik
    others[field] = validAndParseUrlParam(
      field as keyof UrlParamsInterface,
      urlParams[field],
    );
  });

  return {
    ...filters,
    ...others,
  } as UrlParamsInterface;
};

export const normalizedAttachments = (
  apiAttachments: Attachment[],
  state: AttachmentState,
  isMobile: boolean,
  append = false,
) => {
  const attachments: AttachmentState['attachments'] = append
    ? { ...state.attachments }
    : {};
  const itemHeight = isMobile ? LIST_ITEM_HEIGHT.LG : LIST_ITEM_HEIGHT.MD;

  const { checks, groups, items } = extendGroups(
    apiAttachments,
    append ? [...state.groups] : [],
    append ? { ...state.checks } : {},
    {
      getItemHeight: () => itemHeight,
      getId: (item) =>
        `${(item as Attachment).mid}_${(item as Attachment).partPath}`,
      countPerGroup: COUNT_PER_GROUP,
    },
  );

  return {
    attachments: { ...attachments, ...items },
    groups,
    checks,
  };
};

export const getPartPath = (a: unknown) =>
  // @ts-ignore
  a.partPath || a.part_path || a['part-path'] || '';

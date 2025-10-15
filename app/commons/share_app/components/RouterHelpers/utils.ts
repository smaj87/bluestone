import { UrlParamsInterface as AttachmentsUrlParamsInterface } from 'commons/share_app/containers/Attachments/types';
import {
  defaultUrlParams as attachmentsDefaultUrlParams,
  normalizedUrlParams as attachmentsNormalizedUrlParams,
} from 'commons/share_app/containers/Attachments/utils';
import { CASHBACKS_URL } from 'commons/share_app/containers/Cashbacks/constants';
import { MAUTIC_URL_NAME } from 'commons/share_app/containers/Communities/Mautic/constants';
import { UrlParamsInterface as MauticUrlParams } from 'commons/share_app/containers/Communities/Mautic/types';
import {
  defaultUrlParams as mauticUrlParams,
  normalizedUrlParams as mauticNormalizedUrlParams,
} from 'commons/share_app/containers/Communities/Mautic/utils';
import { COUPONS_URL } from 'commons/share_app/containers/Coupons/constants';
import { GAZETKA_URL_NAME } from 'commons/share_app/containers/GazetkaMail/constants';
import { INBOX_URL_NAME } from 'commons/share_app/containers/InboxMail/constants';
import { UrlParamsInterface as MailsUrlParamsInterface } from 'commons/share_app/containers/Mails/types';
import {
  defaultUrlParams as mailsDefaultUrlParams,
  isNotRequiredDataByParams,
  isShowByUrlName,
  normalizedUrlParams as mailsNormalizedUrlParams,
} from 'commons/share_app/containers/Mails/utils';
import { NEWSLETTERS_URL } from 'commons/share_app/containers/Newsletters/constants';
import { UrlParamsInterface as NewslettersUrlParamsInterface } from 'commons/share_app/containers/Newsletters/types';
import {
  defaultUrlParams as newslettersDefaultUrlParams,
  normalizedUrlParams as newslettersNormalizedUrlParams,
} from 'commons/share_app/containers/Newsletters/utils';
import { ORDERS_URL_NAME } from 'commons/share_app/containers/Orders/constants';
import { UrlParamsInterface as OrdersUrlParamsInterface } from 'commons/share_app/containers/Orders/types';
import {
  defaultUrlParams as ordersDefaultUrlParams,
  normalizedUrlParams as ordersNormalizedUrlParams,
} from 'commons/share_app/containers/Orders/utils';
import {
  defaultUrlParams as readMailDefaultUrlParams,
  normalizedUrlParams as readMailNormalizedUrlParams,
} from 'commons/share_app/containers/ReadMail/normalizer';
import { UrlParamsInterface as ReadMailUrlParamsInterface } from 'commons/share_app/containers/ReadMail/types';
import { SINGLE_ORDER_URL_NAME } from 'commons/share_app/containers/SingleOrder/constants';
import { UrlParamsInterface as SingleOrderUrlParamsInterface } from 'commons/share_app/containers/SingleOrder/types';
import {
  defaultUrlParams as singleOrderDefaultUrlParams,
  normalizedUrlParams as singleOrderNormalizedUrlParams,
} from 'commons/share_app/containers/SingleOrder/utils';

import {
  ATTACHMENTS_VIEW_URL_PROPS,
  MAILS_VIEW_URL_PROPS,
  MAUTIC_VIEW_URL_PROPS,
  NEW_MAIL_VIEW_URL_PROPS,
  NEWSLETTERS_VIEW_URL_PROPS,
  ORDERS_VIEW_URL_PROPS,
  PRINTING_URL_NAME,
  READ_MAIL_VIEW_URL_PROPS,
  SINGLE_ORDER_VIEW_URL_PROPS,
} from 'containers/App/constants';
import {
  defaultUrlParams as newMailDefaultUrlParams,
  NEW_MAIL_URL_NAME,
} from 'containers/NewMail/constants';
import { UrlParamsInterface as NewMailUrlParamsInterface } from 'containers/NewMail/types';
import { normalizedUrlParams as newMailNormalizedUrlParams } from 'containers/NewMail/utils';
import {
  ATTACHMENTS_URL,
  MAILS_OTHER_URLS,
  READ_MAIL_URL,
} from 'utils/constants';

export interface NormalizedUrlResult {
  isPrintingStr: string;
  urlName: string;
  [key: string]: string; // Wszystkie inne klucze typu string mają wartości string
}

export type UrlParamsCacheType = {
  [READ_MAIL_VIEW_URL_PROPS]: ReadMailUrlParamsInterface;
  [NEW_MAIL_VIEW_URL_PROPS]: NewMailUrlParamsInterface;
  [ATTACHMENTS_VIEW_URL_PROPS]: AttachmentsUrlParamsInterface;
  [MAILS_VIEW_URL_PROPS]: MailsUrlParamsInterface;
  [MAUTIC_VIEW_URL_PROPS]: MauticUrlParams;
  [NEWSLETTERS_VIEW_URL_PROPS]: NewslettersUrlParamsInterface;
  [SINGLE_ORDER_VIEW_URL_PROPS]: SingleOrderUrlParamsInterface;
  [ORDERS_VIEW_URL_PROPS]: OrdersUrlParamsInterface;
  isReadMailShow: boolean;
  isNewMailShow: boolean;
  isAttachmentsShow: boolean;
  isMailsShow: boolean;
  isNewslettersShow: boolean;
  isMauticShow: boolean;
  isOrdersShow: boolean;
  isSingleOrderShow: boolean;
  isCouponsShow: boolean;
  isCashbackShow: boolean;
  isInboxMailShow: boolean;
  isGazetkaMailShow: boolean;
  mailsNotRequiredData: boolean;
  deprecated_mailsNewRedirectUrl: string;
};

export const normalizedUrl = (urlParams = '') => {
  const params = urlParams.replace(/^\//, '').split('/');
  const result: NormalizedUrlResult = {
    isPrintingStr: params[0] === PRINTING_URL_NAME ? '1' : '',
    urlName: '',
  };

  let i = result.isPrinting ? 1 : 0;

  if (!params[i].startsWith('_')) {
    result.urlName = result.isPrintingStr === '1' ? READ_MAIL_URL : params[i];
    i += 1;
  }

  for (i; i < params.length; i++) {
    if (params[i].startsWith('_')) {
      const key = params[i].slice(1);

      if (params[i + 1] && !params[i + 1].startsWith('_')) {
        result[key] = decodeURIComponent(params[i + 1]).trim();
        i += 1;
      }
    }
  }

  return result;
};

const UrlParamsCacheTypeDefaults: UrlParamsCacheType = {
  [READ_MAIL_VIEW_URL_PROPS]: readMailDefaultUrlParams,
  [NEW_MAIL_VIEW_URL_PROPS]: newMailDefaultUrlParams,
  [ATTACHMENTS_VIEW_URL_PROPS]: attachmentsDefaultUrlParams,
  [MAILS_VIEW_URL_PROPS]: mailsDefaultUrlParams,
  [MAUTIC_VIEW_URL_PROPS]: mauticUrlParams,
  [ORDERS_VIEW_URL_PROPS]: ordersDefaultUrlParams,
  [NEWSLETTERS_VIEW_URL_PROPS]: newslettersDefaultUrlParams,
  [SINGLE_ORDER_VIEW_URL_PROPS]: singleOrderDefaultUrlParams,
  isReadMailShow: false,
  isNewMailShow: false,
  isAttachmentsShow: false,
  isMailsShow: false,
  isNewslettersShow: false,
  isMauticShow: false,
  isSingleOrderShow: false,
  isOrdersShow: false,
  isCouponsShow: false,
  isCashbackShow: false,
  isInboxMailShow: false,
  isGazetkaMailShow: false,
  mailsNotRequiredData: false,
  deprecated_mailsNewRedirectUrl: '',
};

export const urlParamsCache = { ...UrlParamsCacheTypeDefaults };

export const getUrlParamsCache = (
  urlParams: NormalizedUrlResult,
): UrlParamsCacheType => {
  const { urlName } = urlParams;

  urlParamsCache.isReadMailShow = urlName === READ_MAIL_URL;
  urlParamsCache.isNewMailShow = urlName === NEW_MAIL_URL_NAME;
  urlParamsCache.isAttachmentsShow = urlName === ATTACHMENTS_URL;
  urlParamsCache.isNewslettersShow = urlName === NEWSLETTERS_URL;
  urlParamsCache.isCouponsShow = urlName === COUPONS_URL;
  urlParamsCache.isCashbackShow = urlName === CASHBACKS_URL;
  urlParamsCache.isInboxMailShow = urlName === INBOX_URL_NAME;
  urlParamsCache.isGazetkaMailShow = urlName === GAZETKA_URL_NAME;
  urlParamsCache.isMauticShow = urlName === MAUTIC_URL_NAME;
  urlParamsCache.isOrdersShow = urlName === ORDERS_URL_NAME;
  urlParamsCache.isSingleOrderShow = urlName === SINGLE_ORDER_URL_NAME;
  urlParamsCache.isMailsShow = false;

  if (urlParamsCache.isReadMailShow) {
    urlParamsCache[READ_MAIL_VIEW_URL_PROPS] = {
      ...urlParamsCache[READ_MAIL_VIEW_URL_PROPS],
      ...readMailNormalizedUrlParams(urlParams),
    };
  } else if (urlParamsCache.isNewMailShow) {
    urlParamsCache[NEW_MAIL_VIEW_URL_PROPS] = {
      ...urlParamsCache[NEW_MAIL_VIEW_URL_PROPS],
      ...newMailNormalizedUrlParams(urlParams),
    };
  } else if (urlParamsCache.isAttachmentsShow) {
    urlParamsCache[ATTACHMENTS_VIEW_URL_PROPS] = {
      ...urlParamsCache[ATTACHMENTS_VIEW_URL_PROPS],
      ...attachmentsNormalizedUrlParams(urlParams),
    };
  } else if (urlParamsCache.isNewslettersShow) {
    urlParamsCache[NEWSLETTERS_VIEW_URL_PROPS] = {
      ...urlParamsCache[NEWSLETTERS_VIEW_URL_PROPS],
      ...newslettersNormalizedUrlParams(urlParams),
    };
  } else if (urlParamsCache.isOrdersShow) {
    urlParamsCache[ORDERS_VIEW_URL_PROPS] = {
      ...urlParamsCache[ORDERS_VIEW_URL_PROPS],
      ...ordersNormalizedUrlParams(urlParams),
    };
  } else if (urlParamsCache.isSingleOrderShow) {
    urlParamsCache[SINGLE_ORDER_VIEW_URL_PROPS] = {
      ...urlParamsCache[SINGLE_ORDER_VIEW_URL_PROPS],
      ...singleOrderNormalizedUrlParams(urlParams),
    };
  } else if (urlParamsCache.isMauticShow) {
    urlParamsCache[MAUTIC_VIEW_URL_PROPS] = {
      ...urlParamsCache[MAUTIC_VIEW_URL_PROPS],
      ...mauticNormalizedUrlParams(urlParams),
    };
  }
  // mails
  else if (isShowByUrlName(urlName)) {
    urlParamsCache[MAILS_VIEW_URL_PROPS] = {
      ...urlParamsCache[MAILS_VIEW_URL_PROPS],
      ...mailsNormalizedUrlParams(urlParams),
    };

    urlParamsCache.isMailsShow = true;
    urlParamsCache.mailsNotRequiredData = isNotRequiredDataByParams(
      urlParamsCache[MAILS_VIEW_URL_PROPS],
    );

    // deprecated if wrong url, rm after fix kontakty.onet.pl -> Historia
    if (
      urlParams.urlName === MAILS_OTHER_URLS.HISTORY_FOLDER_URL &&
      urlParamsCache.mailsNotRequiredData
    ) {
      const path = window.location.pathname;
      const regexp = new RegExp(
        `^/${MAILS_OTHER_URLS.HISTORY_FOLDER_URL}/([a-z0-9%=+]+)`,
        'gi',
      );
      const match = regexp.exec(path);

      if (match) {
        // eslint-disable-next-line prefer-destructuring
        urlParamsCache.deprecated_mailsNewRedirectUrl = `/${MAILS_OTHER_URLS.HISTORY_FOLDER_URL}/_history/${match[1]}`;
      }
    }
  }

  return { ...urlParamsCache };
};

export const initUrlParams = normalizedUrl(window.location.pathname);
getUrlParamsCache(initUrlParams); // update urlParamsCache

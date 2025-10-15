import { UserConfigState } from 'commons/hooks/useUserConfig/types';
import { getIsMobile } from 'commons/hooks/useUserConfig/utils';
import { isArray, isString } from 'commons/utils/tinyLodash';

import {
  InterfaceEffectInterface,
  NormalizedInterfaceEffects,
  UserInfoType,
} from './types';

export const normalizedInterfaceEffects = (
  interfaceEffects: InterfaceEffectInterface[],
) => {
  const effects: NormalizedInterfaceEffects = {};

  interfaceEffects.forEach((iE) => {
    effects[iE.type] = iE;
  });

  return effects;
};

export const getContent = (content = '') => {
  let result = content;

  try {
    // todo replace wsteczna kompatybilnosc, replace do usuniecia jak cdpapi przepnie sie na data-action i data-params
    result = decodeURIComponent(window.atob(result))?.replace(
      /\s+data-ie-id=/g,
      ' data-action=',
    );
  } catch {
    result = '';
  }

  return result;
};

export const getUserInfo = (): Promise<UserInfoType> =>
  new Promise((resolve) => {
    if (window.onetAds) {
      window.onetAds.cmd.push((dlApi: any) => {
        dlApi.getUserInfo((userInfo: UserInfoType) => resolve(userInfo || {}));
      });

      setTimeout(() => resolve(window.onetAds?.userInfo || {}), 1000); // 1s timeout
    } else {
      resolve({});
    }
  });

export const escapeParams = (params: string | number | (string | number)[]) => {
  let result: number | string = params as number;

  if (isArray(params)) {
    result = params
      .map((p) => (isString(p) ? encodeURIComponent(p) : p))
      .join('+');
  } else if (isString(params)) {
    result = encodeURIComponent(params);
  }

  return result;
};

export const getInterfaceEffectParams = async (userConfig: UserConfigState) => {
  const userInfo = window.onetAds?.userInfo || (await getUserInfo());

  const url = new URL(window.location.href);
  const queryParams = new URLSearchParams(url.search);
  const hashParams = new URLSearchParams(url.hash.substring(1));
  const urlParams: Record<string, string> = {};

  // queryparams
  ['adbeta', 'test_site', 'test_area', 'test_kwrd'].forEach((key) => {
    urlParams[key] = queryParams.get(key) || hashParams.get(key) || '';
  });

  const kwrd = [...(window.onetAds?.keywords || [])];

  if (urlParams.test_kwrd) {
    kwrd.push(urlParams.test_kwrd);
  }

  const result: Record<string, string | number> = {
    adbeta: escapeParams(urlParams.adbeta || ''),
    site: escapeParams(urlParams.test_site || window.onetAds?.site || ''),
    area: escapeParams(urlParams.test_area || window.onetAds?.area || ''),
    kwrd: escapeParams(kwrd),
    kvv_type: getIsMobile() ? 'mobile' : 'desktop',
    kvb_notif_perm:
      'Notification' in window ? Notification.permission : 'unknown',
    kvb_name: window.browserInfo?.name || 'unknown',
    kvb_ver: window.browserInfo?.ver || 'unknown',
    kvos: window.browserInfo?.os || 'unknown',
    kvos_ver: escapeParams(window.browserInfo?.osVer) || 'unknown',
    kvconsents: window.userConfig?.consents?.join('+') || '',
    kvvar_name: escapeParams(window.userConfig?.variantName) || 'unknown',
    kvweb_ver: escapeParams(window.userConfig?.version) || 'unknown',
    kvpremium: userConfig.isPremium ? 1 : 0,
    kvis_ads: userConfig.isDisplayAds ? 1 : 0,
    kvbeta_user: userConfig.isBetaUser ? 1 : 0,
    kvmbox_size: userConfig.mailboxSize,
    kvadblock: userConfig.isAdblock ? 1 : 0,
  };

  // userInfo to kv
  Object.keys(userInfo || {}).forEach((key) => {
    if (
      /^k\d+$/.test(key) ||
      ['seg_ab', 'seg_rand', 'lu', 'IV'].includes(key)
    ) {
      const k = `kv${key}`;

      if (!result[k]) {
        result[k] = escapeParams(userInfo[key] || '');
      }
    }
  });

  // adbeta rewrite
  if (urlParams.adbeta && !/^[ad]/i.test(urlParams.adbeta)) {
    result.site = 'adbeta';
    result.area = escapeParams(urlParams.adbeta);
  }

  // keyvalues to kv
  Object.keys(window.onetAds?.keyvalues || {}).forEach((key) => {
    const k = `kv${key}`;

    if (!result[k]) {
      result[k] = escapeParams(window.onetAds?.keyvalues[key] || '');
    }
  });

  Object.keys(result).forEach((key) => {
    if (result[key] === '') {
      delete result[key];
    }
  });

  return result;
};

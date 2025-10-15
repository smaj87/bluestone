import { NormalizedUrlResult } from 'commons/share_app/components/RouterHelpers/utils';

import { UrlParamsInterface } from './types';

export const defaultUrlParams: UrlParamsInterface = {
  mid: -1,
};
Object.freeze(defaultUrlParams);

// normalizer NOT utils because oc circular dependency
export const normalizedUrlParams = (
  urlParams: NormalizedUrlResult,
): UrlParamsInterface => {
  const stringMid = urlParams.mid;

  return {
    mid: /^\d+$/i.test(stringMid)
      ? Number.parseInt(stringMid, 10)
      : defaultUrlParams.mid,
  };
};

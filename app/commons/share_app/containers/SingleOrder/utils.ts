import { NormalizedUrlResult } from 'commons/share_app/components/RouterHelpers/utils';

import { UrlParamsInterface } from './types';

export const defaultUrlParams: UrlParamsInterface = {
  id: -1,
};
Object.freeze(defaultUrlParams);

export const normalizedUrlParams = (
  urlParams: NormalizedUrlResult,
): UrlParamsInterface => {
  const stringId = urlParams.id;

  return {
    id: /^\d+$/i.test(stringId)
      ? Number.parseInt(stringId, 10)
      : defaultUrlParams.id,
  };
};

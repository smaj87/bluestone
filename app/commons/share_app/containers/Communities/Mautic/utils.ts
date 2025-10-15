import { NormalizedUrlResult } from 'commons/share_app/components/RouterHelpers/utils';

import {
  MAUTIC_CANCELLATION_SURVEY_SLUG,
  MAUTIC_CANCELLATION_THANK_YOU_SLUG,
  MAUTIC_CUSTOM_SURVEY_SLUG,
  MAUTIC_CUSTOM_THANK_YOU_SLUG,
  MAUTIC_DEMO_THANK_YOU_SLUG,
  MAUTIC_URL_NAME,
} from './constants';
import { UrlParamsInterface } from './types';

export const defaultUrlParams: UrlParamsInterface = {
  subpage: '',
  id: -1,
} as const;
Object.freeze(defaultUrlParams);

export const normalizedUrlParams = (
  urlParams: NormalizedUrlResult,
): UrlParamsInterface => {
  const stringId = urlParams.id;

  return {
    subpage: (urlParams.subpage || '') as UrlParamsInterface['subpage'],
    id: /^\d+$/i.test(stringId)
      ? Number.parseInt(stringId, 10)
      : defaultUrlParams.id,
  };
};

export const getSurveyUrl = (id: UrlParamsInterface['id']): string =>
  `/${MAUTIC_URL_NAME}/_subpage/${MAUTIC_CUSTOM_SURVEY_SLUG}/_id/${id}`;

export const deprecated_getNewUrlIfNecessary = () => {
  const path = window.location.pathname;
  const values = [
    MAUTIC_CUSTOM_SURVEY_SLUG,
    MAUTIC_CUSTOM_THANK_YOU_SLUG,
    MAUTIC_DEMO_THANK_YOU_SLUG,
    MAUTIC_CANCELLATION_THANK_YOU_SLUG,
    MAUTIC_CANCELLATION_SURVEY_SLUG,
  ];
  const regexp = new RegExp(
    `^/${MAUTIC_URL_NAME}/(${values.join('|')})(/(\\d+))?`,
    'gi',
  );
  const match = regexp.exec(path);

  if (match) {
    let newPath = `/${MAUTIC_URL_NAME}/_subpage/${match[1]}`;

    if (match[3]) {
      newPath += `/_id/${match[3]}`;
    }

    return newPath;
  }

  return '';
};

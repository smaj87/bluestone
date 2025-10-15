import {
  MAUTIC_CANCELLATION_SURVEY_SLUG,
  MAUTIC_CANCELLATION_THANK_YOU_SLUG,
  MAUTIC_CUSTOM_SURVEY_SLUG,
  MAUTIC_CUSTOM_THANK_YOU_SLUG,
  MAUTIC_DEMO_THANK_YOU_SLUG,
} from './constants';

export interface ApiMauticContactEditInterface {
  tags: string[];
}

export interface UrlParamsInterface {
  subpage:
    | typeof MAUTIC_CUSTOM_THANK_YOU_SLUG
    | typeof MAUTIC_CUSTOM_SURVEY_SLUG
    | typeof MAUTIC_DEMO_THANK_YOU_SLUG
    | typeof MAUTIC_CANCELLATION_THANK_YOU_SLUG
    | typeof MAUTIC_CANCELLATION_SURVEY_SLUG
    | '';
  id: number;
}

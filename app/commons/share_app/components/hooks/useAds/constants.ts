import {
  FOLDER_DRAFTS_KEY,
  FOLDER_EPAYMENTS_KEY,
  FOLDER_EPRESCRIPTIONS_KEY,
  FOLDER_INBOX_KEY,
  FOLDER_NOTIFICATION_KEY,
  FOLDER_OFFERS_KEY,
  FOLDER_OTHER_KEY,
  FOLDER_SENT_KEY,
  FOLDER_SOCIAL_KEY,
  FOLDER_SPAM_KEY,
  FOLDER_TECH_KEY,
  FOLDER_TRASH_KEY,
} from 'containers/Folders/constants';
import { ATTACHMENTS_URL, MAILS_URLS } from 'utils/constants';

export const KEY = 'ads';

export const INVOKE_ADS_FETCH = `${KEY}/INVOKE_ADS_FETCH` as const;

export const KEYWORDS_MAPPING = {
  [MAILS_URLS[FOLDER_INBOX_KEY]]: 'poczta_odebrane',
  [MAILS_URLS[FOLDER_OFFERS_KEY]]: 'poczta_oferty',
  [MAILS_URLS[FOLDER_NOTIFICATION_KEY]]: 'poczta_powiadomienia',
  [MAILS_URLS[FOLDER_EPRESCRIPTIONS_KEY]]: 'poczta_erecepty',
  [MAILS_URLS[FOLDER_EPAYMENTS_KEY]]: 'poczta_eplatnosci',
  [MAILS_URLS[FOLDER_TRASH_KEY]]: 'poczta_kosz',
  [MAILS_URLS[FOLDER_SENT_KEY]]: 'poczta_wyslane',
  [MAILS_URLS[FOLDER_SPAM_KEY]]: 'poczta_spam',
  [MAILS_URLS[FOLDER_DRAFTS_KEY]]: 'poczta_szkice',
  [MAILS_URLS[FOLDER_TECH_KEY]]: 'poczta_tech',
  [MAILS_URLS[FOLDER_SOCIAL_KEY]]: 'poczta_spolecznosci',
  [MAILS_URLS[FOLDER_OTHER_KEY]]: 'poczta_inne',

  [ATTACHMENTS_URL]: 'poczta_zalaczniki',
};

export const AD_ADINFO_CLASS = 'ad_adInfo';

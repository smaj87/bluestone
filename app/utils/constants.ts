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

export const MAILS_URLS = {
  [FOLDER_INBOX_KEY]: 'Odebrane',
  [FOLDER_TECH_KEY]: 'Tech',
  [FOLDER_SENT_KEY]: 'Wyslane',
  [FOLDER_DRAFTS_KEY]: 'Szkice',
  [FOLDER_SPAM_KEY]: 'Spam',
  [FOLDER_TRASH_KEY]: 'Kosz',
  [FOLDER_OTHER_KEY]: 'Inne',
  [FOLDER_OFFERS_KEY]: 'Oferty',
  [FOLDER_NOTIFICATION_KEY]: 'Powiadomienia',
  [FOLDER_SOCIAL_KEY]: 'Spolecznosci',
  [FOLDER_EPRESCRIPTIONS_KEY]: 'ERecepty',
  [FOLDER_EPAYMENTS_KEY]: 'EPlatnosci',
} as const;

export const MAILS_OTHER_URLS = {
  POPSYNC_FOLDERS_URL: 'Popsync',
  CUSTOM_FOLDERS_URL: 'Foldery',
  SEARCH_FOLDER_URL: 'Szukaj',
  HISTORY_FOLDER_URL: 'Historia',
};

export const ATTACHMENTS_URL = 'Zalaczniki';
export const READ_MAIL_URL = 'Czytaj' as const;

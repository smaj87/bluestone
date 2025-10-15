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
import { MAILS_URLS } from 'utils/constants';

export function getUrlNameByKey(key) {
  let urlName;

  switch (key) {
    case FOLDER_SPAM_KEY:
      urlName = MAILS_URLS[FOLDER_SPAM_KEY];
      break;
    case FOLDER_OTHER_KEY:
      urlName = MAILS_URLS[FOLDER_OTHER_KEY];
      break;
    case FOLDER_TRASH_KEY:
      urlName = MAILS_URLS[FOLDER_TRASH_KEY];
      break;
    case FOLDER_DRAFTS_KEY:
      urlName = MAILS_URLS[FOLDER_DRAFTS_KEY];
      break;
    case FOLDER_EPRESCRIPTIONS_KEY:
      urlName = MAILS_URLS[FOLDER_EPRESCRIPTIONS_KEY];
      break;
    case FOLDER_EPAYMENTS_KEY:
      urlName = MAILS_URLS[FOLDER_EPAYMENTS_KEY];
      break;
    case FOLDER_SENT_KEY:
      urlName = MAILS_URLS[FOLDER_SENT_KEY];
      break;
    case FOLDER_OFFERS_KEY:
      urlName = MAILS_URLS[FOLDER_OFFERS_KEY];
      break;
    case FOLDER_NOTIFICATION_KEY:
      urlName = MAILS_URLS[FOLDER_NOTIFICATION_KEY];
      break;
    case FOLDER_SOCIAL_KEY:
      urlName = MAILS_URLS[FOLDER_SOCIAL_KEY];
      break;
    case FOLDER_INBOX_KEY:
      urlName = MAILS_URLS[FOLDER_INBOX_KEY];
      break;
    case FOLDER_TECH_KEY:
      urlName = MAILS_URLS[FOLDER_TECH_KEY];
      break;
    default:
      urlName = false;
  }

  return urlName;
}

export function getKeyByUrlName(urlName) {
  let key;

  switch (urlName) {
    case MAILS_URLS[FOLDER_SPAM_KEY]:
      key = FOLDER_SPAM_KEY;
      break;
    case MAILS_URLS[FOLDER_OTHER_KEY]:
      key = FOLDER_OTHER_KEY;
      break;
    case MAILS_URLS[FOLDER_TRASH_KEY]:
      key = FOLDER_TRASH_KEY;
      break;
    case MAILS_URLS[FOLDER_DRAFTS_KEY]:
      key = FOLDER_DRAFTS_KEY;
      break;
    case MAILS_URLS[FOLDER_EPRESCRIPTIONS_KEY]:
      key = FOLDER_EPRESCRIPTIONS_KEY;
      break;
    case MAILS_URLS[FOLDER_EPAYMENTS_KEY]:
      key = FOLDER_EPAYMENTS_KEY;
      break;
    case MAILS_URLS[FOLDER_SENT_KEY]:
      key = FOLDER_SENT_KEY;
      break;
    case MAILS_URLS[FOLDER_OFFERS_KEY]:
      key = FOLDER_OFFERS_KEY;
      break;
    case MAILS_URLS[FOLDER_NOTIFICATION_KEY]:
      key = FOLDER_NOTIFICATION_KEY;
      break;
    case MAILS_URLS[FOLDER_SOCIAL_KEY]:
      key = FOLDER_SOCIAL_KEY;
      break;
    case MAILS_URLS[FOLDER_INBOX_KEY]:
    case '':
      key = FOLDER_INBOX_KEY;
      break;
    case MAILS_URLS[FOLDER_TECH_KEY]:
      key = FOLDER_TECH_KEY;
      break;
    default:
      key = false;
  }

  return key;
}

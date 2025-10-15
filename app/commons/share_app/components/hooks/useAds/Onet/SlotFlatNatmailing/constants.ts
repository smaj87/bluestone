import { KEY as ADS_KEY } from '../../constants';

export const KEY = `${ADS_KEY}/SlotFlatNatmailing`;

export const INBOX_TPLCODE = '1746213/Webmail-OnetInbox';
export const INBOX_FEED_TPLCODE = '1746213/Webmail-OnetInbox-Feed';
export const INBOX_FEED_TPLCODE_NEW = '1746213/Webmail-OnetInbox-Feed-New';
export const GENERIC_INBOX_TPLCODE = 'lps/Generic-inbox';
export const GENERIC_INBOX_TEST_TPLCODE = 'lps/Test-Generic-inbox';

export const SLOT_FLAT_NATMAILING_STATE_NAME = 'Onet/SlotFlatNatmailing';
export const STORAGE_AD_KEY = `${SLOT_FLAT_NATMAILING_STATE_NAME}/ad`;
export const STORAGE_PRODUCTS_KEY = `${SLOT_FLAT_NATMAILING_STATE_NAME}/products`;

export const SET_TEMPLATE_AD = `${KEY}/SET_TEMPLATE_AD` as const;

export const CLEAR_TEMPLATE_AD = `${KEY}/CLEAR_TEMPLATE_AD` as const;

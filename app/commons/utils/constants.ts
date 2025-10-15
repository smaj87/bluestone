export const APP_ONET = 'onet';
export const APP_GAZETA = 'gazeta';

export const WEATHER_API = 'https://weatherapi.dreamlab.pl/v1.1';

export const DATE_FORMAT = 'YYYY/MM/DD';
export const FORMAT_DATE = 'DD MMMMM YYYY';
export const TIME_FORMAT = 'HH:mm';
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
export const DATE_PRETTY_TIME_FORMAT = `${FORMAT_DATE} ${TIME_FORMAT}`;

export const API_URL = process.env.BASE_API_URL;
export const CALENDAR_API_URL = `${API_URL}/calendar`;
export const WEBMAIL_API_URL = `${API_URL}/webmail`;
export const SETTINGS_API_URL = `${API_URL}/settings`;
export const CONTACTS_API_URL = `${API_URL}/contacts`;

export const API_DISPATCH_DELAY = 200;
export const API_DISPATCH_SHORT_DELAY = 10;
export const API_DISPATCH_LONG_DELAY = 1000;
export const API_DISPATCH_DELAY_FOR_WEBSOCKET = 1000; // DELAY dla wywolan z websocket, mocno opozniamy tutaj to w celach optymalizacyjnych

// Date formats
// śr, 7 grudnia 2022, 11:31
export const LONG_DATE_DAY_NAME_TIME = 'dddd, D MMMMM YYYY, HH:mm';
export const LONG_DATE_TIME = 'DD MMM YYYY, HH:mm';
export const LONG_DATE = 'DD MMMMM YYYY';
export const LONG_DATE_TIME_FULL = 'DD MMM YYYY, HH:mm:ss';
export const SHORT_DATE = 'D MMM YYYY';

export const DATE_TYPES = {
  DEVICE: 'DEVICE',
  LOCATION: 'LOCATION',
  UTC: 'UTC',
} as const;

export const DAY_IN_MILISECONDS = 24 * 60 * 60 * 1000;

export const EMPTY_FUNC = () => {};

const EMPTY_ARRAY: unknown[] = [];
Object.freeze(EMPTY_ARRAY);

const EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);

export { EMPTY_ARRAY, EMPTY_OBJECT };

export const ABORT_ERROR_NAME = 'Abort';

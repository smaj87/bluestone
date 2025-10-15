import t from 'commons/translations/t';

const withLeading0 = (length: number, text: string): string =>
  text.length >= length ? text : withLeading0(length, `0${text}`);

const FORMATTERS: Record<string, (date: Date) => string> = {
  dddd: (date: Date) => t('weekDayName', { day: date.getDay() }),
  ddd: (date: Date) => t('weekDayName', { isShort: true, day: date.getDay() }),
  DD: (date: Date) => `${withLeading0(2, `${date.getDate()}`)}`,
  D: (date: Date) => `${date.getDate()}`,
  MMMMM: (date: Date) => t('monthNameInFullDate', { month: date.getMonth() }),
  MMMM: (date: Date) => t('monthName', { month: date.getMonth() }),
  MMM: (date: Date) =>
    t('monthName', { isShort: true, month: date.getMonth() }),
  MM: (date: Date) => `${withLeading0(2, `${date.getMonth() + 1}`)}`,
  YYYY: (date: Date) => `${date.getFullYear()}`,
  ss: (date: Date) => `${withLeading0(2, `${date.getSeconds()}`)}`,
  mm: (date: Date) => `${withLeading0(2, `${date.getMinutes()}`)}`,
  HH: (date: Date) => `${withLeading0(2, `${date.getHours()}`)}`,
  H: (date: Date) => `${date.getHours()}`,
  LL: (date: Date) =>
    `${withLeading0(2, `${date.getDate()}`)} ${t('monthNameInFullDate', {
      month: date.getMonth(),
    })}`,
};

const ESCAPE = '\\[[^\\[\\]]*\\]';
const matchers = Object.keys(FORMATTERS).concat(ESCAPE);
const matcher = new RegExp(matchers.join('|'), 'g');

const formatDate = (date: Date, format: string): string =>
  format.replace(matcher, (token: string) => {
    // eslint-disable-next-line no-prototype-builtins
    if (FORMATTERS.hasOwnProperty(token)) {
      return FORMATTERS[token](date);
    }

    return token.replace(/\[|\]/g, '');
  });

export default formatDate;

// Zawsze zwracamy obiekt Date czasu gdzie sie znajduje urzadzenie

import { DATE_TYPES } from './constants';
import formatDate from './formatDate';

const convertDeviceDateToLocation = (
  date: Date,
  timeZoneHours: number,
  timeZoneMinutes: number,
) =>
  new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours() + timeZoneHours,
    date.getUTCMinutes() + timeZoneMinutes,
    date.getUTCSeconds(),
  );

const convertDeviceDateToUTC = (date: Date) =>
  new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );

export interface DateWithFormatter extends Date {
  getFormatedDate?: (a: string, b: keyof typeof DATE_TYPES) => string | null;
}

export const stringToDate = (dateString: string): null | DateWithFormatter => {
  const reg =
    /(\d{4})-(\d{1,2})-(\d{1,2})([ tT]+)?(\d{2})?:?(\d{2})?:?(\d{2})?:?(\d{3})?([+-Zz])?([0-9]{2})?:?([0-9]{2})?/i;
  const d = reg.exec(dateString);

  if (d) {
    // Wersja TimeZone
    if ((d[9] === '+' || d[9] === '-') && d[10] && d[11]) {
      // czas miejsca gdzie jest urzadzenie
      const deviceDate: DateWithFormatter = new Date(
        `${+d[1]}-${leadingZero(+d[2])}-${leadingZero(+d[3])}T${leadingZero(
          +d[5],
        )}:${leadingZero(+d[6])}:${leadingZero(+d[7])}${d[9]}${leadingZero(
          +d[10],
        )}:${leadingZero(+d[11])}`,
      );

      deviceDate.getFormatedDate = (
        format: string,
        dateType: keyof typeof DATE_TYPES,
      ) => {
        const timeZoneHours = d[9] === '+' ? +d[10] : -d[10];
        const timeZoneMinutes = d[9] === '+' ? +d[11] : -d[11];

        switch (dateType) {
          case DATE_TYPES.DEVICE:
            return formatDate(deviceDate, format);
          case DATE_TYPES.LOCATION:
            return formatDate(
              convertDeviceDateToLocation(
                deviceDate,
                timeZoneHours,
                timeZoneMinutes,
              ),
              format,
            );
          case DATE_TYPES.UTC:
            return formatDate(convertDeviceDateToUTC(deviceDate), format);
          default:
            return null;
        }
      };

      return deviceDate;
    }

    // Wersja Z (UTC)
    if (d[9]?.toUpperCase() === 'Z') {
      const deviceDate: DateWithFormatter = new Date(
        Date.UTC(+d[1], +d[2] - 1, +d[3], +d[5] || 0, +d[6] || 0, +d[7] || 0),
      );

      deviceDate.getFormatedDate = (
        format: string,
        dateType: keyof typeof DATE_TYPES,
      ) => {
        switch (dateType) {
          case DATE_TYPES.DEVICE:
            return formatDate(deviceDate, format);
          case DATE_TYPES.LOCATION:
            return formatDate(convertDeviceDateToUTC(deviceDate), format);
          case DATE_TYPES.UTC:
            return formatDate(convertDeviceDateToUTC(deviceDate), format);
          default:
            return null;
        }
      };
      return deviceDate;
    }

    // Wersja bez Z oraz bez TimeZone
    const deviceDate: DateWithFormatter = new Date(
      +d[1],
      +d[2] - 1,
      +d[3],
      +d[5] || 0,
      +d[6] || 0,
      +d[7] || 0,
    );

    deviceDate.getFormatedDate = (
      format: string,
      dateType: keyof typeof DATE_TYPES,
    ) => {
      switch (dateType) {
        case DATE_TYPES.DEVICE:
          return formatDate(deviceDate, format);
        case DATE_TYPES.LOCATION:
          return formatDate(deviceDate, format);
        case DATE_TYPES.UTC:
          return formatDate(convertDeviceDateToUTC(deviceDate), format);
        default:
          return null;
      }
    };

    return deviceDate;
  }

  return null;
};

export function leadingZero(number: number) {
  return number < 10 ? `0${number}` : number;
}

export const compereDates = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const isToday = (date: Date | null) => {
  let result = false;

  if (date) {
    result = compereDates(date, new Date());
  }

  return result;
};

export const isYesterday = (date: Date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return compereDates(date, yesterday);
};

export const isThisYear = (date: Date) =>
  new Date().getFullYear() === date.getFullYear();

export function isThisWeek(date: Date) {
  const dateThisWeekStart = new Date();
  const dateThisWeekEnd = new Date();
  const timestamp = date.getTime();
  const dateThisWeekStartDay = dateThisWeekStart.getDay() - 1;

  dateThisWeekStart.setDate(
    dateThisWeekStart.getDate() -
      (dateThisWeekStartDay < 0 ? 6 : dateThisWeekStartDay),
  );
  dateThisWeekStart.setHours(0, 0, 0, 0);
  dateThisWeekEnd.setHours(23, 59, 59, 999);

  return (
    dateThisWeekStart.getTime() <= timestamp &&
    timestamp <= dateThisWeekEnd.getTime()
  );
}

export function minutesBetweenDates(date1: Date, date2: Date) {
  // @ts-ignore daty mozna odejmowac
  const diff = Math.abs(date1 - date2);

  return Math.floor(diff / 1000 / 60);
}

export function isDateInPast(first: Date, second = new Date()) {
  return first.setHours(0, 0, 0, 0) <= second.setHours(0, 0, 0, 0);
}

export const getTimeLeftToDate = (
  date1: Date,
  date2 = new Date(),
  step = 24 * 60 * 60 * 1000,
  // @ts-ignore daty mozna odejmowac
) => Math.round(Math.abs((date1 - date2) / step));

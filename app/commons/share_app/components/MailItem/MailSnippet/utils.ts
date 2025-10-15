import { isThisYear } from 'commons/utils/date';
import formatDate from 'commons/utils/formatDate';

export const scheduleDate = (delayDate: string) => {
  const date = new Date(delayDate);
  let newDate = '';

  if (date) {
    if (isThisYear(date)) {
      newDate = formatDate(date, 'dddd, D MMMMM, HH:mm');
    }
    newDate = formatDate(date, 'dddd, D MMMMM YYYY, HH:mm');
  }

  return newDate;
};

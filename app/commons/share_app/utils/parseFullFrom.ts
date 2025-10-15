import { Email } from 'types';

import { isObject, isString } from 'commons/utils/tinyLodash';

const emailRegexp = /<([^>]*)>$/;

const nameCleanerRegexp = /^[\s"]+|[\s"]+$/g;

export const parseFullFrom = (fullFrom: string | Email, oldFrom?: Email) => {
  const result = {
    name: '',
    email: '',
  };

  if (isString(fullFrom)) {
    const from = (fullFrom as string).trim();

    if (from.search(emailRegexp) >= 0) {
      const [, email] = emailRegexp.exec(from) || [];

      result.name = from
        .replace(emailRegexp, '')
        .replace(nameCleanerRegexp, '');
      result.email = email.replace(nameCleanerRegexp, '');
    } else {
      result.email = from.replace(nameCleanerRegexp, '');
    }
  }

  if (isObject(fullFrom)) {
    result.name = fullFrom.name.replace(nameCleanerRegexp, '');
    result.email = fullFrom.email.replace(nameCleanerRegexp, '');
  }

  return oldFrom &&
    oldFrom.name === result.name &&
    oldFrom.email === result.email
    ? oldFrom
    : result;
};

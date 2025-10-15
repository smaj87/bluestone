import { historyPush } from 'commons/utils/route';

import { FOLDER_INBOX_KEY } from 'containers/Folders/constants';
import { MAILS_URLS } from 'utils/constants';
import { goToSearch } from 'utils/route';

import { SET_IS_OPEN } from './constants';

export const setValue = (value: string) => async () => {
  const trimed = value.trim();

  if (trimed) {
    goToSearch(trimed);
  } else {
    historyPush(`/${MAILS_URLS[FOLDER_INBOX_KEY]}`);
  }
};

export const setIsOpen = (isOpen = false) => ({
  type: SET_IS_OPEN,
  isOpen,
});

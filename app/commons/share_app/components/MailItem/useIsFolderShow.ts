import { useEffect, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailsUrlProps } from 'containers/App/selectors';
import { MAILS_OTHER_URLS } from 'utils/constants';

const getIsFolderShow = (urlName: string) =>
  urlName === MAILS_OTHER_URLS.HISTORY_FOLDER_URL ||
  urlName === MAILS_OTHER_URLS.SEARCH_FOLDER_URL;

const useIsFolderShow = () => {
  const urlName = useSelector(getMailsUrlProps, 'urlName');

  const [isFolderShow, setIsFolderShow] = useState(getIsFolderShow(urlName));

  useEffect(() => {
    // celowe opoznienie zeby zdarzyl sie zaladowac fetch
    setIsFolderShow(getIsFolderShow(urlName));
  }, [urlName]);

  return isFolderShow;
};

export default useIsFolderShow;

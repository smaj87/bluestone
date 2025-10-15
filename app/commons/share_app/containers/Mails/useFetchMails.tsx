import {
  getLimit,
  isMobile as isMobileSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { scrollPage } from 'commons/utils/scroll';
import { dispatch } from 'commons/utils/store';

import { getMailsUrlProps, isPage } from 'containers/App/selectors';

import { fetch } from './actions';
import { PAGE_NAME } from './constants';

const useFetchMails = () => {
  const limit = useSelector(getLimit);
  const isMobile = useSelector(isMobileSelector);
  const { ...urlParams } = useSelector(getMailsUrlProps); // new instance of urlParams

  // optymalizacja, nie nasluchujemy na object ktory sie ciagle zmienia tylko na faktycznej wartosci
  if (urlParams.history) {
    urlParams.history = urlParams.history.email;
  }

  // params changes
  useEffect(() => {
    if (getStateValueBySelector(isPage, { pageName: PAGE_NAME })) {
      // scroll top on params change
      scrollPage();
      dispatch(fetch());
    }
  }, [isMobile, limit, ...Object.values(urlParams)]);

  return null;
};

export default useFetchMails;

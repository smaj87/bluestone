import { PAGE_NAME as MAILS_PAGE_NAME } from 'commons/share_app/containers/Mails/constants';
import { isFetched as isMailsFetched } from 'commons/share_app/containers/Mails/selectors';
import { PAGE_NAME as READ_MAIL_PAGE_NAME } from 'commons/share_app/containers/ReadMail/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { createSelector } from 'commons/utils/reselect';

import { PAGE_NAME as NEW_MAIL_PAGE_NAME } from 'containers/NewMail/constants';

import { getPage } from '../../selectors';
import { isShowDesktopAds as isShowDesktopAdsSelector } from '../selectors';

export const isShowAd = createSelector(
  [
    isShowDesktopAdsSelector,
    getPage,
    isMailsFetched,
    (state) => getMailField(state, 'isFetched'),
  ],
  (isShowDesktopAds, page, isMailsFetchedProp, isReadMailFetched) =>
    isShowDesktopAds &&
    ((page === MAILS_PAGE_NAME && isMailsFetchedProp) ||
      (page === READ_MAIL_PAGE_NAME && isReadMailFetched) ||
      page === NEW_MAIL_PAGE_NAME),
);

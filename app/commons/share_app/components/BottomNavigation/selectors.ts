import {
  isMobile as isMobileSelector,
  isShoppingShow,
} from 'commons/hooks/useUserConfig/selectors';
import { PAGE_NAME as PAGE_NAME_ATTACHMENTS } from 'commons/share_app/containers/Attachments/constants';
import { isAnyChecked as isAnyAttachmentChecked } from 'commons/share_app/containers/Attachments/selectors';
import {
  PAGE_NAME as PAGE_NAME_MAIL_LIST,
  SUB_PAGE_NAME_HISTORY,
} from 'commons/share_app/containers/Mails/constants';
import { isAnyChecked as isAnyMailChecked } from 'commons/share_app/containers/Mails/selectors';
import { PAGE_NAME as PAGE_NAME_READ_MAIL } from 'commons/share_app/containers/ReadMail/constants';
import { createSelector } from 'commons/utils/reselect';

import { isPage } from 'containers/App/selectors';
import { PAGE_NAME as PAGE_NAME_NEW_MAIL } from 'containers/NewMail/constants';

const mailListProps = { pageName: PAGE_NAME_MAIL_LIST };
const attchListProps = { pageName: PAGE_NAME_ATTACHMENTS };
const readMailProps = { pageName: PAGE_NAME_READ_MAIL };
const newMailProps = { pageName: PAGE_NAME_NEW_MAIL };
const historyProps = { subpageName: SUB_PAGE_NAME_HISTORY };

export const isNewMailButton = createSelector(
  [
    (state) => isPage(state, mailListProps),
    (state) => isPage(state, attchListProps),
    isMobileSelector,
  ],
  (isM, isA, isU) => (isM || isA) && isU,
);

const isNoBottomNav = createSelector([isMobileSelector], (isU) => !isU);

const isPageWithNav = createSelector(
  [
    isNoBottomNav,
    (state) => isPage(state, newMailProps),
    (state) => isPage(state, readMailProps),
  ],
  (isNoNav, isN, isR) => !isNoNav && (isN || isR),
);

const isCheckedNav = createSelector(
  [isNoBottomNav, isAnyAttachmentChecked, isAnyMailChecked],
  (isNoNav, isC, isMC) => !isNoNav && (isC || isMC),
);

const isShoppingNav = createSelector(
  [isShoppingShow, (state) => isPage(state, attchListProps)],
  (isSS, isA) => isSS && !isA,
);

export const isBottomNav = createSelector(
  [
    isPageWithNav,
    isCheckedNav,
    isShoppingNav,
    (state) => isPage(state, historyProps),
  ],
  (isPageNav, isC, isNR, isH) => isPageNav || isC || (isNR && !isH),
);

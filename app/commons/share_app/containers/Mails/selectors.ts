import { getDropdownById } from 'commons/Dropdown/selectors';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementSelector,
  isFetched as isFetchedAgreementSelector,
  isFetchedError as isFetchingAgreementErrorSelector,
} from 'commons/hooks/useAgreements/selectors';
import {
  getLimit,
  isInvoiceAgreement as isInvoiceAgreementSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { getGroupIdsCount } from 'commons/ListIntersectionObserver/utils';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { isToday, stringToDate } from 'commons/utils/date';
import { createCachedSelector, createSelector } from 'commons/utils/reselect';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownMailItemMore/constants';
import { getMailsUrlProps } from 'containers/App/selectors';
import {
  FOLDER_DRAFTS_KEY,
  FOLDER_SENT_KEY,
  FOLDER_SPAM_KEY,
  FOLDER_TRASH_KEY,
} from 'containers/Folders/constants';
import {
  getFidByKey,
  getNotificationByMid,
  isFolderByKey,
} from 'containers/Folders/selectors';
import { MAILS_OTHER_URLS } from 'utils/constants';
import { getKeyByUrlName } from 'utils/url';

import {
  KEY,
  MAIL_FLAG_ANSWERED,
  MAIL_FLAG_ATTACHMENTS,
  MAIL_FLAG_FLAGGED,
  MAIL_FLAG_FORWARDED,
  MAIL_FLAG_IMAP_MODIFIED,
  MAIL_FLAG_INVOICE,
  MAIL_FLAG_SEEN,
  MAIL_FLAG_SEND_FAIL,
  MAIL_FLAG_TRUSTEDSENDER,
  MAIL_FLAG_UNSUBHEADER,
} from './constants';
import { initialState } from './reducer';
import { MailRootState, MailState } from './types';
import { isMailSentWithin14Days } from './utils';

export const getState = createSelector(
  (state: MailRootState) => state,
  (state): MailState => state?.[KEY] || initialState,
);

export const isAnyReadChecked = createSelector(
  getState,
  (state) => state.isAnyReadChecked,
);

export const isAnyScheduledSendUnchecked = createSelector(
  getState,
  (state) => state.isAnyScheduledSendUnchecked,
);

export const isAnyNonScheduledSendUnchecked = createSelector(
  getState,
  (state) => state.isAnyNonScheduledSendUnchecked,
);

export const isAnyReadUnchecked = createSelector(
  getState,
  (state) => state.isAnyReadUnchecked,
);

export const isAnyUnreadChecked = createSelector(
  getState,
  (state) => state.isAnyUnreadChecked,
);

export const isAnyUnreadUnchecked = createSelector(
  getState,
  (state) => state.isAnyUnreadUnchecked,
);

export const isCancelingSend = createSelector(
  getState,
  (state) => state.isCancelingSend,
);

export const getLastShownId = createSelector(
  getState,
  (state) => state.lastShownId,
);

export const getChecks = createSelector(getState, (state) => state.checks);
export const getPositiveChecks = createSelector(getChecks, (checks) =>
  Object.entries(checks)
    .filter(([_, isChecked]) => isChecked)
    .map(([mid]) => Number(mid)),
);

export const isCheckedById = createCachedSelector(
  [getChecks, (_: MailRootState, id: number) => id],
  (checks, id) => !!checks[id],
)((_, id) => id);

export const getCheckedCount = createSelector(
  getPositiveChecks,
  (checks) => checks.length,
);

export const getHoverId = createSelector(getState, (state) => state.hoverId);

export const isHoverById = createSelector(
  [
    getHoverId,
    (_, id) => id,
    (state, id) =>
      !!getDropdownById(state, { id: `${DROPDOWN_POPUP_ID}_${id}` })?.isOpen,
  ],
  (hoverId, id, isDropdownOpen) => isDropdownOpen || hoverId === id,
);

export const isAnyChecked = createSelector(
  getCheckedCount,
  (checkedCount) => checkedCount > 0,
);

export const getFolderIdByUrlName = createSelector(
  // @ts-ignore todo @spiascik
  [(state, urlName: string) => getFidByKey(state, getKeyByUrlName(urlName))],
  (folderId) => folderId,
);

export const isLoadingAfterRemove = createSelector(
  getState,
  (state) => state.isLoadingAfterRemove,
);

export const isFetching = createSelector(
  [getState, isLoadingAfterRemove],
  (state, isLoading) => state.isFetching && !isLoading,
);

export const isFetched = createSelector(getState, (state) => state.isFetched);

export const isFetchedError = createSelector(
  getState,
  (state) => state.isFetchedError,
);

export const getMails = createSelector(getState, (state) => state.mails);

export const getMailById = createCachedSelector(
  [getMails, (_: MailRootState, id: number) => id],
  (mails, id) => mails[id],
)((_, id) => id);

export const getSchemaOrg = createSelector(
  [getMailById],
  (mail) => mail?.schema_org || {},
);

export const isMailScheduledSend = createSelector(
  [getSchemaOrg],
  (schemaOrg) => !!schemaOrg?.delayedSend?.delayDate,
);

export const isAnyNotMailingChecked = createSelector(
  [getPositiveChecks, getMails],
  (mids, mails) => mids.some((mid) => !mails[mid]?.isMailing),
);

export const isAnyScheduledSendChecked = createSelector(
  [getPositiveChecks, getMails],
  (mids, mails) =>
    mids.some((mid) => mails[mid]?.schema_org?.delayedSend?.delayDate),
);

export const getMailAvatar = createSelector(
  [getMailById],
  (mail) => mail?.avatar || '',
);

export const getMailMid = createSelector(
  [getMailById],
  (mail) => mail?.mid || -1,
);

export const getMailRootMid = createSelector(
  [getMailById],
  (mail) => mail?.root_mid || -1,
);

export const isMailing = createSelector(
  [getMailById],
  (mail) => !!mail?.isMailing,
);

export const isMailSeen = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_SEEN),
);

export const isMailFavourite = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_FLAGGED),
);

export const getSentDate = createSelector(
  getMailById,
  (mail) => mail?.sent_date || '',
);

export const isMailingMarked = createSelector(
  [isMailFavourite, isMailing, getSentDate],
  (isFavourite, isMailingProp, sentDate) =>
    isFavourite && isMailingProp && isToday(stringToDate(sentDate)),
);

export const isMailAttachments = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_ATTACHMENTS),
);

export const isMailAnswered = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_ANSWERED),
);

export const isMailForwarded = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_FORWARDED),
);

export const isMailTrusted = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_TRUSTEDSENDER),
);

export const isMailInvoice = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_INVOICE),
);

export const isMailSendFail = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_SEND_FAIL),
);

export const isMailUnsubscribe = createSelector(getMailById, (mail) =>
  checkFlag(mail?.flags, MAIL_FLAG_UNSUBHEADER),
);

export const isMailFraud = createSelector(
  [getMailById, (state) => getFidByKey(state, FOLDER_SENT_KEY)],
  (mail, sentFid) =>
    mail &&
    mail?.fid !== sentFid &&
    checkFlag(mail?.flags, MAIL_FLAG_IMAP_MODIFIED),
);

export const getMailGroupIdById = createSelector(
  [getMailById],
  (mail) => mail?.groupId,
);

export const getTotalCount = createSelector(
  getState,
  (state) => state.totalCount,
);

export const getPageCount = createSelector(
  [getTotalCount, getLimit],
  (totalCount, limit) => Math.ceil(totalCount / limit),
);

export const getGroups = createSelector(getState, (state) => state.groups);
export const getMailsCount = createSelector(getGroups, getGroupIdsCount);

export const isMails = createSelector(getMailsCount, (count) => count > 0);

export const isAnyUnchecked = createSelector(
  getMailsCount,
  getCheckedCount,
  (mailsCount, checkedCount) => checkedCount < mailsCount,
);

export const getGroupsCount = createSelector(
  getGroups,
  (groups) => groups.length,
);

export const getGroupVisibility = createSelector(
  getState,
  (state) => state.groupVisibility,
);

export const isInfinityLoaderShow = createSelector(
  [isFetching, isFetchedError, getMailsCount, getTotalCount],
  (isFetchingProp, isFetchedErrorProp, mailsCount, totalCount) =>
    !isFetchedErrorProp && (isFetchingProp || mailsCount < totalCount),
);

export const isVisibleByGroupId = createCachedSelector(
  [
    getGroupVisibility,
    getGroupsCount,
    (_: MailRootState, groupId: number) => groupId,
  ],
  (groupVisibility, groupsCount, groupId) =>
    !!groupVisibility[groupId] || groupsCount < 5,
)((_, groupId) => groupId);

const isLabelNewShowEnabled = createSelector(
  [
    (state) => isFolderByKey(state, FOLDER_SPAM_KEY),
    (state) => isFolderByKey(state, FOLDER_SENT_KEY),
    (state) => isFolderByKey(state, FOLDER_TRASH_KEY),
    (state) => isFolderByKey(state, FOLDER_DRAFTS_KEY),
  ],
  (isSp, isS, isT, isD) => !isSp && !isS && !isT && !isD,
);

export const isLabelNewShow = createSelector(
  [isLabelNewShowEnabled, getNotificationByMid, isMailSeen],
  (isEnabled, isNotification, isSeen) => !isSeen && isEnabled && isNotification,
);

export const isRemoveFromListAfterMove = createSelector(
  [(state) => getMailsUrlProps(state, 'urlName')],
  (urlName) =>
    urlName !== MAILS_OTHER_URLS.SEARCH_FOLDER_URL &&
    urlName !== MAILS_OTHER_URLS.HISTORY_FOLDER_URL,
);

export const isTo = createSelector(
  [
    (state) => isFolderByKey(state, FOLDER_SENT_KEY),
    (state) => isFolderByKey(state, FOLDER_DRAFTS_KEY),
  ],
  (isS, isD) => isS || isD,
);

export const isVisiblePayWithOnetSnippet = createSelector(
  [
    (state) => isAgreementSelector(state, { agreementId: SMART_FUNCTIONS_ID }),
    isFetchedAgreementSelector,
    isFetchingAgreementErrorSelector,
    isMailInvoice,
    isInvoiceAgreementSelector,
    getSentDate,
  ],
  (
    isAgreement,
    isFetchedAgreement,
    isFetchingAgreementError,
    isInvoice,
    isInvoiceAgreement,
    mailSentDate,
  ) => {
    const isSentWithin14Days = isMailSentWithin14Days(mailSentDate);

    return (
      isAgreement &&
      isFetchedAgreement &&
      !isFetchingAgreementError &&
      isInvoice &&
      !isInvoiceAgreement &&
      isSentWithin14Days
    );
  },
);

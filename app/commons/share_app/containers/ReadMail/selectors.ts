import { Email, SchemaOrg } from 'types';

import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementSelector,
  isFetched as isFetchedAgreementSelector,
  isFetchedError as isFetchingAgreementErrorSelector,
} from 'commons/hooks/useAgreements/selectors';
import {
  getAliasesEmails,
  getMainAccount,
  isInvoiceAgreement as isInvoiceAgreementSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { Coupon } from 'commons/share_app/containers/Coupons/types';
import {
  MAIL_FLAG_IMAP_MODIFIED,
  MAIL_FLAG_INVOICE,
  MAIL_FLAG_SPF_SOFTFAIL,
  MAIL_FLAG_TRUSTEDSENDER,
} from 'commons/share_app/containers/Mails/constants';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { createSelector } from 'commons/utils/reselect';

import { SCHEMA_EVENT_PAY_ACTION } from 'components/Schema/constants';
import {
  findSchemaData,
  getUrlForButton,
  stripSchemaOrgUrlFromString,
} from 'components/Schema/schemaUtils';
import { getReadMailUrlProps } from 'containers/App/selectors';
import { FOLDER_SENT_KEY } from 'containers/Folders/constants';
import { getFidByKey, getPopsyncs } from 'containers/Folders/selectors';

import { isMailSentWithin14Days } from '../Mails/utils';
import {
  DEFAULT_HEADERS,
  DEFAULT_READ_MAIL,
  KEY,
  SECURITY_TYPE_ERROR,
  SECURITY_TYPE_NONE,
  SECURITY_TYPE_SPF_SOFT_FAIL_ERROR,
  SECURITY_TYPE_SUCCESS,
  SECURITY_TYPE_WARNING,
} from './constants';
import { initialState } from './reducer';
import {
  Headers,
  ReadMailParsed,
  ReadMailRootState,
  ReadMailState,
} from './types';
import {
  isAnySecurityFlag,
  isEmailWhiteListed,
  isSecurityError,
  isSecuritySuccess,
} from './utils';

export const getState = createSelector(
  (state: ReadMailRootState) => state?.[KEY] || initialState,
  (state): ReadMailState => state,
);

export const getMails = createSelector(getState, (state) => state.mails);
export const getHeaders = createSelector(getState, (state) => state.headers);

export const getMids = createSelector(getState, (state) => state.mids);
export const getMidByType = createSelector(
  [
    getMids,
    (state) => getReadMailUrlProps(state, 'mid'),
    (_, type: 'next' | 'prev') => type,
  ],
  (mids, mid, type) => {
    let result = -1;
    const index = mids.findIndex((m: number) => m === mid);

    if (index >= 0) {
      result = mids[index + (type === 'next' ? -1 : 1)] || -1;
    }

    return result;
  },
);

export const getWhiteList = createSelector(
  getState,
  (state) => state.whiteList,
);
export const getWhiteListGlobals = createSelector(
  getState,
  (state) => state.whiteListGlobals,
);

export const getMailByMid = createSelector(
  [getMails, (_, mid) => mid],
  (mails, mid): ReadMailParsed => mails[mid] || { ...DEFAULT_READ_MAIL, mid },
);

export const getMail = createSelector(
  [(state) => getMailByMid(state, getReadMailUrlProps(state, 'mid'))],
  (mail): ReadMailParsed => mail,
);

export const getMailHeaders = createSelector(
  [getHeaders, (state) => getReadMailUrlProps(state, 'mid')],
  (headers, mid): Headers => headers[mid] || { ...DEFAULT_HEADERS, mid },
);

export const getMailField = createSelector(
  [getMail, (_, field: keyof ReadMailParsed) => field],
  (mail, field) => mail?.[field],
);

export const getAttachmentsSize = createSelector(
  [
    (state) =>
      getMailField(state, 'attachments') as ReadMailParsed['attachments'],
  ],
  (attachments) => attachments.reduce((sum, a) => sum + a.size, 0),
);

export const getMailHeadersField = createSelector(
  [getMailHeaders, (_, field: keyof Headers) => field],
  (headers, field) => headers?.[field],
);

export const isWhiteListFetching = createSelector(
  getState,
  (state) => state.isWhiteListFetching,
);
export const isWhiteListFetched = createSelector(
  getState,
  (state) => state.isWhiteListFetched,
);
export const isWhiteListFetchedError = createSelector(
  getState,
  (state) => state.isWhiteListFetchedError,
);
export const isWhiteListed = createSelector(
  [
    getWhiteList,
    (state) => getMailField(state, 'from') as ReadMailParsed['from'],
  ],
  (whiteList, from) => isEmailWhiteListed(whiteList, from.email),
);

export const isWhiteListedGlobals = createSelector(
  [
    getWhiteListGlobals,
    (state) => getMailField(state, 'from') as ReadMailParsed['from'],
  ],
  (whiteListGlobals, from) =>
    isEmailWhiteListed(whiteListGlobals, from.email, true),
);

export const isFraud = createSelector(
  [
    (state) => getMailField(state, 'fid'),
    (state) => getMailField(state, 'flags') as string[],
    (state) => getFidByKey(state, FOLDER_SENT_KEY),
  ],
  (fid, flags, sentFid) =>
    fid !== sentFid && checkFlag(flags, MAIL_FLAG_IMAP_MODIFIED),
);

export const isInvoice = createSelector(
  [(state) => getMailField(state, 'flags') as string[]],
  (flags) => checkFlag(flags, MAIL_FLAG_INVOICE),
);

export const getSecurityType = createSelector(
  [(state) => getMailField(state, 'flags') as string[]],
  (flags) => {
    let result;

    if (isSecurityError(flags)) {
      result = SECURITY_TYPE_ERROR;
    } else if (checkFlag(flags, MAIL_FLAG_SPF_SOFTFAIL)) {
      result = SECURITY_TYPE_SPF_SOFT_FAIL_ERROR;
    } else if (
      isSecuritySuccess(flags, checkFlag(flags, MAIL_FLAG_TRUSTEDSENDER))
    ) {
      result = SECURITY_TYPE_SUCCESS;
    } else if (isAnySecurityFlag(flags, 'SPF')) {
      result = SECURITY_TYPE_WARNING;
    } else {
      result = SECURITY_TYPE_NONE;
    }

    return result;
  },
);

export const isSecurity = createSelector(
  [getSecurityType, (_, type: string) => type],
  (securityType, type) => securityType === type,
);

export const getReceivers = createSelector(
  [
    (state) => getMailField(state, 'to') as Email[],
    (state) => getMailField(state, 'cc') as Email[],
    (state) => getMailField(state, 'bcc') as Email[],
    getMainAccount,
    getAliasesEmails,
    getPopsyncs,
  ],
  (to, cc, bcc, mainAccount, aliases, popsyncs) => {
    const userAccounts = [mainAccount, ...aliases, ...popsyncs];
    const receivers: { mainReceiver: Email; otherReceivers: Email[] } = {
      mainReceiver: { name: '', email: '' },
      otherReceivers: [],
    };

    [...to, ...(cc || []), ...(bcc || [])].forEach((receiver) => {
      if (
        receiver.email &&
        !receivers.mainReceiver.email &&
        userAccounts.includes(receiver.email)
      ) {
        receivers.mainReceiver = receiver;
      } else if (receiver.email) {
        receivers.otherReceivers.push(receiver);
      }
    });

    return receivers;
  },
);

export const getSchema = createSelector(
  [(state): SchemaOrg => getMailField(state, 'schema_org') as SchemaOrg],
  (schema) => schema,
);

export const isSchemaData = createSelector(
  getSchema,
  (schema: SchemaOrg) => schema?.data?.length > 0,
);

export const getCouponsFromSchema = createSelector(
  getSchema,
  (schema) => schema?.coupons || [],
);

export const getDeliveriesFromSchema = createSelector(
  getSchema,
  (schema) => schema?.deliveries || [],
);

export const getOrdersFromSchema = createSelector(
  getSchema,
  (schema) => schema?.orders || [],
);

export const getPromoCardsFromSchema = createSelector(
  getSchema,
  (schema) => schema?.promoCards || [],
);

export const getCashbacksFromSchema = createSelector(
  getSchema,
  (schema) => schema?.cashbacks || [],
);

export const getCoupon = createSelector(
  [getCouponsFromSchema, (_, couponId) => couponId],
  (coupons, couponId) =>
    coupons.find((coupon: Coupon) => couponId === coupon.id),
);

export const isShowMoreDiscounts = createSelector(
  getState,
  (state) => state.isShowDiscounts,
);

export const getDiscountsCount = createSelector(
  getSchema,
  (schema) => schema?.discountsLength,
);

export const isDiscounts = createSelector(
  getSchema,
  (schema) => schema?.isDiscounts || schema?.isAdsDiscounts,
);

export const isCoupons = createSelector(
  getSchema,
  (schema) => schema?.isAnyCoupons || schema?.isAnyAdsCoupons,
);

export const isCashbacks = createSelector(
  getSchema,
  (schema) => schema?.isAnyCashbacks || schema?.isAnyAdsCashbacks,
);

export const isPromoCards = createSelector(
  getSchema,
  (schema) => schema?.isAnyPromoCards || schema?.isAnyAdsPromoCards,
);

export const selectedEventTabKey = createSelector(
  getSchema,
  (schema) => schema?.activeEventTabKey || '0',
);

export const selectedEventTabData = createSelector(
  getSchema,
  (schema) => schema?.activeEventTabData,
);

export const getClearedSchemaData = createSelector(
  getSchema,
  (schema) => schema?.clearedData,
);

export const getPaymentData = createSelector(
  getSchema,
  ({ data, typeKeyword }) =>
    data
      ? findSchemaData(
          data,
          typeKeyword,
          (_: any, v: string) =>
            stripSchemaOrgUrlFromString(v).toLowerCase() ===
            SCHEMA_EVENT_PAY_ACTION.toLowerCase(),
        )
      : null,
);

export const getTrackingBtnData = createSelector(
  [getSchema, (_, params) => params],
  ({ data: schemaOrgData, typeKeyword }, { predicate, trackingKey }) => {
    const typeKey = trackingKey || typeKeyword;
    const data = findSchemaData(schemaOrgData, typeKey, predicate) as any;

    let url;
    let name;

    if (data && typeKey === 'trackingUrl') {
      url = data[typeKey as keyof typeof data];
      name = 'ctaTrackingOrder';
    } else {
      url = getUrlForButton(data);
    }

    return { data, url, name };
  },
);

export const isVisiblePayWithOnetInfobar = createSelector(
  [
    (state) => isAgreementSelector(state, { agreementId: SMART_FUNCTIONS_ID }),
    isFetchedAgreementSelector,
    isFetchingAgreementErrorSelector,
    isInvoice,
    isInvoiceAgreementSelector,
    (state) => getMailField(state, 'sent_date') as ReadMailParsed['sent_date'],
  ],
  (
    isAgreement,
    isFetchedAgreement,
    isFetchingAgreementError,
    isInvoiceValue,
    isInvoiceAgreement,
    mailSentDate,
  ) => {
    const isSentWithin14Days = isMailSentWithin14Days(mailSentDate);

    return (
      isAgreement &&
      isFetchedAgreement &&
      !isFetchingAgreementError &&
      isInvoiceValue &&
      !isInvoiceAgreement &&
      isSentWithin14Days
    );
  },
);

export const isInvoicePreparing = createSelector(
  getSchema,
  (schema) => schema?.isInvoicePreparing,
);

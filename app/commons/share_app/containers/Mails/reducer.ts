import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import {
  checkFlag,
  removeFlag,
  setFlag,
} from 'commons/share_app/utils/mailFlags';
import { normalizeSchemaOrg } from 'commons/share_app/utils/normalizeSchemaData';
import { keys, range } from 'commons/utils/tinyLodash';

import { EMPTY_FOLDER } from 'containers/Folders/constants';
import { SEND_MAIL } from 'containers/NewMail/constants';
import { getIdRage } from 'utils/listUtil';

import {
  CANCEL_SEND_MAIL,
  CANCEL_SEND_MAIL_FAILURE,
  CANCEL_SEND_MAIL_SUCCESS,
  FETCH_MAILS,
  FETCH_MAILS_FAILURE,
  FETCH_MAILS_SUCCESS,
  LOAD_MAILS_AFTER_REMOVE,
  MAIL_FLAG_ANSWERED,
  MAIL_FLAG_FORWARDED,
  MAIL_FLAG_INVOICE,
  MAIL_FLAG_SEEN,
  MOVE_MAILS,
  SET_GROUP_VISIBILITY,
  SET_HOVER_ID,
  SET_INVOICE_PREPARING,
  SET_LAST_SHOWN_ID,
  TOGGLE_CHECKED,
  TOGGLE_FLAG,
  UPDATE_MAILS_SCHEMA,
} from './constants';
import { MailsAction, MailState } from './types';
import {
  cancelSendMailsUpdater,
  getIsChecksInfos,
  getMailList,
  isMailSentWithin14Days,
} from './utils';

export const initialState: MailState = {
  mails: {},
  checks: {},
  totalCount: 0,
  groups: [],
  groupVisibility: {},
  isLoadingAfterRemove: false,
  isFetching: false,
  isFetched: false,
  isFetchedError: false,
  lastShownId: -1,
  hoverId: -1,
  lastIndex: -1,
  isCancelingSend: false,
  // wartości pomocnicze do optymalzacji
  isAnyReadUnchecked: false,
  isAnyReadChecked: false,
  isAnyUnreadChecked: false,
  isAnyUnreadUnchecked: false,
  isAnyScheduledSendUnchecked: false,
  isAnyNonScheduledSendUnchecked: false,
};

export default (state = initialState, action: MailsAction): MailState => {
  switch (action.type) {
    case FETCH_MAILS: {
      const reset = !action.append
        ? {
            groups: [],
            isFetched: false,
          }
        : {};

      return {
        ...state,
        ...reset,
        isFetching: true,
        isFetchedError: false,
      };
    }
    case FETCH_MAILS_SUCCESS:
      return {
        ...state,
        mails: action.mails,
        groups: action.groups,
        checks: action.checks,
        totalCount: action.totalCount,
        isFetching: false,
        isFetched: true,
        isFetchedError: false,
        ...getIsChecksInfos(action.mails, action.checks),
      };

    case FETCH_MAILS_FAILURE:
      return { ...state, isFetchedError: true, isFetching: false };

    case TOGGLE_CHECKED: {
      const checks: MailState['checks'] = { ...state.checks };
      let lastIndex = -1;

      if (action.mode === CHECKED_MODE.SINGLE) {
        const mailList = getMailList(state.mails, state.groups);
        const index = mailList.findIndex((i) => i.mid === action.id);

        checks[action.id] =
          action.isChecked === undefined
            ? !state.checks[action.id]
            : action.isChecked;

        if (action.isShift) {
          if (index >= 0 && state.lastIndex >= 0) {
            getIdRage(range(mailList.length), index, state.lastIndex).forEach(
              (i) => {
                checks[mailList[i].mid] = checks[action.id];
              },
            );
          }
        }

        if (checks[action.id] && index >= 0) {
          lastIndex = index;
        }
      } else {
        getMailList(state.mails, state.groups).forEach(({ mid }) => {
          if (
            action.mode === CHECKED_MODE.ALL ||
            (action.mode === CHECKED_MODE.READ &&
              checkFlag(state.mails[mid]?.flags, MAIL_FLAG_SEEN)) ||
            (action.mode === CHECKED_MODE.UNREAD &&
              !checkFlag(state.mails[mid]?.flags, MAIL_FLAG_SEEN)) ||
            (action.mode === CHECKED_MODE.SCHEDULED_SEND &&
              state.mails[mid]?.schema_org?.delayedSend?.delayDate) ||
            (action.mode === CHECKED_MODE.NON_SCHEDULED_SEND &&
              !state.mails[mid]?.schema_org?.delayedSend?.delayDate)
          ) {
            checks[mid] =
              action.isChecked === undefined
                ? !state.checks[mid]
                : action.isChecked;
          } else {
            checks[mid] = false;
          }
        });
      }

      return {
        ...state,
        checks,
        lastIndex,
        ...getIsChecksInfos(state.mails, checks),
      };
    }

    case SET_INVOICE_PREPARING: {
      const updates: MailState['mails'] = {};

      Object.keys(state.mails).forEach((id) => {
        const shouldUpdate =
          isMailSentWithin14Days(state.mails[id]?.sent_date) &&
          checkFlag(state.mails[id]?.flags, MAIL_FLAG_INVOICE);

        if (shouldUpdate) {
          updates[id] = {
            ...state.mails[id],
            schema_org: {
              ...state.mails[id]?.schema_org,
              isInvoicePreparing: true,
            },
          };
        }
      });

      return {
        ...state,
        mails: {
          ...state.mails,
          ...updates,
        },
      };
    }

    case UPDATE_MAILS_SCHEMA: {
      const updates: MailState['mails'] = {};

      keys(action.schemas).forEach((id) => {
        if (state.mails[id]) {
          updates[id] = {
            ...state.mails[id],
            schema_org: normalizeSchemaOrg({
              ...action.schemas[id],
              from: state.mails[id].from,
            }),
          };
        }
      });

      return {
        ...state,
        mails: {
          ...state.mails,
          ...updates,
        },
      };
    }

    case TOGGLE_FLAG: {
      const updates: MailState['mails'] = {};

      Object.keys(action.midsToFlags).forEach((id) => {
        let flags = state.mails[id]?.flags || [];

        flags = action.midsToFlags[id]
          ? setFlag(flags, action.flag)
          : removeFlag(flags, action.flag);

        updates[id] = { ...state.mails[id], flags };
      });

      return {
        ...state,
        mails: {
          ...state.mails,
          ...updates,
        },
      };
    }

    case MOVE_MAILS: {
      const updates: MailState['mails'] = {};
      let isUpdated = false;

      (Object.keys(action.mailsToFid) as unknown as number[]).forEach((id) => {
        if (state.mails[id]) {
          updates[id] = { ...state.mails[id], fid: action.mailsToFid[id] };
          isUpdated = true;
        }
      });

      return isUpdated
        ? {
            ...state,
            mails: {
              ...state.mails,
              ...updates,
            },
          }
        : state;
    }

    case SET_GROUP_VISIBILITY:
      return {
        ...state,
        groupVisibility: {
          ...state.groupVisibility,
          ...action.groupIds,
        },
      };

    case SET_LAST_SHOWN_ID:
      return { ...state, lastShownId: action.id };

    case LOAD_MAILS_AFTER_REMOVE: {
      return { ...state, isLoadingAfterRemove: action.isLoading };
    }

    case SET_HOVER_ID:
      return { ...state, hoverId: action.id };

    case EMPTY_FOLDER: {
      return { ...state, ...initialState };
    }

    case CANCEL_SEND_MAIL:
      return {
        ...state,
        isCancelingSend: true,
        mails: cancelSendMailsUpdater(state.mails, action.mails, (mail) => ({
          ...mail,
          isCancelingSend: true,
        })),
      };

    case CANCEL_SEND_MAIL_SUCCESS:
    case CANCEL_SEND_MAIL_FAILURE:
      return {
        ...state,
        isCancelingSend: false,
        mails: cancelSendMailsUpdater(state.mails, action.mails, (mail) => ({
          ...mail,
          isCancelingSend: false,
          schema_org:
            action.type === CANCEL_SEND_MAIL_SUCCESS
              ? { ...mail.schema_org, delayedSend: {} }
              : mail.schema_org,
        })),
      };

    case SEND_MAIL: {
      const mid = action.payload?.mid || -1;

      if (mid > 0) {
        const mail = state.mails[mid];

        if (mail) {
          let updatedFlags = mail.flags;

          if (action.payload!.isAnswered) {
            updatedFlags = setFlag(updatedFlags, MAIL_FLAG_ANSWERED);
          }

          if (action.payload!.isForward) {
            updatedFlags = setFlag(updatedFlags, MAIL_FLAG_FORWARDED);
          }

          return {
            ...state,
            mails: {
              ...state.mails,
              [mid]: { ...mail, flags: updatedFlags },
            },
          };
        }
      }

      return state;
    }

    default:
  }

  return state;
};

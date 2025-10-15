import {
  FETCH_MAILS_SUCCESS,
  MAIL_FLAG_INVOICE,
  MAIL_FLAG_UNSUBHEADER,
  MOVE_MAILS,
  SET_INVOICE_PREPARING,
  TOGGLE_FLAG,
  UPDATE_MAILS_SCHEMA,
} from 'commons/share_app/containers/Mails/constants';
import { UNSUBSCRIBE_NEWSLETTER_SUCCESS } from 'commons/share_app/containers/Newsletters/constants';
import {
  checkFlag,
  removeFlag,
  setFlag,
} from 'commons/share_app/utils/mailFlags';
import { normalizeSchemaOrg } from 'commons/share_app/utils/normalizeSchemaData';
import { keys } from 'commons/utils/tinyLodash';

import { isMailSentWithin14Days } from '../Mails/utils';
import {
  DEFAULT_READ_MAIL,
  FETCH_HEADERS,
  FETCH_READ_MAIL,
  FETCH_WHITE_LIST,
  SET_IS_SHOW_DISCOUNTS,
  SET_SCHEMA_EVENT_TAB_DATA,
  SET_SCHEMA_EVENT_TAB_KEY,
  UPDATE_MAILS,
} from './constants';
import { ReadMailAction, ReadMailState } from './types';

export const initialState: ReadMailState = {
  mails: {},
  headers: [],
  mids: [],
  whiteList: [],
  whiteListGlobals: [],
  isWhiteListFetching: false,
  isWhiteListFetched: false,
  isWhiteListFetchedError: false,
  isShowDiscounts: false,
};

export default (
  state = initialState,
  action: ReadMailAction,
): ReadMailState => {
  switch (action.type) {
    case UPDATE_MAILS:
      return {
        ...state,
        mails: action.mails,
      };
    case FETCH_READ_MAIL:
      return {
        ...state,
        mails: {
          ...state.mails,
          [action.mail.mid]: action.mail,
        },
      };
    case FETCH_MAILS_SUCCESS: {
      const updates: ReadMailState['mails'] = {};
      let isUpdate = false;

      const mids = action.groups.flatMap((group) =>
        group.items
          .filter((item) => item.type === 'item')
          .map((item) => item.id),
      ) as number[];

      mids.forEach((mid) => {
        if (action.mails[mid] && !state.mails[mid]) {
          updates[mid] = {
            // @ts-ignore todo @spiascik
            ...(state.mails[mid] || DEFAULT_READ_MAIL),
            ...action.mails[mid],
            to: [action.mails[mid].to],
            isFromMailList: true,
          };

          isUpdate = true;
        }
      });

      return {
        ...state,
        mails: isUpdate ? { ...state.mails, ...updates } : state.mails,
        mids,
      };
    }
    case FETCH_WHITE_LIST:
      return {
        ...state,
        whiteList: action.whiteList || state.whiteList,
        whiteListGlobals: action.whiteListGlobals || state.whiteListGlobals,
        isWhiteListFetching:
          action.isWhiteListFetching === undefined
            ? state.isWhiteListFetching
            : action.isWhiteListFetching,
        isWhiteListFetched:
          action.isWhiteListFetched === undefined
            ? state.isWhiteListFetched
            : action.isWhiteListFetched,
        isWhiteListFetchedError:
          action.isWhiteListFetchedError === undefined
            ? state.isWhiteListFetchedError
            : action.isWhiteListFetchedError,
      };
    case FETCH_HEADERS:
      return {
        ...state,
        headers: {
          ...state.headers,
          [action.headers.mid]: action.headers,
        },
      };
    case UNSUBSCRIBE_NEWSLETTER_SUCCESS: {
      const mail = state.mails[action.mid];

      return mail
        ? {
            ...state,
            mails: {
              ...state.mails,
              [action.mid]: {
                ...mail,
                flags: removeFlag(mail.flags, MAIL_FLAG_UNSUBHEADER),
              },
            },
          }
        : state;
    }
    case TOGGLE_FLAG: {
      const updates: ReadMailState['mails'] = {};
      let isUpdated = false;

      (Object.keys(action.midsToFlags) as unknown as number[]).forEach((id) => {
        if (state.mails[id]) {
          let { flags } = state.mails[id];

          flags = action.midsToFlags[id]
            ? setFlag(flags, action.flag)
            : removeFlag(flags, action.flag);

          updates[id] = { ...state.mails[id], flags };

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
    case SET_IS_SHOW_DISCOUNTS:
      return {
        ...state,
        isShowDiscounts:
          action.flag !== undefined ? action.flag : !state.isShowDiscounts,
      };
    case SET_SCHEMA_EVENT_TAB_KEY: {
      const mail = state.mails[action.mid];

      return {
        ...state,
        mails: {
          ...state.mails,
          [action.mid]: {
            ...mail,
            schema_org: {
              ...mail.schema_org,
              activeEventTabKey: action.tabKey,
            },
          },
        },
      };
    }
    case SET_SCHEMA_EVENT_TAB_DATA: {
      const mail = state.mails[action.mid];

      return {
        ...state,
        mails: {
          ...state.mails,
          [action.mid]: {
            ...mail,
            schema_org: {
              ...mail.schema_org,
              activeEventTabData: action.tabData,
            },
          },
        },
      };
    }
    case MOVE_MAILS: {
      const updates: ReadMailState['mails'] = {};
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
            mails: { ...state.mails, ...updates },
          }
        : state;
    }

    case SET_INVOICE_PREPARING: {
      const updates: ReadMailState['mails'] = {};

      keys(state.mails).forEach((id) => {
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
      const updates: ReadMailState['mails'] = {};

      keys(action.schemas).forEach((id) => {
        const mid = Number(id);
        if (state.mails[mid]) {
          updates[mid] = {
            ...state.mails[mid],
            schema_org: normalizeSchemaOrg({
              ...action.schemas[mid],
              from: state.mails[mid].from,
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

    default:
  }

  return state;
};

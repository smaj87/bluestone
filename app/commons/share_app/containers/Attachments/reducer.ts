import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import { initUrlParams } from 'commons/share_app/components/RouterHelpers/utils';

import { SET_URL_PROPS } from 'containers/App/constants';

import {
  FETCH_ATTACHMENTS,
  FETCH_ATTACHMENTS_FAILURE,
  FETCH_ATTACHMENTS_SUCCESS,
  SET_GROUP_VISIBILITY,
  SET_HOVER_ID,
  SET_LAST_SHOWN_ID,
  SET_TEMP_CUSTOM_FILTERS,
  TOGGLE_CHECKED,
} from './constants';
import {
  AttachmentsAction,
  AttachmentState,
  CustomUrlParamsInterface,
} from './types';
import {
  defaultCustomUrlParams,
  normalizedUrlParams as attachmentsNormalizedUrlParams,
} from './utils';

export const initialState: AttachmentState = {
  attachments: {},
  checks: {},
  totalCount: 0,
  groups: [],
  groupVisibility: {},
  isFetching: false,
  isFetched: false,
  isFetchedError: false,
  tempCustomFilters: attachmentsNormalizedUrlParams(initUrlParams, true),
  lastShownId: '',
  hoverId: '',
};

export default (
  state = initialState,
  action: AttachmentsAction,
): AttachmentState => {
  switch (action.type) {
    case FETCH_ATTACHMENTS: {
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
    case FETCH_ATTACHMENTS_SUCCESS:
      return {
        ...state,
        attachments: action.attachments,
        groups: action.groups,
        checks: action.checks,
        totalCount: action.totalCount,
        isFetching: false,
        isFetched: true,
        isFetchedError: false,
      };

    case FETCH_ATTACHMENTS_FAILURE:
      return { ...state, isFetchedError: true, isFetching: false };

    case TOGGLE_CHECKED: {
      if (action.mode === CHECKED_MODE.SINGLE) {
        return {
          ...state,
          checks: {
            ...state.checks,
            [action.id]:
              action.isChecked === undefined
                ? !state.checks[action.id]
                : action.isChecked,
          },
        };
      }

      const checks: AttachmentState['checks'] = {};

      state.groups.forEach(({ items }) => {
        items.forEach(({ id }) => {
          checks[id] =
            action.isChecked === undefined
              ? !state.checks[id]
              : action.isChecked;
        });
      });

      return { ...state, checks };
    }

    case SET_GROUP_VISIBILITY:
      return {
        ...state,
        groupVisibility: {
          ...state.groupVisibility,
          ...action.groupIds,
        },
      };

    case SET_TEMP_CUSTOM_FILTERS:
      return {
        ...state,
        tempCustomFilters: {
          ...state.tempCustomFilters,
          ...action.tempFilters,
        },
      };

    case SET_URL_PROPS: {
      const filters: Partial<CustomUrlParamsInterface> = {};
      let isChanged = false;

      (
        Object.keys(
          defaultCustomUrlParams,
        ) as (keyof CustomUrlParamsInterface)[]
      ).forEach((key) => {
        if (action.props[key] !== state.tempCustomFilters[key]) {
          // @ts-ignore
          filters[key] = action.props[key];
          isChanged = true;
        }
      });

      return isChanged
        ? {
            ...state,
            tempCustomFilters: { ...state.tempCustomFilters, ...filters },
          }
        : state;
    }

    case SET_LAST_SHOWN_ID:
      return { ...state, lastShownId: action.id };

    case SET_HOVER_ID:
      return { ...state, hoverId: action.id };

    default:
  }

  return state;
};

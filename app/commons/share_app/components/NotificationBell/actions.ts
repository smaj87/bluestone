import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { WEBMAIL_API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import {
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_COUNTER,
  FETCH_NOTIFICATIONS_COUNTER_FAILURE,
  FETCH_NOTIFICATIONS_COUNTER_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE,
  FETCH_NOTIFICATIONS_SUCCESS,
  RE_SORT_NOTIFICATIONS,
  RESET_COUNTER,
  SET_IS_OPEN,
  SET_READ,
} from './constants';
import {
  ApiNotificationsCounterResponse,
  ApiNotificationsResponse,
  Notification,
  NotificationType,
} from './types';
import { normalizeNotifications } from './utils';

export const reSortNotification = () => ({
  type: RE_SORT_NOTIFICATIONS,
});

export const setIsOpen = (isOpen: boolean) => ({
  type: SET_IS_OPEN,
  isOpen,
});

export const setRead =
  (
    notificationType: NotificationType,
    nidGroup: Notification['nids_group'],
  ): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: SET_READ, notificationType });

      await request(`${WEBMAIL_API_URL}/notification_center/status`, {
        method: 'PUT',
        body: {
          nids: nidGroup,
          status: 'READ',
        },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const fetchCounter = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: FETCH_NOTIFICATIONS_COUNTER });

    const res = (await request(
      `${WEBMAIL_API_URL}/notification_center/counter`,
    )) as ApiNotificationsCounterResponse;

    dispatch({
      type: FETCH_NOTIFICATIONS_COUNTER_SUCCESS,
      counter: res.counter,
    });
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch({ type: FETCH_NOTIFICATIONS_COUNTER_FAILURE });
  }
};

export const resetCounter = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: RESET_COUNTER });

    await request(`${WEBMAIL_API_URL}/notification_center/counter`, {
      method: 'DELETE',
    });
  } catch {}
};

export const fetchNotifications = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: FETCH_NOTIFICATIONS });

    const notifications = (await request(
      `${WEBMAIL_API_URL}/notification_center/notification`,
    )) as ApiNotificationsResponse;

    dispatch({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications: normalizeNotifications(notifications),
    });

    dispatch(resetCounter());
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch({ type: FETCH_NOTIFICATIONS_FAILURE });
  }
};

import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { WEBMAIL_API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import { ApiMauticContactEditInterface } from './types';

export const updateMauticContact =
  (data: ApiMauticContactEditInterface): AppThunk =>
  async () => {
    try {
      await request(`${WEBMAIL_API_URL}/interface_ma/contact`, {
        method: 'PATCH',
        body: data,
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const showOrdersViewHook = (): AppThunk => async () => {
  try {
    await request(`${WEBMAIL_API_URL}/interface_ma/hook`, {
      method: 'POST',
      body: {
        flow: 'recruitmentSubscribe',
      },
    });
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
  }
};

export const hideOrdersViewHook = (): AppThunk => async () => {
  try {
    await request(`${WEBMAIL_API_URL}/interface_ma/hook`, {
      method: 'POST',
      body: {
        flow: 'recruitmentUnsubscribe',
      },
    });
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
  }
};

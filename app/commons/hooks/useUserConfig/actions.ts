import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { setLang } from 'commons/hooks/useTranslations/actions';
import { showError } from 'commons/Notifications/actions';
import { Theme } from 'commons/Themes/types';
import { DEPRECATED_getSkinFromTheme } from 'commons/Themes/utils'; // eslint-disable-line
import t from 'commons/translations/t';
import { SETTINGS_API_URL, WEBMAIL_API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';
import { setState } from 'commons/utils/webStorage';

import {
  FETCH_USER_CONFIG,
  FETCH_USER_CONFIG_FAILURE,
  FETCH_USER_CONFIG_SUCCESS,
  FONT_SIZE_NORMAL,
  FRONT_COMMONS_KEY,
  LOCK_USER_CHANNEL,
  MAIL_LIST_DENSITY_NORMAL,
  ON_ONLINE_STATUS_CHANGED,
  ON_WINDOW_RESIZE,
  ON_WINDOW_SCROLL,
  SET_DENSITY,
  SET_FONT_SIZE,
  SET_IS_ADBLOCK,
  SET_IS_BETA_USER,
  SET_IS_EPAYMENTS,
  SET_IS_EPRESCRIPTIONS,
  SET_IS_SHOPPING_VISIBLE,
  SET_LIMIT,
  SET_ONBOARDING_VIEW,
  SET_SENDER_NAME,
  SET_SKIN,
  SET_THEME,
  UNLOCK_USER_CHANNEL,
  UPDATE_FRONT_COMMONS,
} from './constants';
import { getOnboarding, getTheme } from './selectors';
import {
  ChangeUserChannelInterface,
  FetchUserConfig,
  FrontCommons,
} from './types';

export const setDensity = (density = MAIL_LIST_DENSITY_NORMAL) => ({
  type: SET_DENSITY,
  density,
});

export const setFontSize = (fontSize = FONT_SIZE_NORMAL) => ({
  type: SET_FONT_SIZE,
  fontSize,
});

export const setLimit =
  (limit: number): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: SET_LIMIT,
      limit,
    });

    try {
      await request(`${SETTINGS_API_URL}/settings`, {
        method: 'PATCH',
        body: { name: 'shownMailsCount', value: limit },
      });
    } catch {}
  };

export const onWindowResize = () => ({
  type: ON_WINDOW_RESIZE,
});

export const onWindowScroll = () => ({
  type: ON_WINDOW_SCROLL,
});

export const onOnlineStatusChanged = () => ({
  type: ON_ONLINE_STATUS_CHANGED,
});

export const setTheme =
  (theme: Partial<Theme>): AppThunk =>
  async (dispatch, getState) => {
    dispatch({
      type: SET_THEME,
      theme,
    });

    const newTheme = getTheme(getState());
    // todo testy
    dispatch(setSkin(DEPRECATED_getSkinFromTheme(newTheme)));

    try {
      await request(`${SETTINGS_API_URL}/settings`, {
        method: 'PATCH',
        body: { name: 'theme', value: newTheme },
      });
    } catch {
      dispatch(showError(t('notificationThemeUpdateError')));
    }
  };

const fetchUserConfigSuccess = (config: FetchUserConfig) => ({
  type: FETCH_USER_CONFIG_SUCCESS,
  config,
});

const fetchUserConfigFailure = () => ({
  type: FETCH_USER_CONFIG_FAILURE,
});

export const fetchUserConfig = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_USER_CONFIG });

  try {
    const config = await request(
      `${WEBMAIL_API_URL}/userconfig`,
      undefined,
      true,
    );

    const userConfigKid = window?.userConfig?.kid;

    if (userConfigKid && userConfigKid !== config.kid) {
      // todo test for index.html cache,
      reportCatchErrorFromAction(
        new Error(`Wrong kid problem ${userConfigKid} !== ${config.kid}`),
      );
    }

    dispatch(setLang(config?.settings?.lang, false));
    dispatch(fetchUserConfigSuccess(config));
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch(fetchUserConfigFailure());
  }
};

export const setSkin =
  (skin: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: SET_SKIN, skin });

    try {
      await request(`${SETTINGS_API_URL}/settings`, {
        method: 'PATCH',
        body: { name: 'skin', value: skin },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const setSenderName =
  (senderName: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: SET_SENDER_NAME, senderName });

    try {
      await request(`${SETTINGS_API_URL}/settings`, {
        method: 'PATCH',
        body: { name: 'senderName', value: senderName },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const setOnboardingView =
  (view: string, value: number): AppThunk =>
  async (dispatch, getState) => {
    dispatch({ type: SET_ONBOARDING_VIEW, view, value });

    try {
      const onboarding = getOnboarding(getState());
      await request(`${SETTINGS_API_URL}/settings`, {
        method: 'PATCH',
        body: { name: 'onboarding', value: onboarding },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const lockUserChannel =
  (channel: string, lockName: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: LOCK_USER_CHANNEL, channel, lockName });

    try {
      await request(`${SETTINGS_API_URL}/userconfig/lock`, {
        method: 'PATCH',
        body: { lockName: channel },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const unlockUserChannel =
  (channel: string, lockName: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: UNLOCK_USER_CHANNEL, channel, lockName });

    try {
      await request(`${SETTINGS_API_URL}/userconfig/unlock`, {
        method: 'PATCH',
        body: { lockName: channel },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const changeUserChannels =
  (channels: ChangeUserChannelInterface[], lock = true): AppThunk =>
  async (dispatch) => {
    for (let i = 0; i < channels.length; i++) {
      dispatch(
        lock
          ? lockUserChannel(channels[i].channel, channels[i].lockName)
          : unlockUserChannel(channels[i].channel, channels[i].lockName),
      );
    }
  };

export const setIsEpayments =
  (isEpayments = true, shouldPrepareOldInvoices = false): AppThunk =>
  async (dispatch) => {
    dispatch({ type: SET_IS_EPAYMENTS, isEpayments });

    try {
      await request(
        `${SETTINGS_API_URL}/settings/epayments?prepareOldInvoices=${shouldPrepareOldInvoices}`,
        {
          method: 'POST',
          body: { value: isEpayments },
        },
      );
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch({ type: SET_IS_EPAYMENTS, isEpayments: !isEpayments });
    }
  };

export const setIsEprescriptions =
  (isEprescriptions = true): AppThunk =>
  async (dispatch) => {
    dispatch({ type: SET_IS_EPRESCRIPTIONS, isEprescriptions });

    try {
      await request(`${SETTINGS_API_URL}/settings/eprescriptions`, {
        method: 'POST',
        body: { value: isEprescriptions },
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch({
        type: SET_IS_EPRESCRIPTIONS,
        isEprescriptions: !isEprescriptions,
      });
    }
  };

export const refreshSession = (): AppThunk => async () => {
  try {
    await request(`${WEBMAIL_API_URL}/refsess`);
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
  }
};

export const updateFrontCommons =
  (frontCommons: FrontCommons): AppThunk =>
  async (dispatch) => {
    dispatch({ type: UPDATE_FRONT_COMMONS, frontCommons });

    try {
      setState(FRONT_COMMONS_KEY, frontCommons, localStorage);
      // await request(`${SETTINGS_API_URL}/settings`, {
      //   method: 'PATCH',
      //   body: { name: 'frontCommons', value: frontCommons },
      // });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
    }
  };

export const detectAndSetAdblock = (): AppThunk => async (dispatch) => {
  const isAdblock = await new Promise((resolve) => {
    if (window.onetAds) {
      window.onetAds.cmd.push((dlApi: any) => {
        dlApi.isAdblockDetected((isAdblockDlApi: boolean) => {
          resolve(isAdblockDlApi);
        });
      });

      setTimeout(() => resolve(true), 1000); // 1s timeout
    } else {
      resolve(false);
    }
  });

  // UWAGA! detektor nie dziala na localhoscie
  dispatch({
    type: SET_IS_ADBLOCK,
    isAdblock,
  });
};

export const setIsBetaUser = (isBetaUser: boolean) => ({
  type: SET_IS_BETA_USER,
  isBetaUser,
});

export const setIsShoppingVisible = (isShoppingVisible: boolean) => ({
  type: SET_IS_SHOPPING_VISIBLE,
  isShoppingVisible,
});

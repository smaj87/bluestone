import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { getState as getUserConfigState } from 'commons/hooks/useUserConfig/selectors';
import { WEBMAIL_API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import {
  FETCH_INTERFACE_EFFECTS,
  FETCH_INTERFACE_EFFECTS_FAILURE,
  FETCH_INTERFACE_EFFECTS_SUCCESS,
  REMOVE_INTERFACE_EFFECT,
  SET_INTERFACE_EFFECTS,
} from './constants';
// import { bannerTopData, infobarData, modalData } from './mocks';
import { NormalizedInterfaceEffects } from './types';
import { getInterfaceEffectParams, normalizedInterfaceEffects } from './utils';

const fetchInterfaceEffectsSuccess = (
  interfaceEffects: NormalizedInterfaceEffects,
) => ({
  interfaceEffects,
  type: FETCH_INTERFACE_EFFECTS_SUCCESS,
});

const fetchInterfaceEffectsFailure = () => ({
  type: FETCH_INTERFACE_EFFECTS_FAILURE,
});

export const fetchInterfaceEffects =
  (): AppThunk => async (dispatch, getState) => {
    dispatch({ type: FETCH_INTERFACE_EFFECTS });

    try {
      const interfaceEffect = await request(
        `${WEBMAIL_API_URL}/interface_effects`,
        {
          method: 'POST',
          body: await getInterfaceEffectParams(getUserConfigState(getState())),
        },
      );
      // const interfaceEffect = bannerTopData;

      dispatch(
        fetchInterfaceEffectsSuccess(
          normalizedInterfaceEffects(interfaceEffect),
        ),
      );
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch(fetchInterfaceEffectsFailure());
    }
  };

export const removeInterfaceEffect =
  (interfaceEffectType: string, id?: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: REMOVE_INTERFACE_EFFECT, id, interfaceEffectType });

    if (id) {
      try {
        await request(`${WEBMAIL_API_URL}/interface_effects/${id}`, {
          method: 'DELETE',
        });
      } catch (e) {
        reportCatchErrorFromAction(e as Error);
      }
    }
  };

export const setInterfaceEffects = (
  interfaceEffects: NormalizedInterfaceEffects,
) => ({
  interfaceEffects,
  type: SET_INTERFACE_EFFECTS,
});

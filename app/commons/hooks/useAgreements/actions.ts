import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { normalisedAgreements } from 'commons/hooks/useAgreements/utils';
import { SETTINGS_API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import {
  FETCH_AGREEMENTS,
  FETCH_AGREEMENTS_FAILURE,
  FETCH_AGREEMENTS_SUCCESS,
  SAVE_AGREEMENTS,
  SAVE_AGREEMENTS_FAILURE,
  SAVE_AGREEMENTS_SUCCESS,
  SET_IS_FETCHING,
} from './constants';
import { AgreementsInterface } from './types';

const fetchAgreementsSuccess = (agreements: AgreementsInterface) => ({
  type: FETCH_AGREEMENTS_SUCCESS,
  agreements,
});

const fetchAgreementsFailure = () => ({
  type: FETCH_AGREEMENTS_FAILURE,
});

export const fetchAgreements = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_AGREEMENTS });

  try {
    const data = await request(
      `${SETTINGS_API_URL}/settings/agreements`,
      undefined,
      true,
    );

    dispatch(fetchAgreementsSuccess(normalisedAgreements([], data)));
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch(fetchAgreementsFailure());
  }
};

export const saveAgreements =
  (agreements: AgreementsInterface): AppThunk =>
  async (dispatch) => {
    dispatch({ type: SAVE_AGREEMENTS, agreements });

    try {
      await request(`${SETTINGS_API_URL}/settings/agreements`, {
        method: 'POST',
        body: {
          agreements,
        },
      });

      dispatch({ type: SAVE_AGREEMENTS_SUCCESS, agreements });
    } catch (e) {
      dispatch({ type: SAVE_AGREEMENTS_FAILURE });
      reportCatchErrorFromAction(e as Error);
    }
  };

export const setIsFetching = (isFetching: boolean) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

import { RootStateWithInjectors } from 'initRedux';

import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { setInterfaceEffects } from 'commons/hooks/useInterfaceEffects/actions';
import { normalizedInterfaceEffects } from 'commons/hooks/useInterfaceEffects/utils';
import {
  setIsBetaUser,
  setIsShoppingVisible,
} from 'commons/hooks/useUserConfig/actions';
import { WEBMAIL_API_URL } from 'commons/utils/constants';
import { ReactText } from 'commons/utils/react';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';
import { historyPush } from 'commons/utils/route';
import { size } from 'commons/utils/tinyLodash';

import { ordersIntroCloudData } from 'components/Cloud/data';

import { setFirstTimeOrdersViewVisible } from '../../../Orders/actions';
import {
  hideOrdersViewHook,
  showOrdersViewHook,
  updateMauticContact,
} from '../actions';
import {
  MAUTIC_FILLED_DEMO_FORM_TAG,
  MAUTIC_SUBSCRIBED_TAG,
  MAUTIC_UNSUBSCRIBED_TAG,
} from '../constants';
import {
  FETCH_FORM,
  MAUTIC_RECRUITMENT_SUBSCRIBE_ID,
  MAUTIC_RECRUITMENT_UNSUBSCRIBE_ID,
  SET_FORM_VALUES,
  SET_IS_SUBMITTING,
  SET_RESPONSE_MESSAGE,
  SET_VALIDATION_ERRORS,
} from './constants';
import { getForm, getFormValues } from './selectors';
import { FormErrors, FormValues, MauticForm } from './types';
import { submitMauticForm, validateForm } from './utils';

export const fetchForm =
  (formId: ReactText, hiddenValues?: FormValues): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_FORM, isFetching: true, isFetchingError: false });

    try {
      const data = (await request(
        `${WEBMAIL_API_URL}/interface_forms/${formId}`,
      )) as { form: MauticForm };

      let initialValues: Record<string, unknown> = {};

      if (hiddenValues) {
        Object.entries(hiddenValues).forEach(([key, value]) => {
          initialValues = { ...initialValues, [key]: value };
        });
      }

      data.form.fields.forEach((field) => {
        if (field.defaultValue) {
          initialValues = {
            ...initialValues,
            [field.alias]: field.defaultValue,
          };
        }
      });

      dispatch({
        type: FETCH_FORM,
        isFetching: false,
        isFetchingError: false,
        form: data.form,
        formValues: initialValues,
      });
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch({ type: FETCH_FORM, isFetching: false, isFetchingError: true });
    }
  };

export const setFormValues = (formValues: Partial<FormValues>) => ({
  type: SET_FORM_VALUES,
  formValues,
});

export const setFieldErrors = (errors: FormErrors) => ({
  type: SET_VALIDATION_ERRORS,
  errors,
});

export const setIsSubmitting = (isSubmitting: boolean) => ({
  type: SET_IS_SUBMITTING,
  isSubmitting,
});

export const setResponseMessage = (responseMessage: string) => ({
  type: SET_RESPONSE_MESSAGE,
  responseMessage,
});

export const runAfterSubmitHooks =
  (formId: number): AppThunk =>
  async (dispatch) => {
    if (formId === MAUTIC_RECRUITMENT_SUBSCRIBE_ID) {
      await dispatch(showOrdersViewHook());
      dispatch(setIsBetaUser(true));
      dispatch(setIsShoppingVisible(true));
      dispatch(setFirstTimeOrdersViewVisible(true));
      dispatch(
        updateMauticContact({
          tags: [MAUTIC_SUBSCRIBED_TAG, MAUTIC_FILLED_DEMO_FORM_TAG],
        }),
      );
      dispatch(
        setInterfaceEffects(normalizedInterfaceEffects([ordersIntroCloudData])),
      );
    } else if (formId === MAUTIC_RECRUITMENT_UNSUBSCRIBE_ID) {
      await dispatch(hideOrdersViewHook());
      dispatch(setIsBetaUser(false));
      dispatch(setIsShoppingVisible(false));
      dispatch(
        updateMauticContact({
          tags: [MAUTIC_UNSUBSCRIBED_TAG, `-${MAUTIC_SUBSCRIBED_TAG}`],
        }),
      );
    }
  };

export const submitForm = (): AppThunk => async (dispatch, getState) => {
  const form = getForm(getState() as RootStateWithInjectors)!;
  const formValues = getFormValues(getState() as RootStateWithInjectors);

  const formId = form.id;
  const formName = form.alias;

  const errors = validateForm(form.fields, formValues);
  const isFormValid = !size(errors);

  dispatch(setFieldErrors(errors));

  if (isFormValid) {
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          formData.append(`mauticform[${key}][]`, val);
        });
      } else {
        formData.append(`mauticform[${key}]`, value);
      }
    });
    formData.append('mauticform[formId]', `${formId}`);
    formData.append('mauticform[formName]', formName);
    formData.append('mauticform[messenger]', '1');

    dispatch(setIsSubmitting(true));

    try {
      await submitMauticForm(formData);
      dispatch(setIsSubmitting(false));
      dispatch(runAfterSubmitHooks(formId));

      if (form.postAction === 'message') {
        dispatch(setResponseMessage(form.postActionProperty));
      }
      if (form.postAction === 'redirect') {
        if (/^(https?:\/\/)/.test(form.postActionProperty)) {
          window.open(form.postActionProperty, '_blank');
        } else {
          historyPush(form.postActionProperty);
        }
      }
    } catch {
      dispatch(setIsSubmitting(false));
    }
  }
};

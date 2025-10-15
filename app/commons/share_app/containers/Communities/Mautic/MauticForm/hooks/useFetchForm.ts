import { ReactText, useEffect } from 'commons/utils/react';
import { dispatch, injectReducer } from 'commons/utils/store';

import { fetchForm } from '../actions';
import { KEY } from '../constants';
import reducer from '../reducer';
import { FormValues } from '../types';

const useFetchForm = (formId: ReactText, hiddenValues?: FormValues) => {
  useEffect(() => {
    injectReducer(KEY, reducer);
  }, []);

  useEffect(() => {
    dispatch(fetchForm(formId, hiddenValues));
  }, [formId, hiddenValues?.orderid]);
};

export default useFetchForm;

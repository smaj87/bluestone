import { ChangeEvent, ReactText, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFormValues, submitForm } from '../actions';
import { getFieldFormValue } from '../selectors';

const useFormManager = (onSubmit?: VoidFunction) => {
  const changeFormValues = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { name, type, value } = event.target;

      if (type === 'checkbox') {
        const checkboxValue = getStateValueBySelector(getFieldFormValue, {
          field: name,
        });
        let newValue: ReactText[] = [];

        if (Array.isArray(checkboxValue)) {
          newValue = checkboxValue;
        }
        if (newValue.includes(value)) {
          newValue = newValue.filter((val: ReactText) => val !== value);
        } else {
          newValue = [...newValue, value];
        }

        dispatch(setFormValues({ [name]: newValue }));
      } else {
        dispatch(setFormValues({ [name]: value }));
      }
    },
    [],
  );

  const handleFormSubmit = useCallback(async () => {
    await dispatch(submitForm());
    onSubmit?.();
  }, []);

  return {
    changeFormValues,
    handleFormSubmit,
  };
};

export default useFormManager;

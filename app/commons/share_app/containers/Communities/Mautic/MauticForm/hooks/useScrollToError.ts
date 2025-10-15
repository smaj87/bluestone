import { useEffect } from 'commons/utils/react';
import { size } from 'commons/utils/tinyLodash';

import { FormErrors } from '../types';

const useScrollToError = (fieldErrors: FormErrors) => {
  useEffect(() => {
    if (size(fieldErrors)) {
      const firstErrorElementName = Object.keys(fieldErrors)[0];
      const firstErrorElement = document.querySelector(
        `[name=${firstErrorElementName}]`,
      );

      firstErrorElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      });
    }
  }, [fieldErrors]);
};

export default useScrollToError;

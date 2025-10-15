import { useEffect } from 'commons/utils/react';

import useControlledErrorTooltip from './useControlledErrorTooltip';

const useInputErrorTooltip = (error: string | undefined) => {
  const controlled = useControlledErrorTooltip(!!error);

  useEffect(() => {
    controlled.change(!!error);
  }, [error]);

  return controlled;
};

export default useInputErrorTooltip;

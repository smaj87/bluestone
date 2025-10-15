import { useEffect } from 'commons/utils/react';

import useControlledErrorTooltip from './useControlledTooltip';

const useInputTooltip = (error: string | undefined) => {
  const controlled = useControlledErrorTooltip(!!error);

  useEffect(() => {
    controlled.change(!!error);
  }, [error]);

  return controlled;
};

export default useInputTooltip;

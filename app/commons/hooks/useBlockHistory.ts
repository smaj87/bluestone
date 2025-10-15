import usePreviousValue from 'commons/hooks/usePreviousValue';
import history from 'commons/utils/history';
import { useEffect, useRef } from 'commons/utils/react';

const useBlockHistory = (isOpen: boolean) => {
  const unblock = useRef<VoidFunction>();
  const prevIsOpen = usePreviousValue(isOpen);

  useEffect(() => {
    if (!prevIsOpen && isOpen) {
      unblock.current = history.block(() => false);
    } else if (prevIsOpen && !isOpen) {
      unblock.current?.();
    }

    return () => {
      unblock.current?.();
    };
  }, [prevIsOpen, isOpen]);
};

export default useBlockHistory;

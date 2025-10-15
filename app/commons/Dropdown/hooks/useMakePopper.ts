import {
  createPopperino,
  PopperinoInstance,
  PopperinoOptions,
  PopperinoPlacement,
} from 'commons/Dropdown/popperino';
import { useEffect, useMemo, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getDropdownById } from '../selectors';

const useMakePopper = (
  id: string,
  placement: PopperinoPlacement,
  positionFlipOrder: PopperinoOptions['positionFlipOrder'],
) => {
  const selectorDropdownId = useMemo(() => ({ id }), [id]);
  const dropdown = useSelector(getDropdownById, selectorDropdownId);
  const popper = useRef<PopperinoInstance | null>(null);

  useEffect(() => {
    if (dropdown?.isOpen) {
      const targetEl = document.getElementById(dropdown.targetId);
      const dropdownEl = document.getElementById(dropdown.dropdownId);

      if (targetEl && dropdownEl) {
        popper.current = createPopperino(targetEl, dropdownEl, {
          placement,
          positionFlipOrder,
        });
      }
    }

    return () => {
      popper?.current?.destroy();
    };
  }, [dropdown?.isOpen]);
};

export default useMakePopper;

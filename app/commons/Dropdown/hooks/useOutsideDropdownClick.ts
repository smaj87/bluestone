import { useCallback, useEffect, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { closeDropdown } from '../actions';
import { getDropdownById } from '../selectors';
import { getNestedDropdownsIds } from '../utils';

const useOutsideDropdownClick = (id: string) => {
  const selectorDropdownId = useMemo(() => ({ id }), [id]);
  const dropdown = useSelector(getDropdownById, selectorDropdownId);

  const onDocumentClick = useCallback(
    (e) => {
      if (dropdown?.isOpen) {
        const { childrenId, dropdownId, targetId } = dropdown;

        const isClickedOutside = [
          targetId,
          dropdownId,
          ...getNestedDropdownsIds(childrenId),
        ].every(
          (elId) => !document.getElementById(elId)?.contains(e.target) || false,
        );

        if (isClickedOutside) {
          dispatch(closeDropdown(id, true));
        }
      }
    },
    [id, dropdown?.isOpen, dropdown?.childrenId],
  );

  const detectActiveDocumentElement = useCallback(() => {
    if (
      dropdown?.isOpen &&
      document.activeElement instanceof HTMLIFrameElement
    ) {
      dispatch(closeDropdown(id));
    }
  }, [id, dropdown?.isOpen]);

  useEffect(() => {
    if (dropdown?.isOpen) {
      window.addEventListener('mouseup', onDocumentClick, true);
    }

    return () => {
      window.removeEventListener('mouseup', onDocumentClick, true);
    };
  }, [id, dropdown?.isOpen, dropdown?.childrenId]);

  useEffect(() => {
    if (dropdown?.isOpen) {
      window.addEventListener('blur', detectActiveDocumentElement, true);
    }

    return () => {
      window.removeEventListener('blur', detectActiveDocumentElement, true);
    };
  }, [id, dropdown?.isOpen]);
};

export default useOutsideDropdownClick;

import { AppThunk } from 'commons/utils/react-redux';

import { CLOSE, OPEN } from './constants';
import { getDropdowns } from './selectors';
import { Dropdown } from './types';
import { getNestedDropdownsIds, getParentDropdownsIds } from './utils';

export const open = (
  id: string,
  dropdown: Partial<Dropdown> & Pick<Dropdown, 'targetId'>,
) => ({
  type: OPEN,
  id,
  dropdown,
});

export const close =
  (id: string, isOutsideClick?: boolean): AppThunk =>
  async (dispatch, getState) => {
    const dropdowns = getDropdowns(getState());

    let dropdownIdsToClose = [
      id,
      ...getNestedDropdownsIds(dropdowns[id]?.childrenId),
    ];

    if (!isOutsideClick) {
      dropdownIdsToClose = [
        ...dropdownIdsToClose,
        ...getParentDropdownsIds(dropdowns[id]?.parentId),
      ];
    }

    dispatch({
      type: CLOSE,
      ids: dropdownIdsToClose,
    });
  };

export { close as closeDropdown, open as openDropdown };

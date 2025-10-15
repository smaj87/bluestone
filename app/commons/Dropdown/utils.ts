import { getStateValueBySelector } from 'commons/utils/react-redux';

import { getDropdownById } from './selectors';

export const getNestedDropdownsIds = (id?: string) => {
  if (!id) {
    return [];
  }

  let nestedDropdownsIds = [id];

  const childrenDropdown = getStateValueBySelector(getDropdownById, { id });
  if (childrenDropdown?.childrenId) {
    nestedDropdownsIds = [
      ...nestedDropdownsIds,
      ...getNestedDropdownsIds(childrenDropdown.childrenId),
    ];
  }

  return nestedDropdownsIds;
};

export const getParentDropdownsIds = (id?: string) => {
  if (!id) {
    return [];
  }

  let parentDropdownsIds = [id];

  const parentDropdown = getStateValueBySelector(getDropdownById, { id });
  if (parentDropdown?.parentId) {
    parentDropdownsIds = [
      ...parentDropdownsIds,
      ...getParentDropdownsIds(parentDropdown.parentId),
    ];
  }

  return parentDropdownsIds;
};

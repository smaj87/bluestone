import { FC, memo, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { addIdToParentStack, removeLastIdFromParentStack } from './actions';
import { NavTreeGroupContext } from './constants';
import NavTreeItem, { NavTreeItemProps } from './NavTreeItem';
import { getLastElementOfParentStack } from './selectors';

export interface NavTreeGroupProps extends NavTreeItemProps {
  groupId: string;
}

const NavTreeGroup: FC<NavTreeGroupProps> = (props) => {
  // ustawiamy grupe oraz dodajemy te grupe do stacka rodzicowego
  // aby moc sie cofnac do poprzedniej grupy w przypadku escape
  const { children, groupId, onEnter, onEscape } = props;

  const onEnterGroup = useCallback(() => {
    if (onEnter) {
      onEnter();
    }

    // dodajemy do stacka rodzicow jezeli nie ma jeszcze tej grupy
    const { parentId } = getStateValueBySelector(getLastElementOfParentStack);

    if (groupId && parentId !== groupId) {
      dispatch(addIdToParentStack(groupId));
    }
  }, [onEnter, groupId]);

  const onEscapeGroup = useCallback(() => {
    if (onEscape) {
      onEscape();
    }

    // usuwamy ostatni element z stacka rodzicow
    dispatch(removeLastIdFromParentStack());
  }, [onEscape]);

  return (
    <NavTreeItem {...props} onEnter={onEnterGroup} onEscape={onEscapeGroup}>
      <NavTreeGroupContext.Provider value={groupId}>
        {children}
      </NavTreeGroupContext.Provider>
    </NavTreeItem>
  );
};

export default memo(NavTreeGroup);

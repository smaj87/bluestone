import { FC, memo, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { addIdToParentStack } from './actions';
import { NavTreeGroupContext } from './constants';

interface Props {
  isOpen?: boolean;
  modalId: string;
  children: React.ReactNode;
}

const NavTreeModal: FC<Props> = ({ children, isOpen = true, modalId }) => {
  useEffect(() => {
    if (isOpen) {
      dispatch(addIdToParentStack(modalId));
    }
  }, [isOpen]);

  return (
    <NavTreeGroupContext.Provider value={modalId}>
      {children}
    </NavTreeGroupContext.Provider>
  );
};

export default memo(NavTreeModal);

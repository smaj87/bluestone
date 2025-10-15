import { useState } from 'commons/utils/react';

const useControlledErrorTooltip = (defaultState = false) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const show = () => {
    setIsOpen(true);
  };

  const hide = () => {
    setIsOpen(false);
  };

  const change = (_isOpen: boolean) => {
    setIsOpen(_isOpen);
  };

  return {
    isOpen,
    show,
    hide,
    change,
  };
};

export default useControlledErrorTooltip;

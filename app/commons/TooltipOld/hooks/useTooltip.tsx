import { useCallback, useEffect, useState } from 'commons/utils/react';

export interface UseTooltipProps {
  onIsOpen?: (open: boolean) => void;
  isOpen?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  onChange?: (isOpen: boolean) => void;
}

const useTooltip = ({
  isOpen,
  onChange,
  onHide,
  onIsOpen,
  onShow,
}: UseTooltipProps) => {
  const [_isOpen, setIsOpen] = useState(isOpen ?? false);

  // Handle controlled change
  useEffect(() => {
    if (isOpen !== undefined) {
      setIsOpen(isOpen);
    }
  }, [isOpen]);

  // onChange callback
  useEffect(() => {
    if (onChange) {
      onChange(_isOpen);
    }
  }, [_isOpen]);

  useEffect(() => {
    if (onIsOpen) {
      onIsOpen(_isOpen);
    }
  }, []);

  const show = useCallback(() => {
    setIsOpen(true);

    if (onShow) {
      onShow();
    }
  }, [onShow]);

  const hide = useCallback(() => {
    setIsOpen(false);

    if (onHide) {
      onHide();
    }
  }, [onHide]);

  return {
    show,
    hide,
    isOpen: _isOpen,
  };
};

export default useTooltip;

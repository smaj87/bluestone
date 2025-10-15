import { useCallback, useEffect, useState } from 'commons/utils/react';

export interface UseErrorTooltipProps {
  onIsOpen?: (open: boolean) => void;
  isOpen?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  onChange?: (isOpen: boolean) => void;
}

const useErrorTooltip = ({
  isOpen,
  onChange,
  onHide,
  onIsOpen,
  onShow,
}: UseErrorTooltipProps) => {
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

export default useErrorTooltip;

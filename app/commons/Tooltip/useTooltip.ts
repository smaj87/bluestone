import { ContextMenuSize } from 'commons/ContextMenu/types';
import {
  createPopperino,
  PopperinoInstance,
  PopperinoOptions,
  PopperinoPlacement,
} from 'commons/Dropdown/popperino';
import { useCallback, useEffect, useRef, useState } from 'commons/utils/react';

export interface UseTooltipProps {
  placement?: PopperinoPlacement;
  isOpen?: boolean;
  positionFlipOrder?: PopperinoOptions['positionFlipOrder'];
  isControlled: boolean;
  menuSize?: ContextMenuSize;
}

const useTooltip = ({
  isControlled,
  isOpen,
  placement,
  positionFlipOrder,
}: UseTooltipProps) => {
  const [_isOpen, setIsOpen] = useState(isOpen ?? false);
  const targetRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const popper = useRef<PopperinoInstance | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (_isOpen && targetRef.current && tooltipRef.current) {
      popper.current = createPopperino(targetRef.current, tooltipRef.current, {
        placement: placement || 'bottom',
        positionFlipOrder,
      });
    }

    return () => {
      popper.current?.destroy();
    };
  }, [_isOpen]);

  const show = useCallback(() => {
    if (isControlled) {
      return;
    }

    clearTimeout(timeout.current);
    setIsOpen(true);
  }, [isControlled]);

  const hide = useCallback(() => {
    if (isControlled) {
      return;
    }

    timeout.current = setTimeout(() => setIsOpen(false), 0);
  }, [isControlled]);

  return {
    show,
    hide,
    isOpen: _isOpen,
    targetRef,
    tooltipRef,
  };
};

export default useTooltip;

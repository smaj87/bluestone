import { ContextMenuSize } from 'commons/ContextMenu/types';
import { createContext, RefObject } from 'commons/utils/react';

interface ITooltipContext {
  tooltipRef?: RefObject<HTMLDivElement>;
  hide: () => void;
  isControlled: boolean;
  isOpen: boolean;
  menuSize?: ContextMenuSize;
  show: () => void;
  targetRef?: RefObject<HTMLDivElement>;
}

const defaultState: ITooltipContext = {
  tooltipRef: undefined,
  hide: () => {},
  isControlled: false,
  isOpen: false,
  show: () => {},
  menuSize: 'md',
  targetRef: undefined,
};

export const TooltipContext = createContext<ITooltipContext>(defaultState);

import { ContextMenuSize } from 'commons/ContextMenu/types';
import { FC, ReactNode } from 'commons/utils/react';

import TooltipContent from './TooltipContent';
import { TooltipContext } from './TooltipContext';
import TooltipWrapper from './TooltipWrapper';
import useTooltip, { UseTooltipProps } from './useTooltip';

export interface TooltipProps extends UseTooltipProps {
  children: ReactNode;
  className?: string;
  menuSize?: ContextMenuSize;
}

type TooltipComponent = FC<TooltipProps> & {
  TooltipContent: typeof TooltipContent;
};

const Tooltip: TooltipComponent = ({
  children,
  className,
  isControlled = false,
  isOpen = false,
  menuSize = 'md',
  placement,
  positionFlipOrder,
}: TooltipProps) => {
  const tooltip = useTooltip({
    isOpen,
    placement,
    positionFlipOrder,
    isControlled,
    menuSize,
  });

  return (
    <TooltipContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...tooltip,
        menuSize,
        isControlled,
      }}
    >
      <TooltipWrapper className={className}>{children}</TooltipWrapper>
    </TooltipContext.Provider>
  );
};

Tooltip.TooltipContent = TooltipContent;

export default Tooltip;

import { FC, ReactNode } from 'commons/utils/react';

import useInputTooltip from './hooks/useInputTooltip';
import useErrorTooltip from './hooks/useTooltip';
import { TooltipContent, TooltipStyled } from './styles';
import { TooltipContext } from './TooltipContext';

export interface TooltipProps {
  children: ReactNode;
  onChange?: (isOpen: boolean) => void;
  isOpen: boolean;
}

type TooltipComponent = FC<TooltipProps> & {
  TooltipContent: typeof TooltipContent;
  useInputTooltip: typeof useInputTooltip;
};

const Tooltip: TooltipComponent = ({ children, isOpen = false, onChange }) => {
  const tooltip = useErrorTooltip({
    isOpen,
    onChange,
  });
  return (
    <TooltipStyled>
      <TooltipContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          ...tooltip,
        }}
      >
        {children}
      </TooltipContext.Provider>
    </TooltipStyled>
  );
};

Tooltip.TooltipContent = TooltipContent;
Tooltip.useInputTooltip = useInputTooltip;

export default Tooltip;

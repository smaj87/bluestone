import { ReactNode } from 'commons/utils/react';

import { ErrorTooltipContext } from './ErrorTooltipContent';
import useErrorTooltip from './hooks/useErrorTooltip';
import { ErrorTooltipStyled } from './styles';

export interface ErrorWrapperProps {
  children: ReactNode;
  onChange?: (isOpen: boolean) => void;
  isOpen: boolean;
}

const ErrorTooltip = ({
  children,
  isOpen = false,
  onChange,
}: ErrorWrapperProps) => {
  const tooltip = useErrorTooltip({
    isOpen,
    onChange,
  });
  return (
    <ErrorTooltipStyled>
      <ErrorTooltipContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          ...tooltip,
        }}
      >
        {children}
      </ErrorTooltipContext.Provider>
    </ErrorTooltipStyled>
  );
};

export default ErrorTooltip;

import { FC, ReactNode, useContext } from 'commons/utils/react';

import { TooltipWrapperStyled } from './styles';
import { TooltipContext } from './TooltipContext';

interface Props {
  children: ReactNode;
  className?: string;
}

const TooltipWrapper: FC<Props> = ({ children, className }) => {
  const { hide, show, targetRef } = useContext(TooltipContext);

  return (
    <TooltipWrapperStyled
      ref={targetRef}
      className={className}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
    </TooltipWrapperStyled>
  );
};

export default TooltipWrapper;

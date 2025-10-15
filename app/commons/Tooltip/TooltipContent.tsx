import { MOUNT_NODE } from 'commons/Tooltip/constants';
import {
  createPortal,
  FC,
  ReactNode,
  useCallback,
  useContext,
} from 'commons/utils/react';

import {
  TooltipArrowStyled,
  TooltipMenuContentStyled,
  TooltipMenuStyled,
} from './styles';
import { TooltipContext } from './TooltipContext';

interface Props {
  children: ReactNode;
}

const TooltipContent: FC<Props> = ({ children }) => {
  const ctx = useContext(TooltipContext);

  // for preact compatible, unnecessary with react
  const onEnter = useCallback(() => {
    ctx.show();
  }, []);

  // for preact compatible, unnecessary with react
  const onLeave = useCallback(() => {
    ctx.hide();
  }, []);

  return ctx.isOpen
    ? createPortal(
        <TooltipMenuStyled
          ref={ctx.tooltipRef}
          $menuSize={ctx.menuSize}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <TooltipArrowStyled data-popper-arrow></TooltipArrowStyled>
          <TooltipMenuContentStyled>{children}</TooltipMenuContentStyled>
        </TooltipMenuStyled>,
        MOUNT_NODE,
      )
    : null;
};

export default TooltipContent;
